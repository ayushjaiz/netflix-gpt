import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (id) => {

    const dispatch = useDispatch();

    const getTrailerVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPTIONS)
        const json = await data.json();

        const filterData = json?.results.filter(video => video.type === "Trailer")
        const trailerKey = (filterData) ? filterData[0].key : json[0].key;
        dispatch(addTrailerVideo(trailerKey));
    }

    useEffect(() => {
        getTrailerVideo();
    }, []);
}

export default useTrailerVideo;
