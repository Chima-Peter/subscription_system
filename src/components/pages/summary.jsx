import { Confirm, Prev } from '../utils/buttons'
import MediaQuery from 'react-responsive';
import Desktop from '../utils/desktop_bar'
import SummaryBox from '../utils/summaryBox'

function Summary() {
  return (
    <main className='main font-body'>
      <section className='section'>
         <MediaQuery minWidth={787}>
            <Desktop link4={true} />
         </MediaQuery>
         <div  className="mx-auto mt-7 text-[rgb(2,41,90)]">
            <div>
               <h1 className="md:[mb-1 font-extrabold text-3xl] max-md:[mb-1 font-extrabold text-3xl text-red-500]">
                  Finishing up
               </h1>
               <p className="text-sm">
                  Double-check everything looks OK before confirmimg.
               </p>
            </div>
            <SummaryBox />
            <div className='mt-[1.8rem] flex items-center justify-between'>
               <Prev back={'/add-on'}/>
               <Confirm link={'/thanks'} />
            </div>
         </div>
      </section>
    </main>
  )
}

export default Summary
