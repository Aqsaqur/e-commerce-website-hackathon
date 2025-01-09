import { SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Sheet } from 'lucide-react';
import Link from 'next/link'
import React from 'react'
import { GiHamburger, GiHamburgerMenu } from 'react-icons/gi';
import { IoSearchOutline } from "react-icons/io5";
import { LuUserRound } from 'react-icons/lu';
import { PiHandbagBold } from 'react-icons/pi';


const Header = () => {
  return (
    <div className='lg:max-w-[100%] h-[90px] w-full bg-[#000000]'>
        <div className='lg:max-w-[1920px] w-full h-[32px] justify-around letf-{300} top-{29px} flex flex-col lf:flex-row md:flex-row'>
            <div className='flex '>
                <h1 className='font-bold text-[24px] text-white'>Food</h1>
                <span className='font-bold text-[24px] text-[#FF9F0D]'>tuck</span>
            </div>
            <ul className='flex w-[600px] h-[24px] gap-5 '>
                <li className='text-[16px] font-bold text-[#FF9F0D]'><Link href="/home">Home</Link></li>
                <li className='text-[16px] font-bold text-white'><Link href="/menu">Menu</Link></li>
                <li className='text-[16px] font-bold text-white'><Link href="/blog">Blog</Link></li>
                <li className='text-[16px] font-bold text-white'><Link href="/chef">Pages</Link></li>
                <li className='text-[16px] font-bold text-white'><Link href="/about">About</Link></li>
                <li className='text-[16px] font-bold text-white'><Link href="/shop">Shop</Link></li>
                <li className='text-[16px] font-bold text-white'><Link href="/contact">Contact</Link></li>
            </ul>
            <div className='flex gap-4'>
            <IoSearchOutline size={24} className='text-white'/>
            <Link href="/signup"> <LuUserRound size={24} className='text-white'/ ></Link>
            <PiHandbagBold size={24} className='text-white'/>
            </div>
        </div>
    </div>
  )
}

export default Header
