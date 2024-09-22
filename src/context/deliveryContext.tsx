import { createContext, ReactNode, useContext, useState } from 'react'
import { TOrderDetail } from '@/types/OrderDetailType.ts'

interface DeliveryContextType {
  status?: number
  setStatus: (status: number) => void
  order?: TOrderDetail | null
  setOrder: (order: TOrderDetail) => void
}

const DeliveryContext = createContext<DeliveryContextType | undefined>(undefined)

export const DeliveryProvider = ({ children }: { children: ReactNode }) => {
  const [status, setStatus] = useState<DeliveryContextType['status']>(0)
  const [order, setOrder] = useState<DeliveryContextType['order']>(null)
  return <DeliveryContext.Provider value={{ status, setStatus, order, setOrder }}>{children}</DeliveryContext.Provider>
}
export const useDelivery = () => {
  const context = useContext(DeliveryContext)
  if (!context) {
    throw new Error('useDelivery must be used within an DeliveryProvider')
  }
  return context
}
