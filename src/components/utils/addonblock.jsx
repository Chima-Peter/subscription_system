function AddOnBlock({ header, paragraph, pricing}) {
  return (
   <div className="flex w-[300px] justify-between items-center">
      <div className="flex flex-col">
         <h4 className='text-[12.5px] font-extrabold'>
            {header}
         </h4>
         <p  className='font-normal text-xs'>
            {paragraph}
         </p>
      </div>
      <p  className='font-medium text-[hsl(243,100%,62%)] text-xs'>
         {pricing}
      </p>
   </div>
  )
}

export default AddOnBlock
