"use client";

import { useState } from 'react';
import { MapPin, Copy, Check } from 'lucide-react';

export default function Address() {
  const [copied, setCopied] = useState(false);

  const addressLines = [
    'Takeoffs360 LLC',
    '325 Sentry Parkway E',
    'STE 301 PMB 1061',
    'Bluebell, PA 19422',
    'United States',
  ];

  const fullAddress = addressLines.join('\n');

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy address failed', err);
      setCopied(false);
    }
  };

  return (
    <div className="block w-full md:w-80 mt-4 md:mt-0">
      <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/20 h-full">
        <div className="flex items-start gap-3 h-full">
          <div className="p-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg shadow-md mt-0.5 flex-shrink-0">
            <MapPin className="h-4 w-4 text-white" />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-3">
              <div className="text-base font-semibold text-slate-800">Takeoffs360 LLC</div>
              <button
                onClick={copyAddress}
                aria-label="Copy address to clipboard"
                className="inline-flex items-center justify-center h-7 w-7 rounded text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                {copied ? <Check className="h-4 w-4 text-amber-500" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            <div className="mt-1 text-slate-800 text-base font-medium whitespace-pre-line">
              {addressLines.slice(1).map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
