// Blog.jsx
// ✅ Same design
// ✅ Faster loading (optimized images + lazy load)

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// ─────────────────────────────────────────
// 📋 FILTER TABS DATA
// ─────────────────────────────────────────
const filters = [
  { id: "all",         label: "All"         },
  { id: "tutorials",   label: "Tutorials"   },
  { id: "freelancing", label: "Freelancing" },
  { id: "tech-news",   label: "Tech News"   },
  { id: "career-tips", label: "Career Tips" },
];

// ─────────────────────────────────────────
// 📋 BLOG POSTS DATA (OPTIMIZED IMAGES)
// ─────────────────────────────────────────
const posts = [
  {
    category: "tutorials",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp",
    title: "Getting Started with React in 2024",
    excerpt: "Learn the fundamentals of React and build your first modern web application.",
    author: "Ahmed Ali",
    initials: "AA",
    date: "Jan 15, 2024",
  },
  {
    category: "freelancing",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp",
    title: "How to Land Your First Freelance Client",
    excerpt: "Discover proven strategies to find and secure your first client.",
    author: "Sara Khan",
    initials: "SK",
    date: "Jan 22, 2024",
  },
  {
    category: "tech-news",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp",
    title: "Top 10 VS Code Extensions for Developers",
    excerpt: "Boost your productivity with these essential VS Code extensions.",
    author: "Omar Dev",
    initials: "OD",
    date: "Feb 3, 2024",
  },
  {
    category: "career-tips",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp",
    title: "Building Your Portfolio from Scratch",
    excerpt: "Create a stunning portfolio that attracts clients.",
    author: "Ahmed Ali",
    initials: "AA",
    date: "Feb 10, 2024",
  },
  {
    category: "tutorials",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp",
    title: "Node.js vs Python: Which to Learn First?",
    excerpt: "Compare these technologies and choose wisely.",
    author: "Mufasa Team",
    initials: "MT",
    date: "Feb 18, 2024",
  },
  {
    category: "freelancing",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp",
    title: "Freelancing Rates: How to Price Your Work",
    excerpt: "Learn pricing strategies and negotiation skills.",
    author: "Sara Khan",
    initials: "SK",
    date: "Mar 1, 2024",
  },
];

// ─────────────────────────────────────────
// 🔲 Blog Card
// ─────────────────────────────────────────
function BlogCard({ post, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-[#111111] rounded-xl border border-white/10 overflow-hidden
                 transform-gpu will-change-transform
                 hover:border-[#FF6B00]/50 hover:-translate-y-2
                 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                 cursor-pointer group flex flex-col"
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover 
                     blur-[2px] scale-105
                     transition-all duration-500
                     group-hover:scale-110 group-hover:blur-0"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <span className="text-[#FF6B00] text-xs uppercase font-bold tracking-widest mb-3">
          {post.category.replace("-", " ")}
        </span>

        <h3
          className="text-white text-xl font-bold uppercase leading-snug mb-3 line-clamp-2"
          style={{ fontFamily: "Barlow Condensed, sans-serif" }}
        >
          {post.title}
        </h3>

        <p className="text-[#999] text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
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
          className="text-[#FF6B00] text-sm font-bold flex items-center gap-2
                     group-hover:gap-4 transition-all duration-300"
        >
          Read More <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// 📄 Main Page
// ─────────────────────────────────────────
function Blog() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out",
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [activeFilter]);

  const filteredPosts =
    activeFilter === "all"
      ? posts
      : posts.filter((post) => post.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white pt-24">
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 data-aos="fade-up" className="text-6xl font-bold uppercase mb-4"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}>
              Our <span className="text-[#FF6B00]">Blog</span>
            </h1>

            <div data-aos="fade-up" data-aos-delay="100"
              className="w-24 h-1 bg-[#FF6B00] mx-auto mb-6" />

            <p data-aos="fade-up" data-aos-delay="200"
              className="text-[#999] text-lg max-w-2xl mx-auto mb-8">
              Insights, tutorials, and updates from the Mufasa team.
            </p>

            {/* Filters */}
            <div data-aos="fade-up" data-aos-delay="300"
              className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => {
                    setActiveFilter(filter.id);
                    setCurrentPage(1);
                  }}
                  className={`px-6 py-2 rounded-full font-bold transition-all duration-200
                  ${activeFilter === filter.id
                      ? "bg-[#FF6B00] text-white"
                      : "bg-[#111] text-[#999] hover:bg-[#1A1A1A] hover:text-white"
                    }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPosts.map((post, index) => (
              <BlogCard key={index} post={post} index={index} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-bold
                ${currentPage === page
                    ? "bg-[#FF6B00] text-white"
                    : "bg-[#111] text-[#999]"
                  }`}
              >
                {page}
              </button>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

export default Blog;