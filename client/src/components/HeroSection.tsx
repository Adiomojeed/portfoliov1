import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/scrollUtils";
import Particles from "./ui/Particles";

const HeroSection = () => {
  const socialLinks = [
    {
      icon: "fab fa-github",
      url: "https://www.github.com/Adiomojeed",
      label: "GitHub",
    },
    {
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/Adiomojeed",
      label: "LinkedIn",
    },
    {
      icon: "fab fa-twitter",
      url: "https://www.twitter.com/@adio_mojeed",
      label: "Twitter",
    },
    {
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/codeleaf_",
      label: "Instagram",
    },
  ];
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      <Particles />
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
          className="md:max-w-2xl lg:pr-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-gray-400">Hi,</span> <br />
            <span className="text-white">
              <span className="text-gray-400">I'm</span> Mojeed
            </span>
            {/* <span className="gradient-text">Mojeed Adio</span> */}
          </motion.h1>
          <motion.h2
            className="text-lg md:text-2xl font-medium mb-6 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Sr. Frontend Engineer | FullStack Developer | Solutions Architect
          </motion.h2>
          <motion.p
            className="text-base md:text-lg mb-8 text-gray-400 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I develop top-quality web applications and deliver pixel-perfect,
            high-performance solutions. I also specialize in building engaging
            applications that meet business goals and exceeds user expectations.
            I put in 100% efforts into every project and I don't deliver
            anything short of excellence.
            {/* A Senior Software Engineer who build exceptional digital experiences with modern web technologies.  */}
            {/* Specialized in React, Next, Express, Node and related technologies to build responsive and efficient products, I am about crafting web applications that excel in both speed and design. */}
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
              View My Works
            </motion.button>
            <motion.button
              className="px-6 py-3 border border-primary rounded-md text-primary font-medium transition-all hover:bg-primary/10"
              onClick={() =>
                window.open("https://bit.ly/mojeed-adio-cv", "_blank")
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume <i className="fas fa-download"></i>
            </motion.button>
            <motion.div
              className="flex items-center space-x-6 mt8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={link.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`${link.icon} text-2xl`}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="hidden md:block lg:mr-20"
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
                  className="bg-white w-full h-full rounded-full"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/codeleaf/image/upload/v1745348425/pp.jpg"
                    alt="Professional developer portrait"
                    className="object-cover rounded-full w-[300px] h-[300px]"
                    loading="lazy"
                  />
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
