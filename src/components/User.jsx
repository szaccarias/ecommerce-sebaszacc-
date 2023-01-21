import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { FaGoogle } from "react-icons/fa";

const User = () => {
  const {
    handleUserGoogleLogin,
    handleCreateUserLoginEmail,
    handleChangeUserLoginEmail,
  } = useContext(UserContext);
  const [showFormUser, setShowFormUser] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => {setShowFormUser(!showFormUser);}}>
          Registro alernativo
        </button>
        {showFormUser && (
          <form onSubmit={handleCreateUserLoginEmail}>
            <input
              placeholder="E-mail"
              name="email"
              id="email"
              onChange={handleChangeUserLoginEmail}
              type="email"
              required/>
            <input
              placeholder="Confirmacion de su E-mail"
              name="emailconfirmation"
              id="emailconfirmation"
              onChange={handleChangeUserLoginEmail}
              type="email"
              required
            />
            <input
              placeholder="Password"
              name="password"
              id="passoword"
              onChange={handleChangeUserLoginEmail}
              type="password"
              required
            />
            <input
              placeholder="Confirmación de su Password"
              name="passwordconfirmation"
              id="passowordconfirmation"
              onChange={handleChangeUserLoginEmail}
              type="password"
              required
            />
            <button>
              Cree un usuario nuevo
            </button>
          </form>
        )}
      </div>
      <button onClick={handleUserGoogleLogin}>
        <FaGoogle /> Iniciar sesión con cuenta de Google
      </button>
    </>
  );
};

export default User;
