import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (id: string) => void;
}

const MobileMenu = ({ isOpen, onClose, onNavClick }: MobileMenuProps) => {
  const menuItems = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 h-screen w-64 bg-dark-lighter p-5 z-50 md:hidden border-r border-dark-light"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", damping: 25 }}
        >
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold gradient-text">Menu</span>
            <button
              onClick={onClose}
              className="text-white focus:outline-none"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <button
                  onClick={() => onNavClick(item.id)}
                  className="block py-2 w-full text-left hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
