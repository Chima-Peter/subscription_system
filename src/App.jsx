import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./components/errorpage"
import Home from "./components/home"

function App() {

  return (
   <BrowserRouter>
      <Routes>
         <Route path="*" element={<ErrorPage />} />
         <Route path="/" element={<Home />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
