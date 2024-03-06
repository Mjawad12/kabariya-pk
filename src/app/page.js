import HeroSec from "@/Components/HeroSec";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <div
      className="flex flex-col relative justify-start 
    items-start px-10 smaller:px-6 w-full overflow-hidden"
    >
      <Navbar />
      <HeroSec />
    </div>
  );
}
