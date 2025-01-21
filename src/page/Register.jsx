import { Link, useNavigate } from "react-router-dom";
import { InputForm } from "../component/InputForm";
import { useState } from "react";
import { toast } from "react-toastify"
import { ErrorNotif } from "../component/ErrorNotif";
import validator from "validator"
import { getData, postData } from "../service/api/api";

export const Register = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [conpass, setConPassword] = useState("")
    const [username, setUsername] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username.length < 5) {
          toast.error("Username harus memiliki 5 karakter");
          return;
        }
    
        if (!validator.isStrongPassword(password)) {
          toast.error(
            "Kata sandi harus memiliki minimal 8 karakter, termasuk 1 huruf kecil, 1 huruf besar, 1 angka, dan 1 simbol."
          );
          return;
        }
    
        if (conpass !== password) {
          toast.error("Konfirmasi kata sandi salah");
          return;
        }
    
        try {
          const res = await getData();
          const data = res.data;
          console.log(res);
          const userExists = data.find((user) => user.username === username);
    
          if (userExists) {
            toast.error("Username sudah terdaftar!");
            return;
          }

          await postData({
            username: username,
            password: password,
            watchlater: [],
          });
    
          toast.success("Pendaftaran berhasil!");
          navigate("/login");
        } catch (err) {
          console.error(err);
          toast.error("Terjadi kesalahan saat mendaftar.");
        }
      };

    return <section id="register" className="bg-[url('/picture/registerbackground.jpg');] h-screen w-screen bg-cover bg-no-repeat bg-center flex justify-center items-center">
        <ErrorNotif/>
        <form onSubmit={handleSubmit} className="flex flex-col items-center h-auto  bg-[#181A1C]/[84%] w-[306px] md:w-[529px] justify-center md:p-[40px] p-[24px] rounded-[10px]">
        <img className=" md:h-[44px] h-[24px] md:mb-[37px] mb-[20px]" src="./picture/Logo.png" alt="Chill-logo" /> 
         <h2 className="md:text-[32px] md:mb-[8px] text-[18px mb-[5px] font-semibold">Daftar</h2>
         <p className="md:text-[16px] text-[10px] md:mb-[37px] mb-[20px]">Selamat datang!</p>
         <InputForm id="username" value={username} onChange={(e) => {setUsername(e.target.value)}} label="Username" type="text" placeholder="Masukan username"/>
         <InputForm id="sandi" value={password} onChange={(e) => {setPassword(e.target.value)}} label="Kata Sandi" type="password" placeholder="Masukan Kata sandi"/>
         <InputForm id="consandi" value={conpass} onChange={(e) => {setConPassword(e.target.value)}} label="Konfirmasi Kata Sandi" type="password" placeholder="Masukan Kata sandi"/>
         <div className="w-full flex flex-row justify-between md:mt-[-25px] mt-[-13px] text-[10px] md:text-base mb-[20px] md:mb-[37px]"><p className="[ text-white/50 ]">Sudah punya akun? <Link className="text-white no-underline" to="/login">Masuk</Link></p></div>
         <button type="submit" className="w-full border-[#E7E3FC]/[23%] md:text-base border-solid border-[1px] bg-[#3D4142] md:h-[50px] cursor-pointer rounded-[24px] font-[16px] text-[10px] h-[30px]  transition-all duration-300 ease-out hover:bg-[rgb(40,40,40)]">Daftar</button>
            <p className="md:my-[8px] md:text-base text-[10px] my-[4px]">Atau</p>
            <button className="w-full md:h-[50px] h-[27px] text-[10px] flex items-center justify-center md:text-base cursor-pointer rounded-[24px] bg-transparent border-[1px] border-solid border-[#E7E3FC]/[23%] gap-[10px] transition ease-out duration-300 hover:bg-[rgb(40,40,40)]"><img className="h-[10px] md:h-[20px]" src="./picture/search.png"/>Daftar dengan Google</button>
        </form>
    </section>
}