import { STEPS_USE_WEB } from '@/contants/stepUseWeb.ts';
import { cn } from '@/utils/cn.ts';
import { Check } from 'lucide-react';
import driverImage from "../../../assets/images/login/1-01.jpg"; // Placeholder for the first image
import redLineImage from "../../../assets/images/home/red-line.jpg"; // Placeholder for the second image
import greenTruckImage from "../../../assets/images/home/truck-green.jpg"; // Placeholder for the third image
import storageImage from "../../../assets/images/home/storage.jpg"; // Placeholder for the fourth image

const TheWayToUseWeb = () => {
  return (
    <div className={'grid md:grid-cols-10 w-full h-fit mt-20 py-3'}>
      {/* Left Section with Images */}
      <div className='col-span-1'></div>
      <div className={'md:col-span-5 p-2'}>
        <div className={'grid grid-cols-2 gap-1 rounded-lg overflow-hidden'}>
          {/* Image Placeholders */}
          <div className={'relative'}>
            <img src={storageImage} alt="Storage" className={'w-full h-[200px] object-cover'} />
          </div>
          <div className={'relative'}>
            <img src={greenTruckImage} alt="Green Truck" className={'w-full h-[200px] object-cover'} />
          </div>
          <div className={'relative'}>
            <img src={redLineImage} alt="Red Line" className={'w-full h-[200px] object-cover'} />
          </div>
          <div className={'relative'}>
            <img src={driverImage} alt="Driver" className={'w-full h-[200px] object-cover'} />
          </div>
        </div>
      </div>

      {/* Right Section with Steps */}
      <div className={'md:col-span-4 p-4'}>
        <p className={'text-[30px] font-black'}>How to use our service?</p>
        <div className={'flex flex-col gap-y-1 justify-center'}>
          {STEPS_USE_WEB.map((step) => (
            <div key={step.id} className={'flex gap-2 py-1 rounded'}>
              <div>
                <Check className={'text-orangeTheme'} />
              </div>
              <div className={cn('flex flex-col gap-1 px-4')}>
                <p className={'font-semibold'}>Step {step.id}</p>
                <p>{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TheWayToUseWeb;
