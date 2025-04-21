import HeroSection from "@/Components/HeroPage";
import { ReactLenis, useLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <div>
        <HeroSection />
      </div>
    </ReactLenis>
  );
}
