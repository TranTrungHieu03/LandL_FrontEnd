import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UpdateInfoSchema, UpdateInfoType } from '@/schemas/userSchema.ts'
import { Form } from '@/components/atoms/ui/form.tsx'
import FormInput from '@/components/molecules/FormInput.tsx'
import { Button } from '@/components/atoms/ui/button.tsx'
import { useDelivery } from '@/context/deliveryContext.tsx'
import { useState } from 'react'
import { updateDeliveryInformation } from '@/services/deliveryService.ts'
import toast from 'react-hot-toast'
import Loading from '@/components/templates/Loading.tsx'

const UpdateCustomerInformation = () => {
  const { order } = useDelivery()
  const [loading, setLoading] = useState<boolean>(false)
  const form = useForm<UpdateInfoType>({
    resolver: zodResolver(UpdateInfoSchema),
    defaultValues: {
      receiverPhone: '',
      receiverName: '',
      senderName: '',
      senderPhone: ''
    }
  })
  console.log("??????????????",order)
  form.setValue('orderDetailId', order?.orderDetailId.toString() ?? '0')
  form.setValue('deliveryInfoId', order?.deliveryInfoId.toString() ?? '0')
  const onSubmit: SubmitHandler<UpdateInfoType> = async (data: UpdateInfoType) => {
    setLoading(true)
    const response = await updateDeliveryInformation({ data })
    setLoading(false)
    if (response.success) {
      toast.success(response?.result?.message as string)
    } else {
      toast.error(response?.result?.message as string)
    }
  }
  return (
    <div className={'mt-6 mx-4'}>
      {loading && <Loading />}
      {!order?.deliveryInfoDetail?.receiverName ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className={'grid grid-cols-2 gap-y-4 gap-x-8'}>
              <FormInput name={'senderName'} form={form} placeholder={'Ex: Tran Van A'} classContent={'col-span-1'} />
              <FormInput name={'receiverName'} form={form} placeholder={'Ex: Tran Van A'} classContent={'col-span-1'} />
              <FormInput
                name={'senderPhone'}
                form={form}
                placeholder={'Ex: 0823 645 654'}
                classContent={'col-span-1'}
              />
              <FormInput
                name={'receiverPhone'}
                form={form}
                placeholder={'Ex: 0823 645 654'}
                classContent={'col-span-1'}
              />
              <div className={'ml-auto col-span-2'}>
                <Button
                  className={'bg-orangeTheme w-fit hover:bg-orangeTheme/90'}
                  type={'submit'}
                  disabled={form.formState.isSubmitting}
                >
                  Save
                </Button>
              </div>
            </div>
          </form>
        </Form>
      ) : (
        <div className={'grid grid-cols-2 '}>
          <div className={'col-span-1'}>
            <p className={'font-medium '}>Sender</p>
            <div className={'grid grid-cols-5'}>
              <span className={'col-span-1 font-medium'}>Name:</span>
              <p className={'col-span-4'}>Tran Trung Hieu</p>
            </div>
            <div className={'grid grid-cols-5'}>
              <span className={'col-span-1 font-medium'}>Phone Number:</span>
              <p className={'col-span-4'}>0843 384 374</p>
            </div>
          </div>
          <div className={'col-span-1'}>
            <p className={'font-medium'}>Receiver</p>
            <div className={'grid grid-cols-5'}>
              <span className={'col-span-1 font-medium'}>Name:</span>
              <p className={'col-span-4'}>Nguyen Thao Huyen</p>
            </div>
            <div className={'grid grid-cols-5'}>
              <span className={'col-span-1 font-medium'}>Phone Number:</span>
              <p className={'col-span-4'}>0349 746 477</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UpdateCustomerInformation
