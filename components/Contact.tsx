"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useI18n } from '@/lib/i18n/client';

const Contact = () => {
  const t = useI18n();

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-md">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          {t('contact.title')}
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <Input type="text" placeholder={t('contact.name')} />
          <Input type="email" placeholder={t('contact.email')} />
          <Textarea placeholder={t('contact.message')} />
          <Button type="submit" className="w-full">
            {t('contact.send')}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;