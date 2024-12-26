import { ImgList } from "./ImgList"
import 'overlayscrollbars/overlayscrollbars.css';

export const Lanjut = () => {

    return <section className="p-5 relative z-10 flex items-start lg:items-center justify-center w-full flex-col bg-home-color">
    <div>
    <h2 className="lg:text-[30px] text-[20px] relative z-10">Melanjutkan Tonton Film</h2>
    <div id="scroll" className="gap-5 mt-5 flex relative  w-full  justify-start">
    <ImgList horiz={false} src="./public/picture/batman.png"/>
    <ImgList horiz={false} src="./public/picture/bluelock.png"/>
    <ImgList horiz={false} src="./public/picture/midfilm.png"/>
    <ImgList horiz={false} src="./public/picture/otto.png"/>
    </div>
</div>
</section>

}