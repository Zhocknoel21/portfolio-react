import { useEffect, useRef, useState } from 'react';
import { FORM_ENDPOINT } from '../data/portfolio.js';

const DEFAULT_NOTE = 'Delivered straight to zhocknoel2@gmail.com via FormSubmit';

// status: 'idle' | 'sending' | 'sent' | 'error'
export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const timer = useRef(null);

  // don't leave a timer running if the component unmounts
  useEffect(() => () => clearTimeout(timer.current), []);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');

    try {
      // fetch keeps visitors on the page instead of redirecting to FormSubmit
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error((data && data.message) || 'Send failed');

      form.reset();
      setStatus('sent');
      timer.current = setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
    }
  }

  const buttonLabel = {
    idle: 'Send message',
    sending: 'Sending…',
    sent: 'Message sent ✓',
    error: 'Send message',
  }[status];

  const note =
    status === 'sent'
      ? "Thanks — I'll get back to you soon."
      : status === 'error'
      ? 'Something went wrong — please try again, or email me directly.'
      : DEFAULT_NOTE;

  return (
    <form className="msgform" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New message from your portfolio site" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div className="field">
        <label htmlFor="name">name</label>
        <input id="name" name="name" type="text" required placeholder="Your name" />
      </div>
      <div className="field">
        <label htmlFor="email">email</label>
        <input id="email" name="email" type="email" required placeholder="you@email.com" />
      </div>
      <div className="field">
        <label htmlFor="message">message</label>
        <textarea id="message" name="message" required placeholder="What would you like to say?" />
      </div>

      <button type="submit" disabled={status === 'sending' || status === 'sent'}>
        {buttonLabel}
      </button>
      <div className="form-note" style={status === 'error' ? { color: '#ef7a6d' } : undefined}>
        {note}
      </div>
    </form>
  );
}
