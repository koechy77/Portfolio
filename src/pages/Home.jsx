import ContactButton from "../components/ContactButton";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="font-poppins">
        <Hero />
        <Projects />
        <Services />
        <div className=" text-center">
          <ContactButton />
        </div>
      </main>
    </>
  );
}
