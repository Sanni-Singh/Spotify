import { useState } from "react"
import googleImageUrl from '../../assets/Images/googleLogo.webp';
import facebookImageUrl from '../../assets/Images/facebookImage.png';
import appleImageUrl from '../../assets/Images/appleImage.png';
import LoginCard from "./LoginCard";

const LoginOption = () => {
    const [loginOptions, setLoginOption] = useState([
        {
            name: 'Continue with Google',
            logo:googleImageUrl,
            url:'',
            id:1,
        },
        {
            name: 'Continue with Facebook',
            logo:facebookImageUrl,
            url:'',
            id:2,
        },
        {
            name: 'Continue with Apple',
            logo:appleImageUrl,
            url:'',
            id:3
        },
        {
            name: 'Continue with phone number',
            logo:'',
            url:'',
            id:4
        }
    ])
  return (
    <div className="flex flex-col gap-2">
      {loginOptions.map((ele)=> <LoginCard key={ele.id} cardData={ele}/>)}
    </div>
  )
}

export default LoginOption
