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
  subtitle: string;
  description: string;
  image: string;
  demoLink: string;
  codeLink: string;
  features: ProjectFeature[];
  technologies: ProjectTech[];
  backgroundColor?: string;
}

const ProjectsSection = () => {
  const { ref, isVisible } = useAnimateOnScroll();

  const projects: Project[] = [
    {
      title: "FLux Lura",
      subtitle: "Multimedia Conversion Tool",
      description: "A free online tool for seamless multimedia conversion. Effortlessly transform images, audio, and videos with ease and elevate your content instantly!",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      codeLink: "#",
      backgroundColor: "#151D3B",
      features: [
        { text: "Developed a multimedia converter using Next.js and TypeScript." },
        { text: "Styled with Tailwind CSS and enhanced with Framer Motion for smooth animations." },
        { text: "Integrated Shadcn UI for consistent and accessible design components." },
        { text: "Leveraged FFmpeg for efficient media processing and conversion." },
        { text: "Created a responsive and intuitive user interface for effortless conversions." },
      ],
      technologies: [
        { name: "Next.js", icon: "fab fa-react", backgroundColor: "#000000" },
        { name: "React", icon: "fab fa-react", backgroundColor: "#61DAFB" },
        { name: "Tailwind CSS", icon: "fab fa-css3-alt", backgroundColor: "#06B6D4" },
        { name: "Framer Motion", icon: "fas fa-film", backgroundColor: "#7928CA" },
        { name: "Shadcn", icon: "fas fa-layer-group", backgroundColor: "#333333" },
        { name: "FFmpeg", icon: "fas fa-video", backgroundColor: "#007808" },
      ]
    },
    {
      title: "EdTech Platform",
      subtitle: "Learning Management System",
      description: "A platform connecting students and instructors for enhanced learning experiences.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      codeLink: "#",
      backgroundColor: "#1A1B4B",
      features: [
        { text: "Built a comprehensive learning management system with React and Node.js." },
        { text: "Implemented JWT authentication and role-based access control." },
        { text: "Created interactive learning modules with progress tracking." },
        { text: "Designed real-time collaboration features for student-teacher interaction." },
        { text: "Integrated payment processing for course enrollment." },
      ],
      technologies: [
        { name: "React", icon: "fab fa-react", backgroundColor: "#61DAFB" },
        { name: "Node.js", icon: "fab fa-node-js", backgroundColor: "#68A063" },
        { name: "MongoDB", icon: "fas fa-database", backgroundColor: "#47A248" },
        { name: "Socket.io", icon: "fas fa-plug", backgroundColor: "#010101" },
        { name: "Express", icon: "fab fa-node", backgroundColor: "#000000" },
      ]
    },
    {
      title: "Analytics Dashboard",
      subtitle: "Business Intelligence Tool",
      description: "Interactive analytics dashboard with real-time data visualization, custom reports, and user behavior tracking.",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      codeLink: "#",
      backgroundColor: "#181E41",
      features: [
        { text: "Developed a real-time analytics platform with customizable dashboards." },
        { text: "Created interactive data visualizations using D3.js and Chart.js." },
        { text: "Implemented data filtering and query builder functionality." },
        { text: "Designed automated report generation and scheduling." },
        { text: "Built responsive interfaces that work across all device sizes." },
      ],
      technologies: [
        { name: "React", icon: "fab fa-react", backgroundColor: "#61DAFB" },
        { name: "Redux", icon: "fas fa-database", backgroundColor: "#764ABC" },
        { name: "D3.js", icon: "fas fa-chart-bar", backgroundColor: "#F9A03C" },
        { name: "Firebase", icon: "fas fa-fire", backgroundColor: "#FFCA28" },
        { name: "TypeScript", icon: "fab fa-js", backgroundColor: "#3178C6" },
      ]
    },
  ];

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const { ref: projectRef, isVisible: isProjectVisible } = useAnimateOnScroll(0.1);
    const isEven = index % 2 === 0;
    
    return (
      <motion.div
        ref={projectRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isProjectVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-24`}
      >
        {/* Left side: Project image */}
        <div className="w-full md:w-1/2">
          <div 
            className="rounded-xl overflow-hidden relative aspect-[4/3]"
            style={{ backgroundColor: project.backgroundColor || '#151D3B' }}
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
              <a href={project.demoLink} aria-label="View project" className="text-white text-xl">
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
                style={{ backgroundColor: tech.backgroundColor || 'rgba(255, 255, 255, 0.1)' }}
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
        <div ref={ref} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 mb-8"
          >
            <span className="text-white text-3xl">*</span>
            <h2 className="font-bold text-2xl">FEATURED WORK</h2>
          </motion.div>
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-20">
          <motion.a
            href="#"
            className="inline-flex items-center px-8 py-3 border border-white/20 rounded-md text-white font-medium transition-all hover:bg-white/5"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" 
            }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <i className="fas fa-arrow-right ml-2"></i>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
