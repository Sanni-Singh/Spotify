import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignPage = () => {
  const [first,setFirst] = useState('');
  const [last,setLast] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [apiStatus,setApiStatus] = useState(false);
  const [error,setError] = useState(false);
  const navigate = useNavigate('/')

  const handleClick = async(e)=>{
    e.preventDefault();
    setApiStatus(true);
    try{
        navigate('/')
    }
    catch (err){
      setError(true);
    }
    finally{
      setApiStatus(false);
    }
  }
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center px-4">
      <div className="mb-8">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Logo_CMYK_White.png"
          alt="Spotify Logo"
          className="h-12"
        />
      </div>

      <div className="w-full max-w-lg bg-zinc-900 border border-white/10 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Sign up for free to start listening
        </h2>

        <form className="grid grid-cols-1 gap-y-6">
          <div>
            <label className="block text-sm font-medium text-white">
              First name
            </label>
            <input
            value={first}
            onChange={(e)=> setFirst(e.target.value)}
              type="text"
              className="mt-2 block w-full rounded-md bg-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">
              Last name
            </label>
            <input
            value={last}
            onChange={(e)=> setLast(e.target.value)}
              type="text"
              className="mt-2 block w-full rounded-md bg-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your last name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">
              Email address
            </label>
            <input
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
              type="email"
              className="mt-2 block w-full rounded-md bg-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">
              Password
            </label>
            <input
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
              type="password"
              className="mt-2 block w-full rounded-md bg-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Create a password"
            />
          </div>

          <button
          onClick={handleClick}
            type="submit"
            className="mt-6 w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-full transition"
          >
            Sign up
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-green-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignPage;
