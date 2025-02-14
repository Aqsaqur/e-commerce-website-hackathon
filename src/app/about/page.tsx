import Image from "next/image";

export default function About() {
  return ( 

        <main className="bg-white">
          <div className="w-full  h-[250px] bg-black" >
                <div className="relative ">
                  <Image
                          src="/menu1.jpeg"
                          alt="Post"
                          width={1024} height={550}
                          className=" w-full h-full bg-yellow-500" 
                        />
                        <h1 className="text-4xl font-bold text-white absolute top-[50%] left-[50%]  transform translate-y-[-50%] ">About Us</h1>
                        <h3 className="  text-white absolute top-[65%] left-[52%]  transform translate-y-[-50%] ">Home :  <span className="text-yellow-500">About</span> </h3>
          
                  
                </div>
                </div>

                        {/* faq table */}
<div className="w-[1320px] h-[702px] bg-white mx-20 my-10" >

<div className="w-[771px] h-[88px] bg-white mx-60 flex flex-col" > 
  <h1 className="text-4xl font-bold text-center" >Questions Looks Here</h1>
  <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </h5>
</div>
<div className="w-[1320px] h-[558px] bg-white  my-7 flex"  >

<div className="px-7">  
  <div className="w-[600px] h-[170px] bg-[#FAF7F2] rounded-md m-2">
    <h1 className=" font-bold p-5 text-2xl">How we serve food?</h1>
    <h1 className=" px-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</h1>
  </div>
  
  <div className="w-[600px] h-[170px] bg-[#FAF7F2] rounded-md m-2">
    <h1 className=" font-bold p-5 text-2xl">How is our food quality?</h1>
    <h1 className=" px-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</h1>
  </div>
  <div className="w-[600px] h-[170px] bg-[#FAF7F2] rounded-md m-2">
    <h1 className=" font-bold p-5 text-2xl">How do we give home delivery?</h1>
    <h1 className=" px-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</h1>
  </div></div>


<div>  <div className="w-[600px] h-[170px] bg-[#FAF7F2] rounded-md m-2">
    <h1 className=" font-bold p-5 text-2xl">How can we get in touch with you?</h1>
    <h1 className=" px-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</h1>
  </div>
  
  <div className="w-[600px] h-[170px] bg-[#FAF7F2] rounded-md m-2">
    <h1 className=" font-bold p-5 text-2xl">What will be delivered? And When?</h1>
    <h1 className=" px-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</h1>
  </div>
  <div className="w-[600px] h-[170px] bg-[#FAF7F2] rounded-md m-2">
    <h1 className=" font-bold p-5 text-2xl">Is this restaurant 24 hours open?</h1>
    <h1 className=" px-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</h1>
  </div></div>

  
  
   </div>
  
</div>
    
                </main>

  );
}