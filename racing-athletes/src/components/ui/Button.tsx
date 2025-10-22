// src/components/ui/Button.tsx
import React from "react";
import { palette } from "../../lib/theme";

export default function Button({
  children, onClick, className = "", disabled,
}: { children: React.ReactNode; onClick?: () => void; className?: string; disabled?: boolean; }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-5 py-2 rounded-md text-white shadow transition ${disabled ? "opacity-60 cursor-not-allowed" : "hover:brightness-110"} ${className}`}
      style={{ backgroundColor: palette.brand }}
    >
      {children}
    </button>
  );
}
