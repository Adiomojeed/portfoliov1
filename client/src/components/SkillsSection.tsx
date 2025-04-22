import { motion } from "framer-motion";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";

interface SkillTag {
  name: string;
  icon?: string;
  color?: string;
  backgroundColor?: string;
  alias?: string | undefined;
}

interface SkillCategory {
  title: string;
  skills: SkillTag[];
}

const SkillsSection = () => {
  const { ref: sectionRef, isVisible: isSectionVisible } = useAnimateOnScroll();

  const skillCategories: SkillCategory[] = [
    {
      title: "FRONTEND",
      skills: [
        { name: "JavaScript", icon: "fab fa-js-square", color: "#fff", backgroundColor: "#EFD81D", alias: "JS" },
        { name: "TypeScript", icon: "fab fa-js", color: "#fff", backgroundColor: "#3178C6", alias: "TS" },
        { name: "React", icon: "fab fa-react", color: "#fff", backgroundColor: "#61DAFB" },
        { name: "Next.js", icon: "fab fa-react", color: "#fff", backgroundColor: "#000", alias: "N" },
        { name: "Redux", icon: "fas fa-code-branch", color: "#fff", backgroundColor: "#764ABC" },
        { name: "Tailwind CSS", icon: "fab fa-css3", color: "#fff", backgroundColor: "#38B2AC" },
        { name: "GSAP", icon: "fas fa-bolt", color: "#fff", backgroundColor: "#88CE02" },
        { name: "Framer Motion", icon: "fas fa-film", color: "#fff", backgroundColor: "#7928CA" },
        { name: "SASS", icon: "fab fa-sass", color: "#fff", backgroundColor: "#CC6699" },
        { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#fff", backgroundColor: "#7952B3", alias: "B" },
        { name: "React Query", icon: "fas fa-exchange-alt", color: "#fff", backgroundColor: "#FF4154" },
        { name: "Shopify Hydrogen", icon: "fas fa-shopping-bag", color: "#fff", backgroundColor: "#95BF47" },
        { name: "Apollo/GraphQL", icon: "fas fa-project-diagram", color: "#fff", backgroundColor: "#E535AB" },
        { name: "BEM/SASS/SCSS", icon: "fab fa-css3-alt", color: "#fff", backgroundColor: "#CC6699" },
        { name: "Chakra UI", icon: "fas fa-layer-group", color: "#fff", backgroundColor: "#319795" },
        { name: "Material UI", icon: "fas fa-palette", color: "#fff", backgroundColor: "#0081CB" },
      ]
    },
    {
      title: "BACKEND",
      skills: [
        { name: "Node.js", icon: "fab fa-node-js", color: "#fff", backgroundColor: "#68A063" },
        { name: "Nest.js", icon: "fas fa-feather-alt", color: "#fff", backgroundColor: "#E0234E" },
        { name: "Express.js", icon: "fab fa-node", color: "#fff", backgroundColor: "#000", alias: "EX" },
        { name: "TypeScript", icon: "fab fa-js", color: "#fff", backgroundColor: "#3178C6" },
        { name: "Firebase", icon: "fas fa-fire", color: "#fff", backgroundColor: "#FFCA28" },
        { name: "PHP", icon: "fab fa-php", color: "#fff", backgroundColor: "#777BB4" },
        { name: "Java (Spring Boot)", icon: "fab fa-java", color: "#fff", backgroundColor: "#007396" },
      ]
    },
    {
      title: "DATABASE",
      skills: [
        { name: "MySQL", icon: "fas fa-database", color: "#fff", backgroundColor: "#4479A1" },
        { name: "PostgreSQL", icon: "fas fa-database", color: "#fff", backgroundColor: "#336791" },
        { name: "MongoDB", icon: "fas fa-leaf", color: "#fff", backgroundColor: "#47A248" },
        { name: "Prisma", icon: "fas fa-database", color: "#fff", backgroundColor: "#2D3748" },
      ]
    },
    {
      title: "TOOLS",
      skills: [
        { name: "Git", icon: "fab fa-git-alt", color: "#fff", backgroundColor: "#F05032" },
        { name: "Docker", icon: "fab fa-docker", color: "#fff", backgroundColor: "#2496ED" },
        { name: "AWS", icon: "fab fa-aws", color: "#fff", backgroundColor: "#FF9900" },
        { name: "Figma", icon: "fab fa-figma", color: "#fff", backgroundColor: "#F24E1E" },
        { name: "Storybook", icon: "fas fa-book", color: "#fff", backgroundColor: "#FF4785" },
        { name: "VS Code", icon: "fas fa-code", color: "#fff", backgroundColor: "#007ACC" },
        { name: "Slack", icon: "fab fa-slack", color: "#fff", backgroundColor: "#4A154B" },
        { name: "Jest", icon: "fas fa-check-circle", color: "#fff", backgroundColor: "#C21325" },
        { name: "Vitest", icon: "fas fa-vial", color: "#fff", backgroundColor: "#729B1B" },
        { name: "RTL", icon: "fas fa-vial", color: "#fff", backgroundColor: "#E33332" },
        { name: "Jira", icon: "fab fa-jira", color: "#fff", backgroundColor: "#0052CC" },
        { name: "Trello", icon: "fab fa-trello", color: "#fff", backgroundColor: "#0079BF" },
        { name: "ClickUp", icon: "fas fa-tasks", color: "#fff", backgroundColor: "#7B68EE" },
        { name: "Discord", icon: "fab fa-discord", color: "#fff", backgroundColor: "#5865F2" },
        { name: "GA4", icon: "fas fa-chart-line", color: "#fff", backgroundColor: "#F9AB00" },
        { name: "Sentry", icon: "fas fa-bug", color: "#fff", backgroundColor: "#362D59" },
        { name: "HubSpot", icon: "fas fa-h-square", color: "#fff", backgroundColor: "#FF7A59" },
        { name: "Webpack", icon: "fas fa-cubes", color: "#fff", backgroundColor: "#8DD6F9" },
        { name: "Babel", icon: "fas fa-cogs", color: "#fff", backgroundColor: "#F9DC3E" },
        { name: "Vite", icon: "fas fa-bolt", color: "#fff", backgroundColor: "#646CFF" },
      ]
    }
  ];

  const SkillTag = ({ skill }: { skill: SkillTag }) => {
    const { ref, isVisible } = useAnimateOnScroll(0.1);
    
    return (
      <motion.div
        ref={ref}
        className="inline-flex items-center space-x-2 m-1"
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.05 }}
      >
        <div 
          className="flex items-center space-x-2 px-3 py-1 rounded-md" 
          style={{ backgroundColor: skill.backgroundColor || 'rgba(255, 255, 255, 0.1)' }}
        >
          {skill.alias ? (
            <span className="text-white font-medium">{skill.alias}</span>
          ) : skill.icon ? (
            <i className={`${skill.icon} text-white`}></i>
          ) : null}
          <span className="text-white">{skill.name}</span>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-dark relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMEI5ODEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djIyaDEydi0yMnptLTI0IDExaDEydjExaC0xMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={sectionRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSectionVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 mb-8"
          >
            <span className="text-white text-3xl">*</span>
            <h2 className="font-bold text-2xl">MY STACK</h2>
          </motion.div>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => {
            const { ref, isVisible } = useAnimateOnScroll(0.1);
            
            return (
              <div key={category.title} ref={ref} className="mb-12">
                <motion.h3
                  className="text-5xl font-black uppercase mb-8 tracking-wider"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {category.title}
                </motion.h3>
                
                <motion.div
                  className="flex flex-wrap"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {category.skills.map((skill, index) => (
                    <SkillTag key={skill.name} skill={skill} />
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
