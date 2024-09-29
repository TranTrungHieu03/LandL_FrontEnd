import { StoreIcon, Users2Icon, TruckIcon } from 'lucide-react'

const navAdmin = [
  // {
  //     id: 1,
  //     title: "Home",
  //     path: "/home",
  //     icon:
  // },
  {
    id: 2,
    title: 'Trucks',
    path: 'truck',
    icon: <TruckIcon />
  },
  {
    id: 3,
    title: 'Customers',
    path: 'customer',
    icon: <Users2Icon />
  },
  {
    id: 4,
    title: 'Orders',
    path: 'order',
    icon: <StoreIcon />
  }
]

export default navAdmin
