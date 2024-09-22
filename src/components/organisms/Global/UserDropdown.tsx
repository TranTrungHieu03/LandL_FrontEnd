import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/atoms/ui/dropdown-menu.tsx'
import UserAvatar from '@/components/atoms/UserAvatar.tsx'
import { LogOut, Truck, UserPen } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/contants/routerEndpoint.ts'
import { useAuth } from '@/context/authContext.tsx'

interface UserDropdownProps {
  avatar: string
  handleChange: () => void
}

const UserDropdown = ({ avatar, handleChange }: UserDropdownProps) => {
  const navigate = useNavigate()
  const { setAuth } = useAuth()
  const handleLogout = () => {
    localStorage.clear()
    handleChange()
    setAuth({ user: undefined })
    navigate(ROUTES.ROOT)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={'rounded-full outline-none'}>
        <UserAvatar avatar={avatar} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuItem className={'flex gap-2'} onClick={() => navigate(ROUTES.PROFILE)}>
          <UserPen strokeWidth={2} size={20} />
          <span>My Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className={'flex gap-2'} onClick={() => navigate(ROUTES.MY_ORDER)}>
          <Truck strokeWidth={2} size={20} />
          <span>My Order</span>
        </DropdownMenuItem>
        <DropdownMenuItem className={'flex gap-2'} onClick={handleLogout}>
          <LogOut strokeWidth={2} size={20} />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown
