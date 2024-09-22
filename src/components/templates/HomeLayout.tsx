import Header from '@/components/organisms/Global/Header.tsx'
import Footer from '@/components/organisms/Global/Footer.tsx'
import Slogan from '@/components/organisms/Home/Slogan.tsx'
import HomePage from '@/components/pages/Home/HomePage.tsx'

const HomeLayout = () => {
  return (
    <div>
      <div className={"bg-[url('/bg-home.png')] bg-cover bg-center w-full h-[700px]"}>
        <Header />
        <Slogan />
      </div>
      <HomePage />
      <Footer />
    </div>
  )
}

export default HomeLayout
