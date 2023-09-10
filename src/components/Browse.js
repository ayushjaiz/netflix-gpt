import useGetAllMovies from "../hooks/useGetAllMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";

const Browse = () => {
    useGetAllMovies(); //Add data to store from TMDB API

    return (
        <>
            <Header />
            <MainContainer />
            <SecondaryConatiner />
        </>
    )
}

export default Browse;