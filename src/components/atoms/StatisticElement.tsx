import { ReactNode } from 'react'
import { Plus } from 'lucide-react'

interface StatisticElementProps {
  content: string
  icon: ReactNode
  data: number
  isMore: boolean
}
const StatisticElement = ({ content, icon, data, isMore }: StatisticElementProps) => {
  
  const words = content.split(' ');
  return (
    <div className={'flex gap-2 items-center justify-center'}>
      <div className={'flex  gap-2 items-center justify-center'}>
        <div className={'text-[60px] font-black text-orangeTheme flex'}>
          {data}
          
        </div>
      </div>
      <div className={'flex flex-col'}>
        {words.map((word, index) => (
          <p key={index} className={'uppercase text-lg tracking-tight font-bold'}>
            {word}
          </p>
        ))}
      </div>
    </div>
  )
}

export default StatisticElement
