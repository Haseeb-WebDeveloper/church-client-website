'use client'

import { motion } from "framer-motion";
import Image from "next/image";

export function PastorSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ">
              <Image
                src="/section-2-img-01.png"
                alt="Pastor Hugues Balde"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500 object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/5 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-sm uppercase tracking-wider text-primary font-medium">
                Meet Our Pastor
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold">
                Who is Pastor Hugues Balde?
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground">
              Pastor Hugues is a family man with three children. He is also an 
              Electrical Engineer with over ten years of engineering experience.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">
                  Years of Engineering Experience
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">
                  Beautiful Children
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 