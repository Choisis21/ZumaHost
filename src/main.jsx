import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Domain from "./Pages/Domain";
import About from "./Pages/About";
import Hosting from "./Pages/Hosting"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#fbf9f6] overflow-hidden text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/domain" element={<Domain />} />
          <Route path="/about" element={<About />} />
          <Route path="/hosting" element={<Hosting />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);
