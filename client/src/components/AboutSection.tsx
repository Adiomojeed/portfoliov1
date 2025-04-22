import { motion } from "framer-motion";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";

const AboutSection = () => {
  const { ref: refSection, isVisible: isSectionVisible } = useAnimateOnScroll();
  const { ref: refContent, isVisible: isContentVisible } = useAnimateOnScroll();

  const socialLinks = [
    { icon: "fab fa-github", url: "#", label: "GitHub" },
    { icon: "fab fa-linkedin", url: "#", label: "LinkedIn" },
    { icon: "fab fa-twitter", url: "#", label: "Twitter" },
    { icon: "fab fa-medium", url: "#", label: "Medium" },
  ];

  const personalInfo = [
    { title: "Location", value: "San Francisco, CA" },
    { title: "Experience", value: "5+ Years" },
    { title: "Education", value: "B.S. Computer Science" },
    { title: "Languages", value: "English, Spanish" },
  ];

  return (
    <section id="about" className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div
          ref={refSection}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSectionVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold inline-block mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isContentVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-dark rounded-xl overflow-hidden p-1 border border-dark-light">
              <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="Professional developer portrait"
                  className="object-cover w-full h-full"
                  loading="lazy"
                  width="400"
                  height="500"
                />
              </div>
            </div>
          </motion.div>

          <div ref={refContent} className="space-y-6">
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isContentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I'm a passionate frontend developer with 5+ years of experience creating responsive,
              user-friendly web applications. With a strong foundation in JavaScript and modern frameworks,
              I build solutions that are both beautiful and performant.
            </motion.p>
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isContentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              My journey in web development began at the University of Technology, where I earned my
              Bachelor's degree in Computer Science. Since then, I've worked with various companies
              to deliver compelling user experiences and solve complex frontend challenges.
            </motion.p>
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isContentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              When I'm not coding, you can find me contributing to open-source projects, writing technical
              articles, or exploring new technologies to stay at the cutting edge of web development.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isContentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {personalInfo.map((info, index) => (
                <div key={index}>
                  <h3 className="text-primary font-semibold mb-2">{info.title}</h3>
                  <p>{info.value}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex space-x-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isContentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={link.label}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`${link.icon} text-2xl`}></i>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
