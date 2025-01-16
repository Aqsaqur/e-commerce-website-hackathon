import Common from '@/component/common';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white text-white">
      <Common title='Home' subtitle='Main'/>
      <div className="container mx-auto py-16 px-4 z-20 text-black">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">The Art of Speed Food Quality</h1>
          <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.</p>
          <button className="bg-[#FF9F0D] text-white font-bold py-2 px-4 rounded">
            View Menu
          </button>
          {/* <div className='md:max-w-[680px] h-[410px] w-full' style={{ backgroundImage: "url('/home.png')"}}></div> */}
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
