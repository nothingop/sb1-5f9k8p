"use client"

import { useI18n } from '@/lib/i18n/client';

const Footer = () => {
  const t = useI18n();

  return (
    <footer className="bg-background py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} {t('title')}. {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;