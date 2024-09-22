import { SubmitHandler, useForm } from 'react-hook-form'
import FormInput from '@/components/molecules/FormInput.tsx'
import { UpdateProductSchema, UpdateProductType } from '@/schemas/productSchema.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/atoms/ui/form.tsx'
import { Button } from '@/components/atoms/ui/button.tsx'

const ProductInformation = () => {
  const form = useForm<UpdateProductType>({
    resolver: zodResolver(UpdateProductSchema),
    defaultValues: {
      productName: '',
      productDescription: ''
    }
  })
  const onSubmit: SubmitHandler<UpdateProductType> = async (data: UpdateProductType) => {
    console.log(data)
  }
  return (
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
          <p className={'col-span-3'}>1000 pounds</p>
        </div>
        <div className={'grid grid-cols-4 col-span-1'}>
          <span className={'col-span-1 font-medium'}>Total dimension:</span>
          <p className={'col-span-3'}>1000 pounds</p>
        </div>
      </div>
    </div>
  )
}

export default ProductInformation
