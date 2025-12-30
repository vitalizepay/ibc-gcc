import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Target, Handshake } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Community",
    description: "Building a strong network of Indian professionals and entrepreneurs in Dubai.",
  },
  {
    icon: Target,
    title: "Growth",
    description: "Fostering personal and professional development through shared knowledge.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "Creating meaningful partnerships that drive mutual success.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest text-sm uppercase mb-4 block">
            About Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-semibold text-foreground mb-6">
            Empowering Indian Business Leaders in Dubai
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The Indian Business Circle (IBC) is a premier networking platform bringing together 
            visionary entrepreneurs, industry leaders, and ambitious professionals from the 
            Indian diaspora in Dubai. We create opportunities for meaningful connections, 
            knowledge exchange, and collaborative growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;