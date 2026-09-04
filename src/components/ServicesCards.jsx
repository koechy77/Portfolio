import { motion } from "framer-motion";

export default function ServicesCards({ service }) {
  return (
    <motion.div className="rounded-lg border border-white/10 bg-gray-800/80 p-4 text-white shadow-md font-supermercado hover:scale-101 hover:shadow-orange-500 transition-transform"
    initial={{ opacity: 0, y: -20}}
    whileInView={{ opacity: 1, y: 0}}
    viewport={{ once: true, amount: 0.3}}
    transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h3 className="mb-2 text-center font-extrabold text-orange-400">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-300">
        {service.description}
      </p>
    </motion.div>
  );
}
