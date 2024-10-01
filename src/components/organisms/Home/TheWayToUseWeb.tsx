import { STEPS_USE_WEB } from '@/contants/stepUseWeb.ts'
import { cn } from '@/utils/cn.ts'
import { Check } from 'lucide-react'

const TheWayToUseWeb = () => {
  return (
    <div className={'grid md:grid-cols-10 w-full h-fit mt-20 py-3'}>
      <div className={'md:col-span-6 p-2'}></div>
      <div className={'md:col-span-4'}>
        <p className={'text-[50px] font-black text-orangeTheme'}>How to use our service? </p>
        <div className={'flex flex-col gap-y-1 justify-center '}>
          {STEPS_USE_WEB.map((step) => (
            <div key={step.id} className={'flex gap-2  py-1 rounded '}>
              <div>
                <Check className={'text-orangeTheme'} />{' '}
              </div>
              <div className={cn('flex flex-col gap-1 px-4  ')}>
                <p className={'font-semibold'}>Step {step.id}</p>
                <p>{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TheWayToUseWeb
