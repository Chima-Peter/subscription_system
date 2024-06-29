import { NavLink } from "react-router-dom"

function Desktop({link1=false, link2=false, link3=false, link4=false}) {
  return (
    <nav className="sticky flex  flex-col gap-6 w-[274px] h-[568px] bg-navDesktop" >
      <div className="flex ml-10 gap-4 items-center text-white mt-10">
         <div 
            className={`w-8 h-8 text-md flex items-center justify-center border border-solid border-white rounded-full ${link1 ? 'bg-[hsl(206,94%,87%)] border-[hsl(206,94%,87%)] text-[hsl(213,96%,18%)] font-bold' : ' text-white'}`}>
            1
         </div>
         <div className="max-sm:hidden">
            <p className="text-xs font-extralight">
               STEP 1
            </p>
            <h1 className="font-semibold  text-xs" >
               YOUR INFO
            </h1>
         </div>
      </div>
      <div 
         className="flex ml-10 gap-4 items-center text-white">
         <div 
            className={`w-8 h-8 text-md flex items-center justify-center border border-solid border-white rounded-full ${link2 ? 'bg-[hsl(206,94%,87%)] border-[hsl(206,94%,87%)] text-[hsl(213,96%,18%)] font-bold' : ' text-white'}`}>
            2
         </div>
         <div className="max-sm:hidden">
            <p className="text-xs font-extralight">
               STEP 2
            </p>
            <h1 className="font-semibold  text-xs" >
               SELECT PLAN
            </h1>
         </div>
      </div>
      <div 
      className="flex ml-10 gap-4 items-center text-white">
         <div 
            className={`w-8 h-8 text-md flex items-center justify-center border border-solid border-white rounded-full ${link3 ? 'bg-[hsl(206,94%,87%)] border-[hsl(206,94%,87%)] text-[hsl(213,96%,18%)] font-bold' : ' text-white'}`}>
            3
         </div>
         <div className="max-sm:hidden">
            <p className="text-xs font-extralight">
               STEP 3
            </p>
            <h1 className="font-semibold  text-xs" >
               ADD-ONS
            </h1>
         </div>
      </div>
      <div className="flex ml-10 gap-4 items-center text-white">
         <div 
            className={`w-8 h-8 text-md flex items-center justify-center border border-solid border-white rounded-full ${link4 ? 'bg-[hsl(206,94%,87%)] border-[hsl(206,94%,87%)] text-[hsl(213,96%,18%)] font-bold' : ' text-white'}`}>
            4
         </div>
         <div className="max-sm:hidden">
            <p className="text-xs font-extralight">
               STEP 4
            </p>
            <h1 className="font-semibold  text-xs" >
               SUMMARY
            </h1>
         </div>
      </div>
    </nav>
  )
}

export default Desktop
