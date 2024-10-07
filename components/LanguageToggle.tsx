"use client"

import { useRouter, usePathname } from 'next/navigation'
import { useCurrentLocale } from '@/lib/i18n/client'
import { Button } from '@/components/ui/button'
import { LanguagesIcon } from 'lucide-react'

const LanguageToggle = () => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useCurrentLocale()

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en'
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPathname)
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleLanguage}>
      <LanguagesIcon />
    </Button>
  )
}

export default LanguageToggle