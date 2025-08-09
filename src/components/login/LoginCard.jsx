
const LoginCard = ({cardData}) => {
  return (
    <div className={`w-[350px] py-3 px-8 rounded-[30px]  border-[1px] border-[#484646] hover:border-white cursor-pointer flex gap-5 items-center ${!cardData.logo ? 'justify-center':'justify-start'}`}>
      {cardData.logo && <img className="w-[30px]" src={cardData.logo} alt="" />}
      <p>{cardData.name}</p>
    </div>
  )
}

export default LoginCard
