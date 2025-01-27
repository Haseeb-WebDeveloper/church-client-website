"use client"

import { motion } from "framer-motion";
import { Send, Heart, Lock } from "lucide-react";
import { useState } from "react";

export function PrayerSection() {
  const [message, setMessage] = useState("");

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium"
                >
                  Prayer Request
                </motion.div>
              </div>
              
              <h2 className="text-3xl md:text-6xl font-bold leading-tight">
                Let Us Pray <br />
                <span className="text-primary">Together</span>
              </h2>

              <p className="text-muted-foreground">
                At our church, we believe in the power of prayer. Whether you are facing 
                a challenge, seeking guidance, or wishing to express gratitude, we are 
                here to support you through prayer.
              </p>

              <p className="text-muted-foreground">
                Our community is committed to lifting each other up and sharing in each 
                other's joys and struggles.
              </p>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="text-sm">Caring Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" />
                  <span className="text-sm">Confidential</span>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-background rounded-2xl p-6 shadow-lg border border-border/50">
                <h3 className="text-lg font-semibold mb-4">
                  Share Your Prayer Request
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">
                      Your Name (Optional)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-muted/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">
                      Prayer Request
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors min-h-[120px] resize-none"
                      placeholder="Share your prayer request..."
                    />
                  </div>
                  <button className="w-full bg-primary text-primary-foreground rounded-lg px-4 py-2.5 font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group">
                    Send Request
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-xs text-center text-muted-foreground">
                    Your request will be handled with compassion and confidentiality
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 