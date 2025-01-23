import { ImgList } from "./ImgList"
import { data } from "../data/data"

export const TopRating = () => {

    return <section className="p-[20px] flex items-start overflow-hidden xl:items-center  justify-center bg-home-color flex-col w-full" id="series">
    <div>
        <h2 className="xl:text-[30px] text-[20px]">Top Rating Film dan Series Hari ini</h2>
        <div className=" flex xl:gap-[20px] gap-[20px] mt-[20px] w-full justify-start">
        {data.map((d) => {
           return <ImgList horiz={false} key={d.id} src={d.img} g1={d.genre[0]} g2={d.genre[1]} g3={d.genre[2]} age={d.age}  episode={d.episode} imghoriz={d.imghoriz} />
        })}
        </div>
    </div>
</section>

}