"use client"

import { motion } from "framer-motion";
import { Users, Baby, Globe, Users2 } from "lucide-react";

const ministries = [
  {
    title: "CHILDREN MINISTRY",
    description: "Welcome to our Children's Ministry, where kids encounter God's love, grow in their faith, and have fun learning about Jesus! We're dedicated to providing a safe, nurturing, and engaging environment for children to discover the joy of following Jesus and building lifelong friendships.",
    icon: Baby,
    color: "bg-pink-500/10",
    iconColor: "text-pink-500",
    image: "/children-ministry.jpg"
  },
  {
    title: "FAMILY MINISTRY",
    description: "Welcome to our Family Ministry, where families grow together in faith, love, and community. We're committed to supporting and equipping families as they navigate life's joys and challenges, fostering strong relationships and a deep connection with God.",
    icon: Users,
    color: "bg-blue-500/10",
    iconColor: "text-blue-500",
    image: "/family-ministry.jpg"
  },
  {
    title: "GLOBAL MISSION",
    description: "Welcome to our Global Mission initiative, where we are committed to making a positive impact around the world. Through partnerships, outreach programs, and missions trips, we seek to share God's love, bring hope, and make a difference in the lives of people globally.",
    icon: Globe,
    color: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    image: "/global-mission.jpg"
  },
  {
    title: "WOMEN MINISTRY",
    description: "Welcome to our Women's Ministry, a place where women can grow, connect, and thrive in their faith journey. Our ministry is designed to empower women of all ages to deepen their relationship with God, build meaningful friendships, and make a difference in our community.",
    icon: Users2,
    color: "bg-purple-500/10",
    iconColor: "text-purple-500",
    image: "/women-ministry.jpg"
  }
];

export function MinistryCards() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon;
            return (
              <motion.div
                key={ministry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  {/* Image Background */}
                  <div className="absolute inset-0">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${ministry.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="relative p-8 min-h-[320px] flex flex-col">
                    <div className={`w-14 h-14 ${ministry.color} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className={`w-7 h-7 ${ministry.iconColor}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {ministry.title}
                    </h3>
                    
                    <p className="text-white/80 leading-relaxed">
                      {ministry.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 