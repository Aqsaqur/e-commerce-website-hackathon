import Card from "../components/card";

export default function Card_test(){
    return(
        <>
       <div className="block sm:flex gap-5 mb-52 ">
         <Card
        imageurl="/s1.png"
        title="Bhai ye image he"
        price={100} 
         className="w-[300px] h-[400px] text-white" />

<Card
        imageurl="/s1.png"
        title="Bhai ye image he"
        price={100}  />


<Card
        imageurl="/s1.png"
        title="Bhai ye image he"
        price={100}  /></div>
        
        
        </>
    )
}