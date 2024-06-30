import React from 'react'
import { Link } from 'react-router-dom'

function Next({id}) {
  return (
   <button type='submit'
   form={id}
   className='text-[12.5px] w-fit text-white px-4 rounded-md py-2 md:self-end md:mt-20 mt-0 bg-[rgb(2,41,90)]' >
   Next Step
</button>
  )
}

function Prev({back}) {
   return (
      <Link 
         to={back}
         className='text-[12.5px] font-medium w-fit text-[rgb(2,41,90)] md:mt-20 mt-0' >
         Go Back
      </Link>
      )
   }

   function Confirm({link}) {
      return (
       <Link
         replace
         to={link}
         className='text-[12.5px] w-fit text-white px-4 rounded-lg py-2 md:self-end md:mt-20 mt-0 bg-[hsl(243,100%,62%)]' >
       Confirm
    </Link>
      )
    }

   export { Next, Prev, Confirm }
