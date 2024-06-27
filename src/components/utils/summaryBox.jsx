import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SummaryBox() {
   const [pricing, setPricing] = useState()
   const [plan, setPlan] =useState(
      {
         planName: '',
         planTime: '',
         planDuration: '',
         planAb: '',
         planPricing: ''
      }
   )
   const [addOn, setAddOn] = useState(
      {
         val1: '',
         val2: '',
         val3: ''
      }
   )
   useEffect(() => {
      const textPlan = JSON.parse(sessionStorage.getItem('planText'))
      if (textPlan)
         {
            const newPlan = plan
            newPlan.planName = (textPlan.split(' '))[0]
            newPlan.planTime = (textPlan.split(' '))[1]
            newPlan.planDuration = (textPlan.split(' '))[2]
            newPlan.planAb = (textPlan.split(' '))[3]
            newPlan.planPricing = Number(textPlan.split(' '))[4]
            setPlan(newPlan)
         }
         const addText = JSON.parse(sessionStorage.getItem('addOn'))
         if (addText)
         {
            setAddOn(addText)
         }
         if (textPlan && addText)
         { 
            let val1 = 0
            let val2 = 0
            let val3 = 0

            addText['val1'] !== '' ? val1 = Number(addText['val1']) : val1 = 0
            addText['val2'] !== '' ? val2 = Number(addText['val2']) : val2 = 0
            addText['val3'] !== '' ? val3 = Number(addText['val3']) : val3 = 0

            setPricing(Number(textPlan.split(' ')[4]) + val1 + val2 + val3)
         }
   }, [])
  return (
    <div className='flex flex-col gap-6 mt-10 text-[hsl(213,96%,18%)'>
      <div className='bg-[hsl(217,100%,97%)] border border-[hsl(217,100%,97%)] rounded-lg py-3 px-5 w-[400px]'>
         <div className='flex items-center justify-between pb-10 border-b-2 border-b-[hsl(229,24%,87%)]'>
            <div className='flex flex-col items-start '>
               <h4 className='text-[13px] font-extrabold pb-0.5'>
                  {`${plan.planName} ${plan.planTime}`}
               </h4>
               <Link to={'/plan'} className="underline text-xs">
                  Change
               </Link>
            </div>
            <h4 className='text-[13px] font-extrabold'>
               {plan.planDuration}
            </h4>
         </div>
         <div className='py-5 flex flex-col gap-3'>
            {
               Object.keys(addOn).map((key) => (
                  (addOn[key] !== '') && 
                  <div 
                     className='flex justify-between'
                     key={key}>
                     <p className="text-xs">
                        {key === 'val1' ? 'Online service' : key === 'val2' ? 'Larger storage' : 'Customisable profile'}
                     </p>
                     <p className="text-xs font-semibold">
                        {`+$${addOn[key]}/${plan.planAb}`}
                     </p>
                  </div>
               ))
            }
         </div>
      </div>
      <div className='flex items-center justify-between'>
         <p className="text-xs">
            Total (per month)
         </p>
         <h4 className='text-md font-extrabold text-[hsl(243,100%,62%)]'>
            {`+$${pricing}/${plan.planAb}`}
         </h4>
      </div>
    </div>
  )
}

export default SummaryBox
