import ProcessHeader from '@/components/organisms/MyOrder/ProcessHeader.tsx'
// import WaitingConfirm from '@/components/organisms/MyOrder/WaitingConfirm.tsx'
import TruckInformation from '@/components/organisms/MyOrder/TruckInformation.tsx'
import { DeliveryProvider, useDelivery } from '@/context/deliveryContext.tsx'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loading from '@/components/templates/Loading.tsx'
import { getOrderDetailByOrderId } from '@/services/deliveryService.ts'
import toast from 'react-hot-toast'
import { ROUTES } from '@/contants/routerEndpoint.ts'
import { processStateEnum, ProcessStateEnumType } from '@/contants/processState.ts'
import { TOrderDetail } from '@/types/OrderDetailType.ts'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/atoms/ui/accordion.tsx'
import ProductInformation from '@/components/organisms/MyOrder/ProductInformation.tsx'
import { FlagTriangleRight, MapPin, MoveRight } from 'lucide-react'
import UpdateCustomerInformation from '@/components/organisms/MyOrder/UpdateCustomerInformation.tsx'
import WaitingConfirm from '@/components/organisms/MyOrder/WaitingConfirm.tsx'

const OrderDetailPage = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const { status, setStatus } = useDelivery()
  const getInfo = async () => {
    if (id === '' || id === undefined) {
      toast.loading('Something went wrong. Please try again.')
      navigate(ROUTES.MY_ORDER)
      return
    }
    setLoading(true)
    const response = await getOrderDetailByOrderId({ id })
    
    setLoading(false)
    if (response.success) {
      const data: TOrderDetail = response?.result?.data[0]
      const currentStatus = data?.status as ProcessStateEnumType
      setStatus(processStateEnum[currentStatus])
    } else {
      toast.error(response?.result?.message as string)
    }
  }
  useEffect(() => {
    getInfo()
  }, [id])
  return (
    <DeliveryProvider>
      {loading && <Loading />}
      <div className={'flex flex-col gap-4 mb-8'}>
        <ProcessHeader />
        {status === 1 && <WaitingConfirm />}
        <div className={'grid grid-cols-2 mx-14 gap-8'}>
          <div className={'col-span-2 flex items-center justify-center'}>
            <div className={'flex gap-2 overflow-ellipsis'}>
              <div className={'flex gap-1'}>
                <FlagTriangleRight strokeWidth={2} className={'text-orangeTheme'} />
                <p>147 Hoang Huu Nam, Tan Phu</p>
              </div>
              <MoveRight strokeWidth={1} />
              <div className={'flex gap-1'}>
                <MapPin strokeWidth={2} className={'text-orangeTheme'} />
                <p>147 Hoang Huu Nam, Tan Phu</p>
              </div>
            </div>
          </div>
          <div className={'col-span-2 mx-8'}>
          
            
          </div>
        </div>
        <Accordion type="multiple"  className="mx-14 " defaultValue={["item-0", "item-1", "item-2"]}>
          {status === 1 && <AccordionItem value="item-0">
            <AccordionTrigger><p className={'font-medium text-md '}>
              Delivery information
            </p></AccordionTrigger>
            <AccordionContent>
              <UpdateCustomerInformation />
            </AccordionContent>
          </AccordionItem>}
          {status === 1 && <AccordionItem value="item-2">
            <AccordionTrigger><p className={'font-medium text-md '}>
              Product information
            </p></AccordionTrigger>
            <AccordionContent>
              <ProductInformation />
            </AccordionContent>
          </AccordionItem>}
          {status === 1 && <AccordionItem value="item-1">
            <AccordionTrigger><p className={'font-medium text-md '}>
              Driver & Truck information
            </p></AccordionTrigger>
            <AccordionContent>
              <TruckInformation />
            </AccordionContent>
          </AccordionItem>}
        
        
        </Accordion>
        {/*<MapCustom />*/}
      </div>
    </DeliveryProvider>
  )
}

export default OrderDetailPage
