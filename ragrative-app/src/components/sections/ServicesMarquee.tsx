"use client";

const services = [
  "AI Development",
  "RAG Systems",
  "Agentic Workflows",
  "Full-Stack Engineering",
  "LLM Integration",
  "Data Engineering",
  "Cloud Architecture",
  "UI/UX Design",
];

export function ServicesMarquee() {
  return (
    <section className="py-16 bg-[#1a1a1a] overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee-slow">
          {[...services, ...services].map((service, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-8 flex items-center gap-6"
            >
              <span className="text-4xl md:text-6xl font-bold text-white/20 hover:text-white transition-colors cursor-default whitespace-nowrap">
                {service}
              </span>
              <span className="text-[#FF5C00] text-2xl">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
