import React from "react";

interface DipkopLogoProps {
  className?: string;
  showSubtext?: boolean;
}

export function DipkopLogo({
  className = "",
  showSubtext = false,
}: DipkopLogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {/* Official DIPKOP Cup Mascot Mark */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Subtle dark botanical badge */}
        <circle
          cx="32"
          cy="32"
          r="30"
          fill="#253D30"
          stroke="#E9E1D2"
          strokeOpacity="0.45"
          strokeWidth="1.5"
        />

        {/* Mug Handle (left) */}
        <path
          d="M21 26.5H16.2C14.3 26.5 13 28 13 30V35.2C13 37.2 14.3 38.6 16.2 38.6H20.2"
          stroke="#F5F1E8"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Tapered Cup Body */}
        <path
          d="M23.5 17.8C24.1 14.8 26.5 13.5 31.8 13.5H36.8C40.8 13.5 43.2 15.2 43.8 18.6L46.8 40.5C47.2 43.2 45.2 45 42.3 45H21.2C18.5 45 16.8 43.1 17.4 40.2L23.5 17.8Z"
          fill="#F5F1E8"
        />

        {/* Left Happy Eye (^) */}
        <path
          d="M24.2 32.8L27.2 24.8L29.8 32.8"
          stroke="#253D30"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right Happy Eye (^) */}
        <path
          d="M34.2 32.8L37.2 24.8L39.8 32.8"
          stroke="#253D30"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Left Foot */}
        <path
          d="M26.5 44.5V48.8C26.5 50.4 25.1 51.4 22.8 51.4H18.2C16.9 51.4 16.2 50.5 16.5 49.4C16.8 48.2 18.2 47.6 20.6 47.6H22.2V44.5"
          fill="#F5F1E8"
        />

        {/* Right Foot */}
        <path
          d="M36.5 44.5V48.8C36.5 50.4 37.9 51.4 40.2 51.4H44.8C46.1 51.4 46.8 50.5 46.5 49.4C46.2 48.2 44.8 47.6 42.4 47.6H40.8V44.5"
          fill="#F5F1E8"
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.4rem] sm:text-[1.55rem] tracking-[0.14em] font-medium text-[#F5F1E8]">
          DIPKOP
        </span>
        {showSubtext && (
          <span className="mt-1 text-[0.62rem] uppercase tracking-[0.28em] text-[#C7D5A5]">
            Coffee &amp; Matcha
          </span>
        )}
      </span>
    </span>
  );
}
