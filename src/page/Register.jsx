import { Link } from "react-router-dom";
import { InputForm } from "../component/InputForm";

export const Register = () => {
    return <section id="register" className="bg-register-back h-screen w-screen bg-cover bg-no-repeat bg-center flex justify-center items-center">
        <form className="flex flex-col items-center h-auto bg-backColor w-auto justify-center p-[20px] rounded-[10px]" onSubmit={(e) => e.preventDefault}>
        <Link to="/homepage"><img className="m-[30px]" src="./public/picture/Logo.png" alt="Chill-logo" /></Link> 
         <h2 className="text-4xl font-semibold">Daftar</h2>
         <p className="text-lg mb-[20px]">Selamat datang!</p>
         <InputForm id="username" label="Username" type="text" placeholder="Masukan username"/>
         <InputForm id="sandi" label="Kata Sandi" type="password" placeholder="Masukan Kata sandi"/>
         <InputForm id="sandi" label="Konfirmasi Kata Sandi" type="password" placeholder="Masukan Kata sandi"/>
         <div className="w-full flex flex-row justify-between mb-[20px]"><p className="[ text-white/50 ]">Sudah punya akun? <Link className="text-white no-underline" to="/login">Masuk</Link></p><p className="cursor-pointer">Lupa kata sandi?</p></div> {/* benerin juga ini gunain link */}
            <button type="submit" className="w-full border-white/40 border-solid border-[1px] bg-[rgb(50,50,50)] h-[50px] cursor-pointer rounded-[25px] font-[16px] mt-[20px] transition-all duration-300 ease-out hover:bg-[rgb(40,40,40)]">Daftar</button>
            <p className="my-[5px]">Atau</p>
            <button className="w-full h-12 flex items-center justify-center text-base cursor-pointer rounded-[25px] bg-backColor border-[1px] border-solid border-[#FFFFFF40] gap-[10px] transition ease-out duration-300 hover:bg-[rgb(40,40,40)]"><img className="h-[20px]" src="./public/picture/search.png"/>Daftar dengan Google</button>
        </form>
    </section>
}