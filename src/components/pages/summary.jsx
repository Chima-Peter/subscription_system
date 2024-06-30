import { Confirm, Prev } from '../utils/buttons'
import Mobile from '../utils/mobileBar';
import MediaQuery from 'react-responsive';
import Desktop from '../utils/desktop_bar'
import SummaryBox from '../utils/summaryBox'

function Summary() {
  return (
    <main className='main font-body gap-2'>
      <MediaQuery maxWidth={786}>
         <Mobile link4={true} />
      </MediaQuery>
      <section className='section max-md:px-6 max-md:mt-0 max-md:py-10 max-md:absolute max-md:top-0 max-md:translate-y-[100px] max-md:mb-10'>
         <MediaQuery minWidth={787}>
            <Desktop link4={true} />
         </MediaQuery>
         <div  className="mx-auto md:mt-7 text-[rgb(2,41,90)]">
            <div>
               <h1 className="mb-1 font-extrabold text-2xl">
                  Finishing up
               </h1>
               <p className="text-md md:text-[12.5px]">
                  Double-check everything looks OK before confirming.
               </p>
            </div>
            <SummaryBox />
            <MediaQuery minWidth={787}>
               <div className='mt-[1.8rem] flex items-center justify-between'>
                  <Prev back={'/add-on'}/>
                  <Confirm link={'/thanks'} />
               </div>
            </MediaQuery>
         </div>
      </section>
      <MediaQuery maxWidth={786}>
         <div className='flex justify-between  w-[100%] sticky bottom-0 p-4 h-[80px] items-center bg-white'>
            <Prev back={'/add-on'}/>
            <Confirm link={'/thanks'} />
         </div>
      </MediaQuery>
    </main>
  )
}

export default Summary
