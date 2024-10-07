import { Separator } from '@/components/atoms/ui/separator.tsx'
import { Clock, Mail, Phone } from 'lucide-react'
import red_truck from '../../../assets/images/home/red-truck.jpg'
import { Button } from '@/components/atoms/ui/button.tsx'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${red_truck})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      className={' text-white mt-4 md:px-20 py-5 text-sm sm:px-4'}
    >
      <div className={' flex justify-between items-center border-b  '}>
        <div>
          <p className={'text-4xl tracking-tight capitalize  font-bold'}>
            <span className={'text-orangeTheme'}>Reach your destination</span> 100% sure and safe
          </p>
          <p className={'text-lg'}>We will take care of your chemicals and deliver them safe and on time</p>
        </div>
        <Button className={'bg-orangeTheme hover:bg-orangeTheme/90 rounded-md  tracking-tight w-fit p-3 '}>
          Request a quote
        </Button>
      </div>
      <div className={'flex gap-8 justify-between flex-wrap pt-4'}>
        <div className={'flex gap-2 items-center px-8'}>
          <img src={'/logoLL.png'} alt={'logo'} className={'w-28 h-28'} loading={'lazy'} />
          <div className={'flex flex-col'}>
            <span className={'font-black tracking-tight text-orangeTheme text-lg'}>L&L COMPANY</span>
            <span className={'text-wrap'}>L&L Tower, District 1, Ho Chi Minh City, Viet Nam.</span>
          </div>
        </div>
        <div className={'flex flex-col justify-center gap-4'}>
          <div className={'flex gap-8 text-center justify-center'}>
            <span>
              <Link to={'/home'}>Home</Link>
            </span>
            <span>
              <Link to={'/create-order'}>Service</Link>
            </span>
            <span>
              <Link to={'/cost'}>Cost Estimate</Link>
            </span>
            <span>
              <Link to={'/about-us'}>About us</Link>
            </span>
          </div>
          <Separator className={'mb-4'} />
          <div className={'flex gap-4 justify-center'}>
            <div className={'py-2'}>
              <div className={'flex gap-2 py-1'}>
                <Phone className={'text-orangeTheme'} />
                <span>+91 9221212192</span>
              </div>
              <div className={'flex gap-2 py-1'}>
                <Mail className={'text-orangeTheme'} />
                <span>L&Lcompany@gmail.com</span>
              </div>
            </div>
            <Separator orientation={'vertical'} />
            <div className={'flex gap-2 py-1'}>
              <Clock className={'text-orangeTheme'} />
              <span>
                Mon to Sat <br />
                09:30am to 06:00pm
              </span>
            </div>
          </div>
        </div>
      </div>
      <Separator className={'mt-4'} />
      <div className={'text-center pt-3'}>
        <span className={'text-xl'}>&copy;</span> 2024 Copyrights Allrights reserved by{' '}
        <span className={'font-semibold text-orangeTheme'}> L&L company</span>
      </div>
    </div>
  )
}

export default Footer
