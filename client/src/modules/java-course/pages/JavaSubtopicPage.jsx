import { useState, useEffect, useRef } from "react";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CodeBracketIcon,
  BookOpenIcon,
  LightBulbIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
  SparklesIcon,
  ChevronRightIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { topicsData } from "../data/topicsData";
import toast from "react-hot-toast";

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_API_URL =
  import.meta.env.VITE_GROQ_API_URL ||
  "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL =
  import.meta.env.VITE_GROQ_MODEL || "llama-3.3-70b-versatile";

const topicGradients = [
  "from-java-blue to-java-lightblue",
  "from-java-orange to-amber-400",
  "from-purple-600 to-java-blue",
  "from-green-500 to-java-blue",
  "from-java-lightblue to-cyan-500",
  "from-red-500 to-java-orange",
  "from-java-orange to-amber-400",
  "from-java-blue to-indigo-600",
];

/* ── Inline code-block with copy button ─────────────────────── */
function CodeBlock({ code, language = "java" }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success("Code copied!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-java-border-dark my-5 shadow-lg">
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="text-xs text-gray-400 font-mono ml-1">
            Main.java
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 font-mono px-2 py-0.5 bg-java-blue/10 rounded">
            {language}
          </span>
          <button
            onClick={copy}
            className="text-gray-500 hover:text-java-orange transition-colors p-1 rounded"
            title="Copy code"
          >
            {copied ? (
              <ClipboardDocumentCheckIcon className="w-4 h-4 text-green-400" />
            ) : (
              <ClipboardDocumentIcon className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
      <pre className="bg-[#0d1117] text-green-300 p-5 text-sm overflow-x-auto font-mono leading-relaxed whitespace-pre">
        {code}
      </pre>
    </div>
  );
}

/* ── Parse the raw AI markdown-like text into structured blocks ─ */
function parseContent(text) {
  const blocks = [];
  const lines = text.split("\n");
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Fenced code block ```...```
    if (line.trim().startsWith("```")) {
      const lang = line.trim().slice(3).trim() || "java";
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      blocks.push({ type: "code", lang, content: codeLines.join("\n") });
      i++;
      continue;
    }

    // H2 heading  ## ...
    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", content: line.slice(3).trim() });
      i++;
      continue;
    }

    // H3 heading  ### ...
    if (line.startsWith("### ")) {
      blocks.push({ type: "h3", content: line.slice(4).trim() });
      i++;
      continue;
    }

    // Bullet  - ... or * ...
    if (/^[-*]\s/.test(line.trim())) {
      const items = [];
      while (i < lines.length && /^[-*]\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().slice(2).trim());
        i++;
      }
      blocks.push({ type: "bullets", items });
      continue;
    }

    // Numbered list  1. ...
    if (/^\d+\.\s/.test(line.trim())) {
      const items = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, "").trim());
        i++;
      }
      blocks.push({ type: "numbered", items });
      continue;
    }

    // Bold header like **Key Points:**
    if (line.trim().startsWith("**") && line.trim().endsWith("**")) {
      blocks.push({
        type: "bold-heading",
        content: line.trim().replace(/\*\*/g, ""),
      });
      i++;
      continue;
    }

    // Non-empty paragraph
    if (line.trim()) {
      // Collect consecutive paragraph lines
      const paraLines = [];
      while (
        i < lines.length &&
        lines[i].trim() &&
        !lines[i].startsWith("#") &&
        !lines[i].startsWith("```") &&
        !/^[-*]\s/.test(lines[i].trim()) &&
        !/^\d+\.\s/.test(lines[i].trim())
      ) {
        paraLines.push(lines[i].trim());
        i++;
      }
      blocks.push({ type: "paragraph", content: paraLines.join(" ") });
      continue;
    }

    i++;
  }

  return blocks;
}

