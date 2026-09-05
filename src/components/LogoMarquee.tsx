import React from 'react';
import { motion } from 'motion/react';

export const LogoMarquee: React.FC = () => {
  const logos = [
    { name: 'Acme Corp', symbol: '◆' },
    { name: 'Quantum Tech', symbol: '❖' },
    { name: 'Echo Dynamics', symbol: '⬡' },
    { name: 'Celestial Labs', symbol: '✦' },
    { name: 'Pulse Systems', symbol: '▲' },
    { name: 'Apex Global', symbol: '⬢' },
    { name: 'Vortex ERP', symbol: '◈' },
    { name: 'Horizon Industries', symbol: '■' },
  ];

  return (
    <section className="pt-8 sm:pt-14 md:pt-18 pb-6 sm:pb-10 border-y border-slate-100/80 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Trusted by growing businesses and enterprises across Pakistan
        </p>
      </div>

      <div
        className="flex overflow-hidden relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
      >
        <motion.div
          className="flex gap-14 sm:gap-20 flex-none pr-14 sm:pr-20 items-center"
          animate={{ translateX: '-50%' }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        >
          {[...logos, ...logos].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-slate-400 hover:text-brand transition-colors select-none font-bold text-base sm:text-lg tracking-tight whitespace-nowrap"
            >
              <span className="text-brand text-lg">{item.symbol}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
