import Image from "next/image";
interface Tcard2{
    imageurl:string;
    title:string;
    post:string;
    className?:string
}
export default function Card2(Props:Tcard2){
    
    const {imageurl,title,post} = Props

    return(
        
        <>
        <div className="w-[250px] h-[300x] p-5 border border-grey-600 rounded-lg  ">
            <div className="object-contain ">
                <Image src={imageurl} alt={title} width={200} height={200} />
            </div>
            <h2 className="w- font-bold text-lg text-center ">{title}</h2>
            <h5 className="w- text-sm text-center ">{post}</h5>

           
            


        </div>
        </>
    )
}