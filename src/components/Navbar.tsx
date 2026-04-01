import Image from "next/image";
import MenuIcon from "../assets/icons/menu.svg";
import logoImage from "../assets/images/logosaas.png";
export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container ">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 blur-md bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]"></div>
            <Image
              src={logoImage}
              alt="sass logo"
              width={44}
              className="relative"
            />
          </div>

          <div className="sm:hidden | w-10 h-10 border border-white border-opacity-30 inline-flex justify-center items-center rounded-lg ">
            <MenuIcon className="text-white" />
          </div>

          <nav className="sm:flex | gap-6 items-center hidden ">
            <a
              href=""
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Features
            </a>
            <a
              href=""
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Updates
            </a>
            <a
              href=""
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              About
            </a>
            <a
              href=""
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Help
            </a>
            <a
              href=""
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Customer
            </a>
            <button className="px-4 py-2 bg-white rounded-lg ">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
