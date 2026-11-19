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
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle
          cx="16"
          cy="16"
          r="14.5"
          stroke="#C7D5A5"
          strokeOpacity="0.65"
          strokeWidth="1"
        />
        {/* Botanical coffee & tea leaf silhouette */}
        <path
          d="M16 7C11.8 10.2 10 14.4 10 18.2C10 21.8 12.6 24.5 16 25C19.4 24.5 22 21.8 22 18.2C22 14.4 20.2 10.2 16 7Z"
          stroke="#E9E1D2"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M16 9.5V24.5"
          stroke="#C7D5A5"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M16 14.5C14.2 13.5 13 12.6 12.4 11.8"
          stroke="#C7D5A5"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
        <path
          d="M16 18.5C17.8 17.5 19 16.6 19.6 15.8"
          stroke="#C7D5A5"
          strokeWidth="0.9"
          strokeLinecap="round"
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
