'use client'

import { useState } from 'react'
import Image from './Image'

const ANIMATIONS = ['waddle', 'spin', 'hop', 'shake', 'flip', 'peek', 'tip'] as const
type Anim = (typeof ANIMATIONS)[number]

const CAPTIONS: Record<Anim, string> = {
  waddle: 'Waddling off to debug...',
  spin: 'Spinning up a fix...',
  hop: 'Hopped over the bug!',
  shake: 'Shaking out the null pointer...',
  flip: 'Flipped the failing test!',
  peek: 'Peeking at your stack trace...',
  tip: 'Tipped over. Have you tried turning it off and on again?',
}

function todaysAnimation(): Anim {
  const day = Math.floor(Date.now() / 86400000)
  return ANIMATIONS[day % ANIMATIONS.length]
}

export default function DuckLogo({ alt }: { alt: string }) {
  const [playing, setPlaying] = useState<Anim | null>(null)

  const play = () => {
    if (playing) return
    setPlaying(todaysAnimation())
    window.setTimeout(() => setPlaying(null), 2600)
  }

  return (
    <div className="relative h-10 w-10">
      <style>{`
        @keyframes duck-roam {
          0% { transform: translateX(0) scaleX(1) }
          45% { transform: translateX(min(40vw, 480px)) scaleX(1) }
          50% { transform: translateX(min(40vw, 480px)) scaleX(-1) }
          95% { transform: translateX(0) scaleX(-1) }
          100% { transform: translateX(0) scaleX(1) }
        }
        @keyframes duck-wobble { 0%,100% { transform: rotate(-7deg) translateY(0) } 25% { transform: rotate(7deg) translateY(-2px) } 50% { transform: rotate(-7deg) translateY(0) } 75% { transform: rotate(7deg) translateY(-2px) } }
        @keyframes duck-waddle { 0%,100% { transform: rotate(0) } 20% { transform: rotate(14deg) translateX(6px) } 40% { transform: rotate(-14deg) translateX(12px) } 60% { transform: rotate(14deg) translateX(6px) } 80% { transform: rotate(-14deg) } }
        @keyframes duck-spin { to { transform: rotate(720deg) } }
        @keyframes duck-hop { 0%,100% { transform: translateY(0) } 25% { transform: translateY(-18px) } 50% { transform: translateY(0) } 75% { transform: translateY(-10px) } }
        @keyframes duck-shake { 0%,100% { transform: translateX(0) } 15%,45%,75% { transform: translateX(-4px) rotate(-8deg) } 30%,60%,90% { transform: translateX(4px) rotate(8deg) } }
        @keyframes duck-flip { to { transform: rotateY(720deg) } }
        @keyframes duck-peek { 0%,100% { transform: scale(1) } 40%,60% { transform: translateY(6px) scale(1.3) } }
        @keyframes duck-tip { 0%,100% { transform: rotate(0) } 30%,70% { transform: rotate(75deg) translateY(4px) } }
        .duck-roamer { animation: duck-roam 22s ease-in-out infinite; }
        .duck-roamer[data-paused='true'], .duck-roamer:hover { animation-play-state: paused; }
        .duck-idle { animation: duck-wobble 1.1s ease-in-out infinite; transform-origin: 50% 90%; }
        .duck-play-waddle { animation: duck-waddle 2.4s ease-in-out; }
        .duck-play-spin { animation: duck-spin 1.6s cubic-bezier(.16,1,.3,1); }
        .duck-play-hop { animation: duck-hop 1.6s ease-in-out; }
        .duck-play-shake { animation: duck-shake 1.4s ease-in-out; }
        .duck-play-flip { animation: duck-flip 1.6s cubic-bezier(.16,1,.3,1); }
        .duck-play-peek { animation: duck-peek 2s ease-in-out; }
        .duck-play-tip { animation: duck-tip 2.4s ease-in-out; transform-origin: 50% 100%; }
        @media (prefers-reduced-motion: reduce) { .duck-roamer, .duck-idle, [class*='duck-play-'] { animation: none !important; } }
      `}</style>
      <div className="duck-roamer absolute top-0 left-0" data-paused={playing ? 'true' : 'false'}>
        <button
          type="button"
          onClick={play}
          aria-label={`${alt}: click the rubber duck`}
          className="block h-10 w-10 cursor-pointer"
        >
          <Image
            src="/static/images/logo-header.png"
            alt={alt}
            width={40}
            height={40}
            className={`h-10 w-10 ${playing ? `duck-play-${playing}` : 'duck-idle'}`}
          />
        </button>
        {playing && (
          <span
            role="status"
            className="absolute top-full left-0 z-50 mt-2 w-max max-w-56 rounded-md bg-gray-900 px-3 py-2 text-sm text-white shadow-lg dark:bg-gray-100 dark:text-gray-900"
          >
            {CAPTIONS[playing]}
            <span className="block text-xs opacity-70">New animation tomorrow.</span>
          </span>
        )}
      </div>
    </div>
  )
}
