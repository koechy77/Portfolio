import { motion } from "framer-motion";

export default function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-xl p-px"
    >
      {/* Continuous orange tracking light */}
      <motion.div
        className="absolute -inset-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_320deg,#fb923c_350deg,transparent_360deg)]"
        initial={{ rotate: index * 180 }}
        animate={{ rotate: index * 180 + 360 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Card */}
      <div className="relative z-10 bg-gray-800 rounded-xl p-6 font-poppins">
        {/* Role */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center shrink-0">
            <span className="text-xl">💻</span>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-orange-500">
              {experience.role}
            </h3>

            <p className="text-gray-400">{experience.company}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-200 leading-relaxed">
          {experience.description}
        </p>

        {/* Tech stack */}
        <div className="flex gap-3 mt-6">
          {experience.tech.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{
                opacity: 0,
                scale: 0.6,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.15,
                y: -4,
              }}
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center cursor-pointer"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-6 h-6 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
