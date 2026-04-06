
import TwitterIcon from '../assets/icons/x-social.svg'
import InstaIcon from '../assets/icons/insta.svg'
import TiktokIcon from '../assets/icons/tiktok.svg'
import YtIcon from '../assets/icons/youtube.svg'

export const Footer = () => {
  return (<div className='bg-black py-5 text-white/60 border border-white/20'>
    <div className="container">
      <div className=' sm:flex-row sm:justify-between | flex flex-col gap-4' >
        <p className='sm:text-xl'>© 2024 Your Company, Inc. All rights reserved</p>
        <ul className='flex justify-center  gap-2.5'>
        <li><TwitterIcon/></li>
        <li><InstaIcon/></li>
        <li><TiktokIcon/></li>
        <li><YtIcon/></li>
      </ul>
      </div>
    </div>
  </div>)
};
