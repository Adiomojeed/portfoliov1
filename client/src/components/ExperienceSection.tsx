import { motion } from "framer-motion";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";

interface Experience {
  title: string;
  company: string;
  period: string;
  icon: string;
  responsibilities: string[];
  isRight?: boolean;
}

const ExperienceSection = () => {
  const { ref, isVisible } = useAnimateOnScroll();

  const experiences: Experience[] = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "January 2021 - Present",
      icon: "fas fa-briefcase",
      responsibilities: [
        "Led the frontend development of the company's flagship SaaS product",
        "Implemented responsive designs using Next.js and Tailwind CSS",
        "Reduced load times by 40% through code optimization and lazy loading",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      title: "Frontend Developer",
      company: "WebSolutions Agency",
      period: "March 2019 - December 2020",
      icon: "fas fa-laptop-code",
      responsibilities: [
        "Developed responsive web applications for various clients",
        "Created interactive UI components using React and styled-components",
        "Collaborated with designers to implement pixel-perfect interfaces",
        "Improved existing codebases for better maintainability",
      ],
      isRight: true,
    },
    {
      title: "Junior Web Developer",
      company: "Digital Innovations",
      period: "May 2017 - February 2019",
      icon: "fas fa-code",
      responsibilities: [
        "Built and maintained websites for small to medium businesses",
        "Utilized vanilla JavaScript, HTML, CSS, and jQuery",
        "Implemented responsive designs using Bootstrap",
        "Assisted with CMS integrations (WordPress, Shopify)",
      ],
    },
  ];

  const ExperienceItem = ({ experience, index }: { experience: Experience; index: number }) => {
    const { ref: itemRef, isVisible: isItemVisible } = useAnimateOnScroll(0.1);
    const delay = 0.2 + index * 0.1;

    return (
      <div 
        ref={itemRef}
        className={`relative mb-16 ${
          experience.isRight ? "md:mr-0" : "md:ml-0"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isItemVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay }}
          className="flex flex-col md:flex-row items-center"
        >
          <div
            className={`${
              experience.isRight
                ? "order-1 md:order-1"
                : "order-1 md:order-2"
            }`}
          >
            <motion.div
              className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center z-10 relative shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              <i className={`${experience.icon} text-white`}></i>
            </motion.div>
          </div>
          <div
            className={`flex-1 ${
              experience.isRight
                ? "md:text-left md:pl-10 mb-4 md:mb-0 order-2 md:order-2"
                : "md:text-right md:pr-10 mb-4 md:mb-0 order-2 md:order-1"
            }`}
          >
            <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
            <h4 className="text-primary mb-2">{experience.company}</h4>
            <p className="text-gray-400 mb-4">{experience.period}</p>
            <div className="bg-dark-light p-4 rounded-lg">
              <ul className="list-disc ml-4 text-sm space-y-1 text-gray-300">
                {experience.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold inline-block mb-4">
              <span className="gradient-text">Professional Experience</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Line down the middle */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-primary to-tertiary-color transform md:translate-x-px"></div>

          {/* Experiences */}
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
