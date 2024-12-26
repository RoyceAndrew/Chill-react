import { useState } from "react"

export const ImgList = (props) => {
    const [detail, setDetail] = useState(false)

    return <><div className={`relative ${props.horiz ? "lg:h-[420px] h-[300px] min-w-[220px]" : "h-48 lg:h-64 min-w-[310px]"}`} ><img onMouseOver={() => setDetail(true)} onMouseOut={() => setDetail(false)} className={`${props.horiz ? "lg:h-[420px] h-[300px]" : "h-48 lg:h-64"}  rounded-sm transition-all relative z-10 duration-300 ease-out cursor-pointer`} src={props.src}/>
    <div onMouseOver={() => setDetail(true)} onMouseOut={() => setDetail(false)} className={`${detail ? "block" : "hidden collapse"}  absolute top-[-20px] left-[-10px]  h-[110%] w-[110%] z-30`}>
        <img className="h-[60%] rounded-tl-lg rounded-tr-lg w-full object-cover object-top" src={props.src}/><div className="bg-[rgb(40,40,40)] rounded-bl-lg rounded-br-lg p-5">
            <div className="flex justify-between"><div><i className="bi text-4xl mr-2  bi-play-circle-fill"></i><i class="bi text-4xl bi-check-circle"></i></div><i class="bi text-2xl ring-2 ring-white rounded-full h-9 w-9 flex justify-center items-center bi-chevron-down"></i></div>
            <div className="flex mt-4 items-center gap-3"><p className="bg-slate-700 py-1 px-3 rounded-2xl">13+</p><p className="font-medium">16 Episode</p></div>
            <div className="flex justify-between items-center mt-4"><p>Misteri</p><p className="font-extrabold text-3xl mt-[-14px]">.</p><p>Kriminal</p><p className="font-extrabold text-3xl mt-[-14px]">.</p><p>Fantasi</p> </div>
            </div>
            </div>
        
    </div>
    </>
}