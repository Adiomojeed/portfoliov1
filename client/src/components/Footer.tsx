import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/scrollUtils";

const Footer = () => {
  const socialLinks = [
    { icon: "fab fa-github", url: "#", label: "GitHub" },
    { icon: "fab fa-linkedin", url: "#", label: "LinkedIn" },
    { icon: "fab fa-twitter", url: "#", label: "Twitter" },
    { icon: "fab fa-medium", url: "#", label: "Medium" },
  ];

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
          <a href="#" onClick={() => scrollToSection("hero")} className="text-3xl font-bold">
            <span className="gradient-text">Dev</span>
            <span className="text-white">Portfolio</span>
          </a>
          <p className="text-gray-400 mt-4">Building the web, one pixel at a time</p>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label={link.label}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className={`${link.icon} text-2xl`}></i>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="border-t border-dark-light pt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <p className="mt-2">
            Designed and built with ❤️ using React, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
