import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./components/errorpage"
import Info from "./components/info"
import {Plan} from "./components/plan"
import AddOn from "./components/add-ons"
import Summary from "./components/summary"
import Thanks from "./components/thanks"

function App() {

  return (
   <HashRouter>
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
