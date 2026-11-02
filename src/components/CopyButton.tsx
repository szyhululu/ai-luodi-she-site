"use client";
import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setDone(true);
        setTimeout(() => setDone(false), 1500);
      }}
      className="btn-ghost px-3 py-1 text-xs"
    >
      {done ? "已复制" : "复制提示词"}
    </button>
  );
}
