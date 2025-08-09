import { useRef, useState } from "react";

const PasswordInput = () => {
  const [password, setPassword] = useState(Array(6).fill(""));
  const reference = useRef([]);
  const handleChange = (e, index) => {
    if (!/[0-9]/.test(e.target.value)) return;
    setPassword((pre) =>
      pre.map((ele, idx) => (idx == index ? e.target.value : ele))
    );
    if (index < 5) reference.current[index + 1].focus();
  };
  const handleKeyDown = (e,index)=> {
    if(e.key == 'Backspace'){
      setPassword((pre)=> pre.map((ele,idx)=> idx == index ? '': ele));
      if(index > 0) reference.current[index - 1].focus();
    }
    else if(e.key == 'ArrowLeft' && index > 0){
      reference.current[index - 1].focus();
    }
    else if(e.key == 'ArrowRight' && index < 5){
      reference.current[index + 1].focus();
    }
    else if(password[index] && index < 5){
      reference.current[index + 1].focus();
    }
  }
  return (
    <div className="flex justify-between">
      {password.map((ele, idx) => (
        <input
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e)=> handleKeyDown(e,idx)}
          ref={(e) => (reference.current[idx] = e)}
          maxLength={1}
          key={idx}
          className="w-[50px] h-[50px] border-[1px] text-white text-center font-bold text-xl rounded-md focus:outline-white"
          value={ele}
          type="text"
        />
      ))}
    </div>
  );
};

export default PasswordInput;
