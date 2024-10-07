import { STATISTICS } from '@/contants/statistic.tsx'
import StatisticElement from '@/components/atoms/StatisticElement.tsx'

const StatisticLine = () => {
  return (
    <div className={' flex gap-10 w-full justify-center md:py-6 sm:py-4 px-2 rounded-full  bg-white shadow-md '}>
      {STATISTICS.map((item) => (
        <StatisticElement content={item.content} icon={item.icon} data={item.data} isMore={item.isMore} key={item.id} />
      ))}
    </div>
  )
}

export default StatisticLine
