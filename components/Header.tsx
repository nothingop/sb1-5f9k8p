"use client"

import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import LanguageToggle from './LanguageToggle';
import { useI18n } from '@/lib/i18n/client';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useI18n();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="py-6">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t('title')}</h1>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </Button>
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;