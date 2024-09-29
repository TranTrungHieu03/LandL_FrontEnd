import { Maximize2Icon, Minimize2Icon, LogOutIcon, UserRound } from 'lucide-react'

import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { cn } from '@/utils/cn.ts'
import navAdmin from '@/contants/sidebarItems.tsx'
import { useAuth } from '@/context/authContext'
import { ROUTES } from '@/contants/routerEndpoint'

const SidebarContext = createContext<{ expanded: boolean; setActiveItem: (item: string) => void } | null>(null)
const Sidebar = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const activePath = useLocation()
  const [activeItem, setActiveItem] = useState<string>(activePath.pathname)
  const [expanded, setExpanded] = useState<boolean>(true)

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setAuth({ user: undefined })
    navigate(ROUTES.ROOT)
  }

  return (
    <aside className={'h-screen'}>
      <div className={'h-full flex flex-col bg-white border-r'}>
        <div className={'p-2 flex justify-between items-center'}>
          <button
            className={cn(
              'p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-orange-600 font-black overflow-hidden transition-all duration-1000',
              expanded ? 'w-40 opacity-100' : 'w-0 opacity-0'
            )}
            style={{ transition: 'width 0.5s ease, opacity 0.5s ease' }}
          >
            L&L Dashboard
          </button>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className={'flex justify-center items-center transition-all duration-1000'}
          >
            {expanded ? (
              <Minimize2Icon size={20} />
            ) : (
              <span className={'py-2 px-2'}>
                <Maximize2Icon size={20} />
              </span>
            )}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded, setActiveItem }}>
          <ul className={'flex-1 px-3'}>
            {navAdmin.map((item) => (
              <SidebarItem
                key={item.id}
                title={item.title}
                path={item.path}
                icon={item.icon}
                active={activeItem === item.path}
              />
            ))}
          </ul>
        </SidebarContext.Provider>

        {/* log out */}
        {/* Logout Button */}
        <div
          onClick={handleLogout}
          className={cn(
            'font-semibold leading-4 transition-all duration-1000 cursor-pointer bg-gradient-to-tr from-orange-600 to-orange-300 p-2 rounded-md flex items-center justify-start mx-3'
          )}
        >
          <span>
            <LogOutIcon />
          </span>
          <span className={cn('overflow-hidden  transition-all', expanded ? 'w-53 mx-3 opacity-100' : 'hidden')}>Logout</span>
        </div>

        {/* Test Text */}
        <div className={'flex justify-center items-center py-4 px-2 w-full'}>
          {/* <img src={GenerateImage(auth?.user ?? "DRAFT")} alt='avatar' className={"w-10 h-10 rounded-md "} /> */}
          <div
            className={cn(
              'flex items-center justify-start cursor-pointer font-semibold leading-4 transition-all duration-1000 bg-gradient-to-tr from-orange-600 to-orange-300 p-2 rounded-md text-black w-full mx-1'
            )}
          >
            <span>
              <UserRound />
            </span>
            <span className={cn('overflow-hidden  transition-all', expanded ? 'w-53 mx-3 opacity-100' : 'hidden')}>
              {/* {auth.user} */} Admin Info
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
}
const SidebarItem = ({
  title,
  active,
  icon,
  path
}: {
  title: string
  active: boolean
  icon: ReactNode
  path: string
}) => {
  const { expanded, setActiveItem } = useContext(SidebarContext)!
  return (
    <Link to={path}>
      <li
        className={cn(
          'relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group',
          active
            ? 'bg-gradient-to-tr from-orange-600 to-orange-300 text-black '
            : 'hover:border-indigo-50 text-black'
        )}
        onClick={() => setActiveItem(path)}
      >
        {icon}
        <span className={cn('overflow-hidden  transition-all', expanded ? 'w-52 ml-3 ' : 'hidden')}>{title}</span>
        {!expanded && (
          <div
            className={
              'absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all duration-1000 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0'
            }
          >
            {title}
          </div>
        )}
      </li>
    </Link>
  )
}
export default Sidebar
