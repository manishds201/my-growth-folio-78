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
            Connecting Digital Dots, One Platform at a time! 
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With over 8 years+ of experience in content marketing, copywriting, and SEO, I've had the privilege of working 
              with BFSI companies like Kotak Life Insurance and Ambit Finvest. 
              My journey began when I first started writing as a hobby on a platform called blogspot. 
              It's been 10 years to it, and here I am, a content strategist at a reputed firm in Mumbai managing website, SEO, content, and social media. 
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I specialize in helping BFSI brands build content engines that can slowly build impact and ROI. The content game for any brand these days have to be strong. There is no one-size-fits-all solution. 
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When I'm not coding, you'll find me listening to music, maybe vibing with it as if I am dancing. (BTW, I love dancing). 
              I love my black coffee. Learning more and enjoying it with every sip. 
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

          {/* NEW: External Link Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 flex justify-center md:justify-start"
          >
            <a 
              href="https://your-external-link.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 rounded-full bg-accent text-white font-medium transition-all hover:scale-105 hover:shadow-lg"
            >
              View My Portfolio
              <svg 
                className="ml-2 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
          {/* End of Button */}

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
