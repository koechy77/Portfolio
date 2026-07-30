import Home from "./pages/Home";
import Footer from "./components/Footer";
import database from "./data/database";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="bg-gray-950">
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer contact={database.contact} />
    </div>
  );
}
