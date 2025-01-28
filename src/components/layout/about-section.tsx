"use client"

import { motion } from "framer-motion";
import { Heart, Cross, Book } from "lucide-react";

const beliefs = [
  {
    icon: Heart,
    title: "Our Community",
    description: "We are a vibrant and inclusive community of faith dedicated to loving God, loving people, and making a difference in our world.",
    color: "bg-rose-500/10",
    iconColor: "text-rose-500"
  },
  {
    icon: Cross,
    title: "Our Faith",
    description: "We believe in the Triune God—Father, Son, and Holy Spirit—whose love and grace are the foundation of our faith.",
    color: "bg-blue-500/10",
    iconColor: "text-blue-500"
  },
  {
    icon: Book,
    title: "Our Foundation",
    description: "We believe in the authority of the Bible as God's inspired Word, guiding us in our beliefs and actions.",
    color: "bg-emerald-500/10",
    iconColor: "text-emerald-500"
  }
];

export function AboutSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-8"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4"
          >
            About Us
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Our Journey of Faith
          </h2>
          <p className="text-lg text-muted-foreground">
            Our journey is rooted in the timeless truths of the Bible, the power of prayer, 
            and the transforming grace of Jesus Christ.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => {
              const Icon = belief.icon;
              return (
                <motion.div
                  key={belief.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="relative z-10 h-full bg-background rounded-2xl p-8 shadow-lg border border-border/50 hover:border-primary/20 transition-all duration-300">
                    <div className={`w-14 h-14 ${belief.color} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={`w-7 h-7 ${belief.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {belief.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {belief.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </motion.div>
              );
            })}
          </div>

          {/* Salvation Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center max-w-3xl mx-auto"
          >
            <p className="text-lg font-medium text-primary">
              &ldquo;We believe in salvation through Jesus Christ, who offers forgiveness, 
              redemption, and eternal life to all who believe in Him.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 