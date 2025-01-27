"use client"

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function MinistrySection() {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto relative"
        >
          {/* Floating Elements */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -right-20 top-0 w-40 h-40 border border-primary/20 rounded-full"
          />
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -left-10 bottom-0 w-20 h-20 border border-primary/30 rounded-full"
          />

          {/* Content */}
          <div className="relative z-10 grid md:grid-cols-[1.5fr,1fr] gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold"
                >
                  Our Ministry
                </motion.h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that ministry is the heart of our church experience. It's where 
                  growth happens, relationships are built, and lives are changed. Our ministries 
                  are designed to help you connect with others just like you, learn more about 
                  God, and find your unique place in our church family.
                </p>
              </div>

              <p className="text-xl font-medium">
                No matter where you are in life, there's a place for you here to connect, 
                grow, and serve.
              </p>

              <motion.button
                whileHover={{ x: 10 }}
                className="group flex items-center gap-2 text-primary font-medium"
              >
                Join Our Ministry
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>

            {/* Right Decorative Grid */}
            <div className="hidden md:grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="aspect-square bg-background rounded-lg shadow-lg p-6 flex items-center justify-center"
                >
                  <div className="w-full h-full rounded-md border-2 border-primary/10" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 