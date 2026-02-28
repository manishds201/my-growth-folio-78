import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PenTool, Search, Share2, Megaphone, BarChart3, Zap } from "lucide-react";

const expertiseAreas = [
  {
    icon: PenTool,
    title: "Content Strategy",
    description:
      "Building content engines that drive organic growth, brand authority, and measurable business impact. From ideation to execution — every piece of content serves a purpose.",
    highlights: ["Content Frameworks", "Editorial Calendars", "Brand Voice"],
  },
  {
    icon: Search,
    title: "SEO & Organic Growth",
    description:
      "Data-driven SEO strategies that move the needle — keyword research, on-page optimization, technical audits, and content distribution that earns rankings.",
    highlights: ["Keyword Strategy", "On-Page SEO", "Analytics & Reporting"],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Crafting social media strategies that build communities, not just followers. Platform-specific content, posting cadence, and engagement that converts.",
    highlights: ["Platform Strategy", "Video Content", "Community Building"],
  },
  {
    icon: Megaphone,
    title: "Copywriting & Creative",
    description:
      "Persuasive copy that speaks to your audience — from ad creatives and landing pages to email campaigns. Every word is intentional.",
    highlights: ["Ad Creatives", "UI/UX Copy", "Email Campaigns"],
  },
  {
    icon: BarChart3,
    title: "Marketing Automation",
    description:
      "Leveraging platforms like Salesforce Marketing Cloud and WhatsApp Business to build automated journeys that nurture leads and drive customer ROI.",
    highlights: ["Marketing Cloud", "WhatsApp Business", "Journey Builder"],
  },
  {
    icon: Zap,
    title: "Website & Digital Presence",
    description:
      "Overseeing website strategy from content architecture to performance optimization — ensuring your digital storefront converts visitors into advocates.",
    highlights: ["Content Architecture", "CRO", "Web Analytics"],
  },
];

const ExpertiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-24 bg-background" ref={ref}>
      <div className="container px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block"
          >
            What I Do
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
          >
            Areas of Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-muted-foreground mb-14 max-w-2xl"
          >
            I bring a full-stack marketing mindset — connecting content, SEO, social, and automation into one cohesive growth engine.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className="p-3 rounded-lg bg-accent/10 text-accent w-fit mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <area.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
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

export default ExpertiseSection;
