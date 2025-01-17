import { useSelector } from "react-redux";
import { ImgList } from "../component/ImgList";
import { Nav } from "../component/Nav";
import { ScrollContext } from "../context/ScrollAnimation";
import { useContext, useState, useEffect } from "react";
import { Footer } from "../component/Footer";
import { getTrailerTv, getTrailerMovie } from "../service/api/tmdb.api";
import { postWatch } from "../service/api/api";

export const Daftar = () => {
  const user = useSelector((state) => state.counterUser);
  const { fixed } = useContext(ScrollContext);
  const [index, setIndex] = useState(0);
  const [year, setYear] = useState(0);
  const [detail, setDetail] = useState(false);
  const [added, setAdded] = useState(true);
  const [trailer, setTrailer] = useState(null);
  const [mute, setMute] = useState(false);
  const movies = user.watchlater;
  const [memory, setMemory] = useState(null);

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
      const result = await getTrailerMovie(id);
      setTrailer(result);
    } catch (error) {
      const result2 = await getTrailerTv(id);
      setTrailer(result2);
      
    }

    const date = movies[index]?.first_air_date;
    setYear(date ? date.split("-")[0] : "N/A");
  };

  const handleClick = async () => {
    setAdded(!added);
  };

  const handleOver = () => {
    if (added) {
      const icons = document.getElementsByClassName("added");
      Array.from(icons).forEach((icon) => {
        icon.classList.add("bi-x-lg");
        icon.classList.remove("bi-check2");
      });
    }
  };

  const handleOut = () => {
    if (added) {
      const icons = document.getElementsByClassName("added");
      Array.from(icons).forEach((icon) => {
        icon.classList.remove("bi-x-lg");
        icon.classList.add("bi-check2");
      });
    }
  };

  const handleClose = async () => {
    setDetail(false);
    setTrailer(null);
    if (!added) {
    const check = movies.find((movie) => movie.id === movies[index].id);

    try {
      await postWatch(user.id, {
        ...user,
        watchlater: check
          ? movies.filter((movie) => movie.id !== movies[index].id)
          : [...movies, movies[index]],
      });
      setAdded(!check);
    } catch (error) {
      console.error("Error posting data:", error);
    }
} setAdded(true);
  };

  return (
    <div>
      <Nav />
      <section
        className={`min-h-[100vh] flex justify-start flex-col items-center transition-all ease-out duration-500 ${fixed ? "mt-0" : "mt-[80px]"}`}
      >
        <div className="w-[80vw] mt-10">
          <h1 className="text-[30px] mb-5">Daftar Saya</h1>
          <div className="flex gap-[20px] flex-wrap">
            {user.watchlater ? user.watchlater.map((d) => (
              <ImgList
                key={d.id}
                id={d.id}
                horiz={false}
                src={"https://image.tmdb.org/t/p/w500/" + d.poster_path}
                age={d.adult ? "18+" : "All Ages"}
                episode={d.episode_count || "N/A"}
                imghoriz={"https://image.tmdb.org/t/p/w500/" + d.backdrop_path}
                detail={getDetail}
                giveId={getId}
                add={setAdded}
                movie={movies}
              />
            )) : ""}
            <div
              onClick={handleClose}
              className={`${
                detail ? "visible" : "collapse"
              } fixed flex items-start justify-center top-0 left-0 z-[1000] overflow-y-auto overflow-x-hidden p-[100px] bg-black/50 w-[100vw] h-[100%]`}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <i
                  onClick={handleClose}
                  className="bi bi-x-lg hover:bg-red-600 transition-all ease-out duration-300 absolute cursor-pointer z-50 border border-white w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] flex items-center justify-center lg:text-xl bg-[var(--back-color)] rounded-[50%] bg-home-color lg:top-[120px] top-[105px] right-[11%]"
                ></i>
                {trailer ? (
                  <iframe
                    className="w-[80vw] h-[80vh] rounded-t-xl z-10 border-hidden object-cover"
                    src={`https://www.youtube.com/embed/${trailer}?autoplay=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${trailer}&mute=${mute ? "1" : "0"}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}
                  ></iframe>
                ) : (
                  <img
                    className="w-[80vw] rounded-t-xl z-10 object-cover"
                    src={
                      "https://image.tmdb.org/t/p/w500/" +
                      (movies[index]?.backdrop_path || memory?.backdrop_path)
                    }
                  />
                )}

                <div className="z-20 relative p-3 lg:px-20 lg:py-10 bg-home-gradient flex justify-end flex-col w-[80vw] n h-[80vh] mt-[-80vh]">
                  <h2 className="lg:text-[40px] text-[20px] mb-2 lg:mb-5 text-white font-bold">
                    {movies[index]?.name || memory?.name}
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
                        className={`ring-1 ring-white w-[30px] h-[30px] lg:w-[40px] transition-all ease-out duration-300 lg:h-[40px] ${added ? "hover:bg-red-600" : "hover:bg-green-600"} rounded-full`}
                      >
                        <i className={`bi lg:text-xl added ${added ? "bi-check2" : "bi-plus-lg"}`}></i>
                      </button>
                    </div>
                    <i
                      onClick={() => setMute(!mute)}
                      className={`bi ${mute ? "bi-volume-mute" : "bi-volume-up"} cursor-pointer border border-white w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] flex items-center justify-center lg:text-xl bg-[var(--back-color)] rounded-[50%]`}
                    ></i>
                  </div>
                </div>
                
                  <div className="rounded-b-xl w-[80vw] bg-home-color lg:px-20 lg:py-10 p-3 ">
                    <div className="flex gap-5 items-center">
                    <p className="text-slate-300">{year}</p>
                    <p className="text-slate-300 rounded-full ring-1 ring-slate-300 px-2 py-2">
                      {movies[index]?.adult !== undefined
                        ? movies[index].adult
                          ? memory?.adult
                            ? "18+"
                            : "All Ages"
                          : "All Ages"
                        : memory?.adult
                        ? "18+"
                        : "All Ages"}
                    </p>
                    </div>
                    <p className="mt-5">
                      {movies[index]?.overview || memory?.overview || "No Description yet"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </section>
      <Footer />
    </div>
  );
};