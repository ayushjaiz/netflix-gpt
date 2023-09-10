import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ id }) => {
    useTrailerVideo(id);

    const trailerKey = useSelector(store => store.movies?.trailerVideo)

    return (
        <div className="w-screen">
            <iframe className="w-screen aspect-video top-0"
                src={"https://www.youtube.com/embed/" + trailerKey + "?autoplay=1&mute=1&rel=0"} //"?autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"
            >
            </iframe>
        </div>

    )
}

export default VideoBackground