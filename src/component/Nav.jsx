import { Link } from "react-router-dom"
import { NavLink } from "./NavLink"
import { ProfileNav } from "./ProfileNav"
import { useContext } from "react"
import { ScrollContext } from "../context/ScrollAnimation"

export const Nav = () => {
    const {fixed, visible} = useContext(ScrollContext)

    return <nav className={`w-screen transition-nav  ease-out duration-500 bg-home-color flex items-center fixed justify-between px-5  left-0 z-[999] ${fixed ? "h-[60px]" : "h-[80px]" } ${visible ? "top-0" : "top-[-80px]"}`}>
    <div className=" items-center flex gap-[20px] lg:gap-[60px]">
    <Link className="transition-all lg:ml-10  ease-out hover:scale-110" to="/"><img className="h-[18px] lg:h-[24px]" src='./picture/Logo.png' alt='chill-logo'/></Link>
    <NavLink title="Series" to="" />
    <NavLink title="Film" to="" />
    <NavLink title="Daftar saya" to="" />
    </div>
    <ProfileNav visible={visible}/>
    

    </nav>
}