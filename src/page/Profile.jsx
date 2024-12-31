import { Nav } from "../component/Nav"
import { Footer } from "../component/Footer"
import { useContext, useState } from "react"
import { ScrollContext } from "../context/ScrollAnimation"
import { ProfileInput } from "../component/ProfileInput"
import validator from "validator";
import { toast } from "react-toastify"
import { ErrorNotif } from "../component/ErrorNotif"
import { DeleteAcc } from "../component/DeleteAcc"
import axios from "axios"
import { upData } from "../service/api/api"

export const Profile = () => {
    const {fixed} = useContext(ScrollContext)
    const { username, password } = JSON.parse(localStorage.getItem("akun"));
    const [ name, setName ] = useState("")
    const [ pass, setPass ] = useState("")
    const [resetEdit, setResetEdit] = useState(false);

    function getName(input) {
      setName(input)
  }

  function getPass(input) {
      setPass(input)
  }

  const handleSubmit = async (e) => {
      e.preventDefault()
     try {
      const data = JSON.parse(localStorage.getItem("akun"))

      if (!data) { 
        return 
      }

      const updatedData = { 
          username: name || data.username,
          password: pass || data.password,
          id: data.id
      }

      if (!validator.isStrongPassword(updatedData.password)) {
          toast.error("Kata sandi harus memiliki minimal 8 karakter, termasuk 1 huruf kecil, 1 huruf besar, 1 angka, dan 1 simbol.")
          return
      }
      if (updatedData.username.length < 5) {
          toast.error("Username harus memiliki 5 karakter")
          return
      }
    
      localStorage.setItem("akun", JSON.stringify(updatedData))
      await upData(updatedData.id, updatedData)
     

      if (name && pass) {
          toast.success("Username dan Password telah berhasil diganti")
      } else if (name) {
          toast.success("Username telah berhasil diganti")
      } else if (pass) {
          toast.success("Password telah berhasil diganti")
      }

      setName("")
      setPass("")
      setResetEdit(true)
      setTimeout(() => setResetEdit(false), 100)
    } catch(err) {
      console.log(err) 
      toast.error("Terjadi kesalahan saat mengubah data")
    }
  }

      return <>
      <Nav/>
      <ErrorNotif/>
      <section className={` lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-4 flex flex-col ease-out duration-500 transition-all ${fixed ? "mt-0" : "mt-[80px]"}`}>
      <div className="grid col-span-1 row-span-1 w-full p-[20px]">
        <section>
        <h1 className="text-2xl">Profil Saya</h1>
        <form onSubmit={handleSubmit}>
          <div>
          <img className="h-[100px] w-[100px] object-cover rounded-full mt-7" id="profile-pct" src="./picture/profilepct.jpg" alt="profile-pct"/>
          </div>
        <ProfileInput label="Nama Pengguna" value={username} type="text" getvalue={getName} reset={resetEdit}/>
        <ProfileInput label="Kata Sandi" value={password} type="password" getvalue={getPass} reset={resetEdit}/>
        <div>
        <button className="bg-blue-900 px-5 py-2 rounded-3xl hover:bg-blue-950 transition-all duration-200" type="submit">Simpan</button>
        <DeleteAcc/>
        </div>
        </form>
        </section>
      </div>
      
      <div className="grid col-start-2 col-end-2 row-span-1 w-full"></div>
      <div className="grid col-start-1 row-start-2 col-span-2 w-full"></div>

      </section>
      <Footer/>
      </>
}      