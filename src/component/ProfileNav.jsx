import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ProfileNav = (props) => {
    const [visible, setVisible] = useState(false)
    
        function handleClick() {
                if (visible) {
                setVisible(false)
            } else if (!visible) {
                setVisible(true)
            }
        }
        
        useEffect(() => {
            const checkScroll = () => {
                if (props.visible) {
                 setVisible(false)
                }
            }

            window.addEventListener("scroll", checkScroll)

            return () => {
                window.removeEventListener("scroll", checkScroll)
            }
        },[])

    return <div className={`lg:mr-14 mr-1 ${visible ? "flex flex-col justify-center lg:items-center items-end" : "none"}` } onClick={handleClick}><button className="flex gap-2 items-center cursor-pointer"><img className="h-[30px] w-[30px] object-cover rounded-3xl" id="profile-pct" src="./picture/profilepct.jpg" alt="profile-pct"/><i class="bi bi-chevron-down"></i></button>
    <div className={`fixed gap-2 top-14 bg-home-color flex flex-col w-[150px] p-[10px] rounded-md ${visible ? "visible" : "collapse"}`}>
        <Link to="" className="text-blue-600"><i class="bi bi-person-fill text-blue-600"></i> Profil Saya</Link>
        <Link to=""><i class="bi bi-star-fill"></i> Ubah Premium</Link>
        <Link to="/login"><i class="bi bi-box-arrow-in-right"></i> Keluar</Link>
    </div>
    </div>
}