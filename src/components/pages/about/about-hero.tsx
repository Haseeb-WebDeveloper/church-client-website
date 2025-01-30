"use client"

import { motion } from "framer-motion";
import { Cross } from "lucide-react";

const beliefs = [
  "We believe in the Triune God—Father, Son, and Holy Spirit—whose love and grace are the foundation of our faith.",
  "We believe in the authority of the Bible as God's inspired Word, guiding us in our beliefs and actions.",
  "We believe in salvation through Jesus Christ, who offers forgiveness, redemption, and eternal life to all who believe in Him."
];

export function AboutHero() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/about-hero.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Our Church
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We invite you to join us for worship, fellowship, and service. Whether you're 
              exploring Christianity for the first time or looking for a faith community 
              to call home, you are welcome here.
            </p>
          </motion.div>

          {/* Beliefs Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-background rounded-2xl p-6 h-full border border-border/50 hover:border-primary/20 transition-colors group">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Cross className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {belief}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 