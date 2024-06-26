import { useField } from 'formik'
import Block from './block'
import { useEffect } from 'react'

function Checbox({ children, ...props }) {
   const [field] = useField({...props, type: 'checkbox'})
   return (
      <>
         <input 
            type='checkbox'
            id= {props.id}
            name={props.name}
            {...field}
            className='hidden peer/arcad'
            />
         <label  
         htmlFor={props.for}
         className='p-0 m-0 w-fit'>
            <div 
               className='cursor-pointer flex flex-col gap-8 rounded-lg text-[hsl(213,96%,18%)] font-body w-[120px] p-2 border border-[hsl(229,24%,87%)] hover:border-[hsl(243,100%,62%)] peer-checked/arcad:hover:border-0 peer-checked/arcad:border-[hsl(243,100%,62%)] peer-checked/arcad:border peer-checked/arcad:bg-red peer-checked/arcad:rounded-lg peer-checked/arcad:bg-clip-padding'
               >
                  <img width={'40px'} src={`/images/components/plan/icon-arcade.svg`} alt="" />
                  <div>
                     <h4 className='py-1 text-[14px] font-extrabold'>
                        Arcade
                     </h4>
                     <p className='font-light text-xs'>
                        Price
                     </p>
                     {
                        <p className='text-xs font-medium py-1'>
                           month
                        </p>
                     }
                  </div>
               </div>
         </label>
      </>
  )
}

export default Checbox
