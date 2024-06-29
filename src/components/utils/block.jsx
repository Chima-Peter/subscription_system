function Block({imgText, text, pricing, month}) {
   
  return (
    <div 
    className='cursor-pointer flex md:flex-col gap-5 md:gap-8 rounded-lg text-[hsl(213,96%,18%)] font-body w-[80vw] md:w-[120px] p-3 checked:bg-clip-padding border border-[hsl(229,24%,87%)] hover:border-[hsl(243,100%,62%)] '
    >
      <img width={'40px'} src={`/subscription_system/images/components/plan/${imgText}`} alt="" />
      <div>
         <h4 className='py-1 text-[14px] font-extrabold'>
            {text}
         </h4>
         <p className='font-normal text-xs'>
            {pricing}
         </p>
         {
            month && <p className='text-xs font-medium py-1'>
               {month}
            </p>
         }
      </div>
    </div>
  )
}


export { Block }
