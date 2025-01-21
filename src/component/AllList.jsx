import { List } from "../component/List"
import {  useState, useEffect } from "react"
import { getRelease, getRatedSeries, getTrailerMovie, getTrailerTv, getTrendingMovies } from "../service/api/tmdb.api"

export const AllList = () => {
    const [movies, setMovies] = useState([]); 
    const [movies2, setMovies2] = useState([]);
    const [movies3, setMovies3] = useState([]);
        const [loading, setLoading] = useState(true); 
    
        useEffect(() => {
            const fetchMovies = async () => {
              try {
                const data = await getRelease();
                const data2 = await getRatedSeries();
                const data3 = await getTrendingMovies();
                setMovies(data.results);
                setMovies2(data2.results);
                setMovies3(data3.results);
              } catch (error) {
                console.error("Error fetching movies:", error);
              } finally {
                setLoading(false);
              }
            };
        
            fetchMovies();
          }, []);

    return <div className="mb-[27px] md:mb-[80px]"><List movies={movies2} api={getTrailerTv} loading={loading} title="Top Rating Film dan Series Hari ini"/> 
    <List movies={movies3} api={getTrailerMovie} loading={loading} title="Film Trending"/>
    <List movies={movies} api={getTrailerTv} loading={loading} title="Rilis Baru"/>
    </div>
}