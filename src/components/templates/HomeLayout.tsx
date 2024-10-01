import Header from '@/components/organisms/Global/Header.tsx';
import Footer from '@/components/organisms/Global/Footer.tsx';
import Slogan from '@/components/organisms/Home/Slogan.tsx';
import HomePage from '@/components/pages/Home/HomePage.tsx';
import bgHome from '../../assets/images/home/bg-home.jpg';

const HomeLayout = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgHome})`,
        }}
        className="bg-cover bg-center w-full h-[700px] rounded-bl-[200px] rounded-br-[200px]"
      >
        <Header />
        <Slogan />
      </div>
      <HomePage />
      <Footer />
    </div>
  );
};

export default HomeLayout;
