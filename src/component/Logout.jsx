import { useNavigate } from "react-router-dom"


export const Logout = () => {
   const navigate = useNavigate()

   function handleClick() {
    localStorage.clear()
    navigate("/register")
   }

    return <a className="cursor-pointer" onClick={handleClick}><i class="bi bi-box-arrow-in-right"></i> Keluar</a>   
}