import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Manish has a rare ability to blend creative storytelling with data-driven strategy. His content initiatives consistently delivered measurable growth for our digital channels.",
    name: "Former Colleague",
    title: "Marketing Leader, BFSI",
  },
  {
    quote:
      "Working with Manish transformed our content approach. He doesn't just write — he builds systems that scale. Our organic traffic saw significant improvement under his leadership.",
    name: "Team Member",
    title: "Digital Marketing, Insurance",
  },
  {
    quote:
      "His understanding of SEO and content strategy is exceptional. Manish brings structure, clarity, and a business-first mindset to every project he touches.",
    name: "Collaborator",
    title: "Product & Marketing",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 bg-card" ref={ref}>
      <div className="container px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block text-center"
          >
            Recommendations
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-14 text-center"
          >
            What People Say
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.12 }}
                className="relative bg-background rounded-xl p-6 shadow-soft border border-border/50 flex flex-col"
              >
                <Quote className="w-8 h-8 text-accent/20 mb-4 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1 italic">
                  "{item.quote}"
                </p>
                <footer className="border-t border-border pt-4">
                  <p className="font-display font-bold text-foreground">
                    {item.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.title}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center text-sm text-muted-foreground mt-10"
          >
            These are representative testimonials. Connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/manish-shanbhag/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              LinkedIn
            </a>{" "}
            to see full recommendations.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
