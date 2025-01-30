"use client"

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const englishStatements = [
  "We believe the Bible to be the infallible written Word of God, inspired by God Himself.",
  "We believe that there is only One God, who is equally and eternally existent in three persons: God the Father, God the Son, and God the Holy Spirit.",
  "We believe in the blessed hope, which is the rapture of the Church of God in Christ, upon His return and glorious appearing.",
  "We believe that the only means of being cleansed from all sin is through repentance and faith in the precious blood of Jesus Christ.",
  "We believe that regeneration by the Holy Ghost is absolutely essential for personal salvation.",
  "We believe that the redemptive work of Jesus Christ on the cross provides healing for the human body in answer to faithful prayer.",
  "We believe that according to 1 Corinthians 1:18, \"the message of the cross is foolishness to those who are perishing, but to us who are being saved it is the power of God.\""
];

const frenchStatements = [
  "Nous croyons que la Bible, composée de l'Ancien et du Nouveau Testament, est la Parole inspirée et infaillible de Dieu, et qu'elle fait autorité (Matthieu 5:18; 2 Timothée 3:16-17).",
  "Nous croyons en un seul Dieu, qui est Créateur de toutes choses (Deutéronome 6:4; Colossiens 1:16).",
  "Nous croyons en la déité de Jésus-Christ. Il est Dieu incarné, Dieu sous forme humaine, l'image exacte du Père."
];

export function StatementOfFaith() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Statement of Faith
            </h2>
            <div className="flex justify-center gap-4">
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                onClick={() => setLanguage('en')}
              >
                English
              </Button>
              <Button
                variant={language === 'fr' ? 'default' : 'outline'}
                onClick={() => setLanguage('fr')}
              >
                Français
              </Button>
            </div>
          </motion.div>

          {/* Statements */}
          <div className="grid gap-4">
            {(language === 'en' ? englishStatements : frenchStatements).map((statement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-lg p-6 border border-border/50"
              >
                <p className="text-muted-foreground leading-relaxed">
                  {statement}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 