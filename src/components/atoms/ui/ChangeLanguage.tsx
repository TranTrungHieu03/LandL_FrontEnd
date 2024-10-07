import { useTranslation } from 'react-i18next'
import { locales } from '@/i18next/i18n.ts'
import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { isMobile } from 'react-device-detect'
import { cn } from '@/utils/cn.ts'

const ChangeLanguage = () => {
  const { i18n } = useTranslation()
  const [value, setValue] = useState(false)
  console.log(locales[i18n.language as keyof typeof locales])
  const changeLanguage = () => {
    if (value) {
      i18n.changeLanguage('vi')
    } else {
      i18n.changeLanguage('en')
    }
    
  }
  useEffect(() => {
    changeLanguage()
  }, [value])
  return (
    <div onClick={() => setValue(!value)}
         className={cn('cursor-pointer flex gap-1 text-center p-2 font-medium ', isMobile ? 'items-start justify-start' : 'items-center justify-center')}>
      {value ? 'VN' : 'EN'}
      <span>
        <ChevronDown size={15} />
      </span>
    </div>
  
  )
}

export default ChangeLanguage
