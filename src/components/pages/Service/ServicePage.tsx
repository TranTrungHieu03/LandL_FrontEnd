import SearchElement from '@/components/organisms/Service/SearchElement.tsx'
import bgHome from '@/assets/images/home/storage.jpg'

const ServicePage = () => {
  return (
    <div
      className={' h-[600px] bg-cover py-10 flex items-center justify-center '}
      style={{
        backgroundImage: `url(${bgHome})`
      }}
    >
      <SearchElement />
    </div>
  )
}

export default ServicePage
