"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageSquare, Send, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

const starterQuestions = [
  "How does InnerCircle find the right people?",
  "Can this help with internships too?",
  "Are the emails editable?"
] as const;

const initialMessages: Message[] = [
  {
    id: "welcome",
    role: "assistant",
    content:
      "Ask me about outreach strategy, finding the right people to contact, resume help, or how InnerCircle works."
  }
];

function buildAssistantReply(input: string) {
  const normalized = input.toLowerCase();

  if (normalized.includes("internship") || normalized.includes("full-time") || normalized.includes("full time")) {
    return "Yes. InnerCircle works for internships and full-time roles across different fields, so the workflow stays useful as your search changes.";
  }

  if (normalized.includes("email") || normalized.includes("message") || normalized.includes("outreach")) {
    return "InnerCircle helps you identify the right people first, then generates messages that feel personal and relevant. You can edit every draft before sending.";
  }

  if (normalized.includes("resume") || normalized.includes("cv")) {
    return "You do not need a perfect resume to start. InnerCircle can help you improve and tailor your resume as part of the process.";
  }

  if (normalized.includes("people") || normalized.includes("contact") || normalized.includes("matching")) {
    return "It looks at shared background, role relevance, and activity signals to surface the people most likely to respond, so you can focus on higher-signal outreach.";
  }

  if (normalized.includes("pricing") || normalized.includes("cost")) {
    return "The website includes pricing tiers to show the structure, and you can explore the workflow before committing. The product is designed to help you move faster with more context.";
  }

  return "InnerCircle brings jobs, outreach, and resume support into one focused workflow. If you want, ask me about matching, email generation, resume help, or how to get better response rates.";
}

export function openInnerCircleChat() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("open-innercircle-chat"));
  }
}

export function InnerCircleChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  useEffect(() => {
    function handleOpen() {
      setOpen(true);
    }

    window.addEventListener("open-innercircle-chat", handleOpen);
    return () => window.removeEventListener("open-innercircle-chat", handleOpen);
  }, []);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  function submitMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed
    };

    const assistantMessage: Message = {
      id: `assistant-${Date.now() + 1}`,
      role: "assistant",
      content: buildAssistantReply(trimmed)
    };

    setMessages((current) => [...current, userMessage, assistantMessage]);
    setInput("");
    setOpen(true);
  }

  return (
    <>
      <button
        type="button"
        aria-label="Open InnerCircle AI"
        className="fixed bottom-5 right-20 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-md shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 sm:bottom-6 sm:right-20"
        onClick={() => setOpen(true)}
      >
        <MessageSquare className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-20 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-[28px] border border-slate-200 bg-white/96 shadow-xl shadow-slate-900/12 backdrop-blur-xl sm:bottom-24 sm:right-6"
          >
            <div className="border-b border-slate-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,250,252,0.82))] px-5 py-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky/10 text-sky">
                    <Bot className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold tracking-[-0.01em] text-ink">InnerCircle AI</p>
                    <p className="text-sm text-slate-500">Ask questions without leaving the page</p>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Close chat"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors duration-300 hover:bg-slate-100 hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="max-h-[22rem] space-y-4 overflow-y-auto px-5 py-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "max-w-[92%] rounded-2xl px-4 py-3 text-sm leading-6",
                    message.role === "assistant"
                      ? "bg-slate-50 text-slate-600"
                      : "ml-auto bg-ink text-white"
                  )}
                >
                  {message.content}
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 px-5 py-4">
              <div className="mb-3 flex flex-wrap gap-2">
                {starterQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-500 transition-all duration-300 hover:border-slate-300 hover:bg-white hover:text-ink"
                    onClick={() => submitMessage(question)}
                  >
                    <Sparkles className="h-3 w-3 text-sky" />
                    <span>{question}</span>
                  </button>
                ))}
              </div>

              <form
                className="flex items-center gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  submitMessage(input);
                }}
              >
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about outreach, resumes, or matching"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink shadow-sm transition placeholder:text-slate-400 focus:border-slate-300 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!canSend}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-white transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
