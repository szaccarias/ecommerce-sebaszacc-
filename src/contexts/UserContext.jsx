import { createContext } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import useLocalStorageState from "use-local-storage-state";

export const UserContext = createContext([]);
export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useLocalStorageState("userInfo", {
    defaultValue: {
      name: "",
      lastname: "",
      email: "",
      emailconfirmation: "",
      uid: "",
      phone: "",
      avatar: "",
      address: "",
      wallet: "",
      token: "",
      orders: "",
    },
  });
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleCreateUserLoginEmail = (e) => {
    e.preventDefault();
    if (validateCreateUserForm()) {
      createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((result) => {
          setUserInfo({
            ...userInfo,
            uid: result.user.uid,
            email: result.user.email,
            token: result.user.accessToken,
          });
        })
        .catch((error) => {
          (`Error al generar el usuario: ${error}`);
        });
    } else {
      (`Errores en el formulario`);
    }
  };
  const handleSignOutUser = () => {
    signOut(auth)
      .then(() => {
        (` Se finalizó la sesion`);
        setUserInfo({ uid: "" });
      })
      .catch((error) => {
        (` Se ha producido un error`);
      });
  };
  const handleUserGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUserInfo({
          name: user.displayName,
          email: user.email,
          phone: user.phoneNumber,
          avatar: user.photoURL,
          token: token,
        });
        (` Bienvenido"${user.displayName}"`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
        (`Se ha producido un error`);
      });
  };
  const handleChangeUserLoginEmail = (event) => {
    setUserInfo((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };
  const validateCreateUserForm = () => {
    if (
      userInfo.email === userInfo.emailconfirmation &&
      userInfo.password.length > 5
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        handleSignOutUser,
        handleUserGoogleLogin,
        handleCreateUserLoginEmail,
        handleChangeUserLoginEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
