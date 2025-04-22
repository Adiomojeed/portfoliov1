import { motion } from "framer-motion";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";

interface Skill {
  name: string;
  percentage: number;
}

interface Tool {
  name: string;
  icon: string;
  category: string;
}

interface TechIcon {
  name: string;
  icon: string;
  textColor: string;
}

const SkillsSection = () => {
  const { ref: sectionRef, isVisible: isSectionVisible } = useAnimateOnScroll();

  const frontendSkills: Skill[] = [
    { name: "React/Next.js", percentage: 95 },
    { name: "JavaScript/TypeScript", percentage: 90 },
    { name: "HTML5/CSS3", percentage: 95 },
    { name: "Tailwind CSS", percentage: 90 },
    { name: "Responsive Design", percentage: 95 },
  ];

  const tools: Tool[] = [
    { name: "Git & GitHub", icon: "fab fa-git-alt", category: "Version Control" },
    { name: "Figma", icon: "fab fa-figma", category: "UI/UX Design" },
    { name: "RESTful APIs", icon: "fas fa-server", category: "API Integration" },
    { name: "PWAs", icon: "fas fa-mobile-alt", category: "Progressive Web Apps" },
    { name: "Performance", icon: "fas fa-tachometer-alt", category: "Web Optimization" },
    { name: "Accessibility", icon: "fas fa-universal-access", category: "WCAG Standards" },
  ];

  const techIcons: TechIcon[] = [
    { name: "React", icon: "fab fa-react", textColor: "text-blue-500" },
    { name: "JavaScript", icon: "fab fa-js", textColor: "text-white" },
    { name: "CSS3", icon: "fab fa-css3-alt", textColor: "text-blue-600" },
    { name: "HTML5", icon: "fab fa-html5", textColor: "text-orange-500" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", textColor: "text-purple-500" },
    { name: "Git", icon: "fab fa-git-alt", textColor: "text-orange-600" },
  ];

  const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
    const { ref, isVisible } = useAnimateOnScroll(0.1);
    
    return (
      <div ref={ref} className="animate-on-scroll">
        <div className="flex justify-between mb-1">
          <span className="font-medium">{skill.name}</span>
          <span>{skill.percentage}%</span>
        </div>
        <div className="w-full bg-dark-light rounded-full h-2">
          <motion.div
            className="gradient-bg h-2 rounded-full"
            style={{ width: "0%" }}
            animate={isVisible ? { width: `${skill.percentage}%` } : {}}
            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
          ></motion.div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-dark-lighter relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMEI5ODEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djIyaDEydi0yMnptLTI0IDExaDEydjExaC0xMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={sectionRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSectionVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold inline-block mb-4">
              <span className="gradient-text">Skills & Tools</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="inline-block p-2 mr-3 rounded-md bg-primary/20 text-primary">
                <i className="fas fa-laptop-code"></i>
              </span>
              Frontend Development
            </h3>

            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Additional Skills */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="inline-block p-2 mr-3 rounded-md bg-primary/20 text-primary">
                <i className="fas fa-tools"></i>
              </span>
              Tools & Other Skills
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => {
                const { ref, isVisible } = useAnimateOnScroll(0.1);
                
                return (
                  <motion.div
                    key={tool.name}
                    ref={ref}
                    className="bg-dark p-4 rounded-lg border border-dark-light flex items-center card-hover transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2)" }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center mr-3 text-primary text-xl">
                      <i className={tool.icon}></i>
                    </div>
                    <div>
                      <h4 className="font-medium">{tool.name}</h4>
                      <div className="text-xs text-gray-400">{tool.category}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-8 text-center">Technologies I Work With</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {techIcons.map((tech, index) => {
              const { ref, isVisible } = useAnimateOnScroll(0.1);
              
              return (
                <motion.div
                  key={tech.name}
                  ref={ref}
                  className="flex flex-col items-center justify-center bg-dark p-4 rounded-lg border border-dark-light card-hover transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2)" }}
                >
                  <div className={`text-4xl ${tech.textColor} mb-2`}>
                    <i className={tech.icon}></i>
                  </div>
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
