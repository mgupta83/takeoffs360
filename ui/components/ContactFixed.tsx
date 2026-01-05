"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactFixed() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const email = "info@takeoffs360.com";

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (copied) {
      const t = setTimeout(() => setCopied(false), 2500);
      return () => clearTimeout(t);
    }
  }, [copied]);

  async function handleCopy() {
    // Try modern clipboard API first, fall back to execCommand for older/mobile browsers
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        closeRef.current?.focus();
        return;
      }
    } catch (err) {
      // fall through to fallback
      console.debug("navigator.clipboard.writeText failed, trying fallback", err);
    }

    // Fallback: create a temporary textarea, select and copy
    try {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      // Prevent mobile zooming and keep out of view
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      textarea.style.top = "0";
      document.body.appendChild(textarea);

      // Focus + select the textarea content — focusing first helps on iOS WebView/Safari
      textarea.focus({ preventScroll: true } as FocusOptions);
      textarea.select();
      try {
        textarea.setSelectionRange(0, textarea.value.length);
      } catch {}

      // Attempt copy
      const successful = document.execCommand("copy");
      // cleanup
      try { textarea.blur(); } catch {};
      document.body.removeChild(textarea);
      if (successful) {
        setCopied(true);
        closeRef.current?.focus();
      } else {
        throw new Error("execCommand copy failed");
      }
    } catch (err) {
      console.error("Copy fallback failed", err);
      setCopied(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="fixed right-4 bottom-6 z-50 inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-3 text-white font-medium shadow-lg hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
      >
        Contact Us
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
            aria-hidden
          />

          <div className="relative z-10 w-full max-w-md mx-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-lg font-semibold">Email us at</h2>
              {/* <h2 className="text-lg font-semibold">Contact Us</h2>
              <p className="mt-2 text-sm text-slate-700">Email us at</p> */}
              <div className="mt-3 flex items-center justify-between gap-4">
                <div className="truncate text-slate-900 font-medium">{email}</div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="rounded bg-slate-100 px-3 py-1 text-sm text-slate-800 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                  <button
                    ref={closeRef}
                    onClick={() => setOpen(false)}
                    className="rounded bg-amber-500 px-3 py-1 text-sm text-white hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
