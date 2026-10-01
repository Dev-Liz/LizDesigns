import { NextResponse } from "next/server";
import { projects, tools, experiences, articles } from "@/lib/content";

const knowledge = [
  ...projects.map((item) => `${item.title}: ${item.type}. ${item.description}. Built with ${item.stack.join(", ")}.`),
  ...articles.map((item) => `${item.title}: ${item.tag}. ${item.summary}`),
  ...experiences.map(([year, company, role]) => `${company}, ${role}, ${year}.`),
  `Tools: ${tools.map(([name]) => name).join(", ")}.`
].join("\n");

export async function POST(request) {
  const { question = "" } = await request.json();
  if (!question.trim()) return NextResponse.json({ answer: "Ask a question about Liz’s work, experience or process." }, { status: 400 });

  if (!process.env.OPENAI_API_KEY) {
    const words = question.toLowerCase();
    const matches = projects.filter((project) => `${project.title} ${project.type} ${project.stack.join(" ")}`.toLowerCase().split(" ").some((word) => word.length > 3 && words.includes(word)));
    const answer = matches.length ? `A good place to start is ${matches.map((item) => item.title).join(" and ")}. ${matches[0].description}` : "Liz combines frontend engineering with UX design, with work spanning React interfaces, developer documentation, API experiences, and AI products.";
    return NextResponse.json({ answer, source: "local portfolio index" });
  }

  // Kept server-side so the key is never sent to the browser. Replace with a
  // Strapi-powered vector retrieval step as content grows.
  const response = await fetch("https://api.openai.com/v1/responses", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }, body: JSON.stringify({ model: "gpt-4.1-mini", input: `You are the portfolio assistant for Elizabeth (Liz) Bassey. Answer only from the following portfolio facts. Keep it concise, warm, and state when the answer is absent.\n\nFACTS:\n${knowledge}\n\nQUESTION: ${question}` }) });
  if (!response.ok) return NextResponse.json({ answer: "The portfolio assistant is temporarily unavailable. Please try again shortly." }, { status: 502 });
  const data = await response.json();
  return NextResponse.json({ answer: data.output_text || "I couldn’t find a grounded answer to that question." });
}
