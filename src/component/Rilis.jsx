import { useEffect, useState } from "react";
import { getRelease } from "../service/api/tmdb.api";
import "slick-carousel/slick/slick.css";
import { getTrailerTv } from "../service/api/tmdb.api";
import { ImgDetail } from "./ImgDetail";

export const Rilis = () => {
  const [movies, setMovies] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getRelease();
        setMovies(data.results);
        
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section
      className="p-[20px] mb-10 flex items-start lg:items-center justify-center bg-home-color flex-col w-full"
      id="series"
    >
      <div>
        <h2 className="lg:text-[30px] text-[20px]">
          Rilis Baru
        </h2>
        <ImgDetail
        api={getTrailerTv}
        movies={movies}
        loading={loading}
        />
         
      </div>
    </section>
  );
};