import React from "react";

interface NexolithLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  glow?: boolean;
}

export function NexolithLogo({
  className = "",
  size = 40,
  showText = false,
  glow = false,
}: NexolithLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div
        className="relative flex items-center justify-center shrink-0"
        style={{ width: size, height: size }}
      >
        {glow && (
          <div
            className="absolute inset-0 rounded-full blur-xl opacity-40 animate-pulse-subtle pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(23, 105, 255, 0.4) 0%, rgba(46, 204, 113, 0.3) 60%, transparent 80%)",
            }}
          />
        )}

        <svg
          width={size}
          height={size}
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 transition-transform duration-500 ease-out group-hover:scale-105"
        >
          <defs>
            <linearGradient id="blueMain" x1="20" y1="15" x2="65" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2575FC" />
              <stop offset="60%" stopColor="#1769FF" />
              <stop offset="100%" stopColor="#0A3CB8" />
            </linearGradient>
            <linearGradient id="blueFacetDark" x1="20" y1="15" x2="45" y2="75" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1047A9" />
              <stop offset="100%" stopColor="#082357" />
            </linearGradient>
            <linearGradient id="blueFacetLight" x1="45" y1="20" x2="65" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#5495FF" />
              <stop offset="100%" stopColor="#1769FF" />
            </linearGradient>

            <linearGradient id="emeraldMain" x1="60" y1="20" x2="105" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#5CFFD0" />
              <stop offset="45%" stopColor="#2ECC71" />
              <stop offset="100%" stopColor="#1E8449" />
            </linearGradient>
            <linearGradient id="emeraldFacetDark" x1="70" y1="50" x2="95" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1B7A43" />
              <stop offset="100%" stopColor="#0E4224" />
            </linearGradient>
            <linearGradient id="emeraldFacetBright" x1="55" y1="35" x2="85" y2="75" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7EFFDC" />
              <stop offset="100%" stopColor="#2ECC71" />
            </linearGradient>

            <filter id="subtleDrop" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Left Wing / N-Stroke (Blue Prisms) */}
          <g filter="url(#subtleDrop)">
            <polygon points="56,22 28,34 50,60" fill="url(#blueFacetLight)" />
            <polygon points="28,34 26,88 50,60" fill="url(#blueFacetDark)" />
            <polygon points="56,22 50,60 62,76" fill="url(#blueMain)" />
            <polygon points="26,88 50,60 62,76 44,96" fill="url(#blueFacetDark)" />
          </g>

          {/* Right Wing / X-Stroke (Emerald Prisms) */}
          <g filter="url(#subtleDrop)">
            <polygon points="68,22 96,24 74,54" fill="url(#emeraldFacetBright)" />
            <polygon points="96,24 102,74 74,54" fill="url(#emeraldMain)" />
            <polygon points="102,74 80,98 74,54" fill="url(#emeraldFacetDark)" />
            <polygon points="80,98 58,74 74,54" fill="url(#emeraldFacetBright)" />
          </g>

          <polygon points="50,60 62,76 74,54 58,42" fill="#050B12" opacity="0.3" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-display font-bold tracking-widest text-nexolith-white text-sm sm:text-base leading-none">
            NEXOLITH <span className="text-nexolith-emerald font-semibold">DEV</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-nexolith-muted mt-1 leading-none font-mono">
            Digital Studio
          </span>
        </div>
      )}
    </div>
  );
}
