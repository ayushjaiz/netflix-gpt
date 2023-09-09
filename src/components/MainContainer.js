import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if (!movies) return null;

    const mainMovie = movies[0];
    //console.log(mainMovie);
    const { title, overview, id } = mainMovie;

    return (
        <div className="">
            <VideoTitle title={title} overview={overview} />
            <VideoBackground id={id} />
        </div>
    )
}

export default MainContainer