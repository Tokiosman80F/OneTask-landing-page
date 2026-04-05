import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
  return <div className="sm:py-24 | bg-black text-white py-[72px] bg-gradient-to-b from-black to-[#5D2CA8]">
    <div className="container">
      <h2 className="sm:text-6xl | text-5xl font-bold  tracking-tighter text-center">Intuitive interface</h2>
      <div className="max-w-xl mx-auto">
        <p className="text-xl text-white/70 mt-5 text-center">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.</p>
      </div>
      <div className="mt-14">
        <Image src={appScreen} alt="product platform"/>
      </div>
    </div>
  </div>;
};
