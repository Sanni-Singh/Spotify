import spotifyLogo from '../../assets/Images/spotifyLogo.png'
import { GoHomeFill } from "react-icons/go";

const Navbar = () => {
  return (
   <nav className='bg-black h-[60px] border'>
   <div className= 'w-[35px] m-3 ml-6 cursor-pointer'>
     <img src={spotifyLogo} alt="logo"/>
   </div>
   <div>
    <GoHomeFill/>
   </div>
   </nav>
  )
}

export default Navbar
