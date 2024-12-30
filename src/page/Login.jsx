import { Link, useNavigate } from "react-router-dom";
import { InputForm } from "../component/InputForm";
import { useState, useContext } from "react";
import { toast } from "react-toastify"
import { ErrorNotif } from "../component/ErrorNotif";
import { UserContext } from "../context/UserContext";

export const Login = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [, setLog] = useContext(UserContext)

    function handleSubmit(e) {
       e.preventDefault()
       const check = JSON.parse(localStorage.getItem("users"))

       let user = check.find(user => user.username === username)

       if (!user) {
        toast.error("User tidak ditemukan")
        return
     }
  
     if (user.password !== password) {
        toast.error("Password salah")
        return
     }

     localStorage.setItem("akun", JSON.stringify(user))
     setLog(true)
   navigate("/")
   
       
    }

    return <section id="register" className="bg-[url('/picture/loginbackground.jpg');] h-screen w-screen bg-cover bg-no-repeat bg-center flex justify-center items-center">
        <ErrorNotif/>
        <form className="flex flex-col items-center h-auto bg-backColor w-auto justify-center p-[20px]  rounded-[10px]" onSubmit={handleSubmit}>
        <img className="lg:m-[30px] m-[10px]" src="./picture/Logo.png" alt="Chill-logo" />
         <h2 className="lg:text-4xl text-2xl font-semibold">Masuk</h2>
         <p className="text-lg lg:mb-[20px]">Selamat datang kembali!</p>
         <InputForm id="username" label="Username" value={username} onChange={(e) => {setUsername(e.target.value)}} type="text" placeholder="Masukan username"/>
         <InputForm id="sandi" label="Kata Sandi" value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Masukan Kata sandi"/>
         <div className="w-full flex flex-row justify-between mb-[20px]"><p className="[ text-white/50 ]">Sudah punya akun? <Link className="text-white no-underline" to="/register">Daftar</Link></p><p className="cursor-pointer">Lupa kata sandi?</p></div> {/* benerin juga ini gunain link */}
            <button type="submit" className="w-full border-white/40 border-solid border-[1px] bg-[rgb(50,50,50)] h-[50px] cursor-pointer rounded-[25px] font-[16px] mt-[20px] transition-all duration-300 ease-out hover:bg-[rgb(40,40,40)]">Masuk</button>
            <p className="my-[5px]">Atau</p>
            <button className="w-full h-12 flex items-center justify-center text-base cursor-pointer rounded-[25px] bg-backColor border-[1px] border-solid border-[#FFFFFF40] gap-[10px] transition ease-out duration-300 hover:bg-[rgb(40,40,40)]"><img className="h-[20px]" src="./picture/search.png"/>Masuk dengan Google</button>
        </form>
    </section>
}