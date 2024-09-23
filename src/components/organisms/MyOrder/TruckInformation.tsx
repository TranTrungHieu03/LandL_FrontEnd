import { Star } from 'lucide-react'
import { Separator } from '@/components/atoms/ui/separator.tsx'
import { TOrderDetail } from '@/types/OrderDetailType.ts'
interface Props {
  order: TOrderDetail | null
}
const TruckInformation = ({ order }: Props) => {
  console.log(order)
  return (
    <div className={'flex  flex-col p-4'}>
      {/*<p className={'uppercase font-semibold text-orangeTheme text-lg justify-start my-2'}>Truck information</p>*/}
      <div className={'grid grid-cols-2 gap-4'}>
        <div className={'cols-span-1 px-4 gap-4 flex justify-center items-center'}>
          <img src={'https://github.com/shadcn.png'} alt={''} className={'w-20 h-20 rounded-md'} />
          <div className={'cols-span-1 px-4 gap-4'}>
            <p className={'col-span-2'}>Do Minh Nghĩa</p>
            <p className={'col-span-2'}>04847 76 3623</p>
          </div>
        </div>
        <div className={'cols-span-2'}>
          <div className={'flex justify-between'}>
            <p className={'font-medium text-xl'}>Ventom car</p>
            <div className={'flex gap-2 border border-1 border-orangeTheme px-3 py-1 rounded-full'}>
              <Star className={'text-orangeTheme '} size={24} strokeWidth={'2'} />
              <p className={'font-semibold'}>4.5</p>
            </div>
          </div>
          <Separator className={'my-3'} />

          <div className={'flex flex-col gap-3'}>
            <div className={'grid grid-cols-3'}>
              <p className={'col-span-1 font-medium'}>Payload Capacity</p>
              <p className={'col-span-2'}>3,000 pounds</p>
            </div>
            <div className={'grid grid-cols-3'}>
              <p className={'col-span-1  font-medium'}>Truck Dimensions</p>
              <p className={'col-span-2'}>130cm x 170cm x 130cm</p>
            </div>
            <div className={'grid grid-cols-3'}>
              <p className={'col-span-1  font-medium'}>Type of truck</p>
              <p className={'col-span-2'}>Box truck</p>
            </div>
            <div className={'grid grid-cols-3'}>
              <p className={'col-span-1  font-medium'}>Number of plate</p>
              <p className={'col-span-2'}>69GD-367328</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TruckInformation
