import { Button } from '@/components/atoms/ui/button.tsx'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/contants/routerEndpoint.ts'
import { useTranslation } from 'react-i18next'

const Slogan = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <div
      className={'flex flex-col gap-10 md:w-2/3 sm:w-full  mx-auto text-white  mt-20 justify-center items-center my-10'}
    >
      <div className={'flex flex-col gap-6 justify-center items-center'}>
        <div
          className={
            ' flex flex-col md:text-[60px] xs:text-[40px] font-black tracking-tight my-auto gap-4 justify-center items-center'
          }
        >
          <p className={'text-orangeTheme'}>Leopard Lorry</p>
          <p className={''}>"{t('Leap and Lead')}"</p>
        </div>

        <p className={'font-medium text-center md:text-md sm:text-sm'}>{t('ContentBanner')}</p>
      </div>
      <Button
        className={
          'w-fit rounded-md capitalize  md:text-md  sm:text-sm cursor-pointer gap-2 font-bold tracking-tight bg-orangeTheme hover:bg-orangeTheme/90 px-4 py-3 flex items-center space-x-2'
        }
        onClick={() => navigate(ROUTES.CREATE_ORDER)}
      >
        {t('Create order')}
      </Button>
    </div>
  )
}

export default Slogan
