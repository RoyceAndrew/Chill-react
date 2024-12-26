import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Register } from "./page/Register"
import { Login } from "./page/Login"
import { Homepage } from "./page/Homepage"

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/homepage" element={<Homepage/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
