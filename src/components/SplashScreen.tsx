import { useState, useEffect } from 'react';

export function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [phase, setPhase] = useState<'enter' | 'pulse' | 'exit'>('enter');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('pulse'), 600);
    const t2 = setTimeout(() => setPhase('exit'), 1600);
    const t3 = setTimeout(onFinish, 2100);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center transition-opacity duration-500 ${
        phase === 'exit' ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ background: 'linear-gradient(135deg, hsl(207 52% 18%), hsl(207 52% 28%), hsl(199 78% 35%))' }}
    >
      {/* Logo */}
      <div
        className={`transition-all duration-700 ease-out ${
          phase === 'enter'
            ? 'scale-75 opacity-0'
            : 'scale-100 opacity-100'
        }`}
      >
        <img
          src="/picto.png"
          alt="CIA"
          className="h-24 md:h-32 rounded-2xl shadow-2xl"
          style={{ filter: 'drop-shadow(0 6px 24px rgba(0,0,0,0.35))' }}
        />
      </div>

      {/* Text */}
      <div
        className={`mt-6 text-center transition-all duration-500 delay-300 ${
          phase === 'enter' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        <h1 className="font-display text-2xl md:text-3xl text-white tracking-wide">
          CIA <span className="text-white/60 font-semibold">E-Learning</span>
        </h1>
      </div>

      {/* Loading bar */}
      <div className="absolute bottom-12 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all ease-linear"
          style={{
            width: phase === 'enter' ? '0%' : phase === 'pulse' ? '70%' : '100%',
            transitionDuration: phase === 'enter' ? '0ms' : '1000ms',
            background: 'linear-gradient(90deg, hsl(199 78% 55%), hsl(40 90% 55%))',
          }}
        />
      </div>
    </div>
  );
}
