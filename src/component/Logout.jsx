import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteUser } from "../store/redux/counterUser"

export const Logout = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   function handleClick() {
    localStorage.clear()
    dispatch(deleteUser())
    navigate("/register")
   }

    return <a className="cursor-pointer" onClick={handleClick}><i class="bi bi-box-arrow-in-right"></i> Keluar</a>   
}