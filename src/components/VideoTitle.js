const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-sceen aspect-video px-20 pt-[16%] absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-2/5">{overview}</p>

            <div className="flex space-x-4">
                <button className="w-32 bg-red-700 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full">
                    Play
                </button>
                <button className="w-32 bg-white hover:bg-gray-600 text-black font-semibold py-2 px-4 rounded-full">
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle