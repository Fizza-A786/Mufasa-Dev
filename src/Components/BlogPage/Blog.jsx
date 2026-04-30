
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

/* FILTERS */
const filters = [
  { id: "all", label: "All" },
  { id: "tutorials", label: "Tutorials" },
  { id: "freelancing", label: "Freelancing" },
  { id: "tech-news", label: "Tech News" },
  { id: "career-tips", label: "Career Tips" },
];

/* POSTS */
const posts = [
  {
    category: "tutorials",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp",
    title: "Getting Started with React in 2024",
    excerpt:
      "Learn the fundamentals of React and build your first modern web application.",
    author: "Ahmed Ali",
    initials: "AA",
    date: "Jan 15, 2024",
  },
  {
    category: "freelancing",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp",
    title: "How to Land Your First Freelance Client",
    excerpt: "Discover proven strategies to find and secure your first client.",
    author: "Sara Khan",
    initials: "SK",
    date: "Jan 22, 2024",
  },
  {
    category: "tech-news",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp",
    title: "Top 10 VS Code Extensions for Developers",
    excerpt:
      "Boost your productivity with these essential VS Code extensions.",
    author: "Omar Dev",
    initials: "OD",
    date: "Feb 3, 2024",
  },
  {
    category: "career-tips",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp",
    title: "Building Your Portfolio from Scratch",
    excerpt: "Create a stunning portfolio that attracts clients.",
    author: "Ahmed Ali",
    initials: "AA",
    date: "Feb 10, 2024",
  },
];

/* CARD */
function BlogCard({ post, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="rounded-xl border border-white/10 overflow-hidden
                 hover:border-[#FF6B00]/50 hover:-translate-y-2
                 transition-all duration-500 cursor-pointer group flex flex-col"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="text-[#FF6B00] text-xs uppercase font-semibold tracking-widest mb-3">
          {post.category.replace("-", " ")}
        </span>

        <h3
          className="text-white text-lg font-semibold uppercase leading-snug mb-3 line-clamp-2"
          style={{ fontFamily: "Barlow Condensed, sans-serif" }}
        >
          {post.title}
        </h3>

        <p className="text-[#999] text-xs leading-relaxed mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/10">
          <div className="w-8 h-8 rounded-full bg-[#FF6B00] flex items-center justify-center">
            <span className="text-white text-xs font-bold">{post.initials}</span>
          </div>

          <div>
            <p className="text-white text-sm font-medium">{post.author}</p>
            <p className="text-[#999] text-xs">{post.date}</p>
          </div>
        </div>

        <a
          href="#"
          className="text-[#FF6B00] text-sm font-semibold flex items-center gap-2 group-hover:gap-4 transition-all"
        >
          Read More <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

/* MAIN */
function Blog() {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const filteredPosts =
    activeFilter === "all"
      ? posts
      : posts.filter((post) => post.category === activeFilter);

  return (
    <div className="min-h-screen text-white pt-16">
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-12">

            {/* TITLE */}
            <h1
              data-aos="fade-up"
              className="text-4xl md:text-6xl font-bold"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Our <span className="text-[#FF6B00]">Blog</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-[#888] text-sm md:text-base max-w-2xl mx-auto mt-5 mb-8 leading-relaxed">
              Insights, tutorials, and updates from the Mufasa team.
            </p>

            {/* FILTERS */}
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all
                  ${
                    activeFilter === filter.id
                      ? "bg-[#FF6B00] text-white"
                      : "bg-[#111] text-[#999] hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={index} post={post} index={index} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

export default Blog;