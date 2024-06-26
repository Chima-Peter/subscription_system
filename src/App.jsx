import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./components/errorpage"
import Info from "./components/info"
import {Plan} from "./components/plan"

function App() {

  return (
   <BrowserRouter>
      <Routes>
         <Route path="*" element={<ErrorPage />} />
         <Route path="/" element={<Info />} />
         <Route path="plan" element={<Plan />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
