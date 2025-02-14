import React from 'react'
import Image from 'next/image'
import o1 from "../../../public/o1.png"
import o2 from "../../../public/o2.png"
import o3 from "../../../public/o3.png"
import o4 from "../../../public/o4.png"


const fooditem = () => {
  return (
    <div>



        <div className='w-[1320] h-[488px] bg-black'>

        <h1 className="text-[20px] md:text-[50px] font-bold whitespace-nowrap   text-center text-white">
        <span className="text-[#FF9F0D]">Ch</span >oose Food Item
      </h1>
      <div className=" flex mx-28"> 
            <div> <Image src={o1} alt="About Us Image 3" className="pt-[40px] px-5" /></div>
            <div> <Image src={o2} alt="About Us Image 3" className="pt-[40px] px-5" /></div>
            <div> <Image src={o3} alt="About Us Image 3" className="pt-[40px] px-5" /></div>
            <div> <Image src={o4} alt="About Us Image 3" className="pt-[40px] px-5" /></div>
           



        </div>



        </div>


        

    </div>
  )
}

export default fooditem