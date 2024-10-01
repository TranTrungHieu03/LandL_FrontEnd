import { Button } from '@/components/atoms/ui/button.tsx'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/contants/routerEndpoint.ts'

const Slogan = () => {
  const navigate = useNavigate()
  return (
    <div
      className={'flex flex-col gap-10 md:w-2/3 sm:w-full  mx-auto text-white  mt-20 justify-center items-center my-10'}
    >
      <div className={'flex flex-col gap-6 justify-center items-center'}>
        <div className={' flex flex-col sm:text-4xl  md:text-[60px] font-black tracking-tight my-auto gap-4 justify-center items-center'}>
          <p className={'text-orangeTheme'}>Leopard Lorry</p>
          <p className={''}>"Leap and Lead"</p>
        </div>

        <p className={'font-medium'}>
          Welcome to Leopard Lorry - a groundbreaking sharing economy platform in the Vietnamese transportation
          industry. With 5 years of experience in the content field , we are confident to bring you a smart, efficient
          and economical transportation experience.{' '}
        </p>
      </div>
      <Button
        className={
          'w-fit rounded-md uppercase  text-md   cursor-pointer gap-2 font-bold tracking-tight bg-orangeTheme hover:bg-orangeTheme/90 px-4 py-3 flex items-center space-x-2'
        }
        onClick={() => navigate(ROUTES.CREATE_ORDER)}
      >
        Create Order
      </Button>
    </div>
  )
}

export default Slogan
