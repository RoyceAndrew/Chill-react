import { useNavigate } from "react-router-dom"

export const DeleteAcc = () => {
    const navigate = useNavigate()

    function handleClick() {
    
    const data = JSON.parse(localStorage.getItem("akun"))
    const verif = prompt(`Apakah anda yakin ingin menghapus akun ? ketik "${data.username}" untuk mengkonfirmasi `)
    if (verif === data.username) {
        localStorage.clear()
        navigate("/register")
    } else {
        alert("Permintaan dibatalkan")
    }
    }

    return <button className="bg-red-900 ml-5 px-5 py-2 rounded-3xl hover:bg-red-950 transition-all duration-200" onClick={handleClick}>Hapus Akun</button>
}