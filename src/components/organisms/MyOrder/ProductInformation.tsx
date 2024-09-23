import { SubmitHandler, useForm } from 'react-hook-form'
import FormInput from '@/components/molecules/FormInput.tsx'
import { UpdateProductSchema, UpdateProductType } from '@/schemas/productSchema.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/atoms/ui/form.tsx'
import { Button } from '@/components/atoms/ui/button.tsx'
import { useEffect, useState } from 'react'
import { updateProductInformation } from '@/services/deliveryService.ts'
import Loading from '@/components/templates/Loading.tsx'
import toast from 'react-hot-toast'
import { cn } from '@/utils/cn.ts'
import { Input } from '@/components/atoms/ui/input.tsx'
import formatLabel from '@/utils/formatLabel.ts'
import { TOrderDetail } from '@/types/OrderDetailType.ts'

interface Props {
  order: TOrderDetail | null
  setIsUpdatedOrder: () => void
}

const ProductInformation = ({ order, setIsUpdatedOrder }: Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [isUpdated, setIsUpdated] = useState<boolean>(false)
  const form = useForm<UpdateProductType>({
    resolver: zodResolver(UpdateProductSchema),
    defaultValues: {
      productName: '',
      productDescription: '',
      image: undefined
    }
  })
  form.setValue('orderDetailId', order?.orderDetailId.toString() ?? '0')
  const onSubmit: SubmitHandler<UpdateProductType> = async (values: UpdateProductType) => {
    setLoading(true)
    const data = new FormData()
    data.append('productName', values.productName)
    data.append('productDescription', values.productDescription)
    data.append('orderDetailId', values.orderDetailId)
    if (values.image) {
      data.append('image', values.image)
    }
    const response = await updateProductInformation({ data })
    setLoading(false)
    if (response.success) {
      setIsUpdated(true)
      toast.success(response?.result?.message as string)
      setIsUpdatedOrder()
    } else {
      toast.error(response?.result?.message as string)
    }
  }
  useEffect(() => {}, [form.formState.isSubmitting])
  return (
    <div className={'flex flex-col mt-6 px-4'}>
      {loading && <Loading />}
      {!isUpdated && order?.productInfo?.productName === null ? (
        <div className={'flex flex-col mt-6 px-4'}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={'w-full flex flex-col gap-y-3'}>
              <div className={'grid grid-cols-2  gap-x-2 gap-y-4'}>
                <FormInput
                  name={'productName'}
                  form={form}
                  placeholder={'Ex: Item name'}
                  classContent={'col-span-1'}
                  autoFocus
                />
                <FormInput
                  name={'productDescription'}
                  form={form}
                  placeholder={'Ex: Item description'}
                  classContent={'col-span-1'}
                />
                <FormField
                  control={form.control}
                  name={'image'}
                  render={({ field }) => (
                    <FormItem className={cn('relative col-span-1')}>
                      <FormControl>
                        <Input
                          className='bg-white'
                          type='file'
                          accept='.jpg, .jpeg, .png'
                          onChange={(event) => field.onChange(event.target.files ? event.target.files[0] : null)}
                        />
                      </FormControl>
                      <FormLabel className='absolute font-normal bg-white blur-10 w-fit px-2 -top-5 py-1 rounded left-3 peer-focus:font-semibold'>
                        {formatLabel('image')}
                      </FormLabel>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className={'ml-auto col-span-2'}>
                  <Button
                    className={'bg-orangeTheme w-fit hover:bg-orangeTheme/90'}
                    type={'submit'}
                    disabled={form.formState.isSubmitting}
                  >
                    Update
                  </Button>
                </div>
              </div>
            </form>
          </Form>
          <div className={'grid grid-cols-2  gap-x-2 gap-y-4 pl-4'}>
            <div className={'grid grid-cols-4 col-span-1'}>
              <span className={'col-span-1 font-medium'}>Total Weight:</span>
              <p className={'col-span-3'}>{order?.productInfo?.weight}</p>
            </div>
            <div className={'grid grid-cols-4 col-span-1'}>
              <span className={'col-span-1 font-medium'}>Total dimension:</span>
              <p className={'col-span-3'}>{order?.productInfo?.totalDismension} (m)</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={'grid grid-cols-2  gap-x-2 gap-y-4 pl-4'}>
          <div className={'col-span-1'}>
            <div className={'grid grid-cols-4 '}>
              <span className={'col-span-1 font-medium'}>Product name</span>
              <p className={'col-span-3'}>{order?.productInfo?.productName}</p>
            </div>
            <div className={'grid grid-cols-4 '}>
              <span className={'col-span-1 font-medium'}>Product description</span>
              <p className={'col-span-3'}>{order?.productInfo?.productDescription}</p>
            </div>
            <div className={'grid grid-cols-4 '}>
              <span className={'col-span-1 font-medium'}>Total Weight:</span>
              <p className={'col-span-3'}>{order?.productInfo?.weight}</p>
            </div>
            <div className={'grid grid-cols-4 '}>
              <span className={'col-span-1 font-medium'}>Total dimension:</span>
              <p className={'col-span-3'}>{order?.productInfo?.totalDismension} (m)</p>
            </div>
          </div>
          <div className={'col-span-1'}>
            <img src={order?.productInfo?.image  loading={'lazy'} alt={''} className={'col-span-1 w-1/2 h-40 object-cover'} />
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductInformation
