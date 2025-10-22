import React from "react";
import { palette } from "../../lib/theme";

interface PanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function Panel({ children, className = "" }: PanelProps) {
  return (
    <div
      className={`rounded-xl p-6 shadow-lg ${className}`}
      style={{ backgroundColor: palette.surface }}
    >
      {children}
    </div>
  );
}
