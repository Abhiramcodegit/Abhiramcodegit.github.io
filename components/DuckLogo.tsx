'use client'

import { useState } from 'react'
import Image from './Image'

const ANIMATIONS = [
  'waddle',
  'spin',
  'hop',
  'shake',
  'flip',
  'peek',
  'tip',
  'dance',
  'bounce',
  'grow',
  'dizzy',
  'backflip',
  'nod',
  'slide',
] as const
type Anim = (typeof ANIMATIONS)[number]

const CAPTIONS: Record<Anim, string> = {
  waddle: 'Waddling off to debug...',
  spin: 'Spinning up a fix...',
  hop: 'Hopped over the bug!',
  shake: 'Shaking out the null pointer...',
  flip: 'Flipped the failing test!',
  peek: 'Peeking at your stack trace...',
  tip: 'Tipped over. Have you tried turning it off and on again?',
  dance: 'Shipping to prod on a Friday. Dance time!',
  bounce: 'Bouncing back from a merge conflict...',
  grow: 'Scaling up to handle the load!',
  dizzy: 'Dizzy from reading legacy code...',
  backflip: 'Backflipped out of an infinite loop!',
  nod: 'Nodding along. Yes, that should work.',
  slide: 'Sliding in a hotfix...',
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
    <div className="relative h-14 w-14">
      <style>{`
        .duck-roamer { --far: 40vw; }
        @media (min-width: 640px) { .duck-roamer { --far: max(380px, min(40vw, 480px)); } }
        @keyframes duck-x {
          0% { transform: translateX(0) }
          8% { transform: translateX(52px) }
          24% { transform: translateX(330px) }
          45% { transform: translateX(var(--far)) }
          55% { transform: translateX(var(--far)) }
          71% { transform: translateX(330px) }
          87% { transform: translateX(52px) }
          92% { transform: translateX(0) }
          100% { transform: translateX(0) }
        }
        @keyframes duck-x-mobile {
          0% { transform: translateX(0) }
          45%, 55% { transform: translateX(var(--far)) }
          92%, 100% { transform: translateX(0) }
        }
        @keyframes duck-y {
          0%, 1.5% { transform: translateY(0) }
          5%, 20% { transform: translateY(-30px) }
          24%, 71% { transform: translateY(0) }
          75%, 87% { transform: translateY(-30px) }
          91%, 100% { transform: translateY(0) }
        }
        @keyframes duck-face {
          0%, 49.9% { transform: scaleX(1) }
          50%, 94.9% { transform: scaleX(-1) }
          95%, 100% { transform: scaleX(1) }
        }
        @keyframes duck-wobble { 0%,100% { transform: rotate(-7deg) translateY(0) } 25% { transform: rotate(7deg) translateY(-2px) } 50% { transform: rotate(-7deg) translateY(0) } 75% { transform: rotate(7deg) translateY(-2px) } }
        @keyframes duck-waddle { 0%,100% { transform: rotate(0) } 20% { transform: rotate(14deg) translateX(6px) } 40% { transform: rotate(-14deg) translateX(12px) } 60% { transform: rotate(14deg) translateX(6px) } 80% { transform: rotate(-14deg) } }
        @keyframes duck-spin { to { transform: rotate(720deg) } }
        @keyframes duck-hop { 0%,100% { transform: translateY(0) } 25% { transform: translateY(-18px) } 50% { transform: translateY(0) } 75% { transform: translateY(-10px) } }
        @keyframes duck-shake { 0%,100% { transform: translateX(0) } 15%,45%,75% { transform: translateX(-4px) rotate(-8deg) } 30%,60%,90% { transform: translateX(4px) rotate(8deg) } }
        @keyframes duck-flip { to { transform: rotateY(720deg) } }
        @keyframes duck-peek { 0%,100% { transform: scale(1) } 40%,60% { transform: translateY(6px) scale(1.3) } }
        @keyframes duck-tip { 0%,100% { transform: rotate(0) } 30%,70% { transform: rotate(75deg) translateY(4px) } }
        @keyframes duck-dance { 0%,100% { transform: translateX(0) rotate(0) } 12% { transform: translateX(-8px) rotate(-12deg) translateY(-6px) } 25% { transform: translateX(8px) rotate(12deg) } 37% { transform: translateX(-8px) rotate(-12deg) translateY(-6px) } 50% { transform: translateX(8px) rotate(12deg) } 62% { transform: translateX(-8px) rotate(-12deg) translateY(-6px) } 75% { transform: translateX(8px) rotate(12deg) } 87% { transform: translateX(0) rotate(0) translateY(-6px) } }
        @keyframes duck-bounce { 0%,100% { transform: translateY(0) scale(1,1) } 15% { transform: translateY(0) scale(1.25,.7) } 35% { transform: translateY(-26px) scale(.9,1.15) } 55% { transform: translateY(0) scale(1.2,.8) } 70% { transform: translateY(-12px) scale(.95,1.05) } 85% { transform: translateY(0) scale(1.1,.9) } }
        @keyframes duck-grow { 0%,100% { transform: scale(1) } 40%,65% { transform: scale(2.2) } }
        @keyframes duck-dizzy { 0% { transform: rotate(0) } 20% { transform: rotate(-25deg) } 40% { transform: rotate(25deg) } 60% { transform: rotate(-20deg) } 80% { transform: rotate(15deg) } 100% { transform: rotate(0) } }
        @keyframes duck-backflip { 0% { transform: translateY(0) rotate(0) } 50% { transform: translateY(-24px) rotate(-180deg) } 100% { transform: translateY(0) rotate(-360deg) } }
        @keyframes duck-nod { 0%,100% { transform: rotate(0) translateY(0) } 15%,45%,75% { transform: rotate(14deg) translateY(4px) } 30%,60%,90% { transform: rotate(-4deg) translateY(0) } }
        @keyframes duck-slide { 0% { transform: translateX(0) skewX(0) } 40% { transform: translateX(40px) skewX(-18deg) } 60% { transform: translateX(40px) skewX(0) } 100% { transform: translateX(0) skewX(0) } }
        .duck-roamer { animation: duck-x 22s linear infinite; }
        .duck-hopper { animation: duck-y 22s linear infinite; }
        .duck-facer { animation: duck-face 22s linear infinite; }
        @media (max-width: 639px) {
          .duck-roamer { animation-name: duck-x-mobile; }
          .duck-hopper { animation: none; }
        }
        .duck-roamer[data-paused='true'], .duck-roamer[data-paused='true'] .duck-hopper, .duck-roamer[data-paused='true'] .duck-facer,
        .duck-roamer:hover, .duck-roamer:hover .duck-hopper, .duck-roamer:hover .duck-facer { animation-play-state: paused; }
        .duck-idle { animation: duck-wobble 1.1s ease-in-out infinite; transform-origin: 50% 90%; }
        .duck-play-waddle { animation: duck-waddle 2.4s ease-in-out; }
        .duck-play-spin { animation: duck-spin 1.6s cubic-bezier(.16,1,.3,1); }
        .duck-play-hop { animation: duck-hop 1.6s ease-in-out; }
        .duck-play-shake { animation: duck-shake 1.4s ease-in-out; }
        .duck-play-flip { animation: duck-flip 1.6s cubic-bezier(.16,1,.3,1); }
        .duck-play-peek { animation: duck-peek 2s ease-in-out; }
        .duck-play-tip { animation: duck-tip 2.4s ease-in-out; transform-origin: 50% 100%; }
        .duck-play-dance { animation: duck-dance 2.2s ease-in-out; }
        .duck-play-bounce { animation: duck-bounce 1.8s ease-in-out; transform-origin: 50% 100%; }
        .duck-play-grow { animation: duck-grow 2.2s ease-in-out; transform-origin: 0 100%; }
        .duck-play-dizzy { animation: duck-dizzy 2s ease-in-out; transform-origin: 50% 90%; }
        .duck-play-backflip { animation: duck-backflip 1.4s cubic-bezier(.16,1,.3,1); }
        .duck-play-nod { animation: duck-nod 2s ease-in-out; transform-origin: 50% 90%; }
        .duck-play-slide { animation: duck-slide 2s ease-in-out; }
        @media (prefers-reduced-motion: reduce) { .duck-roamer, .duck-hopper, .duck-facer, .duck-idle, [class*='duck-play-'] { animation: none !important; } }
      `}</style>
      <div className="duck-roamer absolute top-0 left-0" data-paused={playing ? 'true' : 'false'}>
        <div className="duck-hopper relative">
          <div className="duck-facer">
            <button
              type="button"
              onClick={play}
              aria-label={`${alt}: click the rubber duck`}
              className="block h-14 w-14 cursor-pointer"
            >
              <Image
                src="/static/images/logo-header.png"
                alt={alt}
                width={56}
                height={56}
                className={`h-14 w-14 ${playing ? `duck-play-${playing}` : 'duck-idle'}`}
              />
            </button>
          </div>
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
    </div>
  )
}
