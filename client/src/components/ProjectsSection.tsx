import { motion } from "framer-motion";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";

interface ProjectFeature {
  text: string;
}

interface ProjectTech {
  name: string;
  icon: string;
  backgroundColor?: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  features: ProjectFeature[];
  technologies: ProjectTech[];
  backgroundColor?: string;
}

const ProjectsSection = () => {
  const { ref, isVisible } = useAnimateOnScroll();

  const projects: Project[] = [
    {
      title: "Mainstack",
      description:
        "Mainstack enables businesses of all sizes to sell globally, like a local. It provides multi-currency billing solutions, a subscription management platform - and handle tax compliance.",
      image:
        "https://res.cloudinary.com/codeleaf/image/upload/v1745334714/ms_wejch6.webp",
      demoLink: "https://mainstack.co",
      backgroundColor: "#39383a",
      features: [
        {
          text: "Development of design system and components guides for application development.",
        },
        {
          text: "Mobile-responsive, seo-optimized to enable optmized performance for users while ensuring accessability.",
        },
        {
          text: "API integration and documentation to ensure secure client-server communication.",
        },
        {
          text: "Automated testing integration to reduce bug reports and ascertain production-ready code.",
        },
      ],
      technologies: [
        { name: "TypeScript", icon: "fab fa-js", backgroundColor: "#3178C6" },
        { name: "Next.js", icon: "fab fa-react", backgroundColor: "#000000" },
        { name: "React", icon: "fab fa-react", backgroundColor: "#61DAFB" },
        {
          name: "Framer Motion",
          icon: "fas fa-film",
          backgroundColor: "#7928CA",
        },
        { name: "Node.js", icon: "fab fa-node-js", backgroundColor: "#68A063" },
        {
          name: "MongoDB",
          icon: "fas fa-leaf",
          backgroundColor: "#47A248",
        },
        { name: "Figma", icon: "fab fa-figma", backgroundColor: "#F24E1E" },
        { name: "Storybook", icon: "fas fa-book", backgroundColor: "#FF4785" },
        { name: "RTL", icon: "fas fa-vial", backgroundColor: "#E33332" },
      ],
    },
    {
      title: "Dojah",
      description:
        "A solution that enables businesses across various industries to reduce fraud, onboard users securely, and comply with regulatory requirements",
      image:
        "https://res.cloudinary.com/codeleaf/image/upload/v1745335149/dj_vkl6cb.png",
      demoLink: "https://dojah.io",
      backgroundColor: "#1A1B4B",
      features: [
        {
          text: "Translated design wireframes into clean, efficient code, creating a design system for the product.",
        },
        {
          text: "Improved SEO by implementing schema markup and meta tags.",
        },
        {
          text: "Development of MVP and base design system.",
        },
        {
          text: "Cross-functional collaboration with teams to ensure seamless integration of frontend and backend systems, delivering a cohesive user experience.",
        },
      ],
      technologies: [
        { name: "React", icon: "fab fa-react", backgroundColor: "#61DAFB" },
        { name: "Node.js", icon: "fab fa-node-js", backgroundColor: "#68A063" },
        {
          name: "Material UI",
          icon: "fas fa-palette",
          backgroundColor: "#0081CB",
        },
        {
          name: "MongoDB",
          icon: "fas fa-database",
          backgroundColor: "#47A248",
        },
        { name: "Socket.io", icon: "fas fa-plug", backgroundColor: "#010101" },
        { name: "Express", icon: "fab fa-node", backgroundColor: "#000000" },
        { name: "Sentry", icon: "fas fa-bug", backgroundColor: "#362D59" },
        { name: "Webpack", icon: "fas fa-cubes", backgroundColor: "#8DD6F9" },
        { name: "AWS", icon: "fab fa-aws", backgroundColor: "#FF9900" },
      ],
    },
    {
      title: "MyElearn",
      description:
        "A platform to improve learning and examination systems across higher institutions in Africa.",
      image:
        "https://res.cloudinary.com/codeleaf/image/upload/v1745335881/me_ldqcym.png",
      demoLink: "https://my-elearn.vercel.app",
      backgroundColor: "#E6F9EE",
      features: [
        {
          text: "Built a comprehensive learning management system with React and Node.js.",
        },
        {
          text: "Implemented JWT authentication and role-based access control.",
        },
        {
          text: "Created interactive learning modules with progress tracking.",
        },
        {
          text: "Designed real-time collaboration features for student-teacher interaction.",
        },
        { text: "Integrated payment processing for course enrollment." },
      ],
      technologies: [
        { name: "TypeScript", icon: "fab fa-js", backgroundColor: "#3178C6" },
        {
          name: "Next.js",
          icon: "fab fa-react",
          backgroundColor: "#000",
        },
        { name: "Redux", icon: "fas fa-database", backgroundColor: "#764ABC" },
        {
          name: "Tailwind CSS",
          icon: "fab fa-css3",
          backgroundColor: "#38B2AC",
        },
        { name: "GSAP", icon: "fas fa-bolt", backgroundColor: "#88CE02" },
        {
          name: "React Query",
          icon: "fas fa-exchange-alt",
          backgroundColor: "#FF4154",
        },
        { name: "Vitest", icon: "fas fa-vial", backgroundColor: "#729B1B" },
        {
          name: "Apollo/GraphQL",
          icon: "fas fa-project-diagram",
          backgroundColor: "#E535AB",
        },
        {
          name: "Express.js",
          icon: "fab fa-node",
          backgroundColor: "#000",
        },
        { name: "MongoDB", icon: "fas fa-leaf", backgroundColor: "#47A248" },
        { name: "Vercel", icon: "fas fa-v", backgroundColor: "#000" },
        {
          name: "Nest.js",
          icon: "fas fa-feather-alt",
          backgroundColor: "#E0234E",
        },
      ],
    },
    {
      title: "Muzu",
      description:
        "A no-code website studio for creating single and multi-page websites for businesses. Muzu provides a dashboard to customize website, add sections, and integrate existing domains or purchase new domain in-app",
      image:
        "https://res.cloudinary.com/codeleaf/image/upload/v1745335516/mz_u8duho.png",
      demoLink: "https://muzu.co",
      backgroundColor: "#181E41",
      features: [
        {
          text: "Developed and delivered scalable and maintainable dashboard with a focus on performance optimization and progressive enhancements",
        },
        {
          text: "Created interactive data visualizations using D3.js and Chart.js.",
        },
        {
          text: "Designed product roadmaps with essential features and time to completion and release for market.",
        },
        {
          text: "Built a reusable design system to accelerate UI development, ensuring consistency and reducing time-to-market for new features",
        },
      ],
      technologies: [
        { name: "React", icon: "fab fa-react", backgroundColor: "#61DAFB" },
        { name: "Redux", icon: "fas fa-database", backgroundColor: "#764ABC" },
        { name: "D3.js", icon: "fas fa-chart-bar", backgroundColor: "#F9A03C" },
        { name: "GSAP", icon: "fas fa-bolt", backgroundColor: "#88CE02" },
        {
          name: "Bootstrap",
          icon: "fab fa-bootstrap",
          backgroundColor: "#7952B3",
        },
        { name: "Vitest", icon: "fas fa-vial", backgroundColor: "#729B1B" },
        { name: "GA4", icon: "fas fa-chart-line", backgroundColor: "#F9AB00" },
        { name: "Babel", icon: "fas fa-cogs", backgroundColor: "#F9DC3E" },
        { name: "SASS", icon: "fab fa-sass", backgroundColor: "#CC6699" },
        {
          name: "Nest.js",
          icon: "fas fa-feather-alt",
          backgroundColor: "#E0234E",
        },
      ],
    },
  ];

  const ProjectCard = ({
    project,
    index,
  }: {
    project: Project;
    index: number;
  }) => {
    const { ref: projectRef, isVisible: isProjectVisible } =
      useAnimateOnScroll(0.1);
    const isEven = index % 2 === 0;

    return (
      <motion.div
        ref={projectRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isProjectVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`flex flex-col ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        } gap-8 mb-24`}
      >
        {/* Left side: Project image */}
        <div className="w-full md:w-1/2">
          <div
            className="rounded-xl overflow-hidden relative aspect-[4/3]"
            style={{ backgroundColor: project.backgroundColor || "#151D3B" }}
          >
            <img
              src={project.image}
              alt={`${project.title} project screenshot`}
              className="w-full h-full object-contain p-4"
              loading="lazy"
            />
            <motion.div
              className="absolute bottom-4 right-4"
              whileHover={{ x: 5 }}
            >
              <a
                href={project.demoLink}
                aria-label="View project"
                className="text-white text-xl"
                target="_blank"
              >
                <i className="fas fa-arrow-right"></i>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right side: Project details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="flex items-center mb-2">
            <div className="w-5 h-px bg-green-500 mr-3"></div>
            <h3 className="text-white font-bold text-2xl flex items-center">
              {project.title}
              {index === 0 && (
                <motion.span
                  className="ml-2 bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded text-sm"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <i className="fas fa-crown text-yellow-400 mr-1"></i>
                </motion.span>
              )}
            </h3>
          </div>

          <p className="text-gray-400 mb-6">{project.description}</p>

          <div className="space-y-3 mb-8">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <div className="text-green-500 flex-shrink-0 mt-1 mr-2">+</div>
                <p className="text-sm text-gray-300">{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <div
                key={idx}
                className="inline-flex items-center px-3 py-1.5 rounded-md text-white text-sm"
                style={{
                  backgroundColor:
                    tech.backgroundColor || "rgba(255, 255, 255, 0.1)",
                }}
              >
                <i className={`${tech.icon} mr-1.5`}></i>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16 relative">
          <motion.h3
            className="text-6xl md:text-8xl font-black text-[#39383a] text-opacity-50 uppercase mb-8 tracking-wider"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            PROJECTS
          </motion.h3>
          <motion.h3
            className="text-4xl md:text-5xl font-black uppercase mb-8 tracking-wider absolute top-3 md:top-6 left-0 right-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            PROJECTS
          </motion.h3>
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Button */}
        {/* <div className="text-center mt-20">
          <motion.a
            href="#"
            className="inline-flex items-center px-8 py-3 border border-white/20 rounded-md text-white font-medium transition-all hover:bg-white/5"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <i className="fas fa-arrow-right ml-2"></i>
          </motion.a>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
