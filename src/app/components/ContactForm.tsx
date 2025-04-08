'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900 placeholder:text-gray-500"
          required
          disabled={status === 'loading'}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900 placeholder:text-gray-500"
          required
          disabled={status === 'loading'}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900 placeholder:text-gray-500"
          required
          disabled={status === 'loading'}
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-cyan-600 text-white rounded-full hover:scale-105 transition disabled:opacity-50"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 mt-4">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 mt-4">Error sending message. Please try again.</p>
      )}
    </form>
  );
} 