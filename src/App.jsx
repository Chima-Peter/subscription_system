import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./components/pages/errorpage"
import Info from "./components/pages/info"
import {Plan} from "./components/pages/plan"
import AddOn from "./components/pages/add-ons"
import Summary from "./components/pages/summary"
import Thanks from "./components/pages/thanks"

function App() {

  return (
   <HashRouter 
      basename={import.meta.env.DEV ? '/' : '/subscription_system/'}
   >
      <Routes>
         <Route path="*" element={<ErrorPage />} />
         <Route path="/" element={<Info />} />
         <Route path="plan" element={<Plan />} />
         <Route path="add-on" element={<AddOn />} />
         <Route path="summary" element={<Summary />} />
         <Route path="thanks" element={<Thanks/>} />
      </Routes>
   </HashRouter>
  )
}

export default App
