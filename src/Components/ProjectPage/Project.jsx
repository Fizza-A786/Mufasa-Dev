import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const PROJECTS = [
  {
    id: 1,
    category: "Web",
    title: "Donation Platform",
    subtitle: "Making a Difference",
    description: "Transparent fundraising platform for approved charities with real-time donor tracking and campaign management.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=60",
    tags: ["React", "Node.js", "MongoDB"],
    accent: "#F46F25",
    live: "#",
    code: "#",
    featured: true,
  },
  {
    id: 2,
    category: "Mobile",
    title: "Car Locator App",
    subtitle: "Smart Navigation",
    description: "GPS-powered car booking with automated scheduling and real-time location tracking for on-the-go management.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=60",
    tags: ["React Native", "Maps API"],
    accent: "#e55d1a",
    live: "#",
    code: "#",
    featured: false,
  },
  {
    id: 3,
    category: "Design",
    title: "Pet Wellness Blog",
    subtitle: "Healing Through Companionship",
    description: "A calming editorial experience about the emotional bond between humans and animals, designed with warmth.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=60",
    tags: ["Figma", "Branding", "UI/UX"],
    accent: "#c97c2a",
    live: "#",
    code: null,
    featured: false,
  },
  {
    id: 4,
    category: "Web",
    title: "SaaS Dashboard",
    subtitle: "Analytics at a Glance",
    description: "Real-time analytics dashboard with powerful filtering, CSV export, and multi-role user access control.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=60",
    tags: ["React", "TypeScript", "REST API"],
    accent: "#F46F25",
    live: "#",
    code: "#",
    featured: false,
  },
  {
    id: 5,
    category: "Web",
    title: "Real Estate Portal",
    subtitle: "Find Your Dream Home",
    description: "Modern property listing site with advanced filters, map integration, and virtual tour capabilities.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=60",
    tags: ["Next.js", "Tailwind", "Maps"],
    accent: "#e55d1a",
    live: "#",
    code: "#",
    featured: false,
  },
  {
    id: 6,
    category: "Design",
    title: "UI Component Kit",
    subtitle: "Design System at Scale",
    description: "A comprehensive design system with reusable tokens, components, and patterns built for product teams.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=60",
    tags: ["Figma", "Design Tokens"],
    accent: "#c97c2a",
    live: "#",
    code: null,
    featured: false,
  },
];

