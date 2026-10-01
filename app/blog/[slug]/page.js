import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { articles } from "@/lib/content";
import { MarkdownContent } from "@/components/markdown-content";

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }) { const article = articles.find((item) => item.slug === params.slug); return { title: article ? `${article.title} — Liz Bassey` : "Article — Liz Bassey", description: article?.summary }; }

export default function ArticlePage({ params }) {
  const article = articles.find((item) => item.slug === params.slug);
  if (!article) notFound();
  const nextArticle = articles[(articles.findIndex((item) => item.slug === article.slug) + 1) % articles.length];
  return <main className="mx-auto min-h-screen max-w-4xl border-x border-[var(--line)] px-5 py-7 sm:px-10"><header className="flex items-center justify-between"><a href="/" className="font-display text-lg font-extrabold tracking-[-.08em]">LIZ<span className="text-[var(--accent)]">.</span></a><a href="/blog" className="inline-flex items-center gap-2 text-xs link-underline"><ArrowLeft size={13}/>All writing</a></header><article className="py-20 sm:py-28"><div className="mb-7 flex flex-wrap gap-x-3 gap-y-1 text-[10px] uppercase tracking-[.12em] text-[var(--muted)]"><span className="text-[var(--accent)]">{article.tag}</span><span>·</span><span>{article.date}</span><span>·</span><span>{article.readTime}</span></div><h1 className="max-w-3xl font-display text-5xl font-extrabold leading-[.92] tracking-[-.08em] sm:text-7xl">{article.title}</h1><p className="mt-8 max-w-xl border-l-2 border-[var(--accent)] pl-5 text-lg leading-8 text-[var(--muted)]">{article.summary}</p><div className="mt-12 aspect-[16/8] overflow-hidden rounded-2xl bg-neutral-200"><img src={article.image} alt="" className="h-full w-full object-cover"/></div><MarkdownContent>{Array.isArray(article.body) ? article.body.join("\n\n") : article.body}</MarkdownContent></article><footer className="border-t border-[var(--line)] py-8"><p className="eyebrow mb-4 text-[var(--muted)]">Continue reading</p><a href={`/blog/${nextArticle.slug}`} className="group flex items-end justify-between gap-5"><h2 className="font-display text-3xl font-bold leading-none tracking-[-.065em]">{nextArticle.title}</h2><ArrowUpRight className="shrink-0 transition group-hover:-translate-y-1 group-hover:translate-x-1" size={22}/></a></footer></main>;
}
