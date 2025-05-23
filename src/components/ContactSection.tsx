import { useState } from "react";
import { motion } from "framer-motion";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const { ref, isVisible } = useAnimateOnScroll();
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://formspree.io/f/${process.env.VITE_FORMSPREE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsSubmitting(false);
      } else {
        // Form submission failed
        const error = await response.json();
        toast({
          title: "Error!",
          description:
            error.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      toast({
        title: "Error!",
        description:
          (error as any)?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: "Email",
      content: "adio.mojeed@gmail.com",
      link: "mailto:adio.mojeed@gmail.com",
      icon: "fas fa-envelope",
    },
    {
      title: "Location",
      content: "London, United Kingdom",
      link: null,
      icon: "fas fa-map-marker-alt",
    },
  ];

  const socialLinks = [
    {
      icon: "fab fa-github",
      url: "https://www.github.com/Adiomojeed",
      label: "GitHub",
    },
    {
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/Adiomojeed",
      label: "LinkedIn",
    },
    {
      icon: "fab fa-twitter",
      url: "https://www.twitter.com/@adio_mojeed",
      label: "Twitter",
    },
    {
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/codeleaf_",
      label: "Instagram",
    },
  ];

  const availableFor = [
    "Full-time Positions",
    "Contracts",
    "Freelance Projects",
    "Consulting",
    "Remote Work",
  ];

  return (
    <section id="contact" className="py-20 bg-dark-lighter relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-16 relative">
              <motion.h3
                className="text-6xl md:text-8xl font-black text-[#39383a] text-opacity-50 uppercase mb-8 tracking-wider"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                contact
              </motion.h3>
              <motion.h3
                className="text-4xl md:text-5xl font-black uppercase mb-8 tracking-wider absolute top-3 md:top-6 left-0 right-0"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                contact
              </motion.h3>
            </div>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Feel free to reach out for collaborations, job opportunities, or
              just to say hi! I'll do my best to get back to you as soon as
              possible.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div>
            <motion.div
              className="bg-dark p-8 rounded-xl border border-dark-light h-full"
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                      <i className={`${info.icon} text-white`}></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-gray-400 text-sm mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-lg hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-lg text-gray-400">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-share-alt text-white"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-gray-400 text-sm mb-3">Social</h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.url}
                          target="_blank"
                          className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center hover:bg-primary/20 transition-colors"
                          aria-label={social.label}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <i className={`${social.icon} text-lg`}></i>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-dark-light">
                <h4 className="text-lg font-medium mb-4">Available for:</h4>
                <div className="flex flex-wrap gap-3">
                  {availableFor.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div>
            <motion.form
              className="bg-dark p-8 rounded-xl border border-dark-light"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-dark-light border border-dark-light rounded-md focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-dark-light border border-dark-light rounded-md focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-400 mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject of your message"
                    className="w-full px-4 py-3 bg-dark-light border border-dark-light rounded-md focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message here..."
                    className="w-full px-4 py-3 bg-dark-light border border-dark-light rounded-md focus:outline-none focus:border-primary transition-colors resize-none"
                    required
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full py-6 gradient-bg rounded-md text-white font-medium hover:shadow-lg hover:shadow-primary/20 transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        Submitting{" "}
                        <i className="fas fa-spinner fa-spin ml-2"></i>
                      </>
                    ) : (
                      <>
                        Send Message <i className="fas fa-paper-plane ml-2"></i>
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
