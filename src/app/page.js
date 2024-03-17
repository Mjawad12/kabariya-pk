import Aboutme from "@/Components/Aboutme";
import Contact from "@/Components/Contact";
import DownloadApp from "@/Components/DownloadApp";
import Footer from "@/Components/Footer";
import HeroSec from "@/Components/HeroSec";
import Locations from "@/Components/Locations";
import Navbar from "@/Components/Navbar";
import OurServices from "@/Components/OurServices";
import Process from "@/Components/Process";
import ScrapCollect from "@/Components/ScrapCollect";
import Testomonials from "@/Components/Testomonials";
import WatchVideo from "@/Components/WatchVideo";
import Whyus from "@/Components/Whyus";

export default function Home() {
  return (
    <>
      <div
        className="flex flex-col relative justify-start 
      items-start px-10 smaller:px-6 small:pb-20 w-full overflow-hidden"
      >
        <HeroSec />
        <h2
          style={{ textShadow: "0 0 6px #00000012" }}
          className="font-midan  text-[17rem] leading-[320px]  extLar:text-[13rem] larger:text-[12rem] large:text-[11rem] med:text-[9rem]
        w-full text-center small:hidden whitespace-nowrap  text-white "
        >
          !بیچو آسانی سے
        </h2>
      </div>
      <Aboutme />
      <WatchVideo />
      <OurServices />
      <Whyus />
      <Process />
      <Locations />
      <ScrapCollect />
      <Testomonials />
      <DownloadApp />
      <div className="bg1 w-full min-h-max">
        <div className="bg2 w-full min-h-max flex flex-col med:[background:linear-gradient(176deg, rgba(255, 255, 255, 0) 24%, rgba(17, 209, 0, 0.3) 100%)]  ">
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
