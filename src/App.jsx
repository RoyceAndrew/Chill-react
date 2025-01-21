import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Register } from "./page/Register"
import { Login } from "./page/Login"
import { Homepage } from "./page/Homepage"
import { Profile } from "./page/Profile"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "./context/UserContext"

function App() {
  const [logedin,] = useContext(UserContext)
  const [check, setCheck] = useState(false)

  useEffect(() => {
    setCheck(logedin)
    },[logedin])
  
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={!check ? <Register/> : <Navigate to="/"/>} />
        <Route path="/login" element={!check ? <Login/> : <Navigate to="/"/>} />
        <Route path="/" element={check ? <Homepage/> : <Navigate to="/login"/>} />
        <Route path="/profile" element={check ? <Profile/> : <Navigate to="/login"/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
