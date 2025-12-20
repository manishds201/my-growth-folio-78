import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Content Strategist",
    company: "Ambit Finvest Private Limited",
    location: "Mumbai, India",
    period: "February 2025-Present",
    description: "Leading SEO, Content and Social Media strategy. I am also looking into WhatsApp management, Marketing cloud projects learning and spearheading these projects for Customer ROI.", 
    achievements: [
      "Leading a lean team of 2 members - Junior Marketing Associate and Creative Manager (Graphics Designer)",
      "Streamlined Social media strategy and posting cadence for increasing growth",
      "Building content funnel and frameworks that work best with the business' vision"
    ],
    technologies: ["Google Keyword Planner", "Gemini AI", "Marketing Cloud Salesforce", "WhatsApp Business"]
  },
  {
    title: "Senior Manager - Content Marketing",
    company: "Kotak Life",
    location: "Mumbai, India",
    period: "2022 - 2025",
    description: "Full-stack development for a B2B SaaS platform. Built features from conception to deployment, working closely with product and design teams.",
    achievements: [
      "Developed real-time collaboration features used by 100+ enterprise clients",
      "Reduced customer churn by 25% through improved UX initiatives",
      "Mentored 3 junior developers to senior positions"
    ],
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker", "GraphQL"]
  },
  {
    title: "Junior Developer",
    company: "Digital Agency Co.",
    location: "New York, NY",
    period: "2016 - 2019",
    description: "Started career building websites and web applications for diverse clients across multiple industries.",
    achievements: [
      "Delivered 30+ client projects on time and within budget",
      "Introduced modern JavaScript frameworks to the team workflow",
      "Received 'Rising Star' award for outstanding performance"
    ],
    technologies: ["JavaScript", "PHP", "MySQL", "WordPress", "React"]
  }
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-background" ref={ref}>
      <div className="container px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block"
          >
            Experience
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12"
          >
            Where I've Worked
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="relative pl-8 md:pl-12 pb-8 border-l-2 border-border last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/25" />

                <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft hover:shadow-elevated transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                        <span className="text-border">•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
