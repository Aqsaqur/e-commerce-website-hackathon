import Image from "next/image";
import Card from "../components/card";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";









export default function Shop() {
  return (

    <div>  <div className="w-full  h-[250px] bg-green-500" >
                <div className="relative ">
                  <Image
                          src="/menu1.jpeg"
                          alt="Post"
                          width={1024} height={550}
                          className=" w-full h-full bg-yellow-500" 
                        />
                        <h1 className="text-4xl font-bold text-white absolute top-[50%] left-[48%]  transform translate-y-[-50%] ">Our Shop</h1>
                        <h3 className="  text-white absolute top-[65%] left-[50%]  transform translate-y-[-50%] ">Home :  <span className="text-yellow-500">Shop</span> </h3>
          
                  
                </div>
                </div>

                {/* main div */}
     <div className="w-[1320px] h-[1820px] bg-white mx-20 flex" >

      <div className="w-[1010px] h-[1780px] bg-white flex my-6">

         <div className="block sm:flex gap-8 mb-52 flex-col mx-3">   
          <Card
           imageurl="/q1.png"
           title="Fresh Lime"
           price={38} 
            className="w-[300px] h-[400px] text-white" />

            
          <Card
           imageurl="/q2.png"
           title="Country Burger"
           price={45} 
            className="w-[300px] h-[400px] text-white" />

            
          <Card
           imageurl="/q3.png"
           title="Cheese Burger"
           price={10} 
            className="w-[300px] h-[400px] text-white" />

            
          <Card
           imageurl="/q4.png"
           title="Country Burger"
           price={45} 
            className="w-[300px] h-[400px] text-white" />

            
          <Card
           imageurl="/q5.png"
           title="Cheese Butter"
           price={10} 
            className="w-[300px] h-[400px] text-white " />
</div>

<div className="block sm:flex gap-8 mb-52 flex-col mx-2">   
          <Card
           imageurl="/q6.png"
           title="Chocolate Muffin"
           price={100} 
            className="w-[300px] h-[400px] text-white" />

            
          <Card
           imageurl="/q7.png"
           title="Drink"
           price={100} 
            className="w-[300px] h-[400px] text-white" />

            
          <Card
           imageurl="/q8.png"
           title="Sandwiches"
           price={100} 
            className="w-[300px] h-[400px] text-white" />

            
          <Card
           imageurl="/q9.png"
           title="Drink"
           price={100} 
            className="w-[300px] h-[400px] text-white" />

            
          <Card
           imageurl="/q10.png"
           title="Sandwiches"
           price={100} 
            className="w-[300px] h-[400px] text-white" />
</div>

<div className="block sm:flex gap-8 mb-52 flex-col mx-2">   
          <Card
           imageurl="/q11.png"
           title="Burger"
           price={100} 
            className="w-[300px] h-[400px] text-white" />

            
          <Card
           imageurl="/q12.png"
           title="Pizza"
           price={100} 
            className="w-[300px] h-[400px] text-white" />

            
          <Card
           imageurl="/q13.png"
           title="Chicken Chup"
           price={100} 
            className="w-[300px] h-[400px] text-white" />

            
          <Card
           imageurl="/q14.png"
           title="Pizza"
           price={100} 
            className="w-[300px] h-[400px] text-white" />

            
          <Card
           imageurl="/q15.png"
           title="Chicken Chup"
           price={100} 
            className="w-[300px] h-[400px] text-white" />
</div>



            </div>



            





      <div className="w-[330px] h-[1800px] bg-white">

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



{/* populer Tags */}

<div className=" w-[300px] border rounded-lg shadow-md bg-white p-6 mx-3 my-5">
  <div className="font-bold">Populer Tags</div>
  <div className="flex items-start  flex-row  flex-wrap justify-start gap-2 my-6 ">

  <button className="px-4 py-2 bg-yellow-500 text-white text-sm font-medium rounded-md hover:bg-yellow-600 mx-1">
          Read More  </button>

          <button className="px-2 py-2 bg-yellow-500 text-white text-sm font-medium rounded-md hover:bg-yellow-600 mx-1">
          Sandwich  </button>

          <button className="px-2 py-2 bg-yellow-500 text-white text-sm font-medium rounded-md hover:bg-yellow-600 mx-1">
          Tikka  </button>

          <button className="px-2 py-2 bg-yellow-500 text-white text-sm font-medium rounded-md hover:bg-yellow-600 mx-1">
          Bbq  </button>


          <button className="px-2 py-2 bg-yellow-500 text-white text-sm font-medium rounded-md hover:bg-yellow-600 mx-1">
          Restaurant  </button>
          
          <button className="px-2 py-2 bg-yellow-500 text-white text-sm font-medium rounded-md hover:bg-yellow-600 mx-1">
          Chicken Sharma  </button>
          
          <button className="px-2 py-2 bg-yellow-500 text-white text-sm font-medium rounded-md hover:bg-yellow-600 mx-1">
          Health  </button>
          
          <button className="px-2 py-2 bg-yellow-500 text-white text-sm font-medium rounded-md hover:bg-yellow-600 mx-1">
          FastFood  </button>
          
          <button className="px-2 py-2 bg-yellow-500 text-white text-sm font-medium rounded-md hover:bg-yellow-600 mx-1">
          Pizza  </button>

          <button className="px-2 py-2 bg-yellow-500 text-white text-sm font-medium rounded-md hover:bg-yellow-600 mx-1">
          Burger  </button>


          <button className="px-2 py-2 bg-yellow-500 text-white text-sm font-medium rounded-md hover:bg-yellow-600 mx-1">
          Chicken  </button>

   
     </div>
     


  

</div>







{/* end */}
      </div>
      
      

      
      
      
      
      
      </div>
      </div>
  );
}