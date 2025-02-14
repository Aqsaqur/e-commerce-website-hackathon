import { FaCoffee } from "react-icons/fa";
import Image from "next/image";

export default function Menu() {
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
              <h1 className="text-4xl font-bold text-white absolute top-[50%] left-[50%]  transform translate-y-[-50%] ">Our Menu</h1>
              <h3 className="  text-white absolute top-[65%] left-[52%]  transform translate-y-[-50%] ">Home :  <span className="text-yellow-500">Menu</span> </h3>

        
      </div>
      </div>

      {/* 1st part div */}
    <div className="flex flex-col items-center justify-center md:flex-row max-w-6xl mx-auto p-4 md:p-8 ">
      {/* Placeholder for Image */}
      <div className="md:w-[250px] md:h-[400px] flex items-center justify-center">
        <img
                src="/m1.png"
                alt="Post"
                className=" rounded-md"
              />
        
      </div>

      {/* Menu Section */}
      <div className="w-[1920px] md:w-1/2 space-y-6 px-16 ml-16 bg-white">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <FaCoffee className="text-orange-500 text-2xl" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Starter Menu
          </h1>
        </div>


        {/* Menu Items */}
        <div className="space-y-6">
          {/* Item 1 */}
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                Alder Grilled Chinook Salmon
              </h2>
              <p className="text-sm text-gray-600">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className="text-xs text-gray-400">560 CAL</p>
            </div>
            <span className="text-orange-500 font-bold text-lg">32$</span>
          </div>

          {/* Item 2 */}
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-orange-500">
                Berries and creme tart
              </h2>
              <p className="text-sm text-gray-600">
                Gorgonzola, ricotta, mozzarella, taleggio
              </p>
              <p className="text-xs text-gray-400">700 CAL</p>
            </div>
            <span className="text-orange-500 font-bold text-lg">43$</span>
          </div>

          {/* Item 3 */}
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                Tormentoso Bush Pizza Pintoage
              </h2>
              <p className="text-sm text-gray-600">
                Ground cumin, avocados, peeled and cubed
              </p>
              <p className="text-xs text-gray-400">1000 CAL</p>
            </div>
            <span className="text-orange-500 font-bold text-lg">14$</span>
          </div>

          {/* Item 4 */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                Spicy Vegan Potato Curry
              </h2>
              <p className="text-sm text-gray-600">
                Spreadable cream cheese, crumbled blue cheese
              </p>
              <p className="text-xs text-gray-400">560 CAL</p>
            </div>
            <span className="text-orange-500 font-bold text-lg">35$</span>
          </div>
        </div>
      </div>
    </div>

    {/* top 2nd div */}

    
    <div className="flex flex-col  items-center justify-center md:flex-row-reverse max-w-7xl mx-auto p-4 md:p-8">
      {/* Placeholder for Image */}
      <div className="md:w-[250px] md:h-[400px] flex items-center justify-center">
        <img
                src="/m2.png"
                alt="Post"
                className=" rounded-md"
              />
       
      </div>

      {/* Menu Section */}
      <div className="w-[1920px] md:w-1/2 space-y-6 px-16  bg-white">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <FaCoffee className="text-orange-500 text-2xl" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Main Course
          </h1>
        </div>

        {/* Menu Items */}
        <div className="space-y-6">
          {/* Item 1 */}
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              Optic Big Breakfast Combo Menu
              </h2>
              <p className="text-sm text-gray-600">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className="text-xs text-gray-400">560 CAL</p>
            </div>
            <span className="text-orange-500 font-bold text-lg">32$</span>
          </div>

          {/* Item 2 */}
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-orange-500">
              Cashew Chicken With Stir-Fry
              </h2>
              <p className="text-sm text-gray-600">
                Gorgonzola, ricotta, mozzarella, taleggio
              </p>
              <p className="text-xs text-gray-400">700 CAL</p>
            </div>
            <span className="text-orange-500 font-bold text-lg">43$</span>
          </div>

          {/* Item 3 */}
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              Vegetables & Green Salad
              </h2>
              <p className="text-sm text-gray-600">
                Ground cumin, avocados, peeled and cubed
              </p>
              <p className="text-xs text-gray-400">1000 CAL</p>
            </div>
            <span className="text-orange-500 font-bold text-lg">14$</span>
          </div>

          {/* Item 4 */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                Spicy Vegan Potato Curry
              </h2>
              <p className="text-sm text-gray-600">
                Spreadable cream cheese, crumbled blue cheese
              </p>
              <p className="text-xs text-gray-400">560 CAL</p>
            </div>
            <span className="text-orange-500 font-bold text-lg">35$</span>
          </div>
        </div>
      </div>
    </div>

    {/* yop 2nd div ends here */}


{/* banner part */}

    <div className="lg:max-w-[1920px] h-[300px] bg-[#0d0d0d] flex justify-evenly">
      <div className="text-white flex flex-col flex items-center justify-center w-[218px] h-[255px] pt-16">
{/* Placeholder for Image1 */}
<div className="md:w-[100px] md:h-[100px] ">
        <img
                src="/p1.png"
                alt="Post"
                className=" rounded-md"
              />
        
      </div>        <h1 className="font-bold font size-30  pt-8">420</h1>
        <h3 className="font-bold font size h-2/4">Professional Chefs</h3>
      </div>

      <div className="text-white flex flex-col flex items-center justify-center w-[218px] h-[255px] pt-16">
{/* Placeholder for Image2 */}
<div className="md:w-[100px] md:h-[100px] ">
        <img
                src="/p2.png"
                alt="Post"
                className=" rounded-md"
              />
        
      </div>        <h1 className="font-bold font size-30 pt-8">420</h1>
        <h3 className="font-bold font size h-2/4">Professional Chefs</h3>
      </div>

      <div className="text-white flex flex-col flex items-center justify-center w-[218px] h-[255px] pt-16">
{/* Placeholder for Image3 */}
<div className="md:w-[100px] md:h-[100px] ">
        <img
                src="/p3.png"
                alt="Post"
                className=" rounded-md"
              />
        
      </div>        <h1 className="font-bold font size-30  pt-8">420</h1>
        <h3 className="font-bold font size h-2/4">Professional Chefs</h3>
      </div>

      <div className="text-white flex flex-col flex items-center justify-center w-[218px] h-[255px] pt-16">
{/* Placeholder for Image4 */}
<div className="md:w-[100px] md:h-[100px] ">
        <img
                src="/p4.png"
                alt="Post"
                className=" rounded-md"
              />
        
      </div>        <h1 className="font-bold font size-30  pt-8">420</h1>
        <h3 className="font-bold font size h-2/4">Professional Chefs</h3>
      </div>
    </div>

    




      {/* 3rd down div */}
      <div className="flex flex-col items-center justify-center md:flex-row max-w-6xl mx-auto p-4 md:p-8 ">
      {/* Placeholder for Image */}
      <div className="md:w-[250px] md:h-[400px] flex items-center justify-center">
        <img
                src="/m3.png"
                alt="Post"
                className=" rounded-md"
              />
       
      </div>

      {/* Menu Section */}
      <div className="w-[1920px] md:w-1/2 space-y-6 px-16 ml-16 bg-white">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <FaCoffee className="text-orange-500 text-2xl" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Dessert
          </h1>
        </div>

        {/* Menu Items */}
        <div className="space-y-6">
          {/* Item 1 */}
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              Fig and lemon cake
              </h2>
              <p className="text-sm text-gray-600">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className="text-xs text-gray-400">560 CAL</p>
            </div>
            <span className="text-orange-500 font-bold text-lg">32$</span>
          </div>

          {/* Item 2 */}
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-orange-500">
              Creamy mascarpone cake
              </h2>
              <p className="text-sm text-gray-600">
                Gorgonzola, ricotta, mozzarella, taleggio
              </p>
              <p className="text-xs text-gray-400">700 CAL</p>
            </div>
            <span className="text-orange-500 font-bold text-lg">43$</span>
          </div>

          {/* Item 3 */}
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              Pastry, blueberries, lemon juice
              </h2>
              <p className="text-sm text-gray-600">
                Ground cumin, avocados, peeled and cubed
              </p>
              <p className="text-xs text-gray-400">1000 CAL</p>
            </div>
            <span className="text-orange-500 font-bold text-lg">14$</span>
          </div>

          {/* Item 4 */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              Pain au chocolat
              </h2>
              <p className="text-sm text-gray-600">
                Spreadable cream cheese, crumbled blue cheese
              </p>
              <p className="text-xs text-gray-400">560 CAL</p>
            </div>
            <span className="text-orange-500 font-bold text-lg">35$</span>
          </div>
        </div>
      </div>
    </div>

    {/* down 4th div */}

    
    <div className="flex flex-col  items-center justify-center md:flex-row-reverse max-w-7xl mx-auto p-4 md:p-8">
      {/* Placeholder for Image */}
      <div className="md:w-[250px] md:h-[400px] flex items-center justify-center">
        <img
                src="/m4.png"
                alt="Post"
                className=" rounded-md"
              />
       
      </div>

      {/* Menu Section */}
      <div className="w-[1920px] md:w-1/2 space-y-6 px-16  bg-white">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <FaCoffee className="text-orange-500 text-2xl" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Drinks
          </h1>
        </div>

        {/* Menu Items */}
        <div className="space-y-6">
          {/* Item 1 */}
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              Caffè macchiato
              </h2>
              <p className="text-sm text-gray-600">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className="text-xs text-gray-400">560 CAL</p>
            </div>
            <span className="text-orange-500 font-bold text-lg">32$</span>
          </div>

          {/* Item 2 */}
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-orange-500">
              Aperol Spritz Capacianno
              </h2>
              <p className="text-sm text-gray-600">
                Gorgonzola, ricotta, mozzarella, taleggio
              </p>
              <p className="text-xs text-gray-400">700 CAL</p>
            </div>
            <span className="text-orange-500 font-bold text-lg">43$</span>
          </div>

          {/* Item 3 */}
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              Caffe Latte Campuri
              </h2>
              <p className="text-sm text-gray-600">
                Ground cumin, avocados, peeled and cubed
              </p>
              <p className="text-xs text-gray-400">1000 CAL</p>
            </div>
            <span className="text-orange-500 font-bold text-lg">14$</span>
          </div>

          {/* Item 4 */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              Tormentoso BushTea Pintoage
              </h2>
              <p className="text-sm text-gray-600">
                Spreadable cream cheese, crumbled blue cheese
              </p>
              <p className="text-xs text-gray-400">560 CAL</p>
            </div>
            <span className="text-orange-500 font-bold text-lg">35$</span>
          </div>
        </div>
      </div>
    </div>

    </main>
  );
}