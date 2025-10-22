// src/pages/Home.tsx
import React from "react";

import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { palette } from "../lib/theme.ts";

export default function Home() {
  const nav = useNavigate();
  return (
    // พื้นด้านนอกสีเข้ม
    <div className="min-h-[calc(100vh-52px)] flex items-center justify-center px-4"
         style={{ backgroundColor: palette.frame }}>
      {/* พื้นที่คอนเทนต์แบบมีกรอบหนา (สีเข้ม) และพื้นในเทาอ่อน */}
      <div className="w-full max-w-5xl rounded-md border-8 p-6 sm:p-8"
           style={{ borderColor: palette.frame, backgroundColor: palette.surface }}>
        <div className="mx-auto max-w-4xl">
          <img
            src="https://s.isanook.com/ga/0/ud/199/995409/995409-thumbnail.jpg?ip/crop/w670h402/q80/jpg"
            alt="racing"
            className="w-full max-h-[380px] object-cover rounded"
          />
          <div className="mt-6 flex justify-center">
            <Button onClick={() => nav('/login')}>ข้อมูลนักกีฬา</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
