import ArrowWIcon from '../assets/icons/arrow-w.svg'

export const Hero = () => {
  return <div className="py-[72px] bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] relative overflow-clip">

    {/* Circular gradient */}
    <div className=' absolute w-[750px] h-[375px] bg-black rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000,#000_82%,#9560EB)] top-[calc(100%-96px)]'></div>

    {/* Main content */}
    <div className="container relative">
      <div className="flex items-center justify-center">
        <a href="#" className="inline-flex gap-3 border px-2 py-1 rounded-lg border-white border-opacity-30">
        <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-backgound-clip:text]">Version 2.0 is here</span>
        <span className='inline-flex gap-1 items-center'>
          <span>Read More</span>
          <ArrowWIcon/>
        </span>
      </a>
      </div>
      <h1 className='text-7xl font-bold mt-8 text-center tracking-tighter'>One Task at a Time</h1>
      <p className='text-xl mt-8 text-center'>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
      <div className="flex items-center justify-center mt-8">
        <button className='py-3 px-5 bg-white font-medium  text-black rounded-lg'>Get for free</button>
      </div>
    </div>
    
  </div>;
};
