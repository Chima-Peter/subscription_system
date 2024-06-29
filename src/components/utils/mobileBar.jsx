import { NavLink } from "react-router-dom"

function Mobile({link1=false, link2=false, link3=false, link4=false}) {
  return (
    <nav className="justify-center flex gap-5 bg-navMobile w-screen h-[172px] bg-cover bg-no-repeat mb-auto" >
      <div className="flex mt-10 text-white">
         <div 
            className={`w-8 h-8 text-md flex items-center justify-center border border-solid border-white rounded-full ${link1 ? 'bg-[hsl(206,94%,87%)] border-[hsl(206,94%,87%)] text-[hsl(213,96%,18%)] font-bold' : ' text-white'}`}>
            1
         </div>
      </div>
      <div 
         className="flex mt-10 text-white">
         <div 
            className={`w-8 h-8 text-md flex items-center justify-center border border-solid border-white rounded-full ${link2 ? 'bg-[hsl(206,94%,87%)] border-[hsl(206,94%,87%)] text-[hsl(213,96%,18%)] font-bold' : ' text-white'}`}>
            2
         </div>
      </div>
      <div 
         className="flex mt-10 text-white">
         <div 
            className={`w-8 h-8 text-md flex items-center justify-center border border-solid border-white rounded-full ${link3 ? 'bg-[hsl(206,94%,87%)] border-[hsl(206,94%,87%)] text-[hsl(213,96%,18%)] font-bold' : ' text-white'}`}>
            3
         </div>
      </div>
      <div className="flex mt-10 text-white">
         <div 
            className={`w-8 h-8 text-md flex items-center justify-center border border-solid border-white rounded-full ${link4 ? 'bg-[hsl(206,94%,87%)] border-[hsl(206,94%,87%)] text-[hsl(213,96%,18%)] font-bold' : ' text-white'}`}>
            4
         </div>
      </div>
    </nav>
  )
}

export default Mobile
