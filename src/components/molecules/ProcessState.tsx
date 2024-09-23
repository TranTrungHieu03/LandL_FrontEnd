import { Check } from 'lucide-react'
import { cn } from '@/utils/cn.ts'

interface Props {
  title: string
  id: number
  length: number
  status: number
}

const ProcessState = ({ title, id, length, status }: Props) => {
  return (
    <div className={'col-span-1 relative flex flex-col h-20 justify-center items-center'}>
      <div className={'absolute w-full z-20 flex flex-col justify-center items-center'}>
        <p className={'sm:transform sm:translate-x-20 sm:translate-y-10 md:transform-none'}>{title}</p>
        <div className={'flex w-full mt-2 justify-center items-center'}>
          <div
            className={cn(
              '  rounded-full  w-8 h-8 p-1 flex justify-center items-center',
              status >= id && ' bg-orangeTheme',
              // status === id && 'bg-darkTheme outline outline-orangeTheme outline-2',
              status < id && 'bg-darkTheme '
            )}
          >
            {status >= id && <Check className={'text-white'} size={26} />}
            {/*{status === id && <span className={'bg-orangeTheme w-2 h-2 rounded-full '}></span>}*/}
          </div>
        </div>
        {id < length && (
          <span
            className={cn(
              'md:w-4/5 z-0 md:h-1 transform md:translate-x-[62%] md:-translate-y-4 sm:w-1 sm:h-12 ',
              status > id ? 'bg-orangeTheme' : 'bg-slate-300'
            )}
          ></span>
        )}
      </div>
    </div>
  )
}

export default ProcessState
