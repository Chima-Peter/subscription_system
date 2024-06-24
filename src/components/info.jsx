import Desktop from "./utils/desktop_bar"
import '../index.css'
function Info() {
  return (
    <main className="main font-body">
      <section className="section" >
         <Desktop />
         <div className="mx-auto text-[rgb(2, 41, 90)] mt-7 ">
            <div>
               <h1 className="mb-2  font-extrabold text-4xl">
                  Personal info
               </h1>
               <p className="text-[14px] font-[500]">
                  Please provide your name, email address and phone number.
               </p>
            </div>
            <form noValidate>

            </form>
         </div>
      </section>
    </main>
  )
}

export default Info
