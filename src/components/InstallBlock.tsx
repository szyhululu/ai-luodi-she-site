"use client";

import { useState } from "react";

export default function InstallBlock({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };
  return (
    <div className="relative">
      <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg bg-stone-900 p-4 pr-20 text-sm text-stone-100">
        {command}
      </pre>
      <button
        onClick={copy}
        className="absolute right-3 top-3 rounded-md bg-white/15 px-2 py-1 text-xs text-white hover:bg-white/25"
      >
        {copied ? "已复制" : "复制"}
      </button>
    </div>
  );
}
