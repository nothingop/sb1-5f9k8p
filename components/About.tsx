"use client"

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n/client';

const About = () => {
  const t = useI18n();

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          {t('about.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-center max-w-2xl mx-auto"
        >
          {t('about.content')}
        </motion.p>
      </div>
    </section>
  );
};

export default About;