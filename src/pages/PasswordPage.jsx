import { useNavigate } from "react-router-dom"
import PasswordInput from "../components/password/PasswordInput"
import PasswordNavbar from "../components/password/PasswordNavbar"

const PasswordPage = () => {
  const navigate = useNavigate();
  const handleLogin = ()=> {
    navigate('/');
  }
  return (
    <div className="relative">
      <PasswordNavbar />
      <div className="sm:max-w-[350px] w-[90%] mx-auto flex flex-col gap-7">
        <p className="text-2xl font-bold">Enter the 6-digit code sent to you at s*i@g***l.com.</p>
        <PasswordInput />
        <div className="sm:w-[120px] flex justify-center items-center  rounded-[20px] border-[1px] mx-auto">
            <button className="text-[12px] py-2 px-3 font-bold cursor-pointer">Resend code</button>
        </div>
        <div className="flex flex-col gap-5">
            <button onClick={handleLogin} className="sm:w-[350px] bg-[#1ED760] text-black rounded-[30px] py-3 cursor-pointer">Log in</button>
            <button onClick={()=> navigate('/login')} className="sm:w-[350px] text-white rounded-[30px] py-3 cursor-pointer font-bold transform transition-transform duration-200 hover:scale-105">Log in with a password</button>
        </div>
      </div>
      <p className="fixed bottom-2 right-5 text-[13px]">© 2025 Spotify AB</p>
    </div>
  )
}

export default PasswordPage
