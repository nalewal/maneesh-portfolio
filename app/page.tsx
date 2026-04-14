// app/page.tsx
"use client";

import { useState } from "react";
import Terminal from "@/components/terminal/Terminal";

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(true);

  return (
    <main>
      {showTerminal ? (
        <Terminal onExit={() => setShowTerminal(false)} />
      ) : (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-gray-500 mb-6">Portfolio sections coming soon...</p>
            <button
              onClick={() => setShowTerminal(true)}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition-colors font-mono"
            >
              &gt;_ Open Terminal
            </button>
          </div>
        </div>
      )}
    </main>
  );
}