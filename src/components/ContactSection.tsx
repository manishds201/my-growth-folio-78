import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Linkedin, Github, Twitter, Download } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/manish-shanbhag/", label: "LinkedIn" },
    { icon: Github, href: "https://www.instagram.com/manish_09724/", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/Manish91331051", label: "X" },
  ];

  return (
    <section id="contact" className="py-24 bg-card" ref={ref}>
      <div className="container px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block"
          >
            Get In Touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. 
            Feel free to reach out!
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <a
              href="mailto:manishshanbhag02@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-4 bg-background rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
                <p className="font-medium text-foreground">manishshanbhag02@gmail.com</p>
              </div>
            </a>

            <div className="inline-flex items-center gap-3 px-6 py-4 bg-background rounded-xl shadow-soft">
              <div className="p-2 rounded-lg bg-secondary text-muted-foreground">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Location</p>
                <p className="font-medium text-foreground">Mumbai, India</p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="p-4 rounded-full bg-background shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 text-muted-foreground hover:text-accent"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 gradient-accent text-accent-foreground rounded-xl font-medium shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
