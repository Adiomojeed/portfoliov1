import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/scrollUtils";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-lighter opacity-50"></div>
      <div className="absolute w-full h-full">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary-color/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center md:text-left md:flex md:items-center md:justify-between">
        <motion.div
          className="md:max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-white">Hi, I'm</span>{" "}
            <span className="gradient-text">John Doe</span>
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl mb-6 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Frontend Developer & UI Engineer
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-gray-400 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I build exceptional digital experiences with modern web technologies.
            Specializing in React, Next.js, and responsive design solutions.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.button
              className="px-6 py-3 gradient-bg rounded-md text-white font-medium transition-all hover:shadow-lg hover:shadow-primary/20"
              onClick={() => scrollToSection("projects")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              className="px-6 py-3 border border-primary rounded-md text-primary font-medium transition-all hover:bg-primary/10"
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="relative w-80 h-80">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary to-secondary-color opacity-20 rounded-full blur-md"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            ></motion.div>
            <div className="relative w-full h-full rounded-full border-2 border-primary/30 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-2 rounded-full bg-dark-lighter flex items-center justify-center">
                <motion.div
                  className="text-6xl text-primary"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <i className="fas fa-code"></i>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
