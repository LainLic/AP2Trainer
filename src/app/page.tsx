import BtnOutline from "@/components/exports/BtnOutline";
import { Menu } from "@/components/exports/Menubar";
import Nav from "@/components/exports/Nav";
import Button  from "@/components/exports/Button";
import ModeToggle from "@/components/ui/button-dark";
import Image from "next/image";

export default function Home() {
  return (
    <>  
    <div className="flex justify-between p-8 text-center  bg-gray-400 dark:bg-gray-800 rounded-3xl ">
      <div className="">    
      <Menu  />
      </div>    
      <h1 className="text-center font-bold text-white text-xl md:text-3xl ">GFN AP2 Vorbereitung</h1>  

      <div className="flex text-end ">
     <Button />
      <ModeToggle />
      </div>
    </div>
    </>
    );
}
