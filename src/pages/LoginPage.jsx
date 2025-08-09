import LoginFooter from "../components/login/LoginFooter";
import spotifyImage from "../assets/Images/spotifyLogo.png";
import LoginOption from "../components/login/LoginOption";
import LoginForm from "../components/login/LoginForm";

const LoginPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#2b2b2b] to-black w-screen h-screen relative">
      <div className="md:w-[700px] w-[100%] md:h-[700px] h-[100%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#0a0a0a] to-[#101010] md:rounded-xl">
        <div className="flex flex-col justify-center items-center py-6 md:px-15 gap-8">
          <div className="flex flex-col justify-center items-center gap-2">
            <img className="w-[50px]" src={spotifyImage} alt="" />
            <h1 className="text-3xl font-extrabold">Log in to Spotify</h1>
          </div>
          <LoginOption />
          <hr className="border-t border-[#333] w-full" />
          <LoginForm />
          <p className="text-[#807b7b]">Don't have an account? <span className="underline text-white">Sign up for Spotify</span></p>
        </div>
      </div>
      <LoginFooter />
    </div>
  );
};

export default LoginPage;
