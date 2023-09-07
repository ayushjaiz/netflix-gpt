import useSignout from "../utils/useSignout";

const Header = () => {
    const signOut = useSignout();

    return (
        <div className="absolute top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
            <img
                className="w-36 md:w-44"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
            />
            <div className="flex items-center space-x-2">
                <img
                    className="w-8 h-8 md:w-10 md:h-10"
                    alt="user icon"
                    src="https://pic.onlinewebfonts.com/thumbnails/icons_147443.svg"
                />
                <button
                    type="button"
                    onClick={signOut}
                    className="text-white font-semibold w-24 h-9 bg-red-700 flex items-center justify-center rounded-full"
                >
                    Sign Out
                </button>

            </div>
        </div >

    )
}

export default Header