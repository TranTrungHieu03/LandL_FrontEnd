import { Badge } from '@/components/atoms/ui/badge.tsx'
import { NAVIGATIONS } from '@/contants/navigation.ts'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { cn } from '@/utils/cn.ts'
import { useEffect } from 'react'
import { ROUTES } from '@/contants/routerEndpoint.ts'
import UserDropdown from '@/components/organisms/Global/UserDropdown.tsx'
import generateImage from '@/utils/generateAvatar.ts'
import { Button } from '@/components/atoms/ui/button.tsx'
import { useAuth } from '@/context/authContext.tsx'

interface HeaderProps {
  classContent?: string
}

const Header = ({ classContent }: HeaderProps) => {
  const path = useLocation()
  const navigate = useNavigate()
  const { auth } = useAuth()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])
  return (
    <div className={cn('bg-transparent px-5 h-19 py-2 justify-between flex text-white', classContent)}>
      <div className={'flex gap-2 items-center backdrop-blur-lg cursor-pointer'} onClick={() => navigate(ROUTES.ROOT)}>
        <img src={'/logoLL.png'} alt={'logo'} className={'w-14 h-14'} />
        <span className={'font-black tracking-tight text-orangeTheme text-lg'}>L&L COMPANY</span>
      </div>
      <div className={'flex items-center gap-8'}>
        <div className={'flex md:gap-6'}>
          {NAVIGATIONS.map((item) => (
            <Link
              to={item.path}
              className={cn(
                'flex text-center font-normal cursor-pointer hover:scale-105 hover:font-semibold',
                path && path.pathname === item.path && 'text-orangeTheme font-semibold'
              )}
              key={item.id}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <Link
          to={ROUTES.CREATE_ORDER}
          className={cn(
            'flex gap-1 text-center backdrop-blur-lg font-normal cursor-pointer  hover:text-orangeTheme border rounded px-2 py-1',
            path && path.pathname === ROUTES.CREATE_ORDER && 'text-orangeTheme font-semibold border-orangeTheme/60'
          )}
        >
          Create order
        </Link>
        {auth?.user ? (
          <div className={'flex gap-2 items-center'}>
            <UserDropdown
              avatar={auth?.user?.avatar ?? generateImage(auth?.user?.userName ?? '')}
              handleChange={() => {}}
            />
            <div className={'flex flex-col md:w-30'}>
              <span className={'truncate text-sm font-semibold'}>{auth?.user?.userName}</span>
              <Badge className={'bg-orangeTheme hover:bg-orangeTheme/60 w-fit'}>Basic</Badge>
            </div>
          </div>
        ) : (
          <Button className={'bg-orangeTheme w-fit hover:bg-orangeTheme/90'} onClick={() => navigate(ROUTES.LOGIN)}>
            Login
          </Button>
        )}
      </div>
    </div>
  )
}

export default Header
