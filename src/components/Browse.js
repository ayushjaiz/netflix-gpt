import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";

const Browse = () => {
    useNowPlayingMovies(); //Add data to store from TMDB API

    return (
        <>
            <Header />
            <MainContainer />
            <SecondaryConatiner />
        </>
    )
}

export default Browse;