import Aboutme from "@/Components/Aboutme";
import HeroSec from "@/Components/HeroSec";
import Navbar from "@/Components/Navbar";
import OurServices from "@/Components/OurServices";
import Process from "@/Components/Process";
import WatchVideo from "@/Components/WatchVideo";
import Whyus from "@/Components/Whyus";

export default function Home() {
  return (
    <>
      <div
        className="flex flex-col relative justify-start 
      items-start px-10 smaller:px-6 small:pb-20 w-full overflow-hidden"
      >
        <Navbar />
        <HeroSec />
        <h2
          style={{ textShadow: "0 0 6px #00000012" }}
          className="font-midan  text-[15rem] extLar:text-[13rem] larger:text-[12rem] large:text-[11rem] med:text-[9rem]
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
    </>
  );
}
