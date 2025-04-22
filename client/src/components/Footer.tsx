import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/scrollUtils";

const Footer = () => {
  return (
    <footer className="bg-dark pt-16 pb-8 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark-lighter to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#"
            onClick={() => scrollToSection("hero")}
            className="text-3xl font-bold"
          >
            <span className="text-white">&#x7B;</span>
            <span className="text-gray-400">code</span>
            <span className="gradient-text">Leaf</span>
            <span className="text-white">&#x7D;</span>
          </a>
          <p className="text-gray-400 mt-4">
            Building the web, one pixel at a time
          </p>
        </motion.div>

        <motion.div
          className="border-t border-dark-light pt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            &copy; {new Date().getFullYear()} Mojeed Adio. All rights reserved.
          </p>
          <p className="mt-2">
            Designed and built with ❤️ using React, Tailwind CSS, and Framer
            Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
