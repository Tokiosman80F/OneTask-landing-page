import helixStarImage from '../assets/images/helix2.png'
import emojiStarImage from '../assets/images/emojistar.png'
import Image from 'next/image';

export const CallToAction = () => {
  return <div className=" sm:py-24 | bg-black text-white py-[72px] overflow-x-clip ">
    <div className="container relative max-w-xl text-center">

      <Image src={helixStarImage} alt="Helix star image" className=' sm:block |  hidden absolute  left-[calc(100%+24px)] '/>
      <Image src={emojiStarImage} alt="Helix star image" className=' sm:block |  hidden absolute right-[calc(100%+24px)] -top-[124px]'/>

      <h2 className="font-bold tracking-tighter text-5xl">Get instant access</h2>
      <p className="text-xl text-white/70 mt-5">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
      <form className="sm:flex-row sm:max-w-sm mx-auto | mt-10 flex flex-col gap-2.5">
        <input type="email" placeholder="your@email.com" className=" sm:flex-1 | h-12 px-5  font-medium bg-white/20 rounded-lg placeholder:text-[#9CA3AF]" />
        <button className=" px-5 h-12 font-medium bg-white rounded-lg text-black">Get access</button>
      </form>
    </div>
  </div>;
};
