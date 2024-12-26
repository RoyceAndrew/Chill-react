import { ImgList } from "./ImgList"

export const Rilis = () => {
    return <section className="p-[20px] flex-1 mb-[100px] flex items-start justify-center bg-home-color flex-col w-full" id="series">
    <div>
        <h2 className="lg:text-[30px] text-[20px]">Rilis Baru</h2>
        <div className=" flex lg:gap-[35px] gap-[20px] mt-[20px] w-full justify-start">
        <ImgList horiz={true} src="./picture/series/avatar.png"/>
        <ImgList horiz={true} src="./picture/series/bluelock.png"/>
        <ImgList horiz={true} src="./picture/series/fast.png"/>
        <ImgList horiz={true} src="./picture/series/korea.png"/>
        <ImgList horiz={true} src="./picture/series/shazsam.png"/>
        <ImgList horiz={true} src="./picture/series/bnh.png"/>
        </div>
    </div>
</section>

}