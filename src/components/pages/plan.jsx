import { createContext, useEffect, useState } from 'react'
import { Block } from '../utils/block'
import { Next, Prev } from '../utils/buttons'
import Desktop from '../utils/desktop_bar'
import MediaQuery from 'react-responsive';
import Toggle from '../utils/toggle'
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
      const newData = JSON.parse(sessionStorage.getItem('plan'))
      if (newData)
         {
            setCheckBox(newData)
            setChecker(true)
            setPlan(JSON.parse(sessionStorage.getItem('planText')))
         }
      if (checkBox.val4 || checkBox.val5 || checkBox.val6)
         setShowToggle(true)
      else if (checkBox.val1 || checkBox.val3 || checkBox.val3)
         setShowToggle(false)
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
         <MediaQuery minWidth={787}>
            <Desktop link2={true} />
         </MediaQuery>
         <div className="mx-auto mt-7 text-[rgb(2,41,90)]">
            <div>
               <h1 className="mb-1  font-extrabold text-2xl">
                  Select your plan
               </h1>
               <p className="text-[12.5px]">
                  You have the option of monthly or yearly billing
               </p>
            </div>
            <div className='mt-10 flex flex-col'>
               <form noValidate onSubmit={handlePlan}>
                  <div className='flex gap-3'>
                     {
                        Object.keys(checkBox).map((key, index) => (
                           (index < 3 && showToggle) && <div //Render the first 3 blocks
                                 key={key}
                                 className='flex gap-3'>
                                 <input
                                    onChange={handleChange}
                                    type="radio" 
                                    name="plan"
                                    placeholder={key === 'val1' ? 'Arcade (Monthly) $9/mo mo 9' : key === 'val2' ? 'Advanced (Monthly) $12/mo mo 12' : 'Pro (Monthly) $15/mo mo 15'}  
                                    id={key} 
                                    checked={checkBox[key]}
                                    value={key}
                                    className='peer/pro hidden'/>
                                 <label 
                                    htmlFor={key} 
                                    className='peer-checked/pro:hover:border-0 peer-checked/pro:border-[hsl(243,100%,62%)] peer-checked/pro:border peer-checked/pro:bg-[hsl(206,94%,87%)] peer-checked/pro:rounded-lg peer-checked/pro:bg-clip-padding'>
                                    <Block 
                                       imgText={
                                          key === 'val1' ? 'icon-arcade.svg' : key === 'val2' ? 'icon-advanced.svg' : 'icon-pro.svg'
                                       } 
                                       text={
                                          key === 'val1' ? 'Arcade' : key === 'val2' ? 'Advanced' : 'Pro'
                                       } 
                                       pricing={
                                          key === 'val1' ? '$9/mo' : key === 'val2' ? '$12/mo' : '$15/mo'
                                       } />
                                 </label>
                           </div>
                        ))
                     }
                  </div>
                  <div className='flex gap-3'>
                     {
                        Object.keys(checkBox).map((key, index) => (
                           ((index > 2) && !showToggle) && <div //Render the last 3 blocks
                                 key={key}
                                 className='flex gap-3'>
                                 <input
                                    onChange={handleChange}
                                    type="radio" 
                                    name="plan"
                                    placeholder={key === 'val4' ? 'Arcade (Monthly) $90/yr yr 90' : key === 'val5' ? 'Advanced (Yearly) $120/yr yr 120' : 'Pro (Yearly) $150/yr yr 150'}  
                                    id={key} 
                                    checked={checkBox[key]}
                                    value={key}
                                    className='peer/pro hidden'/>
                                 <label 
                                    htmlFor={key} 
                                    className='peer-checked/pro:hover:border-0 peer-checked/pro:border-[hsl(243,100%,62%)] peer-checked/pro:border peer-checked/pro:bg-[hsl(206,94%,87%)] peer-checked/pro:rounded-lg peer-checked/pro:bg-clip-padding'>
                                    <Block 
                                       imgText={
                                          key === 'val4' ? 'icon-arcade.svg' : key === 'val5' ? 'icon-advanced.svg' : 'icon-pro.svg'
                                       } 
                                       text={
                                          key === 'val4' ? 'Arcade' : key === 'val5' ? 'Advanced' : 'Pro'
                                       } 
                                       pricing={
                                          key === 'val4' ? '$90/yr' : key === 'val5' ? '$120/yr' : '$150/yr'
                                       } />
                                 </label>
                           </div>
                        ))
                     }
                  </div>
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
