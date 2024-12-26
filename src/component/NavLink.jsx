import { Link } from "react-router-dom"

export const NavLink  = (props) => {
    return <Link className="transition-all lg:text-[18px] text-[14px] ease-out hover:scale-110" to={props.to}>{props.title}</Link>
}