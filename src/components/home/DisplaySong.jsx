import Aside from "../common/Aside";

const DisplaySong = () =>{
  return(
    <section className="flex justify-end m-1 gap-2 min-h-screen" >
        <Aside/>
        <div className="w-[74vw] bg-[#1a1a1a] rounded-md p-4 pl-8">
           <div className="flex gap-2 "> 
            <button className={`p-2 px-4 bg-[#333333] rounded-3xl cursor-pointer`}>All</button>
            <button className={`p-2 px-4 bg-[#333333] rounded-3xl cursor-pointer`}>Music</button>
            <button className={`p-2 px-4 bg-[#333333] rounded-3xl cursor-pointer`}>Podcasts</button>
           </div>
    <div className="flex justify-between m-3 mt-10 mb-5">
    <h1 className="text-2xl hover:underline"> Editor's Pick</h1>
      <h2 className="text-sm hover:underline cursor-pointer"> Show all</h2>
    </div>
    <div>
        
    </div>
        </div>
    </section>
  )
}

export default DisplaySong;