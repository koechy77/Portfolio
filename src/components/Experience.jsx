import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../data/database";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-4 py-12 font-poppins"
    >
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="font-extrabold font-supermercado text-4xl md:text-5xl lg:text-6xl mb-8 px-4 text-white"
      >
        Work Experiences
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
