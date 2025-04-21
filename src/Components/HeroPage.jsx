import HeroText from "@/Components/HeroText";
import NavBarDesktop from "@/Components/NavBarDesktop";
import NavBarMobile from "@/Components/NavBarMobile";

const HeroSection = () => {
  return (
    <div className="min-h-screen md:px-16 px-4 md:pt-8 pt-6 bg-cover bg-center bg-[url('/bg-desktop.jpg')] max-sm:bg-[url('/bg-mobile.jpg')]">
      {/* <h1 className="Melodrama-regular text-9xl capitalize">frontend developer</h1> */}
      <NavBarDesktop />
      <NavBarMobile />
      <HeroText />
    </div>
  );
};

export default HeroSection;
