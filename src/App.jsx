import Home from "./pages/Home";
import Footer from "./components/Footer";
import database from "./data/database";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Background from "./components/Background";

export default function App() {
  return (
    <div className="relative overflow-visible min-h-screen">
      <ScrollToTop />
      <Background />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer contact={database.contact} />
    </div>
  );
}
