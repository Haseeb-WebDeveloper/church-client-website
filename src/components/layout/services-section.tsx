"use client"

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    day: "Sundays",
    events: [
      { time: "10:00 A.M", name: "Sunday School" },
      { time: "10:45 A.M", name: "Breakfast & Fellowship" },
      { time: "11:00 A.M", name: "Praise & Worship Service" },
    ],
    color: "from-orange-500/20 to-transparent",
    accent: "bg-orange-500/20"
  },
  {
    day: "Tuesday",
    events: [{ time: "7:30 P.M", name: "Prayer Service" }],
    color: "from-blue-500/20 to-transparent",
    accent: "bg-blue-500/20"
  },
  {
    day: "Wednesday",
    events: [{ time: "7:30 P.M", name: "Bible Study" }],
    color: "from-green-500/20 to-transparent",
    accent: "bg-green-500/20"
  }
];

export function ServicesSection() {
  const [activeDay, setActiveDay] = useState(services[0].day);
  const activeService = services.find(s => s.day === activeDay);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10 space-y-3"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Church Services</h2>
          <p className="text-muted-foreground">
            We invite you to join us in worship and fellowship. Our services are designed 
            to celebrate God&apos;s love, explore His Word, and inspire your spiritual journey.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[280px,1fr] gap-6">
            {/* Left Side - Days Navigation */}
            <div className="space-y-2">
              {services.map((service) => (
                <motion.button
                  key={service.day}
                  onClick={() => setActiveDay(service.day)}
                  className={`w-full text-left p-3 rounded-lg border transition-all duration-300 group
                    ${activeDay === service.day 
                      ? 'bg-background shadow-lg border-primary/20' 
                      : 'bg-background/50 hover:bg-background border-border/50'}`}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg ${service.accent} flex items-center justify-center`}>
                        <Calendar className="w-4 h-4 text-foreground" />
                      </div>
                      <span className="font-medium">{service.day}</span>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-all duration-300
                      ${activeDay === service.day ? 'opacity-100' : 'opacity-0 -translate-x-2'}`} 
                    />
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Right Side - Events Display */}
            <div className="relative bg-background rounded-xl border border-border/50 overflow-hidden">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${activeService?.color} opacity-50`} />
              
              {/* Content */}
              <div className="relative p-6">
                <motion.div
                  key={activeDay}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {activeService?.events.map((event, index) => (
                    <motion.div
                      key={event.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group flex items-start gap-3 p-3 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300"
                    >
                      <div className={`w-10 h-10 rounded-lg ${activeService.accent} flex items-center justify-center`}>
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium mb-0.5">
                          {event.name}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {event.time}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 