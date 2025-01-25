import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Register } from "./page/Register"
import { Login } from "./page/Login"
import { Homepage } from "./page/Homepage"
import { Profile } from "./page/Profile"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "./context/UserContext"

function App() {
  const {logedin, isLoading} = useContext(UserContext)
  const [check, setCheck] = useState(false)

 

  useEffect(() => {
    setCheck(logedin)
    },[logedin])
  
    if (isLoading) {
      return <div className="width-full h-screen flex justify-center items-center"><p>Loading...</p></div>;
    }
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={!logedin? <Register/> : <Navigate to="/"/>} />
        <Route path="/login" element={!logedin ? <Login/> : <Navigate to="/"/>} />
        <Route path="/" element={logedin ? <Homepage/> : <Navigate to="/login"/>} />
        <Route path="/profile" element={logedin ? <Profile/> : <Navigate to="/login"/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
