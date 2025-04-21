"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);


export default function TextAnimation() {
  const container = useRef();

  useGSAP( // runs the GSAP animation when the component loads.
    () => {
      const heroText = new SplitType(".heroText", { types: "words" }); // split the text to individual words 
      gsap.set(heroText.words, { y: 200 }); // This pushes each word 400px down (off-screen at the start).

      gsap.to(heroText.words, {
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      });
    },
    { scope: container }
  );

  return (
    <div
      className="w-[100vw] h-[100svh] flex flex-col gap-10 justify-center items-center"
      ref={container}
    >
      <h1  className="heroText clip-square uppercase text-7xl font-bold">
        Frontend  Developer
      </h1>
      <h1  className="heroText clip-square uppercase text-7xl font-bold">
        Frontend Developer
      </h1>
    </div>
  );
}
