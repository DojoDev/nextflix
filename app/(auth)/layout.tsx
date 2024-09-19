import { ReactNode } from "react";
import  Image from "next/image";

import Backgroundimage from "../../public/login_background.jpg";
import Logo from "../../public/netflix_logo.svg";

export default function AuthLayout({children}: {children: ReactNode}){
    return(
      <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
        <Image src={Backgroundimage} alt="Background Image" className="hidden sm:flex sm:object-cover -z-10" priority fill/>
        
        <Image src={Logo} alt="logo Nextflix" width={120} height={120} className="absolute top-4 left-4 object-contain md:left-10 md:top-6"/>
        {children}
      </div>
    )
}