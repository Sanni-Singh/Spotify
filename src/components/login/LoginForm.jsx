import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const [inputError, setInputError] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    if (inputValue == "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)) {
      setInputError(true);
      return;
    }
    navigate("/password");
    setInputError(false);
  };
  return (
    <form action="" className="flex flex-col gap-7">
      <div className="flex flex-col gap-2">
        <label htmlFor="">Email or username</label>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={`border-[1px] ${
            inputError ? "border-red-600" : "border-white"
          } p-3 w-[350px] rounded-md`}
          type="email"
          placeholder="Email or username"
        />

        {inputError && (
          <p className="text-end text-[12px] pr-2 text-red-600">
            Enter a valid email
          </p>
        )}
      </div>
      <button
        onClick={handleClick}
        className="bg-[#1ED760] w-[350px] p-3 rounded-[30px] text-black cursor-pointer"
      >
        Continue
      </button>
    </form>
  );
};

export default LoginForm;
