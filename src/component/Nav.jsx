import { Link } from "react-router-dom"
import { NavLink } from "./NavLink"
import { ProfileNav } from "./ProfileNav"
import { useContext } from "react"
import { ScrollContext } from "../context/ScrollAnimation"

export const Nav = () => {
    const {fixed, visible} = useContext(ScrollContext)

    return <nav className={`w-screen transition-nav  ease-out duration-500 bg-home-color flex items-center fixed justify-between px-5 py-2 left-0 z-[999] ${fixed ? "h-[60px]" : "h-[94px]" } ${visible ? "top-0" : "top-[-80px]"}`}>
    <div className=" items-center flex gap-[20px] md:gap-[80px]">
    <Link className="transition-all flex items-center gap-[4px] lg:ml-10  ease-out hover:scale-110" to="/"><img className="h-[18px] md:h-[21px]" src='./picture/movie-open.png' alt='chill-logo'/><p className="text-[12px] md:font-normal md:block hidden londrina md:text-[32px]">CHILL</p></Link>
    <NavLink title="Series" to="" />
    <NavLink title="Film" to="" />
    <NavLink title="Daftar saya" to="/watchlist" />
    </div>
    <ProfileNav visible={visible}/>
    

    </nav>
}