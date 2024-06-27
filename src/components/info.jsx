import Desktop from "./utils/desktop_bar"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import validator from 'validator'
import '../index.css'
import { useNavigate } from "react-router-dom"
import { Next } from "./utils/buttons"


function Info() {
   const nameRegex = /^[a-zA-Z ]+$/;
   const navigate = useNavigate()
   const formik = useFormik({
      initialValues: {
         name: JSON.parse(sessionStorage.getItem('name')) || '',
         email: JSON.parse(sessionStorage.getItem('email')) || '',
         phone: JSON.parse(sessionStorage.getItem('phone')) || ''
      },
      validationSchema: Yup.object({
         name: Yup.string()
            .required('This field is required')
            .test("is-name", 'Invalid name', (value) => {
               return value.match(nameRegex)
            }),
         email: Yup.string()
            .required('This field is required')
            .test("is-email", 'Invalid email address', (value) => {
               return validator.isEmail(value)
            }),
         phone: Yup.string()
            .required('This field is required')
            .test("is-phone-number", "Invalid phone number format", (value) => {   
               return validator.isMobilePhone(value)
               })  
      }),
      onSubmit: (values) => {
         sessionStorage.setItem('name', JSON.stringify(values.name))
         sessionStorage.setItem('email', JSON.stringify(values.email))
         sessionStorage.setItem('phone', JSON.stringify(values.phone))
         navigate('/plan')
      }
   })
  return (
    <main className="main font-body">
      <section className="section" >
         <Desktop link1={true} />
         <div className="mx-auto mt-7 text-[rgb(2,41,90)]">
            <div>
               <h1 className="mb-1  font-extrabold text-3xl">
                  Personal info
               </h1>
               <p className="text-sm">
                  Please provide your name, email address and phone number.
               </p>
            </div>
            <form onSubmit={formik.handleSubmit} noValidate className="mt-10 flex flex-col gap-5">
            <label htmlFor="name" className="font-medium text-sm">
               <div className="flex justify-between">
                  Name
                  {
                     (formik.touched.name && formik.errors.name) && 
                     <span className="font-semibold self-end text-xs ml-100  text-red-500 ">
                        {formik.errors.name}
                     </span>
                  }
               </div>
               <input 
                     className={`w-full autofill:bg-clip-text autofill:hover:bg-clip-text mt-1 ${ formik.errors.name ? 'border-red-500 focus:border-red-500' : '' } rounded-lg bg-white p-3 border placeholder:text-sm focus:outline-none focus:border-2 cursor-pointer placeholder:font-normal font-medium capitalize placeholder:normal-case text-md text-[hsl(213,96%,18%)] focus:border-[hsl(243,100%,62%)] border-[hsl(229,24%,87%)] border-solid`} 
                     type="text"
                     autoFocus 
                     id="name"     
                     name= 'name'           
                     placeholder="e.g Stephen King"
                     {...formik.getFieldProps('name')}
                      />
               </label>
               <label htmlFor="email" className="text-sm font-medium">
                  <div className="flex justify-between">
                     Email Address
                     {
                        (formik.touched.email && formik.errors.email) && 
                        <span className="font-semibold self-end text-xs ml-100  text-red-500 ">
                           {formik.errors.email}
                        </span>
                     }
               </div>
                  <input 
                     className={`w-full autofill:bg-clip-text autofill:hover:bg-clip-text ${ formik.errors.email ? 'border-red-500 focus:border-red-500' : '' }   mt-1 rounded-lg bg-white p-3 border placeholder:text-sm focus:outline-none focus:border-2 cursor-pointer placeholder:font-normal  font-medium text-md text-[hsl(213,96%,18%)] focus:border-[hsl(243,100%,62%)] border-[hsl(229,24%,87%)] border-solid`} 
                     type="email" 
                     id="email"
                     name="email" 
                     placeholder="e.g. stephenking@lorem.com"
                     {...formik.getFieldProps('email')} />
               </label>
               <label htmlFor="phone" className="font-medium text-sm">
                  <div className="flex justify-between">
                     Phone Number
                     <p className="text-xs text-red-500 font-semibold">
                        {
                        (formik.touched.phone && formik.errors.phone) && 
                        <span className="font-semibold self-end text-xs ml-100  text-red-500 ">
                           {formik.errors.phone}
                        </span>
                     }
                     </p>
                  </div>
                  <input 
                     className={`w-full autofill:bg-clip-text autofill:hover:bg-clip-text ${ formik.errors.phone ? 'border-red-500 focus:border-red-500' : '' }  mt-1 rounded-lg bg-white p-3 border placeholder:text-sm focus:outline-none focus:border-2 cursor-pointer placeholder:font-normal font-medium text-md text-[hsl(213,96%,18%)] focus:border-[hsl(243,100%,62%)] border-[hsl(229,24%,87%)] border-solid`} 
                     type="tel" 
                     id="phone" 
                     name="phone"                      
                     placeholder="e.g. +1 234 567 890" 
                     {...formik.getFieldProps('phone')}/>
               </label>
               <Next />
            </form>
         </div>
      </section>
    </main>
  )
}

export default Info
