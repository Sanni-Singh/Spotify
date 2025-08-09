import spotifyLogo from "../../assets/Images/spotifyLogo.png";
import { GrHomeRounded } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { IoMdBrowsers } from "react-icons/io";
import { FiArrowDownCircle } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="bg-black flex flex-wrap md:flex-nowrap p-2 w-full items-center justify-between gap-1">
            <div className="w-[36px] m-1 ml-3 cursor-pointer">
                <img src={spotifyLogo} alt="logo" className="w-full h-auto" />
            </div>

            <div className="flex justify-center gap-2 items-center flex-1 max-w-[700px] lg:ml-50 w-full md:w-auto mt-2">
                <div className="bg-[#252525] w-[50px] h-[50px] p-2 flex justify-center items-center rounded-full cursor-pointer text-gray-300 hover:text-white">
                    <GrHomeRounded size={25} />
                </div>
                <div className="flex items-center flex-1 max-w-[500px] min-w-[120px] h-[42px] md:h-[48px] bg-[#252525] rounded-3xl px-3">
                    <IoSearch className="text-lg md:text-xl cursor-pointer text-gray-300" />
                    <input
                        type="search"
                        className="flex-1 outline-none text-white pl-2 text-sm md:text-md font-light bg-transparent"
                        placeholder="What do you want to play?"
                    />
                    <div className="hidden sm:block mx-2 text-lg md:text-3xl text-gray-400">⎸</div>
                    <IoMdBrowsers className="hidden sm:block text-lg md:text-xl cursor-pointer" />
                </div>
            </div>

      
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mt-2">
              <div>
                <button className="p-[5px] px-4 rounded-3xl bg-white text-black font-bold text-[14px] hover:bg-[#eeeeee] cursor-pointer">
                  Explore Premium
                </button>
              </div>
                <div className="hidden lg:flex items-center cursor-pointer text-gray-300  hover:text-white text-sm md:text-[15px] hover:text-[16px]">
                    <FiArrowDownCircle className="text-lg md:text-xl mr-1 md:mr-2" />
                  <h1 className="hidden md:block" >Install App</h1>
                </div>
                <GoBell className="cursor-pointer text-gray-300 hover:text-white text-lg md:text-xl" />
                <FaUserFriends className="cursor-pointer text-gray-300 hover:text-white text-lg md:text-xl" />
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#252525] rounded-full flex justify-center items-center cursor-pointer">
                    <div className="bg-purple-400 w-7 h-7 md:w-8 md:h-8 rounded-full flex justify-center items-center text-black text-sm md:text-base">
                        A
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
