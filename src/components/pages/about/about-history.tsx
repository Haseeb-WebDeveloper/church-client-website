"use client"

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutHistory() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/church-history.png"
                  alt="Church History"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/5 rounded-full -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground">
                The church "Eglise Bateau de l'Evangile de Jésus Christ" is a community 
                church that opened for service on August 31, 2014. It mainly consists 
                of members of the Haitian community living in Tallahassee.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Even though we primarily use both the Haitian Creole and French-based 
                languages, we also have teaching, worshiping, and preaching in English 
                for the kids and the youth who do not understand the Haitian Creole 
                and French languages.
              </p>

              <p className="text-lg text-muted-foreground">
                As Christians, worship is central to our life in the church. When we 
                gather for praise and worship services, prayers, and other God-fearing 
                activities in the church, we are reminded of our covenant and relationship 
                with God and the saving work of Jesus Christ.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 