"use client"

import { MoveRight } from "lucide-react";
import CustomLink from "./CustomLinks";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);


const NavBarDesktop = () => {

  const navRef = useRef()

  // UNCOMENT THIS TO TRIGGER ANIMATION

  // useGSAP(() => {  
  //   gsap.set(navRef.current,{visibility:"visible"})
  //   gsap.fromTo(
  //     navRef.current,
  //     { y: 100, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 1, ease: "power1.out", delay: 0.3 }
  //   );
  // })

  return (
    <nav ref={navRef} className=" hidden lg:flex w-full   items-center ">
      <div className=" w-full flex justify-between items-center  text-xl capitalize ">
        <div></div>
        <div className="flex gap-16 ">
          <CustomLink href={"/"} label={"home"} />
          <CustomLink href={"/"} label={"work"} />
          <CustomLink href={"/"} label={"about"} />
          <CustomLink href={"/"} label={"contact"} />
        </div>

        <button className="hover:underline capitalize ">
          <CustomLink href={"/"} label={"resume"} />
        </button>
      </div>
    </nav>
  );
};

export default NavBarDesktop;
