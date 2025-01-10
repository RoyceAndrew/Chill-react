import { useContext } from "react";
import { useEffect, useState } from "react";
import  clamp  from "clamp-js";    
import { ScrollContext } from "../context/ScrollAnimation";

export const Hero = () => {
    const { fixed } = useContext(ScrollContext);
    const [mute, setMute] = useState(false);
    const [video, setVideo] = useState(null);

    useEffect(() => {
        
        const element = document.getElementById("desc");
        if (element) clamp(element, { clamp: 3 });
        setVideo("./picture/suzumetrailer.mp4")
    }, []);

    const handleClick = () => setMute(!mute);

    return (
        <section id="hero">
            <video
            key="hero-video"
            id="hero-video"
                className={`object-cover w-full ease-out duration-500 transition-all max-h-[850px] min-h-[400px] object-top ${
                    fixed ? "mt-0" : "mt-[80px]"
                }`}
                src={video}
                loop={true}
                autoPlay={true}
                muted={mute}
                alt="hero-img"
            />
            <div className="relative z-30 flex flex-col gap-5 pt-[350px] px-5 h-[600px] -mt-[600px] bg-home-gradient">
                <h1 className="text-[40px]">Suzume</h1>
                <p
                    id="desc"
                    className="w-[50%] text-[16px]"
                >
                    Suzume No Tojimari berkisah tentang petualangan seorang perempuan bernama Suzume dan lelaki misterius bernama Souta dalam mencegah bencana gempa bumi terjadi di seantero Jepang. Bencana itu terjadi lantaran sebelumnya Suzume tertarik pada kekuatan sebuah pintu lapuk dan membuka kenopnya.
                </p>
                <div className="flex justify-between">
                    <div className="flex flex-row items-center">
                        <button className="bg-blue-700 hover:bg-blue-800 border-0 py-2.5 px-5 rounded-full cursor-pointer transition-all duration-300 ease-out">
                            Mulai
                        </button>
                        <button className="border-0 lg:ml-4 ml-1 bg-backColor hover:bg-gray-800 py-[10px] px-[20px] rounded-3xl cursor-pointer transition-all duration-300 ease-out">
                            ⓘ Selengkapnya
                        </button>
                        <p className="w-[20px] h-[20px] flex ring-1 lg:ml-4 ml-1 ring-white items-center p-[20px] justify-center rounded-full">
                            8+
                        </p>
                    </div>
                    <i
                        onClick={handleClick}
                        className={`${
                            mute ? "bi bi-volume-mute" : "bi bi-volume-up"
                        } cursor-pointer border border-white py-2.5 px-3 text-xl bg-[var(--back-color)] rounded-[50%]`}
                    ></i>
                </div>
            </div>
        </section>
    );
};