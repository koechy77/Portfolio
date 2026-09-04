import ScrollHint from "./ScrollHint";
import {
  easeIn,
  easeOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Tag from "./Tag";

export default function Hero() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 1000], [0, -1000]);

  return (
    <section className="min-h-screen text-white flex items-center justify-center whitespace-nowrap overflow-hidden font-scribble relative">
      <motion.p
        className="absolute top-30 left-4 text-2xl md:text-5xl font-supermercado"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        Koech, Your Full-Stack Design &{" "}
      </motion.p>
      <motion.h1
        style={{ x }}
        className="text-[16.5vw]
               font-black
                leading-none
                tracking-tight
                whitespace-nowrap
                "
      >
        {"KINGKOECH".split("").map((letter, index) => (
          <span
            key={index}
            className="
                  transition-all
                   duration-300
                   hover:text-orange-400
                   active:text-orange-400
                    hover:scale-125
                    active:scale-125
                     inline-block
                     "
          >
            {letter}
          </span>
        ))}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.4, x: -1000 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="flex flex-col absolute bottom-35 md:bottom-20 right-15 md:right-50 gap-3 font-supermercado"
      >
        <motion.p className="text-2xl md:text-6xl">Development</motion.p>
        <span className="text-6xl">
          <Tag />
        </span>
      </motion.div>

      <ScrollHint />
    </section>
  );
}
