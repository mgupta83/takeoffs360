// export default function Contact() {
//   return (
//     <section className="max-w-4xl mx-auto px-6 py-20">
//       <h2 className="text-3xl font-semibold text-slate-800">
//         Contact Us
//       </h2>

//       <p className="mt-4 text-slate-600">
//         Email us at <strong>info@takeoffs360.com</strong> to request a quote.
//       </p>
//     </section>
//   )
// }
'use client'

import Script from 'next/script'
import { useState } from 'react';
import { Mail, Copy, Check, Phone } from 'lucide-react';

const EMAIL = 'info@takeoffs360.com';
const PHONE = '000-000-0000';
const API_URL = 'https://api.staticforms.dev/submit';
const API_KEY = 'sf_8mjh00l3g2id8lj5lk8l28al';
const API_KEY_FIELD = 'apiKey';
const RECAPTCHA_SITE_KEY = '6LcGiEAsAAAAAHnkn1ZsNiXerJ6HppFfIHdW3ukt';

export default function ContactForm() {
  // Per StaticForms v2 guidance, include reCAPTCHA script in the page <head> or static layout.
  // We keep the visible widget in the form; no dynamic script injection needed here.
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<'error' | 'success' | null>(null);
  const [sent, setSent] = useState(false);
  
  
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed', err);
      setCopied(false);
    }
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PHONE);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch (err) {
      console.error('Copy phone failed', err);
      setCopiedPhone(false);
    }
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setStatusMessage(null);
    setStatusType(null);
    setSubmitting(true);

    try {
      const form = event.target as HTMLFormElement;
      const nameVal = (form.querySelector('input[name="name"]') as HTMLInputElement)?.value || '';
      // StaticForms v2: visible widget will populate `g-recaptcha-response` automatically.
      // We do minimal client-side checks and rely on StaticForms to validate the token.

      // Ensure reCAPTCHA token exists (v2 checkbox widget)
      let recaptchaToken = '';
      try {
        if (typeof window !== 'undefined' && (window as any).grecaptcha && typeof (window as any).grecaptcha.getResponse === 'function') {
          recaptchaToken = (window as any).grecaptcha.getResponse() || '';
        }
      } catch (err) {
        // ignore
      }
      // fallback: check for g-recaptcha-response input filled by the widget
      if (!recaptchaToken) {
        const respInput = form.querySelector('input[name="g-recaptcha-response"]') as HTMLInputElement | null;
        if (respInput) recaptchaToken = respInput.value || '';
      }

      if (!recaptchaToken) {
        setStatusMessage('Please complete the reCAPTCHA checkbox before sending.');
        setStatusType('error');
        setSubmitting(false);
        // try to scroll/focus the widget
        const widget = document.querySelector('.g-recaptcha') as HTMLElement | null;
        if (widget) widget.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      const formData = new FormData(form);

      // Build JSON payload from form data (concise)
      const payload: Record<string, any> = Object.fromEntries(formData.entries());
      // set a friendly subject
      payload.subject = `New message from ${nameVal}`;

      // Honeypot check
      if (payload.botcheck) {
        setStatusMessage('Bad submission');
        setStatusType('error');
        setSubmitting(false);
        return;
      }

      // Require at least one contact method: email or phone
      const hasEmail = payload.email && String(payload.email).trim() !== '';
      const hasPhone = payload.phone && String(payload.phone).trim() !== '';
      if (!hasEmail && !hasPhone) {
        setStatusMessage('Please provide an email or phone number.');
        setStatusType('error');
        setSubmitting(false);
        return;
      }

      // Include public API key (StaticForms public key) and post directly
      payload[API_KEY_FIELD] = API_KEY;
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      let data: any = null;
      try { data = await res.json(); } catch {}

      // staticforms usually returns 200 on success; also accept data.success if present
      const resetRecaptcha = () => {
        try {
          if (typeof window !== 'undefined' && (window as any).grecaptcha && typeof (window as any).grecaptcha.reset === 'function') {
            (window as any).grecaptcha.reset();
          }
          const respInput = document.querySelector('input[name="g-recaptcha-response"]') as HTMLInputElement | null;
          if (respInput) respInput.value = '';
        } catch (err) {
          console.warn('reCAPTCHA reset failed', err);
        }
      };

      if (res.ok && (data === null || data.success === undefined || data.success)) {
        setStatusMessage('Thanks — your message was sent successfully.');
        setStatusType('success');
        form.reset();
        resetRecaptcha();
        setSent(true);
        setTimeout(() => setSent(false), 10000);
      } else {
        // Reset recaptcha on error too so user can retry with a fresh token
        resetRecaptcha();
        setStatusMessage('Sorry, something went wrong. Please try again later.');
        setStatusType('error');
        console.error('StaticForms error:', { status: res.status, body: data });
      }
    } catch (err) {
      console.error('Submit error', err);
      // Reset reCAPTCHA on network/catch errors so user can retry
      try {
        if (typeof window !== 'undefined' && (window as any).grecaptcha && typeof (window as any).grecaptcha.reset === 'function') {
          (window as any).grecaptcha.reset();
        }
        const respInput = document.querySelector('input[name="g-recaptcha-response"]') as HTMLInputElement | null;
        if (respInput) respInput.value = '';
      } catch (err2) {
        /* ignore */
      }
      setStatusMessage('Network error — please try again later.');
      setStatusType('error');
    } finally {
      setSubmitting(false);
      (document.querySelector('input[name="name"]') as HTMLInputElement | null)?.focus();
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      {/* Load reCAPTCHA script for this page only after hydration */}
      <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
      <h1 className="text-4xl font-black mb-4">Contact Us</h1>
      <p className="text-lg text-zinc-600 mb-8">Choose an option below to reach us quickly.</p>

      <div className="grid grid-cols-1 gap-8">
        {/* Contact row with two columns: Email (col1) and Phone (col2) */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Column 1: Email */}
            <div className="w-full md:flex-1 flex items-center gap-3">
              <Mail className="h-8 w-8 text-amber-500" />
              <div>
                <div className="text-sm font-semibold">Email</div>
                <div className="mt-1 flex items-center gap-2">
                  <div className="text-zinc-700 font-medium mr-2">{EMAIL}</div>
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={copyEmail}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); copyEmail(); } }}
                    aria-label="Copy email to clipboard"
                    className="inline-flex items-center justify-center h-6 w-6 rounded text-slate-600 hover:bg-slate-100 cursor-pointer"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-amber-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2: Phone */}
            <div className="w-full md:flex-1 flex items-center gap-3">
              <Phone className="h-8 w-8 text-amber-500" />
              <div>
                <div className="text-sm font-semibold">Phone</div>
                <div className="mt-1 flex items-center gap-2">
                  <div className="text-zinc-700 font-medium mr-2">{PHONE}</div>
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={copyPhone}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); copyPhone(); } }}
                    aria-label="Copy phone to clipboard"
                    className="inline-flex items-center justify-center h-6 w-6 rounded text-slate-600 hover:bg-slate-100 cursor-pointer"
                  >
                    {copiedPhone ? (
                      <Check className="h-4 w-4 text-amber-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form with title and subtext */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100">
          <h2 className="text-2xl font-semibold">Send us a message</h2>
          <p className="text-sm text-zinc-600 mt-1 mb-2">and we'll revert back within 24 hours</p>
          <br/><p className="text-xs text-zinc-500 mb-4">Please provide at least one contact method: email or phone.</p>

          {statusMessage && (
            <div className={`mb-4 rounded px-4 py-3 text-sm ${statusType === 'error' ? 'border border-red-200 bg-red-50 text-red-800' : 'border border-green-200 bg-green-50 text-green-800'}`} role="status">
              {statusMessage}
            </div>
          )}

            <form onSubmit={onSubmit} className="space-y-4">
          <div style={{ display: 'none' }} aria-hidden>
            <label>Do not fill</label>
            <input name="botcheck" />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1" htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required placeholder="Your Name" onChange={() => { setStatusMessage(null); setStatusType(null); }} className="w-full rounded border border-zinc-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300" />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Your Email" onChange={() => { setStatusMessage(null); setStatusType(null); }} className="w-full rounded border border-zinc-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300" />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1" htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" placeholder="Your Phone" onChange={() => { setStatusMessage(null); setStatusType(null); }} className="w-full rounded border border-zinc-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300" />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1" htmlFor="message">Message</label>
            <textarea id="message" name="message" required rows={6} className="w-full rounded border border-zinc-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300" />
          </div>

              <div className="g-recaptcha mr-4" data-sitekey={RECAPTCHA_SITE_KEY}></div>
            <button
              type="submit"
              disabled={submitting || sent}
              className="inline-flex items-center gap-2 rounded bg-amber-500 px-4 py-2 text-white font-medium hover:bg-amber-600 disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4 text-white" />
                  <span>Sent</span>
                </>
              ) : (
                (submitting ? 'Sending...' : 'Send Message')
              )}
            </button>

            
        </form>
      </div>
      </div>
    </section>
  );
}