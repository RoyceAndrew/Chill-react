import { ImgList } from "./ImgList"
import { dataHoriz } from "../data/datahoriz"
import Slider from "react-slick";

export const Lanjut = () => {

    const settings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        adaptiveWidth: true,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 4,
              arrows: false,
             
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              arrows: false,
              centerPadding: "10px"
            },
            
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              arrows: false,
              
            },
            
          },
        ],
      };
  
      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className + "bi bi-arrow-right "}
            style={{
              ...style,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              width: "50px",
              height: "50px",
              cursor: "pointer",
              backgroundColor: "rgb(50, 50, 50)",
              borderRadius: "50%",
              position: "absolute", 
              top: "50%",          
              right: "-10px",        
              transform: "translateY(-50%)", 
              zIndex: 10,           
            }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className + "bi bi-arrow-left"}
            style={{
              ...style,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              width: "50px",
              height: "50px",
              cursor: "pointer",
              backgroundColor: "rgb(50, 50, 50)",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              left: "-25px",         
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
            onClick={onClick}
          />
        );
      }
  

    return <section className="p-[20px] flex items-start  sm:items-center  justify-center bg-home-color flex-col w-full" id="series">
    <div>
        <h2 className="lg:text-[30px] text-[20px]">Melanjutkan Tonton Film</h2>
        <div className=" flex lg:gap-[20px] gap-[20px] mt-[20px] w-[55em]  md:w-[80vw] 2xl:w-[90vw] max-w-[95em] justify-start slider-container">
        <Slider {...settings} className="w-full">
         {dataHoriz.map((d) => {
           return <ImgList horiz={true} key={d.id} src={d.img} g1={d.genre[0]} g2={d.genre[1]} g3={d.genre[2]} age={d.age}  episode={d.episode} imghoriz={d.imghoriz} />
        })} 
        </Slider>
        </div>
    </div>
</section>

}