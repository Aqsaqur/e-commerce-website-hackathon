import { ArrowLeft, ArrowRight} from 'lucide-react';
import Image from 'next/image';

function App() {
  return (


    <div>
  <div className="w-full  h-[250px] bg-black" >
            <div className="relative ">
              <Image
                      src="/menu1.jpeg"
                      alt="Post"
                      width={1024} height={550}
                      className=" w-full h-full bg-yellow-500" 
                    />
                    <h1 className="text-4xl font-bold text-white absolute top-[50%] left-[48%]  transform translate-y-[-50%] ">Checkout Page</h1>
                    <h3 className="  text-white absolute top-[65%] left-[52%]  transform translate-y-[-50%] ">Home :  <span className="text-yellow-500">Checkout</span> </h3>
      
              
            </div>
            </div>


    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto">

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Shipping Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Shipping Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="address1" className="block text-sm font-medium text-gray-700">Address line 1</label>
                <input
                  type="text"
                  id="address1"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="address2" className="block text-sm font-medium text-gray-700">Address line 2</label>
                <input
                  type="text"
                  id="address2"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  id="city"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">ZIP code</label>
                <input
                  type="text"
                  id="zipCode"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Billing Address</h3>
              <div className="flex items-center">
                <input
                  id="sameAsShipping"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="sameAsShipping" className="ml-2 text-sm text-gray-700">
                  Same as shipping address
                </label>
                <button className="flex-1 flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#ff9f0d] ">
                Proceed to shipping
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-6 space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Order Summary</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center space-x-4">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src="/cart1.png"
                        alt="Chicken Tikka"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-medium text-gray-900">Chicken Tikka Kabab</h3>
                      <p className="mt-1 text-sm text-gray-500">150 gm net</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">50$</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex justify-between text-base text-gray-900">
                  <p>Subtotal</p>
                  <p>130$</p>
                </div>
                <div className="flex justify-between text-base text-gray-900">
                  <p>Shipping</p>
                  <p className="text-green-600">Free</p>
                </div>
                <div className="flex justify-between text-base text-gray-900">
                  <p>Discount (25%)</p>
                  <p>-32.50$</p>
                </div>
                <div className="flex justify-between text-base text-gray-900">
                  <p>Tax</p>
                  <p>54.76$</p>
                </div>
                <div className="flex justify-between text-lg font-medium text-gray-900">
                  <p>Total</p>
                  <p>432.65$</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between space-x-4">
              <button className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to cart
              </button>
              <button className="flex-1 flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#ff9f0d] ">
              Place an order
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;