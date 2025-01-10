import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Logout } from "./Logout"

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
        <Link to="/profile" className="text-blue-600"><i class="bi bi-person-fill text-blue-600"></i> Profil Saya</Link>
        <Link to=""><i className="bi bi-star-fill"></i> Ubah Premium</Link>
        <Logout/>
    </div>
    </div>
}