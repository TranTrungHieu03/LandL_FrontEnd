import { STEPS_USE_WEB } from '@/contants/stepUseWeb.ts'
import { cn } from '@/utils/cn.ts'
import { CalendarClock, Check } from 'lucide-react'
import redLineImage from '../../../assets/images/home/red-line.jpg' // Placeholder for the second image
import greenTruckImage from '../../../assets/images/home/truck-green.jpg' // Placeholder for the third image
import storageImage from '../../../assets/images/home/storage.jpg'
import StatisticElement from '@/components/atoms/StatisticElement.tsx'
import { useTranslation } from 'react-i18next' // Placeholder for the fourth image

const TheWayToUseWeb = () => {
  const { t } = useTranslation()
  return (
    <div className={'grid md:grid-cols-10 w-full h-fit mt-20 py-3'}>
      <div className={'md:col-span-6 p-2 md:pl-24'}>
        <div className={'grid grid-cols-2 gap-1 rounded-3xl overflow-hidden'}>
          <div className={'relative bg-slate-100 capitalize flex justify-center items-center'}>
            <StatisticElement
              content={'Year of establishment'}
              icon={<CalendarClock size={28} />}
              data={2024}
              isMore={true}
            />
          </div>
          <div className={'relative'}>
            <img src={storageImage} alt='Storage' className={'w-full h-[200px] object-cover'} />
          </div>
          <div className={'relative'}>
            <img src={greenTruckImage} alt='Green Truck' className={'w-full h-[200px] object-cover'} />
          </div>
          <div className={'relative'}>
            <img src={redLineImage} alt='Red Line' className={'w-full h-[200px] object-cover'} />
          </div>
        </div>
      </div>

      <div className={'md:col-span-4 p-4'}>
        <p className={'text-[30px] font-black'}>{t('How to use our service?')}</p>
        <div className={'flex flex-col gap-y-1 justify-center'}>
          {STEPS_USE_WEB.map((step) => (
            <div key={step.id} className={'flex gap-2 py-1 rounded'}>
              <div>
                <Check className={'text-orangeTheme'} />
              </div>
              <div className={cn('flex flex-col gap-1 px-4')}>
                <p className={'font-semibold'}>
                  {t('Step')} {step.id}
                </p>
                <p>{t(step.content)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TheWayToUseWeb
