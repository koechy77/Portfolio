import ScrollHint from './ScrollHint';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
     const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 1000], [0, -1000]);

  return (
    <section className='min-h-screen text-white flex items-center justify-center whitespace-nowrap overflow-hidden font-scribble'>
              <motion.h1 style={{ x }} className='text-[16.5vw]
               font-black
                leading-none
                tracking-tight
                whitespace-nowrap
                ' >
                {"KINGKOECH".split("").map((letter, index) =>
                (
                  <span
                    key={index}
                    className='
                  transition-all
                   duration-300
                   hover:text-orange-400
                   active:text-orange-400
                    hover:scale-125
                    active:scale-125
                     inline-block
                     '>
                    {letter}
                  </span>
                ))}
              </motion.h1>
    
              <ScrollHint />
            </section>
    
            
    
  );
}
