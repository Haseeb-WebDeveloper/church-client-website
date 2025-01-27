"use client"

import { motion } from "framer-motion";
import { Users, Baby, Music, Users2, Heart, Mic2 } from "lucide-react";

const ministries = [
  {
    name: "KIDS",
    icon: Baby,
    description: "We preach inspirational sermons on a wide range of themes and topics on Holy Spirit, Spirit-filled life, etc.",
    color: "bg-pink-500/10",
    iconColor: "text-pink-500"
  },
  {
    name: "MEN",
    icon: Users,
    description: "Our ministries provide sensible solutions for the people. We are committed to helping others.",
    color: "bg-blue-500/10",
    iconColor: "text-blue-500"
  },
  {
    name: "CHOIR",
    icon: Mic2,
    description: "We conduct events every weekend. Make a part of it and help us to change the earth into a wonderful place to live for everyone.",
    color: "bg-purple-500/10",
    iconColor: "text-purple-500"
  },
  {
    name: "WOMEN",
    icon: Users2,
    description: "We preach inspirational sermons on a wide range of themes and topics on Holy Spirit, Spirit-filled life, etc.",
    color: "bg-rose-500/10",
    iconColor: "text-rose-500"
  },
  {
    name: "FEEDING",
    icon: Heart,
    description: "Our ministries provide sensible solutions for the people. We are committed to helping others.",
    color: "bg-red-500/10",
    iconColor: "text-red-500"
  },
  {
    name: "MUSIC",
    icon: Music,
    description: "We conduct events every weekend. Make a part of it and help us to change the earth into a wonderful place to live for everyone.",
    color: "bg-indigo-500/10",
    iconColor: "text-indigo-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export function MinistrySection() {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto relative"
        >
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold"
            >
              Our Ministry
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              We believe that ministry is the heart of our church experience. It&apos;s where 
              growth happens, relationships are built, and lives are changed.
            </motion.p>
          </div>

          {/* Ministry Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {ministries.map((ministry) => {
              const Icon = ministry.icon;
              return (
                <motion.div
                  key={ministry.name}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group relative bg-background rounded-xl p-6 shadow-lg border border-border/50 hover:border-primary/20 transition-colors duration-300"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-lg ${ministry.color} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${ministry.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {ministry.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {ministry.description}
                    </p>
                  </div>

                  {/* <div className="mt-4 flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div> */}

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-xl">
                    <div className={`absolute top-[-.5px] right-[-.5px] w-[1px] h-[1px] ${ministry.color} blur-[2px]`} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 