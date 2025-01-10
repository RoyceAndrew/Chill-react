import { useState } from "react";

export const ImgList = (props) => {
    const [startPress, setStartPress] = useState(0);
    

    function handlePressStart(event) {
        event.preventDefault(); 
        setStartPress(Date.now());
    }

    function handlePressEnd(event) {
        event.preventDefault(); 
        const duration = Date.now() - startPress;
        

        if (duration < 200) { 
            props.detail(true);
            props.giveId(props.id);

            if (Array.isArray(props.movie)) {  
                const check = props.movie.find((p) => p.id === props.id);

                if (check) {
                    props.add(true);
                } else {
                    props.add(false);
                }
            } else {
                console.error("props.movie is not an array!");
            }
        }

        setStartPress(0); 
    }

    return (
        <>
            <div className={`relative clip glide__slide ${props.horiz ? " 2xl:w-[360px] lg:h-[190px] lg:w-[250px] h-[143px] w-[207px] 2xl:h-[230px]" : "h-48 w-[130px] lg:h-64 lg:w-[160px] 2xl:w-[234px] 2xl:h-[365px]"}`}>
                <img
                    onMouseDown={handlePressStart}
                    onMouseUp={handlePressEnd}
                    onTouchStart={handlePressStart}
                    onTouchEnd={handlePressEnd}
                    className={`${props.horiz ? "2xl:w-[360px] h-[143px] lg:h-[190px] lg:w-[250px] w-[207px] 2xl:h-[230px]" : "h-48 w-[130px] lg:h-64 lg:w-[160px] 2xl:w-[234px] 2xl:h-[365px]"} hover:scale-90 rounded-md transition-all relative z-10 duration-300 ease-out cursor-pointer`}
                    src={props.src}
                />
            </div>
        </>
    );
}