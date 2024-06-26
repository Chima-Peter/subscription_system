import { createContext, useEffect, useState } from 'react'
import { Block } from './utils/block'
import { Next, Prev } from './utils/buttons'
import Desktop from './utils/desktop_bar'
import Toggle from './utils/toggle'
import { useNavigate } from 'react-router-dom'

const toggleBar = createContext()
function Plan() {
   const [showToggle, setShowToggle] = useState(true)
   const [checker, setChecker] = useState(false)
   const [plan, setPlan] = useState('')
   const navigate = useNavigate()
   const [checkBox, setCheckBox] = useState(
      {
         val1: false,
         val2: false,
         val3: false,
         val4: false,
         val5: false,
         val6: false
      }
   )

   useEffect(() => {
      const newData = checkBox
      Object.keys(newData).forEach((key) => {
         if (sessionStorage.getItem('plan'))
            {
               newData[key] = (JSON.parse(sessionStorage.getItem('plan')))[key]
               setChecker(true)
            }
      })
      setCheckBox(newData)
            if (checkBox.val4 || checkBox.val5 || checkBox.val6)
               setShowToggle(false)
            else if (checkBox.val1 || checkBox.val3 || checkBox.val3)
               setShowToggle(true)

   }, [])

   const handleChange = () => {
      setChecker(true)
      setPlan(event.target.placeholder)
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
   const handlePlan = () => {
      event.preventDefault()
      if (!checker)
         return
      else {
         sessionStorage.setItem('plan', JSON.stringify(checkBox))
         sessionStorage.setItem('planText', JSON.stringify(plan))
         navigate('/add-on')
      }
   }
   
  return (
    <main className='main font-body'>
      <section className='section'>
         <Desktop />
         <div className="mx-auto mt-7 text-[rgb(2,41,90)]">
            <div>
               <h1 className="mb-1  font-extrabold text-3xl">
                  Select your plan
               </h1>
               <p className="text-sm">
                  You have the option of monthly or yearly billing
               </p>
            </div>
            <div className='mt-10 flex flex-col'>
               <form onSubmit={handlePlan} noValidate>
                  {
                     showToggle && <div className='flex gap-3'>
                        <input
                           onChange={handleChange}
                           type="radio" 
                           name="plan"
                           placeholder='Arcade (Monthly) $9/mo' 
                           id="arcade" 
                           checked={checkBox.val1}
                           value={'val1'}
                           className='hidden peer/arcade'/>
                        <label 
                        htmlFor="arcade" 
                        className='p-0 m-0 peer-checked/arcade:hover:border-0 peer-checked/arcade:border-[hsl(243,100%,62%)] peer-checked/arcade:border peer-checked/arcade:bg-[hsl(206,94%,87%)] peer-checked/arcade:rounded-lg peer-checked/arcade:bg-clip-padding'>
                           <Block imgText={'icon-arcade.svg'} text={'Arcade'} pricing={'$9/mo'} />
                        </label>
                        <input
                           onChange={handleChange}
                           type="radio" 
                           name='plan'
                           id='adv' 
                           checked={checkBox.val2}
                           value={'val2'}
                           placeholder='Advanced (Monthly) $12/mo' 
                           className='peer/adv hidden' />
                           <label 
                           htmlFor="adv" 
                           className='peer-checked/adv:border-[hsl(243,100%,62%)] peer-checked/adv:border peer-checked/adv:bg-[hsl(206,94%,87%)] peer-checked/adv:rounded-lg peer-checked/adv:hover:border-0 peer-checked/adv:bg-clip-padding'>
                              <Block imgText={'icon-advanced.svg'} text={'Advanced'} pricing={'$12/mo'} />
                           </label>
                        <input
                           onChange={handleChange}
                           type="radio" 
                           name="plan"
                           placeholder='Pro (Monthly) $15/mo'  
                           id="pro" 
                           checked={checkBox.val3}
                           value={'val3'}
                           className='peer/pro hidden'/>
                        <label 
                           htmlFor="pro" 
                           className='peer-checked/pro:hover:border-0 peer-checked/pro:border-[hsl(243,100%,62%)] peer-checked/pro:border peer-checked/pro:bg-[hsl(206,94%,87%)] peer-checked/pro:rounded-lg peer-checked/pro:bg-clip-padding'>
                           <Block imgText={'icon-pro.svg'} text={'Pro'} pricing={'$15/mo'} />
                        </label>
                     </div>
                  }
                  {
                     !showToggle && <div className='flex gap-3'>
                        <input
                           onChange={handleChange}
                           type="radio" 
                           name="plan" 
                           checked={checkBox.val4}
                           value={'val4'}
                           id="arcade"
                           placeholder='Arcade (Yearly) $90/yr'  
                           className='hidden peer/arcade'/>
                        <label 
                        htmlFor="arcade" 
                        className='p-0 m-0 peer-checked/arcade:hover:border-0 peer-checked/arcade:border-[hsl(243,100%,62%)] peer-checked/arcade:border peer-checked/arcade:bg-[hsl(206,94%,87%)] peer-checked/arcade:rounded-lg peer-checked/arcade:bg-clip-padding'>
                           <Block imgText={'icon-arcade.svg'} text={'Arcade'} pricing={'$90/yr'} month={'2 months free'} />
                        </label>
                        <input
                           onChange={handleChange}
                           type="radio" 
                           name='plan'
                           id='adv' 
                           checked={checkBox.val5}
                           value={'val5'}
                           placeholder='Advanced (Yearly) $120/yr' 
                           className='peer/adv hidden' />
                           <label 
                           htmlFor="adv" 
                           className='peer-checked/adv:border-[hsl(243,100%,62%)] peer-checked/adv:border peer-checked/adv:bg-[hsl(206,94%,87%)] peer-checked/adv:rounded-lg peer-checked/adv:hover:border-0 peer-checked/adv:bg-clip-padding'>
                              <Block imgText={'icon-advanced.svg'} text={'Advanced'} pricing={'$120/yr'} month={'2 months free'} />
                           </label>
                        <input
                           onChange={handleChange}
                           type="radio" 
                           name="plan" 
                           checked={checkBox.val6}
                           value={'val6'}
                           id="pro" 
                           placeholder='Pro (Yearly) $150/yr' 
                           className='peer/pro hidden'/>
                        <label 
                           htmlFor="pro" 
                           className='peer-checked/pro:hover:border-0 peer-checked/pro:border-[hsl(243,100%,62%)] peer-checked/pro:border peer-checked/pro:bg-[hsl(206,94%,87%)] peer-checked/pro:rounded-lg peer-checked/pro:bg-clip-padding'>
                           <Block imgText={'icon-pro.svg'} text={'Pro'} pricing={'$150/yr'} month={'2 months free'} />
                        </label>
                     </div>
                  }
                  <toggleBar.Provider value={{setShowToggle,  showToggle}}>
                     <Toggle />
                  </toggleBar.Provider>
                  <div className='mt-[3.6rem] flex justify-between'>
                     <Prev back={'/'}/>
                     <Next />
                  </div>
               </form>
            </div>
         </div>
      </section>
    </main>
  )
}

export { Plan, toggleBar }
