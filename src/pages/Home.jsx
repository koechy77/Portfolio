import ContactButton from "../components/ContactButton";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import ScrollHint from "../components/ScrollHint";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="font-poppins">
        <div className="relative">
          <Hero />
          <ScrollHint />
        </div>
        <Projects />
        <Services />
        <TechStack />
        <Experience />
        <div className=" text-center">
          <ContactButton />
        </div>
      </main>
    </>
  );
}
