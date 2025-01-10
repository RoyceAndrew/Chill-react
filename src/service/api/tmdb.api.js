import axios from "axios";

const api = import.meta.env.VITE_REACT_APP_API_TMDB

const token = import.meta.env.VITE_REACT_APP_API_TOKEN

export const getRatedSeries = async () => {
    const response = await axios.get(`${api}/tv/top_rated?language=id&page=1'`, { headers: { Authorization: `Bearer ${token}` } })
    return response.data;
};

export const getTrendingMovies = async () => {
    const response = await axios.get(`${api}/trending/movie/day?language=id`, { headers: { Authorization: `Bearer ${token}` } })
    return response.data
};

export const getRelease = async () => {
    const response = await axios.get(`${api}/tv/airing_today?language=id&page=1`, { headers: { Authorization: `Bearer ${token}` } })
    return response.data
};

export const getTrailerTv = async (id) => {
    const response = await axios.get(`${api}/tv/${id}/videos?language=en-US`, { headers: { Authorization: `Bearer ${token}` } })
    return response.data.results[0].key
};

export const getTrailerMovie = async (id) => {
    const response = await axios.get(`${api}/movie/${id}/videos?language=en-US`, { headers: { Authorization: `Bearer ${token}` } })
    return response.data.results[0].key
};