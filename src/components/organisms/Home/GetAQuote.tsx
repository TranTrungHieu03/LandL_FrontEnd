import bgHome from '@/assets/images/home/photorealistic-scene-with-warehouse-logistics-operations.jpg'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/atoms/ui/button.tsx'
import { useTranslation } from 'react-i18next'

const GetAQuote = () => {
  const { t } = useTranslation()
  return (
    <div className='relative bg-cover bg-center w-full h-[300px]  items-center justify-center flex flex-col'>
      <div
        style={{
          backgroundImage: `url(${bgHome})`
        }}
        className='absolute inset-0 bg-cover bg-center filter blur-[5px] z-0'
      ></div>

      <div className={'relative z-10 items-center justify-center flex flex-col'}>
        <div className=' bg-white p-3 rounded-full'>
          <ArrowDown size={26} className='text-blue-800' strokeWidth={1} />
        </div>
        <p className={'uppercase text-[56px] font-black text-white p-2 tracking-tighter'}>{t('safe')} </p>
        <p className={'text-white pb-2'}>
          relative bg-cover bg-center w-full h-[300px] items-center justify-center flex flex-col
        </p>
        <Button className={'bg-orangeTheme hover:bg-orangeTheme/90'}>{t('getQuote')}</Button>
      </div>
    </div>
  )
}

export default GetAQuote
