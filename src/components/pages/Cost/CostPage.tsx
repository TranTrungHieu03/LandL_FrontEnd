import cost_page from "../../../assets/images/cost/cost-page.jpg"
import cost_1 from "../../../assets/images/cost/cost-price1.png"
import cost_2 from "../../../assets/images/cost/cost-price2.png"
const CostPage = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='w-full'>
        <img src={cost_page} loading={'lazy'} alt='cost-1' className='w-full object-cover h-[300px]' />
      </div>
      <div className='flex w-1/2'>
        <div className='flex flex-col gap-10 m-5'>
          <img src={cost_1} />
          <img className='mb-3' src={cost_2} />
        </div>
        {/* <TransportationPriceTable /> */}
      </div>
    </div>
  )
}

export default CostPage
