import React from "react";
import Image from "next/image";

interface DipkopLogoProps {
  className?: string;
  showSubtext?: boolean;
}

export function DipkopLogo({
  className = "",
  showSubtext = false,
}: DipkopLogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/images/dipkop-logo.png"
        alt="DIPKOP Coffee & Matcha"
        width={640}
        height={285}
        priority
        className={`w-auto object-contain ${
          showSubtext ? "h-12 sm:h-14" : "h-9 sm:h-11"
        }`}
      />
    </span>
  );
}
