import { Badge } from '@/components/atoms/ui/badge.tsx'
import { NAVIGATIONS } from '@/contants/navigation.ts'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { cn } from '@/utils/cn.ts'
import { useEffect, useState } from 'react'
import { ROUTES } from '@/contants/routerEndpoint.ts'
import UserDropdown from '@/components/organisms/Global/UserDropdown.tsx'
import generateImage from '@/utils/generateAvatar.ts'
import { Button } from '@/components/atoms/ui/button.tsx'
import { useAuth } from '@/context/authContext.tsx'
import { useTranslation } from 'react-i18next'
import ChangeLanguage from '@/components/atoms/ui/ChangeLanguage.tsx'
import { AlignJustify, X } from 'lucide-react'

import { isMobile } from 'react-device-detect'

interface HeaderProps {
  classContent?: string
}

const Header = ({ classContent }: HeaderProps) => {
  const { t } = useTranslation()
  const path = useLocation()
  const navigate = useNavigate()
  const { auth } = useAuth()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])
  const [isOpen, setIsOpen] = useState(!isMobile)

  const changeOpen = () => {
    setIsOpen(!isOpen)
  }
  const onHide = () => {
    if (isMobile) {
      changeOpen()
    }
  }
  return (
    <div className={cn(' h-19  justify-between flex text-white', classContent)}>
      <div className={'flex gap-2 items-center cursor-pointer px-5 py-2'} onClick={() => navigate(ROUTES.ROOT)}>
        <img src={'/logoLL.png'} alt={'logo'} className={'w-14 h-14'} />
        <span className={'font-bold tracking-tight text-orangeTheme text-lg'}>L&L COMPANY</span>
      </div>
      <div className={cn(isMobile && 'flex justify-center items-center p-2 ')} onClick={changeOpen}>
        {isMobile && <AlignJustify />}
      </div>
      {isOpen && (
        <div
          className={cn(
            'md:flex gap-8 sm:hidden md:flex-row ',
            isMobile && 'absolute flex-col bg-orangeTheme w-full h-full z-50 items-start justify-start'
          )}
        >
          <div
            className={cn(
              'flex   md:flex-row  ',
              isMobile ? 'flex-col justify-start items-start gap-2' : 'items-center gap-6 justify-center'
            )}
          >
            {isMobile && (
              <div className={'flex p-2'} onClick={changeOpen}>
                <X size={26} />
              </div>
            )}
            <div className={cn('flex md:gap-4 md:flex-row sm:flex-col', isMobile && 'flex-col items-start')}>
              {NAVIGATIONS.map((item) => (
                <Link
                  to={item.path}
                  className={cn(
                    'flex text-center justify-center items-center font-medium cursor-pointer hover:scale-105 px-3 py-1 rounded',
                    path && path.pathname === item.path && 'bg-orangeTheme '
                  )}
                  key={item.id}
                  onClick={onHide}
                >
                  {t(item.title)}
                </Link>
              ))}
            </div>
            <Link
              to={ROUTES.CREATE_ORDER}
              onClick={onHide}
              className={cn(
                'flex gap-1 text-center backdrop-blur-sm font-medium  cursor-pointer  hover:text-orangeTheme border rounded px-2 py-1',
                path && path.pathname === ROUTES.CREATE_ORDER && 'text-orangeTheme font-semibold border-orangeTheme/60'
              )}
            >
              {t('Create order')}
            </Link>
          </div>
          <ChangeLanguage />
          <div className={cn('flex gap-2    pr-4', isMobile ? 'items-start ' : 'items-center  justify-center')}>
            {auth?.user ? (
              <div className={cn('flex gap-2 px-2 ', isMobile ? 'items-start ' : 'items-center  justify-center')}>
                <UserDropdown
                  avatar={auth?.user?.avatar ?? generateImage(auth?.user?.userName ?? '')}
                  handleChange={() => {}}
                  onHide={onHide}
                />
                <div className={'flex flex-col md:w-34'}>
                  <span className={'truncate text-sm font-semibold'}>{auth?.user?.userName}</span>
                  <Badge className={'bg-orangeTheme hover:bg-orangeTheme/60 w-fit'}>Basic</Badge>
                </div>
              </div>
            ) : (
              <Button
                className={'bg-orangeTheme w-fit hover:bg-orangeTheme/90'}
                onClick={() => {
                  onHide()
                  navigate(ROUTES.LOGIN)
                }}
              >
                Login
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
