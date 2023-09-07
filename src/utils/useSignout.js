import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "./userSlice";

const useSignout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            dispatch(removeUser());
            navigate("/");
            console.log('button');
        } catch (error) {
            console.error(error);
        }
    };
    return handleSignOut;
};

export default useSignout;