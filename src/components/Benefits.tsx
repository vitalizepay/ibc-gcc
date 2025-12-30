import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Network, Calendar, Award, BookOpen, Globe, Briefcase } from "lucide-react";

const benefits = [
  {
    icon: Network,
    title: "Exclusive Networking",
    description: "Connect with 500+ business leaders and entrepreneurs at private events.",
  },
  {
    icon: Calendar,
    title: "Premium Events",
    description: "Access to monthly meetups, galas, and industry-specific conferences.",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Get featured and celebrated for your business achievements.",
  },
  {
    icon: BookOpen,
    title: "Learning Sessions",
    description: "Workshops and masterclasses led by industry experts and thought leaders.",
  },
  {
    icon: Globe,
    title: "Global Connections",
    description: "Bridge to business opportunities across UAE, India, and beyond.",
  },
  {
    icon: Briefcase,
    title: "Business Matching",
    description: "Curated introductions to potential partners, investors, and clients.",
  },
];

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="py-24 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest text-sm uppercase mb-4 block">
            Membership
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-semibold text-foreground mb-6">
            Why Join IBC Dubai?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Unlock a world of opportunities with exclusive access to Dubai's most 
            influential Indian business community.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background rounded-xl p-6 shadow-elegant hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;