"use client";
import { useState } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";

export function AskLiz() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function ask(event) {
    event.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");
    try {
      const r = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await r.json();
      setAnswer(data.answer);
    } catch {
      setAnswer(
        "I couldn’t reach the portfolio assistant just now. Try exploring the work, writing, or contact sections.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[var(--ink)] px-4 py-3 text-xs font-medium text-[var(--bg)] shadow-xl transition hover:-translate-y-1"
      >
        <Sparkles size={15} /> Ask Liz
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-end bg-black/20 p-4 sm:place-items-center"
          onMouseDown={() => setOpen(false)}
        >
          <section
            className="card w-full max-w-lg p-5 shadow-2xl"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <header className="mb-5 flex items-start justify-between">
              <div>
                <p className="eyebrow text-[var(--accent)]">
                  Portfolio intelligence
                </p>
                <h2 className="mt-1 font-display text-2xl font-bold">
                  Ask Liz&apos;s work
                </h2>
              </div>
              <button aria-label="Close ask Liz" onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </header>
            <p className="mb-4 text-sm leading-6 text-[var(--muted)]">
              Ask about frontend work, UX thinking, tools, or writing. Answers
              are grounded in this portfolio.
            </p>
            <form onSubmit={ask} className="flex gap-2">
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Which projects use React?"
                className="min-w-0 flex-1 rounded-xl border border-[var(--line)] bg-transparent px-3 text-sm outline-none focus:border-[var(--accent)]"
              />
              <button
                className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--accent)] text-white"
                aria-label="Ask question"
              >
                <Send size={16} />
              </button>
            </form>
            {(loading || answer) && (
              <div className="mt-4 rounded-xl bg-[var(--bg)] p-4 text-sm leading-6">
                {loading ? "Searching Liz’s portfolio…" : answer}
              </div>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              {["Show React projects", "How does Liz approach UX?"].map(
                (prompt) => (
                  <button
                    onClick={() => setQuestion(prompt)}
                    key={prompt}
                    className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs hover:border-[var(--accent)]"
                  >
                    {prompt}
                  </button>
                ),
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
