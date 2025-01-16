import React from 'react'
import Common from '@/component/common'
import { LuUserRound } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  return (
    <div className='md:max-w-[1920px] text-white'>
        <Common title='Sign up Page' subtitle='Sign Up'/>
       <div className='w-[424px] h-[624px] shadow-sm shadow-[ #FF9F0D] border-[1px] mx-[35%] my-24'>
         <h2 className='text-black text-[20px] pl:[45px] pt-[25px]'>Sign Up</h2>
         <div className='flex p-4 gap-4 rounded-md md:mx-8 border-[1px] mt-4'>
           <LuUserRound size={24} className='text-black'/>
        <input type="text" placeholder='Name'/>
         </div>
         <div className='flex p-4 gap-4 rounded-md md:mx-8 border-[1px] mt-4'>
           <MdOutlineMailOutline  size={24} className='text-black'/>
        <input type="text" placeholder='Gmail'/>
         </div>
         <div className='flex p-4 gap-4 rounded-md md:mx-8 border-[1px] mt-4'>
           <RiLockPasswordFill size={24} className='text-black'/>
        <input type="text" placeholder='Password'/>
         </div>
         <div className='flex p-4 gap-4 rounded-md md:mx-8  mt-2'>
        <input type="checkbox" className='bg-[#FF9F0D] text-white'/>
        <p className='text-black'>Remember Me</p>
         </div>
         <button className='md:max-w-[360px] h-[44px] w-full md:mx-8 mt-4 rounded-md bg-[#FF9F0D] text-white p-3 '>Sign Up</button>
         <p className='text-right mt-4 mx-8 text-black'>Forgot Password</p>
         <div className='flex p-4 gap-8 rounded-md mx-8 border-[1px] mt-4 text-black'>
           <FcGoogle size={24}/>
           <p>Sign Up with Google</p> 
         </div>
         <div className='flex p-4 gap-8 rounded-md mx-8 border-[1px] mt-4 text-black'>
           <FaApple size={24} />
           <p>Sign Up with Apple</p>
         </div>
       </div>
    </div>
  )
}

export default page
