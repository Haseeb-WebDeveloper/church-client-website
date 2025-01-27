"use client"

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-24 relative overflow-hidden border border-border">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-[1fr,2px,1fr] gap-12">
            {/* Left Column */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-7xl font-bold tracking-tight">
                About
                <span className="text-primary block">Us</span>
              </h2>
              <div className="w-24 h-2 bg-primary/20 rounded-full" />
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="hidden md:block bg-border/50 rounded-full"
            />

            {/* Right Column */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <p className="text-xl leading-relaxed text-muted-foreground">
                We are a vibrant and inclusive community of faith dedicated to loving God, 
                loving people, and making a difference in our world. Our journey is rooted 
                in the timeless truths of the Bible, the power of prayer, and the 
                transforming grace of Jesus Christ.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 