import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Hosting from "./Pages/Hosting"
import DomainRegistration from './Pages/DomainRegistration';
import Webdesign from './Pages/Webdesign';
import Error404 from "./Pages/Error404";
import Blogs from './Components/Blogs';
import BlogPost from './Components/BlogPost';

function ScrollToTop(){
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="min-h-screen bg-[#fbf9f6] overflow-hidden text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/web-design" element={<Webdesign />} />
          <Route path="/domain-registration" element={<DomainRegistration />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
          <Route path="*" element={<Error404 />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);

