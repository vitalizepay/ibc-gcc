import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 gradient-hero" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium tracking-widest text-sm uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-semibold text-primary-foreground mb-6">
              Ready to Join Our Circle?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Take the first step towards expanding your business network. 
              Reach out to us and discover the benefits of being part of 
              Dubai's most dynamic Indian business community.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-primary-foreground/90">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Email</p>
                  <p className="font-medium">info@ibcdubai.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-primary-foreground/90">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Phone</p>
                  <p className="font-medium">+971 4 XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-primary-foreground/90">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Location</p>
                  <p className="font-medium">Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-background rounded-2xl p-8 shadow-card"
          >
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
              Send us a message
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="bg-secondary border-0" />
                <Input placeholder="Last Name" className="bg-secondary border-0" />
              </div>
              <Input placeholder="Email Address" type="email" className="bg-secondary border-0" />
              <Input placeholder="Company Name" className="bg-secondary border-0" />
              <Textarea 
                placeholder="Tell us about your business and interests..." 
                className="bg-secondary border-0 min-h-[120px] resize-none"
              />
              <Button variant="default" size="lg" className="w-full group">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;