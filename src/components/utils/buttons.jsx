import React from 'react'
import { Link } from 'react-router-dom'

function Next() {
  return (
   <button type='submit'
   className='text-md w-fit text-white px-6 rounded-lg py-2 self-end mt-20 bg-[rgb(2,41,90)]' >
   Next Step
</button>
  )
}

function Prev({back}) {
   return (
      <Link 
         to={back}
         className='text-sm font-medium w-fit text-[rgb(2,41,90)] mt-20' >
         Go Back
      </Link>
      )
   }

   function Confirm(link) {
      return (
       <Link
         replace
         to={link}
         className='text-md w-fit text-white px-6 rounded-lg py-2 self-end mt-20 bg-[hsl(243,100%,62%)]' >
       Confirm
    </Link>
      )
    }

   export { Next, Prev, Confirm }
