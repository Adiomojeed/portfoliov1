import { motion } from "framer-motion";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";

const AboutSection = () => {
  const { ref: refSection, isVisible: isSectionVisible } = useAnimateOnScroll();
  const { ref: refContent, isVisible: isContentVisible } = useAnimateOnScroll();

  const personalInfo = [
    { title: "Location", value: "London, United Kingdom" },
    { title: "Experience", value: "6+ Years" },
    {
      title: "Education",
      value: "BEngr. Electrical Engineering <br />MSc. Software Engineering",
    },
    { title: "Languages", value: "English" },
  ];

  return (
    <section id="about" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div ref={refSection} className="text-center mb-16 relative">
          <motion.h3
            className="text-6xl md:text-8xl font-black text-[#39383a] text-opacity-50 uppercase mb-8 tracking-wider"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            ABOUT ME
          </motion.h3>
          <motion.h3
            className="text-4xl md:text-5xl font-black uppercase mb-8 tracking-wider absolute top-3 md:top-6 left-0 right-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            ABOUT ME
          </motion.h3>
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
                  height="300"
                />
              </div>
            </div>
          </motion.div>

          <div ref={refContent} className="space-y-6">
            <motion.p
              className="text-lg text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isContentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              An experienced Software Engineer with over six years of solid
              professional experience in building engaging and pixel-perfect
              solutions, redefining software workflows, while adapting latest
              technology trends; deploying modular and clean code architectures.
            </motion.p>
            <motion.p
              className="text-lg text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={isContentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              As a senior engineer, I not only write code, but architect proper
              development life cycles and patterns that fosters team
              collaboration, while coaching junior teammates and applying great
              mastery in modern technologies and versatility in coding styles.
              Since then, I've worked with various companies across multiple
              sectors to deliver compelling user experiences and solve complex
              software challenges.
            </motion.p>
            <motion.p
              className="text-lg text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isContentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              When I'm not coding, you can find me contributing to open-source
              projects, writing technical articles, or exploring new
              technologies to stay at the cutting edge of web development.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isContentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {personalInfo.map((info, index) => (
                <div key={index}>
                  <h3 className="text-primary font-semibold mb-2">
                    {info.title}
                  </h3>
                  <p
                    className="text-gray-400"
                    dangerouslySetInnerHTML={{ __html: info.value }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