function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function FadeIn({ children, delay = 0, className = "" }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function BrowserBar({ slug }) {
  return (
    <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-3 py-2 bg-[#181818]/95 border-b border-white/5">
      <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
      <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
      <span className="w-2 h-2 rounded-full bg-[#28C840]" />
      <div className="ml-2 flex-1 h-4 rounded bg-[#232323] flex items-center px-2">
        <span className="text-[9px] text-[#444] truncate">mufasa.dev / {slug}</span>
      </div>
    </div>
  );
}

function ProjectCard({ project, delay = 0 }) {
  const slug = project.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <FadeIn delay={delay}>
      <div className="group relative rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/5 hover:border-[#F46F25]/30 transition-[border-color,box-shadow] duration-300 hover:shadow-[0_20px_60px_rgba(244,111,37,0.12)]">
        <div className="relative overflow-hidden" style={{ height: "210px" }}>
          <BrowserBar slug={slug} />

          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            width={600}
            height={210}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            style={{ paddingTop: "28px" }}
          />

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(to top, ${project.accent}cc 0%, transparent 70%)`,
              paddingTop: "28px",
            }}
          />

          <div className="absolute top-10 right-3 flex flex-col gap-2 translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-20">
            {project.live && (
              <a
                href={project.live}
                aria-label="Live preview"
                className="w-8 h-8 rounded-full bg-black/70 border border-white/10 flex items-center justify-center hover:bg-[#F46F25] transition-colors duration-200"
              >
                <ExternalLink size={13} className="text-white" />
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                aria-label="Source code"
                className="w-8 h-8 rounded-full bg-black/70 border border-white/10 flex items-center justify-center hover:bg-[#F46F25] transition-colors duration-200"
              >
                <GithubIcon size={13} />
              </a>
            )}
          </div>

          <div className="absolute bottom-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span
              className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
              style={{ background: project.accent }}
            >
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-semibold mb-1" style={{ color: project.accent }}>
                {project.category}
              </p>
              <h3 className="text-[15px] font-bold text-white leading-snug">{project.subtitle}</h3>
            </div>
            <ArrowRight
              size={15}
              className="flex-shrink-0 mt-1 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
              style={{ color: project.accent }}
            />
          </div>

          <p className="text-[#666] text-xs leading-relaxed mb-4 line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium uppercase tracking-wide px-2 py-0.5 rounded border text-[#777] border-[#1e1e1e] bg-[#151515]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out rounded-full"
          style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
        />
      </div>
    </FadeIn>
  );
}

function FeaturedCard({ project }) {
  const slug = project.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <FadeIn>
      <div className="group relative rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/5 hover:border-[#F46F25]/40 transition-[border-color,box-shadow] duration-300 hover:shadow-[0_30px_80px_rgba(244,111,37,0.15)]">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative overflow-hidden" style={{ minHeight: "300px" }}>
            <BrowserBar slug={slug} />

            <img
              src={project.image}
              alt={project.title}
              loading="eager"
              decoding="async"
              width={600}
              height={400}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              style={{ paddingTop: "28px" }}
            />

            <div
              className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-300"
              style={{ background: `linear-gradient(135deg, ${project.accent}88 0%, transparent 60%)` }}
            />

            <div className="absolute top-10 left-3 z-20">
              <span className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white bg-[#F46F25]">
                ★ Featured
              </span>
            </div>
          </div>

          <div className="p-8 flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-widest font-semibold mb-3" style={{ color: project.accent }}>
              {project.category}
            </p>

            <h3
              className="font-extrabold uppercase leading-tight mb-4 text-white"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(26px, 3.5vw, 40px)",
              }}
            >
              {project.subtitle}
            </h3>

            <p className="text-[#777] text-sm leading-relaxed mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-7">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded border text-[#888] border-[#1e1e1e] bg-[#141414]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.live}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold transition-[transform,box-shadow] duration-200 hover:scale-105"
                style={{
                  background: project.accent,
                  boxShadow: `0 8px 24px ${project.accent}44`,
                }}
              >
                Live Preview <ExternalLink size={14} />
              </a>
              {project.code && (
                <a
                  href={project.code}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[#999] text-sm font-semibold border border-[#222] hover:border-[#F46F25] hover:text-white transition-[border-color,color] duration-200"
                >
                  Source <GithubIcon size={14} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out"
          style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
        />
      </div>
    </FadeIn>
  );
}

export default function ProjectsSection() {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      className="relative bg-black overflow-hidden"
      style={{
        padding: "clamp(60px, 9vw, 110px) clamp(16px, 5vw, 32px)",
        fontFamily: "'Barlow', sans-serif",
        backgroundImage:
          "radial-gradient(ellipse 60% 40% at 25% 10%, rgba(244,111,37,0.05) 0%, transparent 70%), radial-gradient(ellipse 50% 35% at 75% 90%, rgba(244,111,37,0.04) 0%, transparent 70%)",
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10 py-10">
          

          <FadeIn delay={80}>
            <h2
              className="font-extrabold uppercase text-white leading-[1.05] tracking-tight mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(36px, 7vw, 72px)",
              }}
            >
              Featured{" "}
              <span className="relative inline-block" style={{ color: "#F46F25" }}>
                Projects
                <span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                  style={{ background: "linear-gradient(90deg, #F46F25 50%, transparent)" }}
                />
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={150}>
            <p
              className="text-[#666] max-w-md mx-auto leading-relaxed"
              style={{ fontSize: "clamp(13px, 1.4vw, 15px)" }}
            >
              Real-world projects built with modern stacks — from concept to deployment,
              pixel-perfect and production-ready.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#F46F25]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#F46F25]" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#F46F25]/50" />
            </div>
          </FadeIn>
        </div>

        <div className="mb-5">
          {featured && <FeaturedCard project={featured} />}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 80} />
          ))}
        </div>

        <FadeIn>
          <div className="flex justify-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-white font-semibold text-sm transition-[transform,box-shadow] duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #F46F25, #e55d1a)",
                boxShadow: "0 10px 30px rgba(244,111,37,0.35)",
              }}
            >
              View All Projects
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}