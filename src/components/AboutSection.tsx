import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-card" ref={ref}>
      <div className="container px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block"
          >
            About Me
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8"
          >
            Building the future, one line of code at a time
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With over 8 years of experience in software development, I've had the privilege of working 
              with startups and Fortune 500 companies alike. My journey began with a fascination for 
              how technology can solve real-world problems, and that passion continues to drive me today.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I specialize in building scalable web applications using modern technologies like React, 
              TypeScript, and Node.js. Beyond coding, I'm passionate about mentoring junior developers, 
              contributing to open-source projects, and staying at the forefront of emerging technologies.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When I'm not coding, you'll find me hiking the trails of Northern California, 
              experimenting with new coffee brewing methods, or diving into a good sci-fi novel.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-border"
          >
            {[
              { number: "8+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "15+", label: "Open Source Contributions" },
              { number: "3", label: "Companies Led" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
