import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    period: "2014 - 2016",
    description: "Specialized in Machine Learning and Distributed Systems. Thesis on scalable real-time data processing.",
    honors: "Graduated with Distinction"
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "University of California, Berkeley",
    period: "2010 - 2014",
    description: "Focus on Software Architecture and Human-Computer Interaction. Active member of the ACM student chapter.",
    honors: "Dean's List, Summa Cum Laude"
  }
];

const certifications = [
  "AWS Solutions Architect Professional",
  "Google Cloud Professional Developer",
  "Kubernetes Application Developer (CKAD)",
  "MongoDB Certified Developer"
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 bg-background" ref={ref}>
      <div className="container px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block"
          >
            Education
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12"
          >
            Academic Background
          </motion.h2>

          {/* Education Cards */}
          <div className="space-y-6 mb-16">
            {education.map((edu, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="bg-card rounded-xl p-6 md:p-8 shadow-soft hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-display font-bold text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-muted-foreground">{edu.school}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-secondary px-3 py-1.5 rounded-full w-fit">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">{edu.description}</p>
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <Award className="w-4 h-4" />
                      <span>{edu.honors}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-6">
              Certifications
            </h3>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="px-4 py-2 bg-card shadow-soft rounded-lg text-sm font-medium text-foreground hover:shadow-elevated transition-shadow duration-300"
                >
                  {cert}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
