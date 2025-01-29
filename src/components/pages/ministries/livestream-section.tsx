"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function LivestreamSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              WATCH LIVESTREAM
            </h2>
            <p className="text-lg text-muted-foreground">
              Join us live as we gather together virtually to worship, pray, and study 
              God&apos;s Word. Whether youre unable to attend in person or joining us from 
              around the world, we&apos;re excited to connect with you online.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Watch Live
              </span>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-video rounded-md overflow-hidden">
              <iframe
                    src="https://www.youtube.com/embed/e0Klhp1sdRg?si=8888888888888888"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 