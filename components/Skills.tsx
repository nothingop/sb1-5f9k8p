"use client"

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { useI18n } from '@/lib/i18n/client';

const Skills = () => {
  const t = useI18n();
  const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL'];

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          {t('skills.title')}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
              {skill}
            </Badge>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;