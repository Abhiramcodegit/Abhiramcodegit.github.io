#!/bin/zsh
#
# daily-commit.sh
# Auto-commits (and pushes) any uncommitted changes in the portfolio repo.
# Intended to be run once a day by a launchd job. Safe to run manually too.
#
# Behavior:
#   - If there are no changes, it does nothing (and says so).
#   - Otherwise it stages everything, commits with a dated message, and pushes.
#   - If the push fails (e.g. auth/network), the local commit still stands and
#     the error is logged; the next run will push it along with new changes.

set -u

# --- Config -------------------------------------------------------------
REPO_DIR="/Users/abhiram/Documents/Projects/Abhiramcodegit.github.io"
BRANCH="main"
LOG_FILE="$REPO_DIR/.daily-commit.log"

# --- Helpers ------------------------------------------------------------
log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# --- Run ----------------------------------------------------------------
cd "$REPO_DIR" || { echo "Repo dir not found: $REPO_DIR"; exit 1; }

log "=== daily-commit run started ==="

# Nothing to do if the working tree is clean.
if [ -z "$(git status --porcelain)" ]; then
  log "No changes to commit. Working tree clean."
  log "=== done ==="
  exit 0
fi

# Only auto-commit once per calendar day. Because RunAtLoad fires this job at
# every login (to catch days the Mac was off at 21:00), we guard against making
# multiple snapshot commits in one day. If today's snapshot already exists in
# the git log, skip. Manual commits you make yourself are unaffected.
TODAY="$(date '+%Y-%m-%d')"
if git log --since="$TODAY 00:00:00" --grep="daily snapshot $TODAY" --oneline | grep -q .; then
  log "Already made a daily snapshot for $TODAY. Skipping."
  log "=== done ==="
  exit 0
fi

# Stage and commit everything.
git add -A
COMMIT_MSG="chore: daily snapshot $(date '+%Y-%m-%d')"
if git commit -m "$COMMIT_MSG" >> "$LOG_FILE" 2>&1; then
  log "Committed: $COMMIT_MSG"
else
  log "Commit failed (see log above). Aborting."
  log "=== done ==="
  exit 1
fi

# Push to the remote branch.
if git push origin "$BRANCH" >> "$LOG_FILE" 2>&1; then
  log "Pushed to origin/$BRANCH."
else
  log "Push failed. Commit is saved locally and will push on the next successful run."
fi

log "=== done ==="
