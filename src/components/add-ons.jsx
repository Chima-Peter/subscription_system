import { useEffect, useState } from 'react'
import { Next, Prev } from './utils/buttons'
import Desktop from './utils/desktop_bar'
import AddOnBlock from './utils/addonblock'

function AddOn() {
   const [plan, setPlan] = useState('')
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
      setPlan((JSON.parse(sessionStorage.getItem('planText'))).split(' ')[3])
   }, [])

   const handleChange = () => {
      const newData = checkBox
      newData[event.target.value] = !checkBox[event.target.value]
      setCheckBox(newData)
   }
   const handleAddOn = () => {
      event.preventDefault()
      if (!checkBox.val1 && !checkBox.val2 && !checkBox.val3)
         console.log('fail')
      else {
         sessionStorage.setItem('addOn', JSON.stringify(checkBox))
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
               <form 
                  noValidate 
                  autoComplete='on' 
                  onSubmit={handleAddOn}
                  className='flex flex-col gap-3'>
                  <div 
                     className= {`flex gap-4 cursor-pointer items-center rounded-lg text-[hsl(213,96%,18%)] font-body w-full p-4 border hover:border-[hsl(243,100%,62%)] ${checkBox.val1 ? 'border border-[hsl(243,100%,62%)] bg-[hsl(206,94%,87%)] rounded-lg bg-clip-padding' : ' border-[hsl(229,24%,87%)]'}`}>
                     <input
                        // checked={checkBox.val1}
                        onChange={handleChange}
                        value={'val1'}
                        type="checkbox" 
                        name="online" 
                        id="online" 
                        className='cursor-pointer'
                     />
                     <label
                        className='cursor-pointer' 
                        htmlFor='online'
                        >
                           <AddOnBlock header={'Online service'} paragraph={'Access to multiplayer games'} pricing={`+$1/${plan}`} />
                        </label>
                  </div>
                  <div 
                     className= {`flex gap-4 cursor-pointer items-center rounded-lg text-[hsl(213,96%,18%)] font-body w-full p-4 border hover:border-[hsl(243,100%,62%)] ${checkBox.val2 ? 'border border-[hsl(243,100%,62%)] bg-[hsl(206,94%,87%)] rounded-lg bg-clip-padding' : ' border-[hsl(229,24%,87%)]'}`}>
                     <input
                        // checked={checkBox.val2}
                        onChange={handleChange}
                        value={'val2'}
                        type="checkbox" 
                        name="storage" 
                        id="storage" 
                        className='cursor-pointer'
                     />
                     <label
                        className='cursor-pointer' 
                        htmlFor='storage'
                        >
                           <AddOnBlock header={'Larger storage'} paragraph={'Extra 1TB of cloud save'} pricing={`+$2/${plan}`} />
                        </label>
                  </div>
                  <div 
                     className= {`flex gap-4 cursor-pointer items-center rounded-lg text-[hsl(213,96%,18%)] font-body w-full p-4 border hover:border-[hsl(243,100%,62%)] ${checkBox.val3 ? 'border border-[hsl(243,100%,62%)] bg-[hsl(206,94%,87%)] rounded-lg bg-clip-padding' : ' border-[hsl(229,24%,87%)]'}`}>
                     <input
                        // checked={checkBox.val3}
                        onChange={handleChange}
                        value={'val3'}
                        type="checkbox" 
                        name="custom" 
                        id="custom" 
                        className='cursor-pointer'
                     />
                     <label
                        className='cursor-pointer' 
                        htmlFor='custom'
                        >
                           <AddOnBlock header={'Customisable profile'} paragraph={'Customise theme on your profile'} pricing={`+$2/${plan}`} />
                        </label>
                  </div>
                  <div 
                     className='mt-[1.8rem] flex justify-between'>
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