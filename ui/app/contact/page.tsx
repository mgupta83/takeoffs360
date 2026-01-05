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

import { useRef, useState } from 'react';
import { Mail, Copy, Check, Phone } from 'lucide-react';

const EMAIL = 'info@takeoffs360.com';
const PHONE = '000-000-0000';

export default function ContactForm() {
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

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
    setResultMessage(null);
    setSubmitting(true);

    try {
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      formData.append('access_key', 'c1b55a19-e888-45fc-a279-4d98922efa96');
      if (!formData.get('subject')) {
        formData.append('subject', 'New contact request from website');
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setResultMessage('Thanks — your message was sent successfully.');
        form.reset();
      } else {
        setResultMessage('Sorry, something went wrong. Please try again later.');
        console.error('Web3Forms error:', data);
      }
    } catch (err) {
      console.error('Submit error', err);
      setResultMessage('Network error — please try again later.');
    } finally {
      setSubmitting(false);
      formRef.current?.querySelector<HTMLInputElement>('input[name="name"]')?.focus();
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
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
          <p className="text-sm text-zinc-600 mt-1 mb-4">and we'll revert back within 24 hours</p>

          <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
          <input type="hidden" name="redirect" value="" />
          <div style={{ display: 'none' }} aria-hidden>
            <label>Do not fill</label>
            <input name="botcheck" />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1" htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required className="w-full rounded border border-zinc-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300" />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded border border-zinc-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300" />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1" htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" className="w-full rounded border border-zinc-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300" />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1" htmlFor="message">Message</label>
            <textarea id="message" name="message" required rows={6} className="w-full rounded border border-zinc-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300" />
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded bg-amber-500 px-4 py-2 text-white font-medium hover:bg-amber-600 disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>

            {resultMessage && (
              <p className="text-sm text-zinc-700" role="status">{resultMessage}</p>
            )}
          </div>
        </form>
      </div>
      </div>
    </section>
  );
}