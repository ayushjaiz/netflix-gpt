import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {
    addNowPlayingMovies,
    addPopularMovies,
    addTopRatedMovies,
    addUpcomingMovies
} from "../utils/movieSlice"

const useGetAllMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTIONS)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS)
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS)
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }

    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS)
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
        getPopularMovies();
        getTopRatedMovies();
        getUpcomingMovies();
    }, [])
}

export default useGetAllMovies;