import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Creative Strategy",
    skills: [
      { name: "Creative ideation", level: 85 },
      { name: "Copywriting", level: 90 },
      { name: "CTR improvement", level: 95 },
      { name: "A/B Test creatives", level: 85 },
      { name: "AI Literacy", level},
    ]
  },
  {
    title: "Content Strategist",
    skills: [
      { name: "Data-driven content planning", level: 70 },
      { name: "People management", level: 75 },
      { name: "Maintain & Follow Content calendar", level: 90 },
      { name: "Understand business impact & ROI", level: 80 }
      { name: "Content Writing", level: 90 },
      { name: "Content Editing", level: 90 },
      { name: "UI/UX writing", level: 85 },
      { name: "Canva", level: 65 },
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Leadership", level: 90 },
      { name: "Mentoring", level: 85 },
      { name: "Communication", level: 90 },
      { name: " Stakeholder management", level: 90},
    ]
  },
  {
    title: "Social Media management",
    skills: [
      { name: "Social media strategy", level: 92 },
      { name: "Video editing", level: 89 },
      { name: "Scripting", level: 87 },
      { name: "Content Boost", level: 89},
      { name: "LinkedIn showcase management", level:80},
    ]
  }, 
  {
    title: "Search Engine Optimization",
    skills: [
      { name: "On-Page & Off-Page SEO", level: 91 },
      { name: "Keyword Strategy", level: 90 },
      { name: "Google Search Console", level: 75 },
      { name: "Google Core Web Vitals", level: 60},
      { name: "Content Distribution", level:80},
      { name: "Google Analytics 4", level: 75},
    ]
  }
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-card" ref={ref}>
      <div className="container px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block"
          >
            Skills
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12"
          >
            What I Bring to the Table
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.1 }}
                className="bg-background rounded-xl p-6 shadow-soft"
              >
                <h3 className="text-lg font-display font-bold text-foreground mb-6">
                  {category.title}
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1, 
                            delay: 0.4 + catIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className="h-full rounded-full gradient-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
