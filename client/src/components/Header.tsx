import { useState } from "react";
import { scrollToSection } from "@/lib/scrollUtils";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-dark/90 backdrop-blur-md z-50 border-b border-dark-light">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="gradient-text">Dev</span>
          <span className="text-white">Portfolio</span>
        </motion.a>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ul className="flex space-x-8">
            {[
              { name: "About", id: "about" },
              { name: "Experience", id: "experience" },
              { name: "Skills", id: "skills" },
              { name: "Projects", id: "projects" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          id="mobile-menu-button"
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-bars text-xl"></i>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavClick={handleNavClick}
      />
    </header>
  );
};

export default Header;
