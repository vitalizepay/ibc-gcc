import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "New Year Business Mixer",
    date: "January 15, 2026",
    time: "7:00 PM - 10:00 PM",
    location: "Burj Al Arab, Dubai",
    type: "Networking",
  },
  {
    title: "Startup Pitch Night",
    date: "January 28, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "DIFC, Gate Village",
    type: "Investment",
  },
  {
    title: "Women in Business Summit",
    date: "February 8, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Madinat Jumeirah",
    type: "Conference",
  },
];

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-gold font-medium tracking-widest text-sm uppercase mb-4 block">
              Upcoming
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-semibold text-foreground">
              Featured Events
            </h2>
          </div>
          <Button variant="outline" className="group">
            View All Events
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300"
            >
              <div className="h-2 bg-primary group-hover:bg-gold transition-colors duration-300" />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full mb-4">
                  {event.type}
                </span>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  {event.title}
                </h3>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <Button variant="ghost" className="mt-6 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Register Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;