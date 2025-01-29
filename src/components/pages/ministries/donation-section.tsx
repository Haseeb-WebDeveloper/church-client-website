"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";

export function DonationSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/donate.jpeg"
                alt="Donation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              DONATION
            </h2>
            <p className="text-lg text-muted-foreground">
              Your generosity helps us continue our mission of spreading God&apos;s love, 
              serving our community, and making a difference in the world. Thank you 
              for partnering with us in ministry!
            </p>
            <Button
              size="lg"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Heart className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Donate Now
              </span>
              <div className="absolute inset-0 bg-primary-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 