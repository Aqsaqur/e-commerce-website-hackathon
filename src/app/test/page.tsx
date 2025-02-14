import Image from "next/image"


export default function Test(){
    return(
        <>
        
        <div className="w-full  h-[250px] bg-green-500" >
      <div className="relative ">
        <Image
                src="/menu1.jpeg"
                alt="Post"
                width={1024} height={550}
                className=" w-full h-full bg-yellow-500" 
              />
              <h1 className="text-4xl font-bold text-white absolute top-[50%] left-[50%]  transform translate-y-[-50%] ">Our Menu</h1>
              <h3 className="  text-white absolute top-[65%] left-[52%]  transform translate-y-[-50%] ">Home :  <span className="text-yellow-500">Menu</span> </h3>

        
      </div>
      

      
      </div>
        </>

    )
}