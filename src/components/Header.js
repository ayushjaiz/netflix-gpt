import { useDispatch, useSelector } from "react-redux";
import useSignout from "../hooks/useSignout";
import { NETFLIX_LOGO } from "../utils/constants";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const signOut = useSignout();
    const user = useSelector((store) => store.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        //unsubscribe when component unmounts
        return () => unsubscribe();
    }, [])

    return (
        <div className="absolute top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
            <img
                className="w-36 md:w-44"
                src={NETFLIX_LOGO}
                alt="logo"
            />

            {user && (
                <div className="flex items-center space-x-2">
                    <img
                        className="w-8 h-8 md:w-10 md:h-10"
                        alt="user icon"
                        src={user?.photoURL}
                    />
                    <button
                        type="button"
                        onClick={signOut}
                        className="text-white font-semibold w-24 h-9 bg-red-700 flex items-center justify-center rounded-full"
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div >
    )
}

export default Header