import StatisticLine from '@/components/organisms/Home/StatisticLine.tsx'
import TheWayToUseWeb from '@/components/organisms/Home/TheWayToUseWeb.tsx'
import FaqLine from '@/components/organisms/Home/FAQLine.tsx'
import { Separator } from '@/components/atoms/ui/separator.tsx'
import { useAuth } from '@/context/authContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/contants/routerEndpoint'
import GetAQuote from '@/components/organisms/Home/GetAQuote.tsx'
import Fast from '@/components/organisms/Home/Fast.tsx'
import Global from '@/components/organisms/Home/Global.tsx'

const HomePage = () => {
  const { auth } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (auth.user?.roleID == 1) {
      navigate(ROUTES.DASH_BOARD + 'truck')
    }
  }, [])
  return (
    <div className={'flex flex-col items-center justify-center relative'}>
      <div className={'absolute top-0 md:w-3/5 sm:w-full sm:mx-4 transform  -translate-y-1/2 '}>
        <StatisticLine />
      </div>
      {/*<AboutUsLine />*/}
      <TheWayToUseWeb />
      <GetAQuote />
      <Fast />
      <Global />
      <Separator />
      <FaqLine />
    </div>
  )
}

export default HomePage
