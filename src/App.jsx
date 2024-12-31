import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Register } from "./page/Register"
import { Login } from "./page/Login"
import { Homepage } from "./page/Homepage"
import { Profile } from "./page/Profile"
import { useContext } from "react"
import { UserContext } from "./context/UserContext"

function App() {
  const [logedin,] = useContext(UserContext)

  
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={logedin ? <Homepage/> : <Navigate to="/login"/>} />
        <Route path="/profile" element={logedin ? <Profile/> : <Navigate to="/login"/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
