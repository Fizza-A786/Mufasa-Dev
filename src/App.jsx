import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Services from './Pages/Services'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">  {/* ← add bg */}
      <Navbar />

      <main className="flex-grow bg-[#0A0A0A]">  {/* ← add bg */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
export default App