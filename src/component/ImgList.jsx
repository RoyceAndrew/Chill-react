import { useEffect, useState } from "react"

export const ImgList = (props) => {
    const [detail, setDetail] = useState(false) 
    const [allow, setAllow] = useState(true)

    useEffect(() => {
        const check = () => {
            if (window.innerWidth < 900) {
                setAllow(false)
                setDetail(false)
            } else {
                setAllow(true)
            }
        }
        
        check()

        window.addEventListener("resize", check)

        return () => {
            window.removeEventListener("resize", check)
        }
    }, [])
    
    

    return <><div className={`relative ${props.horiz ? " 2xl:w-[360px] lg:h-[190px] lg:w-[250px] h-[143px] w-[207px] 2xl:h-[230px] " : "h-48 w-[130px] lg:h-64 lg:w-[160px] 2xl:w-[234px] 2xl:h-[365px]"}`} ><img onMouseOver={() => setDetail(true)} onMouseOut={() => setDetail(false)} className={`${props.horiz ? "2xl:w-[360px] h-[143px] lg:h-[190px] lg:w-[250px] w-[207px] 2xl:h-[230px]" : "h-48 w-[130px] lg:h-64 lg:w-[160px] 2xl:w-[234px] 2xl:h-[365px]"}  rounded-md transition-all relative z-10 duration-300 ease-out cursor-pointer`} src={props.src}/>
    <div onMouseOver={() => setDetail(true)} onMouseOut={() => setDetail(false)} className={`${allow && detail ? "block" : "hidden collapse"}  absolute top-[-20px] ${props.horiz ? "left-[-20px]" : "left-[-110px]" }   h-[254px] w-[408px] z-30`}>
        <img className="h-[100%] w-full rounded-tl-lg rounded-tr-lg  object-fill object-top" src={props.imghoriz}/><div className="bg-[rgb(40,40,40)] rounded-br-lg rounded-bl-lg p-5">
            <div className="flex justify-between"><div><i className="bi text-4xl mr-2  bi-play-circle-fill"></i><i class="bi text-4xl bi-check-circle"></i></div><i class="bi text-2xl ring-2 ring-white rounded-full h-9 w-9 flex justify-center items-center bi-chevron-down"></i></div>
            <div className="flex mt-4 items-center gap-3"><p className="bg-slate-700 py-1 px-3 rounded-2xl">{props.age}</p><p className="font-medium">{props.episode}</p></div>
            <div className="flex justify-between items-center mt-4"><p>{props.g1}</p><p className="font-extrabold text-3xl mt-[-14px]">.</p><p>{props.g2}</p><p className="font-extrabold text-3xl mt-[-14px]">.</p><p>{props.g3}</p> </div>
            </div>
            </div>
        
    </div>
    </>
}