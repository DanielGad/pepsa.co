// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import AboutUs from './pages/Company/AboutUs'
import Team from './pages/Company/Team'
import Career from './pages/Company/Career'
import Store from './pages/Products/Store'
import Plug from './pages/Products/Plug'
import Dispatch from './pages/Products/Dispatch'
import Blogs from './pages/Resources/Blogs'
import HowItWorks from './pages/Resources/HowItWorks'
import GetStarted from './pages/GetStarted'
import Contact from './pages/Contact'
import { useEffect, useState } from 'react'
import MobileHome from './pages/Home/MobileHome'


const App = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={isMobile ? <MobileHome /> : <Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/career" element={<Career />} />
        <Route path="/store" element={<Store />} />
        <Route path="/plug" element={<Plug />} />
        <Route path="/dispatch" element={<Dispatch />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-started" element={<GetStarted />} />

        {/* Catch-all for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
