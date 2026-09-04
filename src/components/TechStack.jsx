import { motion } from "framer-motion";
import { techStack } from "../data/database.js";

export default function TechStack() {
  return (
    <section className="overflow-hidden py-12">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="font-extrabold font-supermercado text-4xl md:text-5xl lg:text-6xl mb-5 px-4 text-white"
      >
        Tech Stack
      </motion.h2>

      <div className="overflow-hidden">
        <motion.div
          className="flex w-max gap-6"
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...techStack, ...techStack].map(({ name, logo }, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center
                     w-24 h-24 rounded-full border border-orange-500/40
                     shrink-0"
            >
              <img src={logo} alt={name} className="w-10 h-10 object-contain" />

              <span className="text-white text-sm mt-2">{name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
