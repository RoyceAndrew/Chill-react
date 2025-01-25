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
    const { setLog} = useContext(UserContext)

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
    <form className="flex flex-col items-center  bg-[#181A1C]/[84%] w-[306px] md:w-[529px] justify-start md:p-[40px] p-[24px]  rounded-[8px]" onSubmit={handleSubmit}>
    <img className="md:mb-[40px] mb-[20px] h-[24px] md:h-[44px] " src="./picture/Logo.png" alt="Chill-logo" />
     <h2 className="md:text-[32px] text-[18px] mb-[5px] md:mb-[8px] text-2xl font-semibold">Masuk</h2>
     <p className="md:text-[16px] text-[10px] mb-[20px] md:mb-[37px]">Selamat datang kembali!</p>
     <InputForm id="username" label="Username" value={username} onChange={(e) => {setUsername(e.target.value)}} type="text" placeholder="Masukan username"/>
     <InputForm id="sandi" label="Kata Sandi" value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Masukan Kata sandi"/>
     <div className="w-full flex flex-row justify-between md:mt-[-25px] mt-[-13px] text-[10px] md:text-base mb-[20px] md:mb-[37px]"><p className="[ text-white/50 ]">Belum punya akun? <Link className="text-white no-underline" to="/register">Daftar</Link></p><p className="cursor-pointer">Lupa kata sandi?</p></div> {/* benerin juga ini gunain link */}
        <button type="submit" className="w-full border-[#E7E3FC]/[23%] md:text-base border-solid border-[1px] bg-[#3D4142] md:h-[50px] cursor-pointer rounded-[24px] font-[16px] text-[10px] h-[30px]  transition-all duration-300 ease-out hover:bg-[rgb(40,40,40)]">Masuk</button>
        <p className="my-[4px] text-[10px] md:text-base md:my-[8px]">Atau</p>
        <button className="w-full md:h-[50px] h-[27px] text-[10px] flex items-center justify-center md:text-base cursor-pointer rounded-[24px] bg-transparent border-[1px] border-solid border-[#E7E3FC]/[23%] gap-[10px] transition ease-out duration-300 hover:bg-[rgb(40,40,40)]"><img className="h-[10px] md:h-[20px]" src="./picture/search.png"/>Masuk dengan Google</button>
    </form>
</section>
}