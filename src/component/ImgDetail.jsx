import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ImgList } from "./ImgList";
import { postWatch } from "../service/api/api";
import Slider from "react-slick";


export const ImgDetail = ({ movies, loading, api }) => {
    const user = useSelector((state) => state.counterUser);
    const [index, setIndex] = useState(0)
    const [year, setYear] = useState(0)
    const [detail, setDetail] = useState(false);
    const [added, setAdded] = useState(false);
    const [trailer, setTrailer] = useState(null);
    const [mute, setMute] = useState(false);

    const settings = {
      dots: false,
      infinite: true,
      lazyLoad: true,
      speed: 700,
      slidesToShow: 6,
      slidesToScroll: 6,
      adaptiveHeight: true,
      adaptiveWidth: true,
      nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            arrows: false,
           
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 2,
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
            right: "25px",        
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

   
  
    const getDetail = (id) => {
      setDetail(id);
    };
  
    useEffect(() => {
      if (detail) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    }, [detail]);
  
    const getId = async (id) => {
      const index = movies.findIndex((movie) => movie.id === id);
  setIndex(index); 

  try {
    const result = await api(id);
    setTrailer(result); 
  } catch (error) {
    setTrailer(null); 
  }
      const date = movies[index].first_air_date;
      if (!date) {
        setYear("N/A");
      } else {
      setYear(date.split("-")[0]);
      }
    };
  
    const handleClick = async () => {
      const check = user.watchlater.find((movie) => movie.id === movies[index].id);
      
      try {
        await postWatch(user.id, {
          ...user,
          watchlater: check
            ? user.watchlater.filter((movie) => movie.id !== movies[index].id)
            : [...user.watchlater, movies[index]],
        });
        if (check) {
          
          setAdded(false);
        } else {
          
          setAdded(true);
        }
      } catch (error) {
        console.error("Error posting data:", error);
        throw error;
      }
    };
    const handleOver = () => {
      if (added) {
        for (let i = 0; i < document.getElementsByClassName("added").length; i++) {
        document.getElementsByClassName("added")[i].classList.add("bi-x-lg");
        document.getElementsByClassName("added")[i].classList.remove("bi-check2");
      }
    
      }
    }

    const handleOut = () => {
      if (added) {
        for (let i = 0; i < document.getElementsByClassName("added").length; i++) {
        document.getElementsByClassName("added")[i].classList.remove("bi-x-lg");
        document.getElementsByClassName("added")[i].classList.add("bi-check2");
      }
    
      }
    }
    
    const getAdded = (add) => {
      setAdded(add)
    }

    const handleClose = () => {
      setDetail(false);
      setTrailer(null);
    }
  
    return (
      <>
        <div className="flex lg:gap-[20px] gap-[20px] mt-[20px] w-[900px] m-w-[1000px] xl:w-[90vw] justify-start slider-container">
          <Slider {...settings} className="w-full">
            {loading ? (
              <p>Loading...</p>
            ) : movies.length > 0 ? (
              movies.map((d) => (
                <div key={d.id}>
                  <ImgList
                    id={d.id}
                    horiz={false}
                    src={"https://image.tmdb.org/t/p/w500/" + d.poster_path}
                    age={d.adult ? "18+" : "All Ages"}
                    episode={d.episode_count || "N/A"}
                    imghoriz={"https://image.tmdb.org/t/p/w500/" + d.backdrop_path}
                    detail={getDetail}
                    giveId={getId}
                    movie={user.watchlater}
                    add={getAdded}
                  />
                </div>
              ))
            ) : (
              <p>No movies found</p>
            )}
          </Slider>
        </div>
  
        <div
          onClick={handleClose}
          className={`${
            detail ? "visible" : "collapse"
          } fixed flex items-start justify-center top-0 left-0 z-[1000] overflow-y-auto overflow-x-hidden p-[100px] bg-black/50 w-[100vw] h-[100%]`}
        >
          <div onClick={(e) => e.stopPropagation()}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
              <i onClick={handleClose} class="bi bi-x-lg hover:bg-red-600 transition-all ease-out duration-300 absolute cursor-pointer z-50 border border-white w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] flex items-center justify-center lg:text-xl bg-[var(--back-color)] rounded-[50%] bg-home-color lg:top-[120px] top-[105px] right-[11%]"></i>
                {trailer ? <iframe className="w-[80vw] h-[80vh] rounded-t-xl z-10 border-hidden object-cover" src={`https://www.youtube.com/embed/${trailer}?autoplay=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${trailer}&mute=${mute ? "1" : "0"}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe> : <img
                  className="w-[80vw] rounded-t-xl z-10 object-cover"
                  src={
                    "https://image.tmdb.org/t/p/w500/" +
                    movies[index].backdrop_path
                  }
                />}
  
                <div className="z-20 relative p-3 lg:px-20 lg:py-10 bg-home-gradient flex justify-end flex-col w-[80vw] n h-[80vh] mt-[-80vh]">
                  <h2 className="lg:text-[40px] text-[20px] mb-2 lg:mb-5 text-white font-bold">
                    {movies[index].name}
                  </h2>
                  <div className="flex items-end justify-between">
                    <div>
                      <button className="bg-blue-700 mr-5 text-[10px] lg:text-[16px] hover:bg-blue-800 border-0 py-2.5 px-4 lg:px-5 rounded-full cursor-pointer transition-all duration-300 ease-out">
                        Mulai
                      </button>
                      <button
                        onClick={handleClick}
                        onMouseOver={handleOver}
                        onMouseOut={handleOut}
                        className={`ring-1 ring-white w-[30px] h-[30px] lg:w-[40px] transition-all ease-out duration-300 lg:h-[40px] ${added ? "hover:bg-red-600": "hover:bg-green-600"} rounded-full`}
                      >
                        <i  className={`bi lg:text-xl added ${added ? "bi-check2" : "bi-plus-lg"}`}></i>
                      </button>
                    </div>
                    <i
                      onClick={() => setMute(!mute)}
                      className={`bi ${mute ? "bi-volume-mute" : "bi-volume-up"} cursor-pointer border border-white w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] flex items-center justify-center lg:text-xl bg-[var(--back-color)] rounded-[50%]`}
                    ></i>
                  </div>
                </div>
                <div className="rounded-b-xl w-[80vw] bg-home-color lg:px-20 lg:py-10 p-3">
                  <div className="flex gap-5 items-center">
                    <p className="text-slate-300">{year}</p>
                    <p className="text-slate-300 rounded-full ring-1 ring-slate-300 px-2 py-2">
                      {movies[index].adult ? "18+" : "All Ages"}
                    </p>
                  </div>
                  <p className="mt-5">
                    {movies[index].overview
                      ? movies[index].overview
                      : "No Description yet"}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  };