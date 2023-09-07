import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";

const useSignin = (name, email, password, setErrorMessage) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignIn = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                updateProfile(user, { displayName: name })
                    .then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                        navigate("/browse")
                    })
                    .catch((error) => {
                        // setErrorMessage(error.code + "-" + error.message);
                        console.log(error.code + "-" + error.message);
                    });
            })
            .catch((error) => {
                console.log(error.code + "-" + error.message);
            });
    }
    return handleSignIn;
}

export default useSignin