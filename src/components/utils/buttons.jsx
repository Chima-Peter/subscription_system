import React from 'react'
import { Link } from 'react-router-dom'

function Next() {
  return (
   <button type='submit'
   className='text-[12.5px] w-fit text-white px-4 rounded-md py-2 self-end mt-20 bg-[rgb(2,41,90)]' >
   Next Step
</button>
  )
}

function Prev({back}) {
   return (
      <Link 
         to={back}
         className='text-[12.5px] font-medium w-fit text-[rgb(2,41,90)] mt-20' >
         Go Back
      </Link>
      )
   }

   function Confirm({link}) {
      return (
       <Link
         replace
         to={link}
         className='text-[12.5px] w-fit text-white px-4 rounded-lg py-2 self-end mt-20 bg-[hsl(243,100%,62%)]' >
       Confirm
    </Link>
      )
    }

   export { Next, Prev, Confirm }
