import React from 'react'
import Image from 'next/image'

const hero = () => {
  return (
    <div>

<div className='w- h-[450px] bg-black flex items-center'>

  <div className='w-[25px] h-[400px] bg-black mx-28'></div>
  
  <div className='w-[472px] h-[356px] bg-black '>
    
  <h3 className="text-yellow-500 font-sans">Its Quick & Amusing</h3>
          
          <h1 className="text-white font-bold font-bolf sm:text-md md:text-3xl lg:text-5xl flex flex-row mt-2" > 
<div className="text-yellow-400">Th</div>e Art of Speed</h1>
          <h2 className="text-white font-bolf sm:text-md md:text-3xl lg:text-5xl pt-4">Food Quality</h2>

          <p className="text-white my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere voluptatum tempore massa conque</p>

          <button className="bg-yellow-500 sm:hidden w-190 md:block sm:px-3 md:px-7 sm:text-sm py-0 text-gray-700 rounded-full h-10 ">See Menu</button>

  </div>




  <div className='w-[877px] h-[400px] bg-black mx-5'>

  <div className="">
  <Image
                    src={"/plate.png"}
                    alt={"splate"}
                    width={600}
                    height={650}
                    className="w-[400px] h-[400px]  my-1 mx-28"
                />
               


</div>  
  </div>

</div>


    </div>
  )
}

export default hero