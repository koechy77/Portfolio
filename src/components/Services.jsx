import { services } from "../data/database";
import ServicesCards from "./ServicesCards";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="mx-4 py-12 md:h-auto">
  <div>

    <motion.h2
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="font-extrabold font-supermercado text-4xl md:text-5xl lg:text-6xl mb-5 px-4 text-white"
    >
      My Services
    </motion.h2>

    {/* Desktop */}
    <div className="hidden md:grid gap-7 md:grid-cols-2 text-2xl">
      {services.map((service, index) => (
        <ServicesCards key={index} service={service} />
      ))}
    </div>

    {/* Mobile */}
    <div className="md:hidden grid gap-7 text-4xl">
      {services.map((service, index) => (
        <div
          key={index}
          className="sticky"
          style={{
            top: `calc(10rem + ${index * 15}px)`,
          }}
        >
          <ServicesCards service={service} />
        </div>
      ))}
    </div>

  </div>
</section>
  );
}
