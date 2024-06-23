import { NavLink } from "react-router-dom"

function Desktop() {
  return (
    <nav className="sticky flex  flex-col gap-6 w-[274px] h-[568px] bg-nav" >
      <div className="flex ml-10 gap-4 items-center text-white mt-10">
         <NavLink to={'/'} className="w-8 focus:bg-white h-8 text-md flex items-center justify-center border border-solid border-white text-white rounded-full">
            1
         </NavLink>
         <div className="max-sm:hidden">
            <p className="text-xs font-extralight">
               STEP 1
            </p>
            <h1 className="font-semibold  text-[14px]" >
               YOUR INFO
            </h1>
         </div>
      </div>
      <div className="flex ml-10 gap-4 items-center text-white">
         <NavLink to={'/plan'} className="w-8 active:bg-[hsl(206, 94%, 87%)] h-8 text-md flex items-center justify-center border border-solid border-white text-white rounded-full">
            2
         </NavLink>
         <div className="max-sm:hidden">
            <p className="text-xs font-extralight">
               STEP 2
            </p>
            <h1 className="font-semibold  text-[14px]" >
               SELECT PLAN
            </h1>
         </div>
      </div>
      <div className="flex ml-10 gap-4 items-center text-white">
         <NavLink to={'/add-on'} className="w-8 active:bg-[hsl(206, 94%, 87%)] h-8 text-md flex items-center justify-center border border-solid border-white text-white rounded-full">
            3
         </NavLink>
         <div className="max-sm:hidden">
            <p className="text-xs font-extralight">
               STEP 3
            </p>
            <h1 className="font-semibold  text-[14px]" >
               ADD-ONS
            </h1>
         </div>
      </div>
      <div className="flex ml-10 gap-4 items-center text-white">
         <NavLink to={'/summary'} className="w-8 active:bg-[hsl(206, 94%, 87%)] h-8 text-md flex items-center justify-center border border-solid border-white text-white rounded-full">
            4
         </NavLink>
         <div className="max-sm:hidden">
            <p className="text-xs font-extralight">
               STEP 4
            </p>
            <h1 className="font-semibold  text-[14px]" >
               SUMMARY
            </h1>
         </div>
      </div>
    </nav>
  )
}

export default Desktop
