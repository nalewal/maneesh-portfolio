// components/terminal/Terminal.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { handleCommand, CommandResult } from "./commands";
import { portfolioData } from "@/data/portfolio";

type HistoryEntry = {
  command: string;
  result: CommandResult;
};

type Props = {
  onExit: () => void;
};

const WELCOME_LINES = [
  "╔══════════════════════════════════════════════════════╗",
  `║     Welcome to ${portfolioData.personal.name}'s Portfolio Terminal     ║`,
  "║         Software Developer | Terminal v1.0           ║",
  "╚══════════════════════════════════════════════════════╝",
  "",
  "  Type 'help' to see all available commands.",
  "  Type 'exit' to view the full portfolio website.",
  "",
];

export default function Terminal({ onExit }: Props) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const runCommand = (cmd: string) => {
    if (!cmd.trim()) return;

    const result = handleCommand(cmd);

    if (result.type === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    if (result.type === "exit") {
      setHistory((prev) => [...prev, { command: cmd, result }]);
      setInput("");
      setTimeout(() => onExit(), 1200);
      return;
    }

    if (result.type === "link") {
      window.open(result.content as string, "_blank");
    }

    setHistory((prev) => [...prev, { command: cmd, result }]);
    setCommandHistory((prev) => [cmd, ...prev]);
    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const newIndex = Math.max(historyIndex - 1, -1);
      setHistoryIndex(newIndex);
      setInput(newIndex === -1 ? "" : commandHistory[newIndex]);
    } else if (e.key === "Tab") {
      e.preventDefault();
      const commands = portfolioData.terminalCommands.map((c) => c.command);
      const match = commands.find((c) => c.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  };

  const renderResult = (result: CommandResult) => {
    switch (result.type) {
      case "text":
        return (
          <p className="text-green-400 whitespace-pre-wrap leading-relaxed">
            {result.content as string}
          </p>
        );

      case "list":
        return (
          <ul className="text-green-400 font-mono text-sm leading-relaxed">
            {(result.content as string[]).map((line, i) => (
              <li key={i} className="whitespace-pre">
                {line}
              </li>
            ))}
          </ul>
        );

      case "link":
        return (
            <p className="text-cyan-400">
            📄 Opening resume in new tab...{" "}
            <a
                href={result.content as string}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
            >
                Click here if it didn't open
            </a>
            </p>
        );

      case "exit":
        return (
          <p className="text-yellow-400 animate-pulse">
            {result.content as string}
          </p>
        );

      case "error":
        return (
          <p className="text-red-400">
            ⚠ {result.content as string}
          </p>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="min-h-screen bg-black flex items-center justify-center p-4"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Window */}
      <div className="w-full max-w-4xl bg-[#0d0d0d] border border-[#333] rounded-xl shadow-2xl shadow-black overflow-hidden">

        {/* Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a1a] border-b border-[#333]">
          <div className="flex gap-2">
            {/* Close button — exits terminal */}
            <button
              onClick={onExit}
              className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
              title="Close Terminal"
            />
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
            <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
          </div>
          <span className="text-[#888] text-xs font-mono tracking-widest">
            maneesh@portfolio ~ terminal
          </span>
          <div className="w-16" />
        </div>

        {/* Terminal Body */}
        <div className="p-5 font-mono text-sm h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-transparent">

          {/* Welcome Message */}
          {WELCOME_LINES.map((line, i) => (
            <div key={i} className="text-cyan-400 whitespace-pre leading-relaxed">
              {line}
            </div>
          ))}

          {/* Command History */}
          {history.map((entry, i) => (
            <div key={i} className="mt-3">
              {/* Command line */}
              <div className="flex items-center gap-2">
                <span className="text-green-500">maneesh</span>
                <span className="text-white">@</span>
                <span className="text-cyan-400">portfolio</span>
                <span className="text-white">:~$</span>
                <span className="text-white ml-1">{entry.command}</span>
              </div>
              {/* Output */}
              <div className="mt-1 ml-2">{renderResult(entry.result)}</div>
            </div>
          ))}

          {/* Input Line */}
          <div className="flex items-center gap-2 mt-3">
            <span className="text-green-500">maneesh</span>
            <span className="text-white">@</span>
            <span className="text-cyan-400">portfolio</span>
            <span className="text-white">:~$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white outline-none caret-green-400 ml-1"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              aria-label="Terminal input"
            />
          </div>

          {/* Scroll anchor */}
          <div ref={bottomRef} />
        </div>

        {/* Bottom shortcut hints */}
        <div className="px-5 py-2 bg-[#111] border-t border-[#2a2a2a] flex flex-wrap gap-4 text-[11px] text-[#666] font-mono">
          <span><kbd className="text-[#888]">↑↓</kbd> history</span>
          <span><kbd className="text-[#888]">Tab</kbd> autocomplete</span>
          <span><kbd className="text-[#888]">enter</kbd> run</span>
          <span><kbd className="text-[#888]">exit</kbd> view portfolio</span>
          <span className="ml-auto text-[#444]">click anywhere to focus</span>
        </div>
      </div>
    </div>
  );
}