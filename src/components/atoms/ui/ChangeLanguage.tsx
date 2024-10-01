import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/atoms/ui/dropdown-menu.tsx'
import { useTranslation } from 'react-i18next'
import { locales } from '@/i18next/i18n.ts'

const ChangeLanguage = () => {
  const { i18n } = useTranslation()
  console.log(locales[i18n.language as keyof typeof locales])
  const changeLanguage = (lng: 'en' | 'vi') => {
    i18n.changeLanguage(lng)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={'bg-transparent  py-2 outline-none'}>
        Change language
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className={'flex gap-2'} onClick={() => changeLanguage('vi')}>
          Tieng Viet
        </DropdownMenuItem>
        <DropdownMenuItem className={'flex gap-2'} onClick={() => changeLanguage('en')}>
          Tieng Anh
        </DropdownMenuItem>
      
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ChangeLanguage
