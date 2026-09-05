import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light'; // 'dark' = for light bg (dark text), 'light' = for dark bg (white text)
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  showText = true,
  className = '',
}) => {
  const isLight = variant === 'light'; // On dark background

  // Dimension helpers
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const subTextSizes = {
    sm: 'text-[8px]',
    md: 'text-[10px]',
    lg: 'text-xs',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Icon Badge */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            {/* Background Gradient */}
            <linearGradient id="dxBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#3169b8" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>

            {/* Glyph Accent Gradient */}
            <linearGradient id="dxAccentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>

            {/* Glow Filter */}
            <filter id="dxGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#3169b8" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* Squircle Badge Container */}
          <rect
            x="2"
            y="2"
            width="40"
            height="40"
            rx="11"
            fill="url(#dxBgGrad)"
            filter="url(#dxGlow)"
          />

          {/* Border Stroke Highlight */}
          <rect
            x="2.5"
            y="2.5"
            width="39"
            height="39"
            rx="10.5"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1"
          />

          {/* Geometric 'D' Backbone and Curve */}
          <path
            d="M 12 12 L 12 32 L 20 32 C 26 32 30 28 30 22 C 30 16 26 12 20 12 Z"
            stroke="white"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Futuristic Dynamic 'X' Crossing Slash */}
          <path
            d="M 21 15 L 32 29"
            stroke="url(#dxAccentGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 32 15 L 23 27"
            stroke="url(#dxAccentGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Core Sparkle/Nexus Node */}
          <circle cx="27" cy="22" r="2" fill="#ffffff" />
          <circle cx="27" cy="22" r="3.5" stroke="#93c5fd" strokeWidth="1" opacity="0.8" />
        </svg>
      </div>

      {/* Brand Wordmark */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center">
            <span
              className={`${textSizes[size]} font-extrabold tracking-tight ${
                isLight ? 'text-white' : 'text-slate-900'
              }`}
            >
              Dreamon<span className="text-brand">x</span>
            </span>
          </div>
          {showSubtitle && (
            <span
              className={`${subTextSizes[size]} font-semibold uppercase tracking-wider -mt-0.5 ${
                isLight ? 'text-blue-300' : 'text-slate-400'
              }`}
            >
              Enterprise ERP
            </span>
          )}
        </div>
      )}
    </div>
  );
};
