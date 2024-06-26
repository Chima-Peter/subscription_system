import { useEffect, useState } from 'react'
import { Next, Prev } from './utils/buttons'
import Desktop from './utils/desktop_bar'
import AddOnBlock from './utils/addonblock'

function AddOn() {
   const [checker, setChecker] = useState(true)
   const [addOn, setAddOn] = useState('')
   const [checkBox, setCheckBox] = useState(
      {
         val1: false,
         val2: false,
         val3: false,
      }
   )

   useEffect(() => {
      const newData = checkBox
      Object.keys(newData).forEach((key) => {
         if (sessionStorage.getItem('add-on'))
            newData[key] = (JSON.parse(sessionStorage.getItem('add-on')))[key]
      })
   }, [])

   const handleChange = () => {
      const newData = checkBox
      Object.keys(newData).forEach((key) => {
         checkBox[key] = false
         if (key == event.target.value)
         {
            checkBox[key] = true
         }
      })
      setCheckBox(newData)
   }
   const handleAddOn = () => {
      event.preventDefault()
      if (!checker)
         console.log('fail')
      else {
         sessionStorage.setItem('plan', JSON.stringify(checkBox))
         sessionStorage.setItem('planText', JSON.stringify(addOn))
         console.log('success')
      }
   }
   
  return (
    <main className='main font-body'>
      <section className='section'>
         <Desktop />
         <div className="mx-auto mt-7 text-[rgb(2,41,90)]">
            <div>
               <h1 className="mb-1  font-extrabold text-3xl">
                  Pick add-ons
               </h1>
               <p className="text-sm">
                  Add-ons help enhance your gaming experience
               </p>
            </div>
            <div className='mt-10 flex flex-col'>
               <form noValidate autoComplete='on' onSubmit={handleAddOn}>
                  <div 
                     className='cursor-pointer flex gap-4 items-center rounded-lg text-[hsl(213,96%,18%)] font-body w-full p-4 border border-[hsl(229,24%,87%)] hover:border-[hsl(243,100%,62%)]'>
                     <input
                        type="checkbox" 
                        name="online" 
                        id="online" 
                     />
                     <label 
                        htmlFor='online'
                        >
                           <AddOnBlock header={'Online service'} paragraph={'Access to multiplayer games'} pricing={'+$1/mo'} />
                        </label>
                  </div>
                  <div className='mt-[3.6rem] flex justify-between'>
                     <Prev back={'/plan'}/>
                     <Next />
                  </div>
               </form>
            </div>
         </div>
      </section>
    </main>
  )
}

export default AddOn