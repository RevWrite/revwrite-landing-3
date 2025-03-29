import React from "react";

export default function RevWriteLanding() {
  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <header className="text-center max-w-2xl mt-12">
        <h1 className="text-4xl font-extrabold mb-4">
          AI-Powered Copy That Converts
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Built for Course Creators, Coaches & Founders who want results fast.
        </p>
        <a
          href="https://your-google-form-link.com"
          className="bg-orange-500 text-black px-6 py-3 rounded-2xl font-bold shadow-lg hover:bg-orange-400"
        >
          Work With Me
        </a>
      </header>

      <section className="mt-20 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold mb-4">What You Get</h2>
        <ul className="text-gray-300 space-y-2">
          <li>✅ 3-Email Launch / Sales Sequence</li>
          <li>✅ 1x High-Converting Landing Page Copy</li>
          <li>✅ AI Prompt Pack (Bonus)</li>
          <li>✅ 48–72 Hour Turnaround</li>
          <li>🔥 Beta Price: <span className="text-white font-bold">$197</span></li>
        </ul>
      </section>

      <section className="mt-20 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Why RevWrite?</h2>
        <p className="text-gray-300">
          We combine the speed and scale of AI with proven sales psychology to deliver copy that doesn’t just look good — it performs.
        </p>
      </section>

      <section className="mt-20 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-4">What Others Are Saying</h2>
        <blockquote className="italic text-gray-400">
          "RevWrite helped me hit clarity on my offer. The emails were sharp, focused, and did the job." — Ben J.
        </blockquote>
      </section>

      <footer className="mt-20 mb-10 text-center">
        <p className="text-xl font-semibold mb-4">Ready to turn browsers into buyers?</p>
        <a
          href="https://your-google-form-link.com"
          className="bg-orange-500 text-black px-6 py-3 rounded-2xl font-bold shadow-lg hover:bg-orange-400"
        >
          Let’s Write Revenue
        </a>
      </footer>
    </div>
  );
}
