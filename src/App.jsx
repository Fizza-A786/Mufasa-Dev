import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import Courses from "./Pages/Course";
import Blog from "./Pages/Blog"; // ✅ added

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      <Navbar />

      <main className="flex-grow bg-[#0A0A0A]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;