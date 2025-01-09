import React from 'react';
import Common from '@/component/common';
import Image from 'next/image';
import { ImFolderMinus } from 'react-icons/im';

interface Chef {
  id: number;
  img: string;
  name: string;
  title: string;
}

const page = () => {
  const chefData: Chef[] = [
    {
      id: 1,
      img: "/ChefCard1.png",
      name: "",
      title: "Chef",
    },
    {
      id: 2,
      img: "/ChefCard2.png",
      name: "",
      title: "Chef",
    },
    {
      id: 3,
      img: "/ChefCard3.png",
      name: "",
      title: "Chef",
    },
    {
      id: 4,
      img: "/ChefCard4.png",
      name: "",
      title: "Chef",
    },
    {
      id: 5,
      img:"/ChefCard5.png",
      name: "",
     title: "Chef",
    },
    {
        id: 6,
        img: "/ChefCard6.png",
        name: "",
        title: "Chef",
      },
      {
        id: 7,
        img: "/ChefCard7.png",
        name: "",
        title: "Chef",
      },
      {
        id: 8,
        img: "/ChefCard8.png",
        name: "",
        title: "Chef",
      },
      {
        id: 9,
        img: "/ChefCard9.png",
        name: "",
        title: "Chef",
      },
      {
        id: 10,
        img: "/ChefCard10.png",
        name: "",
        title: "Chef",
      },
      {
        id: 11,
        img: "/ChefCard11.png",
        name: "",
        title: "Chef",
      },
      {
        id: 12,
        img: "/ChefCard12.png",
        name: "",
        title: "Chef",
      },
    
  ];

  return (
    <div className="md:max-w-[1920px] w-full text-white">
      <Common title="Our Chefs" subtitle="Meet Our Experts" />
      <div className="md:max-w-[1320px] px-8">
        <div className="grid gap-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-center"> {/* Centering using justify-items-center */}
          {chefData.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[312px] h-[446px] mx-auto p-4 bg-white shadow-lg rounded-lg"
            >
              <Image src={item.img} alt={item.title} width={312} height={380} className="w-full" />
              <h2 className="text-center font-bold text-[20px]">{item.name}</h2>
              <p className="text-center font-[400] text-[14px]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

