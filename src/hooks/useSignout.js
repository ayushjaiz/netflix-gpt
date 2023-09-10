import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";

const useSignout = () => {
    const dispatch = useDispatch();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            dispatch(removeUser());
        } catch (error) {
            console.error(error);
        }
    };
    return handleSignOut;
};

export default useSignout;