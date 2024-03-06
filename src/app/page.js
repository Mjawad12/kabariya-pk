import HeroSec from "@/Components/HeroSec";
import Navbar from "@/Components/Navbar";

export const metadata = {
  title: "Kabariya",
  description:
    "Kabariya is a secure online platform dedicated to the selling of scrap materials. Our mission is to minimize the accumulation of unwanted and non-essential metals through recycling.",
};

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
