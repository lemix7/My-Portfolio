"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SplitType from "split-type";


const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const boxRef = useRef();
  const linksRef = useRef();
  const isAnimating = useRef(false);
  const router = useRouter();

  // Prefetch all pages on component mount
  useEffect(() => {
    router.prefetch("/");
    router.prefetch("/work");
    router.prefetch("/contact");
    router.prefetch("/about");
  }, [router]);

  const handleLinkClick = (e, path) => {
    e.preventDefault();

    if (isAnimating.current) return;
    isAnimating.current = true;

    const element = boxRef.current;
    const links = linksRef.current?.children;

    

    // Start prefetching the target page
    router.prefetch(path);

    // Animate links out first
    if (links) { // this triggers when one of the links is clicked 
      gsap.to(links, {
        y: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        onComplete: () => {
          // Then animate container up
          gsap.to(element, {
            height: 0,
            y: -window.innerHeight,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
              setIsOpen(false);
              isAnimating.current = false;
              // Navigate immediately after animation
              router.push(path);
            },
          });
        },
      });
    }
  };

  const toggleHeight = () => {
    // Prevent multiple clicks while animation is running
    if (isAnimating.current) return;
    isAnimating.current = true;

    const element = boxRef.current;
    const links = linksRef.current?.children;


    if (isOpen) {
      // Animate links out first
      if (links) {
        gsap.to(links, {
          y: 50,
          opacity: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: "power1.out",
          onComplete: () => {
            // Then animate container up
            gsap.to(element, {
              height: 0,
              y: -window.innerHeight,
              duration: 1.5,
              ease: "power1.out",
              onComplete: () => {
                setIsOpen(false);
                isAnimating.current = false;
              },
            });
          },
        });
      }
    } else {
      // Set initial state of links
      if (links) {
        gsap.set(links, { opacity: 0, y: 100 });
      }

      // First update state
      setIsOpen(true);

      // Then animate container down
      gsap.fromTo(
        element,
        { height: 0, y: -window.innerHeight },
        {
          height: "100vh",
          y: 0,
          duration: 1.5,
          ease: "power1.out",
          onComplete: () => {
            // Finally animate links in
            if (links) {
              gsap.to(links, {
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.2,
                ease: "power1.out",
                delay:0,
                onComplete: () => {
                  isAnimating.current = false;
                },
              });
            }
          },
        }
      );
    }
  };

  return (
    <div className="block lg:hidden w-full">
      <div className="w-full flex justify-end p-4">
        <button
          onClick={toggleHeight}
          className="cursor-pointer text-sm capitalize"
        >
          menu
        </button>
      </div>

      <div
        ref={boxRef}
        className="bg-black p-4 rounded fixed z-20 top-0 left-0 w-full"
        style={{
          overflow: "hidden",
          height: 0,
          transform: `translateY(-100%)`,
        }}
      >
        <div className="h-full flex flex-col justify-center items-center text-white relative">
         
          <div
            ref={linksRef}
            className="flex flex-col justify-center items-start gap-6 capitalize Melodrama-regular text-7xl max-sm:text-5xl"
          >
            <Link
              className="active:Melodrama-Medium clip-square"
              href="/"
              onClick={(e) => handleLinkClick(e, "/")}
            >
             home
            </Link>
            <Link
              className="active:Melodrama-Medium clip-square"
              href="/work"
              onClick={(e) => handleLinkClick(e, "/work")}
            >
              work
            </Link>
            <Link
              className="active:Melodrama-Medium clip-square"
              href="/contact"
              onClick={(e) => handleLinkClick(e, "/contact")}
            >
              contact
            </Link>
            <Link
              className="active:Melodrama-Medium clip-square"
              href="/about"
              onClick={(e) => handleLinkClick(e, "/about")}
            >
              about
            </Link>
            <Link
              className="active:Melodrama-Medium clip-square"
              href="/about"
              onClick={(e) => handleLinkClick(e, "/")}
            >
              resume
            </Link>
          </div>
        </div>


          <button onClick={toggleHeight} className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-2">
              <X size={50} strokeWidth={1} />
            </button>

      </div>
    </div>
  );
};

export default NavBarMobile;
