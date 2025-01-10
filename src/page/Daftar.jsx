import { useSelector } from "react-redux"
import { ImgList } from "../component/ImgList";
import { Nav } from "../component/Nav";
import { ScrollContext } from "../context/ScrollAnimation"
import { useContext, useState } from "react"
import { Footer } from "../component/Footer";


export const Daftar = () => {
    const watch = useSelector((state) => state.counterUser);
    const {fixed} = useContext(ScrollContext)

    return (
        <div>
            <Nav/>
            <section class={`min-h-[100vh] flex justify-start flex-col items-center transition-all ease-out duration-500 ${fixed ? "mt-0" : "mt-[80px]"}`}>
            <div className="w-[80vw] mt-10">
            <h1 className="text-[30px] mb-5">Daftar Saya</h1>
            <div className="flex gap-[20px] flex-wrap">
            
           {watch.watchlater.map((d) => <ImgList
                    id={d.id}
                    horiz={false}
                    src={"https://image.tmdb.org/t/p/w500/" + d.poster_path}
                    age={d.adult ? "18+" : "All Ages"}
                    episode={d.episode_count || "N/A"}
                    imghoriz={"https://image.tmdb.org/t/p/w500/" + d.backdrop_path}
                    
                  />)}
           
          
            </div>
            </div>
            </section>
            <Footer/>
        </div>
    )
}