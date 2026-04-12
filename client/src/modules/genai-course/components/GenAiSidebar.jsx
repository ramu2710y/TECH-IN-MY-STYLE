import { Link, useParams } from "react-router-dom";
import topics, { categories } from "../data/genaiTopics";

export default function Sidebar() {
  const { topicId } = useParams();

  const grouped = categories
    .map(cat => ({ ...cat, topics: topics.filter(t => t.category === cat.id) }))
    .filter(c => c.topics.length > 0);

  return (
    <aside className="w-56 flex-shrink-0 hidden lg:block">
      <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-hide">
        {grouped.map(cat => (
          <div key={cat.id} className="mb-6">
            <p className="text-xs tracking-widest uppercase mb-3 px-1"
              style={{ color: "rgba(196,160,100,0.35)" }}>
              {cat.label}
            </p>
            {cat.topics.map(topic => {
              const active = topicId === topic.id;
              return (
                <Link key={topic.id} to={`/genai-course/${topic.id}`}
                  className="flex items-center gap-2.5 py-2 px-1 text-xs font-light transition-all duration-200 group"
                  style={{ color: active ? "#c4a064" : "#4a3f35",
                    borderLeft: active ? "1px solid rgba(196,160,100,0.5)" : "1px solid transparent",
                    paddingLeft: active ? "0.75rem" : "0.25rem" }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = "#8a7a6a"; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = "#4a3f35"; }}
                >
                  {topic.title}
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </aside>
  );
}
