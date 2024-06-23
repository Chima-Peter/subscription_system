import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./components/errorpage"
import Info from "./components/info"

function App() {

  return (
   <BrowserRouter>
      <Routes>
         <Route path="*" element={<ErrorPage />} />
         <Route path="/" element={<Info />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
