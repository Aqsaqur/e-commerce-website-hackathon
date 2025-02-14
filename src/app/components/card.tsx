import Image from "next/image";
interface Tcard{
    imageurl:string;
    title:string;
    price:number;
    className?:string
}
export default function Card(Props:Tcard){
    
    const {imageurl,title,price} = Props

    return(
        
        <>
        <div className="w-[312px] h-[308px] p-5 border border-grey-600 rounded-lg  ">
            <div className="object-contain ">
                <Image src={imageurl} alt={title} width={312} height={267} />
            </div>
            <h2 className="w- font-bold text-lg">{title}</h2>

            <div className=" flex gap-5 ">
            <h3 className="text-orange-500  font-bold "><span>$</span>{price} <span className="text-gray-600 line-through">{price-20 % 100}</span></h3>
            </div>    
            


        </div>
        </>
    )
}