/* ── Render bold / inline-code inside a string ─────────────── */
function InlineText({ text }) {
  if (!text) return null;

  // Split on **bold** and `code`
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return (
    <>
      {parts.map((part, idx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={idx} className="font-semibold text-gray-900 dark:text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={idx}
              className="px-1.5 py-0.5 rounded-md bg-java-blue/10 dark:bg-java-orange/10 text-java-blue dark:text-java-orange font-mono text-[0.85em]"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        return <span key={idx}>{part}</span>;
      })}
    </>
  );
}

/* ── Map section headings to icons + accent colours ────────── */
function sectionMeta(heading) {
  const h = heading.toLowerCase();
  if (h.includes("introduc") || h.includes("what is") || h.includes("overview"))
    return { icon: <BookOpenIcon className="w-5 h-5" />, color: "text-java-blue", bg: "bg-java-blue/10" };
  if (h.includes("key concept") || h.includes("concept") || h.includes("definition"))
    return { icon: <LightBulbIcon className="w-5 h-5" />, color: "text-java-orange", bg: "bg-java-orange/10" };
  if (h.includes("code") || h.includes("example") || h.includes("syntax") || h.includes("program"))
    return { icon: <CodeBracketIcon className="w-5 h-5" />, color: "text-purple-500", bg: "bg-purple-500/10" };
  if (h.includes("mistake") || h.includes("common") || h.includes("pitfall") || h.includes("avoid"))
    return { icon: <ExclamationTriangleIcon className="w-5 h-5" />, color: "text-red-500", bg: "bg-red-500/10" };
  if (h.includes("practice") || h.includes("exercise") || h.includes("challenge") || h.includes("try"))
    return { icon: <AcademicCapIcon className="w-5 h-5" />, color: "text-green-600", bg: "bg-green-600/10" };
  if (h.includes("summary") || h.includes("conclusion") || h.includes("recap"))
    return { icon: <CheckCircleIcon className="w-5 h-5" />, color: "text-java-lightblue", bg: "bg-java-lightblue/10" };
  return { icon: <BookOpenIcon className="w-5 h-5" />, color: "text-java-blue", bg: "bg-java-blue/10" };
}

