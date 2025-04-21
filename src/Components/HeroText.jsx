"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const HeroText = () => {
  const container = useRef();
  const boxRef = useRef();

  useGSAP(
    () => {
      // First make the container visible
      gsap.set(container.current, { visibility: "visible" });

      const heroText = new SplitType(".heroText", { types: "words" });

      gsap.set(heroText.words, { y: 400, opacity: 0 });
      gsap.to(heroText.words, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power1.out",
        delay: 0,
      });

      gsap.fromTo(
        boxRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power1.out", delay: 1.3 }
      );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="w-full h-screen flex flex-col justify-center lg:gap-[250px] max-md:gap-2 pb-10 max-md:pb-24"
      style={{ visibility: "hidden" }}
    >
      <div className="w-full ">
        <h2 className="heroText clip-square Melodrama-regular lg:text-7xl md:text-5xl max-md:text-4xl capitalize">
          Hi I'm Ahmad
        </h2>
      </div>

      <div className="w-full flex lg:flex-row max-lg:flex-col overflow-y-hidden lg:justify-between lg:items-center lg:gap-[280px] md:gap-[20px] max-md:gap-8">
        <div className="lg:order-2">
          <h1 className="heroText Melodrama-regular clip-square lg:text-9xl md:text-7xl max-md:text-7xl capitalize">
            frontend developer
          </h1>
        </div>

        <div className="lg:order-1 pr-10" ref={boxRef}>
          <p className="md:text-base max-md:text-sm heroPara clip-square leading-relaxed">
            I'm a frontend developer who sees the web as an art form, not just
            code. I blend structure with creativity to build visually engaging,
            performant, and user-focused sites. Whether it's a bold landing page
            or a full-fledged app, I bring energy and precision to every pixel
            and prop.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
