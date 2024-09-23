export const processState = [
  {
    id: 1,
    title: 'Processing'
  },
  {
    id: 2,
    title: 'In Process'
  },
  {
    id: 3,
    title: 'Paid'
  },
  {
    id: 4,
    title: 'In Route'
  },
  {
    id: 5,
    title: 'Received'
  },
  {
    id: 6,
    title: 'Delivered'
  },
  {
    id: 7,
    title: 'Completed'
  }
]

export enum processStateEnum {
  'Processing' = 1,
  'InProcess' = 2,
  'Paid' = 3,
  'InRoute' = 4,
  'Received' = 5,
  'Delivered' = 6,
  'Completed' = 7
}
export type ProcessStateEnumType = keyof typeof processStateEnum
