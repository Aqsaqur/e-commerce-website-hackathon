import React from 'react'
import Image from 'next/image'
import x1 from "../../../public/x1.png"
import x2 from "../../../public/x2.png"
import x3 from "../../../public/x3.png"
import x4 from "../../../public/x4.png"

const meetchef = () => {
  return (
    <div>



    <div className='w-[1320] h-[488px] bg-black'>

    <h1 className="text-[20px] md:text-[50px] font-bold whitespace-nowrap   text-center text-white">
    <span className="text-[#FF9F0D]">Me</span >et Our Chef
  </h1>
  <div className=" flex mx-28"> 
        <div> <Image src={x1} alt="About Us Image 3" className="pt-[40px] px-5" /></div>
        <div> <Image src={x2} alt="About Us Image 3" className="pt-[40px] px-5" /></div>
        <div> <Image src={x3} alt="About Us Image 3" className="pt-[40px] px-5" /></div>
        <div> <Image src={x4} alt="About Us Image 3" className="pt-[40px] px-5" /></div>
       



    </div>



    </div>


    

</div>

  )
}

export default meetchef