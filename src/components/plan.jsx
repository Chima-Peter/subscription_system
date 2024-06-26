import { createContext, useState } from 'react'
import Block from './utils/block'
import { Next } from './utils/buttons'
import Desktop from './utils/desktop_bar'
import Toggle from './utils/toggle'

const toggleBar = createContext()
function Plan() {
   const [showToggle, setShowToggle] = useState(true)
   
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
               <form autoComplete='on' noValidate>
                  {
                     showToggle && <div className='flex gap-3'>
                        <input type="radio" 
                           name="month" 
                           id="arcade" 
                           className='hidden peer/arcade'/>
                        <label 
                        htmlFor="arcade" 
                        className='p-0 m-0 peer-checked/arcade:hover:border-0 peer-checked/arcade:border-[hsl(243,100%,62%)] peer-checked/arcade:border peer-checked/arcade:bg-[hsl(206,94%,87%)] peer-checked/arcade:rounded-lg peer-checked/arcade:bg-clip-padding'>
                           <Block imgText={'icon-arcade.svg'} text={'Arcade'} pricing={'$9/mo'} />
                        </label>
                        <input 
                           type="radio" 
                           name='month'
                           id='adv' 
                           className='peer/adv hidden' />
                           <label 
                           htmlFor="adv" 
                           className='peer-checked/adv:border-[hsl(243,100%,62%)] peer-checked/adv:border peer-checked/adv:bg-[hsl(206,94%,87%)] peer-checked/adv:rounded-lg peer-checked/adv:hover:border-0 peer-checked/adv:bg-clip-padding'>
                              <Block imgText={'icon-advanced.svg'} text={'Advanced'} pricing={'$12/mo'} />
                           </label>
                        <input 
                           type="radio" 
                           name="month" 
                           id="pro" 
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
                        <input type="radio" 
                           name="month" 
                           id="arcade" 
                           className='hidden peer/arcade'/>
                        <label 
                        htmlFor="arcade" 
                        className='p-0 m-0 peer-checked/arcade:hover:border-0 peer-checked/arcade:border-[hsl(243,100%,62%)] peer-checked/arcade:border peer-checked/arcade:bg-[hsl(206,94%,87%)] peer-checked/arcade:rounded-lg peer-checked/arcade:bg-clip-padding'>
                           <Block imgText={'icon-arcade.svg'} text={'Arcade'} pricing={'$90/yr'} month={'2 months free'} />
                        </label>
                        <input 
                           type="radio" 
                           name='month'
                           id='adv' 
                           className='peer/adv hidden' />
                           <label 
                           htmlFor="adv" 
                           className='peer-checked/adv:border-[hsl(243,100%,62%)] peer-checked/adv:border peer-checked/adv:bg-[hsl(206,94%,87%)] peer-checked/adv:rounded-lg peer-checked/adv:hover:border-0 peer-checked/adv:bg-clip-padding'>
                              <Block imgText={'icon-advanced.svg'} text={'Advanced'} pricing={'$120/yr'} month={'2 months free'} />
                           </label>
                        <input 
                           type="radio" 
                           name="month" 
                           id="pro" 
                           className='peer/pro hidden'/>
                        <label 
                           htmlFor="pro" 
                           className='peer-checked/pro:hover:border-0 peer-checked/pro:border-[hsl(243,100%,62%)] peer-checked/pro:border peer-checked/pro:bg-[hsl(206,94%,87%)] peer-checked/pro:rounded-lg peer-checked/pro:bg-clip-padding'>
                           <Block imgText={'icon-pro.svg'} text={'Pro'} pricing={'$150/yr'} month={'2 months free'} />
                        </label>
                     </div>
                  }
               </form>
               <toggleBar.Provider value={{setShowToggle,  showToggle}}>
                  <Toggle />
               </toggleBar.Provider>
               <div className='mt-[3.6rem] self-end'>
                  <Next />
               </div>
            </div>
         </div>
      </section>
    </main>
  )
}

export { Plan, toggleBar }
