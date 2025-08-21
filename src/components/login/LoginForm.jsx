import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../features/userSlice";

const LoginForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [apiStatus,setApiStatus] = useState(false);
  const [loginFails,setsetLoginfails] = useState(false);

  const dispatch =  useDispatch();
  const matchTheUser = async () => {
    // setApiStatus(true);
    // try{
    //   const res = await fetch(
    //   `https://spotify-backend-apis.onrender.com/api/user/login`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email: emailValue,
    //       password: passwordValue,
    //     }),
    //   }
    // );
    // const data = res.json();
    // if(data.status){
    //   let userData = {
    //     email:data.email,name:data.name,profile:data.profile
    //   }
    //   dispatch(loginUser(userData));
    //   navigate('/');
    // }
    // else alert('gaalt h')
    // }
    // catch (err){
    //   setsetLoginfails(true);
    // }
    // finally{
    //   setApiStatus(false);
    // }
    navigate('/')
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/')
    if (emailValue == "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setEmailError(true);
      return;
    } else if (
      !/[0-9]/.test(passwordValue) ||
      !/[a-z]/.test(passwordValue) ||
      !/[A-Z]/.test(passwordValue) ||
      passwordValue.length < 8
    ) {
      setPasswordError(true);
      return;
    }
    matchTheUser();
  };
  return (
    <form action="" className="flex flex-col gap-7">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="">Email</label>
          <input
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            className={`border-[1px] ${
              emailError ? "border-red-600" : "border-white"
            } p-3 w-[350px] rounded-md`}
            type="email"
            placeholder="Enter a email address"
          />

          {emailError && (
            <p className="text-end text-[12px] pr-2 text-red-600">
              Enter a valid email
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Password</label>
          <input
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            className={`border-[1px] ${
              passwordError ? "border-red-600" : "border-white"
            } p-3 w-[350px] rounded-md`}
            type="password"
            placeholder="Enter your password"
          />

          {passwordError || loginFails && (
            <p className="text-end text-[12px] pr-2 text-red-600">
              {loginFails ?'Invalid Login Credintials':'Enter a valid Password'}
            </p>
          )}
        </div>
      </div>
      <button
      disabled={apiStatus}
        onClick={handleClick}
        className={`${apiStatus ? 'bg-[#333]' :'bg-[#1ED760]'} w-[350px] p-3 rounded-[30px] text-black cursor-pointer`}
      >
        Continue
      </button>
    </form>
  );
};

export default LoginForm;
