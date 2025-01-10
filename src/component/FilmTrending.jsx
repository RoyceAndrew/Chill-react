import { useEffect, useState } from "react";
import { getTrendingMovies } from "../service/api/tmdb.api";
import "slick-carousel/slick/slick.css";
import { getTrailerMovie } from "../service/api/tmdb.api";
import { ImgDetail } from "./ImgDetail";

export const FilmTrending = () => {
  const [movies, setMovies] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
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
      className="p-[20px] flex items-start lg:items-center justify-center bg-home-color flex-col w-full"
      id="series"
    >
      <div>
        <h2 className="lg:text-[30px] text-[20px]">
          Film Trending
        </h2>
        <ImgDetail
        api={getTrailerMovie}
        movies={movies}
        loading={loading}
        />
         
      </div>
    </section>
  );
};