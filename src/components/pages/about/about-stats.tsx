"use client"

import { motion } from "framer-motion";
import { Users, GraduationCap, Heart, Church } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { 
    label: "Joyful fellowship", 
    value: 2832,
    icon: Users,
    color: "bg-blue-500/10",
    iconColor: "text-blue-500",
    suffix: "+"
  },
  { 
    label: "Educational Programs", 
    value: 8213,
    icon: GraduationCap,
    color: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    suffix: ""
  },
  { 
    label: "Community Engagement", 
    value: 658,
    icon: Heart,
    color: "bg-rose-500/10",
    iconColor: "text-rose-500",
    suffix: "+"
  },
  { 
    label: "Service Attendance", 
    value: 11298,
    icon: Church,
    color: "bg-purple-500/10",
    iconColor: "text-purple-500",
    suffix: ""
  }
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function AboutStats() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Growing Community
            </h2>
            <div className="h-1 w-20 bg-primary/50 mx-auto rounded-full" />
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-background rounded-xl p-8 text-center border border-border/50 hover:border-primary/20 transition-all duration-300">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                      <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-border/50`}>
                        <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                      </div>
                    </div>

                    <div className="mt-6 space-y-2">
                      <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                        <Counter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 