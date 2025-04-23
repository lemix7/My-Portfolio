"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SplitType from "split-type";

const NavBarMobileV2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const boxRef = useRef();
  const linksRef = useRef();
  const isAnimating = useRef(false);
  const router = useRouter();

  return (
    <>
      <div className="w-full flex justify-end p-4">
        <button
          onClick={() => setIsOpen(true)}
          className="cursor-pointer text-sm capitalize"
        >
          menu
        </button>
      </div>
      <div
        className="block lg:hidden w-full fixed h-screen overflow-hidden top-[-100%] nav-overlay "
        style={{
          top: isOpen ? "0" : "-100%",
          transitionDelay: isOpen ? "0s" : "0s",
        }}
      >
        <div
          ref={boxRef}
          className="bg-black p-4  rounded fixed z-20 top-0 left-0 w-full"
          style={{
            overflow: "hidden",
            height: 0,
            transform: `translateY(-100%)`,
          }}
        >
          <div className="h-full flex flex-col justify-center items-center  text-white relative">
            <div
              ref={linksRef}
              className="flex flex-col justify-center items-start gap-6 capitalize Melodrama-regular text-7xl max-sm:text-5xl"
            >
              <Link className="active:Melodrama-Medium clip-square" href="/">
                home
              </Link>
              <Link
                className="active:Melodrama-Medium clip-square"
                href="/work"
              >
                work
              </Link>
              <Link
                className="active:Melodrama-Medium clip-square"
                href="/contact"
              >
                contact
              </Link>
              <Link
                className="active:Melodrama-Medium clip-square"
                href="/about"
              >
                about
              </Link>
              <Link
                className="active:Melodrama-Medium clip-square"
                href="/about"
              >
                resume
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="absolute bottom-14 left-1/2 transform -translate-x-1/2 p-2"
          >
            <X size={50} strokeWidth={1} />
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBarMobileV2;
