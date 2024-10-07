import bgHome from '@/assets/images/home/global.jpg'
import { ArrowUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Fast = () => {
  const { t } = useTranslation()
  return (
    <div className='relative bg-cover bg-center w-full h-[300px]  items-center justify-center flex flex-col'>
      <div
        style={{
          backgroundImage: `url(${bgHome})`
        }}
        className='absolute inset-0 bg-cover bg-center z-0  '
      ></div>

      <div className={'relative z-10 items-center justify-center flex flex-col'}>
        <div className=' bg-white p-3 rounded-full'>
          <ArrowUp size={26} className='text-blue-800' strokeWidth={1} />
        </div>
        <p className={'uppercase text-[56px] font-black text-white p-2 tracking-tighter'}>{t('global')} </p>
      </div>
    </div>
  )
}

export default Fast
