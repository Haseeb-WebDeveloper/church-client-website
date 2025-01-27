"use client"

import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

const contactInfo = [
  { 
    icon: MapPin, 
    text: "123 Church Street, City, State 12345",
    href: "https://maps.google.com"
  },
  { 
    icon: Phone, 
    text: "(555) 123-4567",
    href: "tel:+15551234567"
  },
  { 
    icon: Mail, 
    text: "contact@church.com",
    href: "mailto:contact@church.com"
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="space-y-6">
              {/* <Link href="/" className="block">
                <h3 className="text-xl font-bold">Church Name</h3>
              </Link> */}
              
              <div className="space-y-3">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{item.text}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-6 md:text-right">
              <div className="flex gap-4 md:justify-end">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -3 }}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="sr-only">{social.label}</span>
                    </motion.a>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm text-muted-foreground"
              >
                © {new Date().getFullYear()} Church Name. <br />
                All rights reserved.
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 