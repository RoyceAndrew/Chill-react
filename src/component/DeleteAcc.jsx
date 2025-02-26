import { useNavigate } from "react-router-dom"
import { delData } from "../service/api/api"
import { useSelector } from "react-redux"

export const DeleteAcc = () => {
    const navigate = useNavigate()
    const data = useSelector((state) => state.counterUser);
    const handleClick = async () =>  {
    
    try {
    const verif = prompt(`Apakah anda yakin ingin menghapus akun ? ketik "${data.username}" untuk mengkonfirmasi `)
    if (verif === data.username) {
        await delData(data.id)
        navigate("/register")
    } else {
        alert("Permintaan dibatalkan")
    }
} catch (err) {
    console.log(err)
    alert("Terjadi kesalahan")
}
    }

    return <button className="bg-red-900 ml-5 px-5 py-2 rounded-3xl hover:bg-red-950 transition-all duration-200" onClick={handleClick}>Hapus Akun</button>
}