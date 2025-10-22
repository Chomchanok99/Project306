import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { palette } from "../lib/theme"; // ใช้พาเลตสีเดียวกับหน้าแรก

export default function Login() {
  const nav = useNavigate();
  const [form, setForm] = useState({ fullname: "", email: "" });

  const emailOk = useMemo(() => /.+@.+\..+/.test(form.email), [form.email]);
  const canNext = emailOk && form.fullname.trim().length > 0;

  return (
    // พื้นนอกเข้ม, กลางจอ
    <div
      className="min-h-[calc(100vh-52px)] flex items-center justify-center px-4"
      style={{ backgroundColor: palette.frame }}
    >
      {/* กรอบนอกเข้ม + พื้นในเทาอ่อน */}
      <div
        className="w-full max-w-2xl rounded-md border-8 p-8 sm:p-10"
        style={{ borderColor: palette.frame, backgroundColor: palette.surface }}
      >
        <h1
          className="text-center text-5xl font-semibold tracking-wide"
          style={{ color: "#3a2323" }}
        >
          Log in
        </h1>

        <form
          className="mt-8 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            if (canNext) nav("/cars");
          }}
        >
          {/* ชื่อ–นามสกุล */}
          <div className="grid items-center gap-3 sm:grid-cols-[140px_1fr]">
            <label className="text-lg" style={{ color: "#3a2323" }}>
              ชื่อ–นามสกุล
            </label>
            <input
              value={form.fullname}
              onChange={(e) => setForm({ ...form, fullname: e.target.value })}
              placeholder="พิมพ์ชื่อ–นามสกุล"
              className="rounded-md px-4 py-2 outline-none placeholder:opacity-80"
              style={{
                backgroundColor: "#8f4444", // แดงหม่นตามภาพ
                color: "white",
              }}
            />
          </div>

          {/* อีเมล */}
          <div className="grid items-center gap-3 sm:grid-cols-[140px_1fr]">
            <label className="text-lg" style={{ color: "#3a2323" }}>
              email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="name@example.com"
              className="rounded-md px-4 py-2 outline-none placeholder:opacity-80"
              style={{
                backgroundColor: "#8f4444",
                color: "white",
              }}
            />
          </div>

          {/* ปุ่ม ต่อไป */}
          <div className="pt-2 text-center">
            <button
              type="submit"
              disabled={!canNext}
              className={`px-6 py-2 rounded-md text-white shadow transition ${
                canNext ? "hover:brightness-110" : "opacity-60 cursor-not-allowed"
              }`}
              style={{ backgroundColor: palette.brand }}
            >
              ต่อไป&nbsp; →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
