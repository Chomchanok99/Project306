// src/components/ui/HeaderBar.tsx
import React from "react";
import { useLocation } from "react-router-dom";
import { User } from "lucide-react";
import { palette } from "../../lib/theme";

export default function HeaderBar() {
  const { pathname } = useLocation();
  const map: Record<string,string> = { "/": "หน้าแรก", "/login": "เข้าสู่ระบบ", "/admin":"แอดมิน" };

  return (
    <header
      className="w-full shadow"
      style={{ backgroundColor: palette.header, color: palette.textDark }}
    >
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="font-semibold">Racing Athletes</div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:block opacity-80 text-sm">
            {map[pathname] || (pathname.startsWith("/cars") ? "หมวดหมู่/นักแข่ง" : "")}
          </span>
          <User size={22} />
        </div>
      </div>
    </header>
  );
}
