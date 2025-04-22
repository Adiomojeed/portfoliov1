import { motion } from "framer-motion";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";

interface Project {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  codeLink: string;
  tags: string[];
}

const ProjectsSection = () => {
  const { ref, isVisible } = useAnimateOnScroll();

  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with Next.js, featuring product filtering, search, cart functionality, and seamless checkout process.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      codeLink: "#",
      tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    },
    {
      title: "Analytics Dashboard",
      description: "Interactive analytics dashboard with real-time data visualization, custom reports, and user behavior tracking.",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      codeLink: "#",
      tags: ["React", "D3.js", "Firebase", "Redux"],
    },
    {
      title: "Fitness App",
      description: "Mobile-first fitness application with workout tracking, progress visualization, and personalized training plans.",
      image: "https://images.unsplash.com/photo-1536148935331-408321065b18?auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      codeLink: "#",
      tags: ["React Native", "TypeScript", "GraphQL", "AWS"],
    },
    {
      title: "EdTech Platform",
      description: "Online learning platform with course creation, video lessons, quizzes, and progress tracking for students.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      codeLink: "#",
      tags: ["Vue.js", "Node.js", "MongoDB", "AWS S3"],
    },
    {
      title: "Corporate Website",
      description: "Modern corporate website with dynamic content management, blog functionality, and appointment scheduling.",
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      codeLink: "#",
      tags: ["Gatsby", "GraphQL", "Contentful", "Netlify"],
    },
    {
      title: "Social Media App",
      description: "Feature-rich social media application with real-time messaging, post sharing, and user connections.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      codeLink: "#",
      tags: ["Next.js", "Socket.io", "PostgreSQL", "Redis"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold inline-block mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const { ref: projectRef, isVisible: isProjectVisible } = useAnimateOnScroll(0.1);
            
            return (
              <motion.div
                key={index}
                ref={projectRef}
                className="bg-dark-lighter rounded-xl overflow-hidden border border-dark-light group"
                initial={{ opacity: 0, y: 30 }}
                animate={isProjectVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width="400"
                    height="225"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-lighter to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.codeLink}
                        className="text-gray-400 hover:text-primary"
                        aria-label="View code"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="fab fa-github"></i>
                      </motion.a>
                      <motion.a
                        href={project.demoLink}
                        className="text-gray-400 hover:text-primary"
                        aria-label="View live demo"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </motion.a>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <motion.a
            href="#"
            className="inline-block px-8 py-3 rounded-md border border-primary text-primary font-medium transition-all hover:bg-primary/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects <i className="fas fa-arrow-right ml-2"></i>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