/* ── Render parsed blocks ────────────────────────────────────── */
function ContentBlocks({ blocks }) {
  return (
    <div className="space-y-1">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "h2": {
            const meta = sectionMeta(block.content);
            return (
              <div key={idx} className="mt-10 mb-4 first:mt-0">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl ${meta.bg} ${meta.color} flex items-center justify-center flex-shrink-0`}>
                    {meta.icon}
                  </div>
                  <h2 className="text-xl font-bold font-poppins text-gray-900 dark:text-white">
                    {block.content}
                  </h2>
                </div>
                <div className={`mt-3 h-0.5 bg-gradient-to-r ${meta.color === "text-java-blue" ? "from-java-blue/40" : meta.color === "text-java-orange" ? "from-java-orange/40" : "from-purple-500/40"} to-transparent rounded-full`} />
              </div>
            );
          }

          case "h3":
            return (
              <h3
                key={idx}
                className="mt-6 mb-3 text-base font-bold font-poppins text-gray-800 dark:text-gray-100"
              >
                {block.content}
              </h3>
            );

          case "bold-heading":
            return (
              <p key={idx} className="mt-5 mb-2 font-bold text-gray-800 dark:text-gray-100 font-poppins text-sm uppercase tracking-wide">
                {block.content}
              </p>
            );

          case "paragraph":
            return (
              <p
                key={idx}
                className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base mb-4"
              >
                <InlineText text={block.content} />
              </p>
            );

          case "code":
            return <CodeBlock key={idx} code={block.content} language={block.lang} />;

          case "bullets":
            return (
              <ul key={idx} className="space-y-2 mb-5 ml-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-java-orange flex-shrink-0" />
                    <span className="leading-relaxed"><InlineText text={item} /></span>
                  </li>
                ))}
              </ul>
            );

          case "numbered":
            return (
              <ol key={idx} className="space-y-2 mb-5 ml-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-java-blue/10 text-java-blue dark:bg-java-orange/10 dark:text-java-orange font-bold text-xs flex items-center justify-center flex-shrink-0 font-poppins">
                      {j + 1}
                    </span>
                    <span className="leading-relaxed"><InlineText text={item} /></span>
                  </li>
                ))}
              </ol>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

/* ── Skeleton loader ─────────────────────────────────────────── */
function SkeletonLoader() {
  return (
    <div className="space-y-5 animate-pulse">
      {[...Array(4)].map((_, i) => (
        <div key={i}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gray-200 dark:bg-gray-700" />
            <div className="h-6 w-48 rounded-lg bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="space-y-2">
            <div className="h-4 rounded bg-gray-200 dark:bg-gray-700 w-full" />
            <div className="h-4 rounded bg-gray-200 dark:bg-gray-700 w-5/6" />
            <div className="h-4 rounded bg-gray-200 dark:bg-gray-700 w-4/6" />
          </div>
          {i % 2 === 0 && (
            <div className="mt-4 h-36 rounded-2xl bg-gray-200 dark:bg-gray-700" />
          )}
        </div>
      ))}
    </div>
  );
}

/* ══ SubtopicPage ════════════════════════════════════════════════ */
export default function SubtopicPage() {
  const { topicId, subtopicSlug } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  // Find topic + subtopic from URL params (state is optional fast-path)
  const topic = topicsData.find((t) => t.id === topicId);
  const subtopic =
    state?.subtopic ??
    topic?.subtopics.find((s) => s.slug === subtopicSlug);

  const colorIdx =
    topicsData.findIndex((t) => t.id === topicId) % topicGradients.length;

  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const contentRef = useRef(null);

  /* ── Determine prev / next subtopics ── */
  const allSubtopics = topic?.subtopics ?? [];
  const currentIdx = allSubtopics.findIndex((s) => s.slug === subtopicSlug);
  const prevSub = currentIdx > 0 ? allSubtopics[currentIdx - 1] : null;
  const nextSub =
    currentIdx < allSubtopics.length - 1
      ? allSubtopics[currentIdx + 1]
      : null;

  /* ── Fetch lesson from Groq ── */
  useEffect(() => {
    if (!subtopic || !topic) return;

    setContent("");
    setError("");
    setLoading(true);

    const generate = async () => {
      if (!GROQ_API_KEY) {
        setError("VITE_GROQ_API_KEY is not set. Add it to your .env file.");
        setLoading(false);
        return;
      }

      const systemPrompt = `You are an expert Java programming teacher writing clear, structured tutorials for beginners to intermediate learners.
Format your response using markdown with these exact sections:
## Introduction
## Key Concepts
## Code Example
(always include a working Java code block with triple backtick java fences)
## Explanation
## Common Mistakes
## Practice Exercise
## Summary

Use **bold** for important terms and \`backticks\` for inline code. Keep code examples clean, well-commented, and runnable. Be friendly, clear, and thorough.`;

      const userPrompt = `Write a comprehensive Java tutorial for the subtopic: "${subtopic.title}"
Parent topic: "${topic.title}"
Brief description: "${subtopic.desc}"

Make sure the code example is complete, correct Java code that can be compiled and run. Include helpful comments in the code.`;

      try {
        const res = await fetch(GROQ_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: GROQ_MODEL,
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: userPrompt },
            ],
            temperature: 0.4,
            max_tokens: 3000,
          }),
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(
            errData.error?.message || `API Error: ${res.status}`
          );
        }

        const data = await res.json();
        const text = data.choices?.[0]?.message?.content?.trim() ?? "";
        setContent(text);
        // Scroll content area into view smoothly
        setTimeout(() => {
          contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      } catch (err) {
        setError(err.message || "Failed to load lesson content.");
        toast.error("Failed to load lesson. Check your API key.");
      } finally {
        setLoading(false);
      }
    };

    generate();
  }, [topicId, subtopicSlug]);

  /* ── Not found ── */
  if (!topic || !subtopic) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-java-darker gap-5 px-4">
        <div className="text-7xl">😕</div>
        <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white">
          Subtopic Not Found
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center max-w-sm">
          The subtopic you're looking for doesn't exist or the URL is incorrect.
        </p>
        <Link to="/java-course/topics" className="btn-primary">
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Topics
        </Link>
      </div>
    );
  }

  const parsed = content ? parseContent(content) : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-java-darker">
      {/* ── Hero header ─────────────────────────────────────────── */}
      <section className="relative py-16 bg-gradient-to-br from-java-dark via-[#0a1628] to-java-darker overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#0074BD 1px,transparent 1px),linear-gradient(90deg,#0074BD 1px,transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-java-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-java-orange/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
            <Link to="/java-course" className="hover:text-java-orange transition-colors">Home</Link>
            <ChevronRightIcon className="w-4 h-4 flex-shrink-0" />
            <Link to="/java-course/topics" className="hover:text-java-orange transition-colors">Topics</Link>
            <ChevronRightIcon className="w-4 h-4 flex-shrink-0" />
            <button
              onClick={() => navigate("/java-course/topics")}
              className="hover:text-java-orange transition-colors text-left"
            >
              {topic.title}
            </button>
            <ChevronRightIcon className="w-4 h-4 flex-shrink-0" />
            <span className="text-java-orange truncate">{subtopic.title}</span>
          </nav>

          {/* Topic badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <div
              className={`w-8 h-8 rounded-lg bg-gradient-to-br ${topicGradients[colorIdx]} flex items-center justify-center text-white font-bold text-sm font-poppins shadow-md`}
            >
              {topic.number}
            </div>
            <span className="text-gray-300 text-sm font-medium">{topic.title}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold font-poppins text-white mb-4 leading-tight">
            {subtopic.title}
          </h1>
          <p className="text-gray-300 text-base max-w-2xl leading-relaxed mb-6">
            {subtopic.desc}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <SparklesIcon className="w-3.5 h-3.5 text-java-orange" />
              AI-generated · Groq
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <BookOpenIcon className="w-3.5 h-3.5 text-java-blue" />
              {allSubtopics.length > 0 &&
                `${currentIdx + 1} of ${allSubtopics.length}`}
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ─────────────────────────────────────────────── */}
      <section className="py-10" ref={contentRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_260px] gap-8 items-start">

            {/* Main lesson card */}
            <div className="bg-white dark:bg-java-card-dark rounded-3xl border border-gray-100 dark:border-java-border-dark shadow-sm p-6 sm:p-8 min-h-[400px]">
              {loading && <SkeletonLoader />}

              {error && !loading && (
                <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
                    <ExclamationTriangleIcon className="w-8 h-8 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-gray-900 dark:text-white text-lg mb-2">
                      Failed to Load Lesson
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm">
                      {error}
                    </p>
                  </div>
                  <button
                    onClick={() => window.location.reload()}
                    className="btn-primary"
                  >
                    Try Again
                  </button>
                </div>
              )}

              {!loading && !error && content && (
                <ContentBlocks blocks={parsed} />
              )}

              {!loading && !error && !content && (
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-java-blue/10 flex items-center justify-center">
                    <BookOpenIcon className="w-8 h-8 text-java-blue/50" />
                  </div>
                  <p className="text-gray-400 text-sm">No content available.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5 lg:sticky lg:top-24">
              {/* Subtopics list */}
              <div className="bg-white dark:bg-java-card-dark rounded-2xl border border-gray-100 dark:border-java-border-dark shadow-sm overflow-hidden">
                <div
                  className={`px-4 py-3 bg-gradient-to-r ${topicGradients[colorIdx]}`}
                >
                  <h3 className="font-poppins font-semibold text-white text-sm">
                    {topic.title}
                  </h3>
                  <p className="text-white/70 text-xs mt-0.5">
                    {allSubtopics.length} subtopics
                  </p>
                </div>
                <div className="p-2 max-h-72 overflow-y-auto scrollbar-thin">
                  {allSubtopics.map((s, j) => {
                    const isActive = s.slug === subtopicSlug;
                    return (
                      <Link
                        key={s.slug}
                        to={`/topic/${topicId}/${s.slug}`}
                        state={{ topicTitle: topic.title, subtopic: s, colorIdx }}
                        className={`
                          flex items-center gap-2.5 px-3 py-2.5 rounded-xl mb-0.5
                          text-sm transition-all duration-150
                          ${
                            isActive
                              ? "bg-java-blue/10 dark:bg-java-orange/10 text-java-blue dark:text-java-orange font-semibold"
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-java-darker hover:text-java-blue dark:hover:text-java-orange"
                          }
                        `}
                      >
                        <span
                          className={`
                            w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center flex-shrink-0
                            ${
                              isActive
                                ? `bg-gradient-to-br ${topicGradients[colorIdx]} text-white shadow-sm`
                                : "bg-gray-100 dark:bg-java-border-dark text-gray-500 dark:text-gray-400"
                            }
                          `}
                        >
                          {j + 1}
                        </span>
                        <span className="leading-tight font-poppins text-xs">{s.title}</span>
                        {isActive && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-java-orange flex-shrink-0" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Try in Compiler CTA */}
              <div className="bg-gradient-to-br from-java-blue to-java-lightblue rounded-2xl p-5 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <CodeBracketIcon className="w-5 h-5" />
                  <h4 className="font-poppins font-semibold text-sm">Try it Live</h4>
                </div>
                <p className="text-white/75 text-xs mb-4 leading-relaxed">
                  Test the code examples from this lesson in our AI-powered Java compiler.
                </p>
                <Link
                  to="/java-course/compiler"
                  className="block text-center bg-white text-java-blue font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-java-orange hover:text-white transition-all duration-200 font-poppins"
                >
                  Open Compiler
                </Link>
              </div>
            </div>
          </div>

          {/* ── Prev / Next navigation ── */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevSub ? (
              <Link
                to={`/topic/${topicId}/${prevSub.slug}`}
                state={{ topicTitle: topic.title, subtopic: prevSub, colorIdx }}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-200 dark:border-java-border-dark bg-white dark:bg-java-card-dark hover:border-java-blue/40 dark:hover:border-java-orange/40 hover:shadow-md transition-all duration-200"
              >
                <ArrowLeftIcon className="w-5 h-5 text-gray-400 group-hover:text-java-blue dark:group-hover:text-java-orange transition-colors flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 font-medium mb-0.5">Previous</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-java-blue dark:group-hover:text-java-orange transition-colors truncate font-poppins">
                    {prevSub.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextSub ? (
              <Link
                to={`/topic/${topicId}/${nextSub.slug}`}
                state={{ topicTitle: topic.title, subtopic: nextSub, colorIdx }}
                className="group flex items-center justify-end gap-4 p-5 rounded-2xl border border-gray-200 dark:border-java-border-dark bg-white dark:bg-java-card-dark hover:border-java-blue/40 dark:hover:border-java-orange/40 hover:shadow-md transition-all duration-200 text-right"
              >
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 font-medium mb-0.5">Next</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-java-blue dark:group-hover:text-java-orange transition-colors truncate font-poppins">
                    {nextSub.title}
                  </p>
                </div>
                <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-java-blue dark:group-hover:text-java-orange transition-colors flex-shrink-0" />
              </Link>
            ) : (
              <Link
                to="/java-course/topics"
                className="group flex items-center justify-end gap-4 p-5 rounded-2xl border border-dashed border-gray-200 dark:border-java-border-dark bg-white dark:bg-java-card-dark hover:border-java-orange/40 hover:shadow-md transition-all duration-200 text-right"
              >
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 font-medium mb-0.5">Finished!</p>
                  <p className="text-sm font-semibold text-java-orange truncate font-poppins">
                    Back to All Topics
                  </p>
                </div>
                <ArrowRightIcon className="w-5 h-5 text-java-orange flex-shrink-0" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
