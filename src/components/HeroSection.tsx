import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Instagram, ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-secondary/30">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container px-6 md:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-6 text-balance"
          >
            Manish D Shanbhag
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground font-body mb-8 max-w-2xl"
          >
            Building content solutions for digital growth, branding, and overall business impact. 
            Leading SEO, Website, Content strategy and social media along with other impactful MarComm projects.
          </motion.p>

          {/* Location & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Mumbai, India</span>
            </a>
            <a 
              href="mailto:manishshanbhag02@gmail.com" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>manishshanbhag02@gmail.com</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-3"
          >
            <a
              href="https://www.linkedin.com/in/manish-shanbhag/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/manish_09724/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 text-muted-foreground hover:text-foreground"
              aria-label="Insta profile"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 text-muted-foreground hover:text-foreground"
              aria-label="Personal Website"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-accent rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
