import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Card2 from "../components/card2";


export default function Chef() {
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
                    <h1 className="text-4xl font-bold text-white absolute top-[50%] left-[50%]  transform translate-y-[-50%] ">Our Chef</h1>
                    <h3 className="  text-white absolute top-[65%] left-[52%]  transform translate-y-[-50%] ">Home :  <span className="text-yellow-500">Chef</span> </h3>
      
              
            </div>
            </div>
            
<div className="w-[1180px] h-[1550px] bg-white mx-56 flex" >



{/* left side */}
<div className="w-[1300px] h-[1100px] bg-white
 flex flex-wrap justify-start  my-10" >

 <div className="block sm:flex gap-1 mb-10 flex-col mx-3">   
          <Card2
           imageurl="/c1.png"
           title="Tahimina Rumi"
           post="Chef"
      
          className="w-[200px] h-[200px] text-white" />
        </div >
        
        <div className="block sm:flex gap-8 mb-10 flex-col mx-3">   
          <Card2
           imageurl="/c2.png"
           title="Jorina Begum"
           post="Chef"
      
          className="w-[200px] h-[200px] text-white" />
        </div >
        <div className="block sm:flex gap-8 mb-10 flex-col mx-3">   
          <Card2
           imageurl="/c3.png"
           title="M.Mohammad"
           post="Chef"
      
          className="w-[200px] h-[200px] text-white" />
        </div >



        
        <div className="block sm:flex gap-1 mb-10 flex-col mx-3">   
          <Card2
           imageurl="/c4.png"
           title="Munna Kathy"
           post="Chef"
      
          className="w-[200px] h-[200px] text-white" />
        </div >
        
        <div className="block sm:flex gap-8 mb-10 flex-col mx-3">   
          <Card2
           imageurl="/c5.png"
           title="Tahmina Rumi"
           post="Chef"
      
          className="w-[200px] h-[200px] text-white" />
        </div >
        <div className="block sm:flex gap-8 mb-10 flex-col mx-3">   
          <Card2
           imageurl="/c1.png"
           title="Bisnu devgone"
           post="Chef"
      
          className="w-[200px] h-[200px] text-white" />
        </div >


        <div className="block sm:flex gap-1 mb-10 flex-col mx-3">   
          <Card2
           imageurl="/c6.png"
           title="Tahmina Rumie"
           post="Chef"
      
          className="w-[200px] h-[200px] text-white" />
        </div >
        
        <div className="block sm:flex gap-8 mb-10 flex-col mx-3">   
          <Card2
           imageurl="/c7.png"
           title="Bisnu devgone"
           post="Chef"
      
          className="w-[200px] h-[200px] text-white" />
        </div >
        <div className="block sm:flex gap-8 mb-10 flex-col mx-3">   
          <Card2
           imageurl="/c8.png"
           title="Tahmina Rumi"
           post="Chef"
      
          className="w-[200px] h-[200px] text-white" />
        </div >


        <div className="block sm:flex gap-1 mb-10 flex-col mx-3">   
          <Card2
           imageurl="/c9.png"
           title="Fresh Lime"
           post="Chef"
      
          className="w-[200px] h-[200px] text-white" />
        </div >
        
        <div className="block sm:flex gap-8 mb-10 flex-col mx-3">   
          <Card2
           imageurl="/c10.png"
           title="Bisnu devgone"
           post="Chef"
      
          className="w-[200px] h-[200px] text-white" />
        </div >
        <div className="block sm:flex gap-8 mb-10 flex-col mx-3">   
          <Card2
           imageurl="/c11.png"
           title="Tahmina Rumi"
           post="Chef"
      
          className="w-[200px] h-[200px] text-white" />
        </div >




      



        
        </div >   
  

        
  
  
  {/* rigth side div */}
        <div className="w-[330px] h-[1500px] bg-white">

        <div className="max-w-md mx-auto p-4 my-5">
      {/* Search Bar */}
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search Your Keyword.."
          className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
        />
        <button className="px-4 py-2 bg-yellow-500 text-white hover:bg-yellow-600">
          <FiSearch size={20} />
        </button>
      </div>

      {/* Profile Card */}
      <div className="mt-6 border rounded-lg shadow-md bg-white p-6 text-center">
        {/* Profile Image */}
      <div className="mx-20">  <img
                src="/photo.png"
                alt="Post"
                className="w-20 h-30 rounded-full "
              /></div>

        {/* Name and Role */}
        <h2 className="mt-4 text-lg font-bold text-gray-800">Prince Miyako</h2>
        <p className="text-sm text-gray-500">Blogger/Photographer</p>

        {/* Rating */}
        <div className="flex justify-center items-center mt-2">
          <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
          <span className="ml-2 text-sm text-gray-500">(1 Review)</span>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veritatis
          distinctio, odio eligendi suscipit reprehenderit atque.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center mt-6 space-x-4">
          <FaFacebookF className="text-gray-600 hover:text-blue-600 text-xl" />
          <FaTwitter className="text-gray-600 hover:text-blue-400 text-xl" />
          <FaInstagram className="text-gray-600 hover:text-pink-500 text-xl" />
          <FaPinterest className="text-gray-600 hover:text-red-500 text-xl" />
        </div>
      </div>
    </div>




{/* recent post */}

<div className=" w-[300px] border rounded-lg shadow-md bg-white p-6 mx-3 ">
  <div className="font-bold">Recent Post</div>
  <div className="flex my-3">
    <div > <img
                src="/b5.png"
                alt="Post"
                className="w-35 h-30 rounded-md"
              /></div>
    <div className="mx-2">
      <h5 className="text-sm">June 22, 2020</h5>
      <h3 className="text-sm font-bold">Lorem ipsum dolor sit cing
      elit, sed do.</h3>
    </div>
     </div>

  
  <div className="flex my-3">
    <div > <img
                src="/b6.png"
                alt="Post"
                className="w-35 h-30 rounded-md"
              /></div>
    <div className="mx-2">
      <h5 className="text-sm">June 22, 2020</h5>
      <h3 className="text-sm font-bold">Lorem ipsum dolor sit cing
      elit, sed do.</h3>
    </div>
     </div>
     
  
  <div className="flex my-3">
    <div > <img
                src="/b7.png"
                alt="Post"
                className="w-35 h-30 rounded-md"
              /></div>
    <div className="mx-2">
      <h5 className="text-sm">June 22, 2020</h5>
      <h3 className="text-sm font-bold">Lorem ipsum dolor sit cing
      elit, sed do.</h3>
    </div>
     </div>

  
     <div className="flex my-3">
    <div > <img
                src="/b5.png"
                alt="Post"
                className="w-35 h-30 rounded-md"
              /></div>
    <div className="mx-2">
      <h5 className="text-sm">June 22, 2020</h5>
      <h3 className="text-sm font-bold">Lorem ipsum dolor sit cing
      elit, sed do.</h3>
    </div>
     </div>




  


</div>



{/* recent post */}

<div className=" w-[300px] border rounded-lg shadow-md bg-white p-6 mx-3 my-5">
  <div className="font-bold">Filter By Menu</div>
  <div className="flex  my-6 ">
    <div > <img
                src="/r1.png"
                alt="Post"
                className="w-16 h-30 rounded-md"
              /></div>
    <div className="mx-2 ">
      <h3 className="text-sm font-bold al">Chicke Fry</h3>
    </div>
     </div>

     <div className="flex align- my-6 ">
    <div > <img
                src="/r2.png"
                alt="Post"
                className="w-16 h-30 rounded-md"
              /></div>
    <div className="mx-2 ">
      <h3 className="text-sm font-bold al">Burger Food</h3>
    </div>
     </div>

     <div className="flex align- my-6 ">
    <div > <img
                src="/r3.png"
                alt="Post"
                className="w-16 h-30 rounded-md"
              /></div>
    <div className="mx-2 ">
      <h3 className="text-sm font-bold al">Pizza</h3>
    </div>
     </div>

     <div className="flex align- my-6 ">
    <div > <img
                src="/r4.png"
                alt="Post"
                className="w-16 h-30 rounded-md"
              /></div>
    <div className="mx-2 ">
      <h3 className="text-sm font-bold al">Fresh Fruitsy</h3>
    </div>
     </div>

     <div className="flex align- my-6 ">
    <div > <img
                src="/r5.png"
                alt="Post"
                className="w-16 h-30 rounded-md"
              /></div>
    <div className="mx-2 ">
      <h3 className="text-sm font-bold al">Vegetables</h3>
    </div>
     </div>

  

</div>





{/* Follow us */}







        </div>
        
</div>


            

            </main>
  );
}