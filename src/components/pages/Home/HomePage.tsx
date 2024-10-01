import StatisticLine from '@/components/organisms/Home/StatisticLine.tsx'
import TheWayToUseWeb from '@/components/organisms/Home/TheWayToUseWeb.tsx'
import FaqLine from '@/components/organisms/Home/FAQLine.tsx'
import { Separator } from '@/components/atoms/ui/separator.tsx'
import TrustLine from '@/components/organisms/Home/TrustLine.tsx'
import { useAuth } from '@/context/authContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/contants/routerEndpoint'

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
      <div className={'absolute top-0 md:w-2/3 transform -translate-y-20'}>
        <StatisticLine />
      </div>
      {/*<AboutUsLine />*/}
      <TheWayToUseWeb />

      <Separator />
      <FaqLine />
      <TrustLine />
    </div>
  )
}

export default HomePage
