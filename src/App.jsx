import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Register } from "./page/Register"
import { Login } from "./page/Login"
import { Homepage } from "./page/Homepage"
import { Profile } from "./page/Profile"
import { useContext, useEffect, useState } from "react"
import { Daftar } from "./page/Daftar"
import { useSelector } from "react-redux"

function App() {
  const user = useSelector((state) => state.counterUser);

  const [logedin, setLog] = useState(true);
  useEffect(() => {
    if (user) {
      setLog(true);
    } else {
      setLog(false);
    }
  }, [user]);
 
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={!logedin ? <Register/> : <Navigate to="/"/>} />
        <Route path="/login" element={!logedin ? <Login/> : <Navigate to="/"/>} />
        <Route path="/" element={logedin ? <Homepage/> : <Navigate to="/login"/>} />
        <Route path="/profile" element={logedin ? <Profile/> : <Navigate to="/login"/>} />
        <Route path="/watchlist" element={logedin ? <Daftar/> : <Navigate to="/login"/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
