"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const groups = [
  {
    id: 1,
    name: "Group A",
    image: "/slider-image-1.png",
    description: "Join our vibrant community of believers"
  },
  {
    id: 2,
    name: "Group B",
    image: "/slider-image-2.png",
    description: "Experience fellowship and spiritual growth"
  },
  {
    id: 3,
    name: "Group C",
    image: "/slider-image-3.png",
    description: "Connect, learn, and grow together"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function GroupsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-8 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Our Groups</h2>
          <p className="text-muted-foreground text-center text-xl font-bold font-mono">
            Bato a Gen Plas Pou Tout Moun, Monte Vit Avan Pòt la Fèmen.
          </p>
        </motion.div>

        {/* Groups Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-8xl mx-auto"
        >
          {groups.map((group, index) => (
            <motion.div
              key={group.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`group relative overflow-hidden ${
                index === 1 ? 'md:transform md:-translate-y-8' : ''
              }`}
            >
              {/* Card Content */}
              <div className="relative bg-background rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
                {/* Image */}
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={group.image}
                    alt={group.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-[calc(100%-4rem)] group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white">
                    {group.name}
                  </h3>
                 
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full border-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
                <div className="absolute top-4 left-4 w-2 h-2 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 