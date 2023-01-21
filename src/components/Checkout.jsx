import React, { useContext } from "react";

import { UserContext } from "../contexts/UserContext";
import User from "./User";
import UserForm from "./UserForm";
import { OrdersContext } from "../contexts/OrdersContext";

const Checkout = () => {
  const { userInfo, handleSignOutUser } = useContext(UserContext);
  const { orderIsLoading } = useContext(OrdersContext);

  const { uid, avatar, name, email } = userInfo;

  if (orderIsLoading) {
    return (
      <div>
        <div>
          <h1>
            Creando orden...
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <h1>
          Checkout
        </h1>
        {uid === "" && <User />}
        {avatar && (
          <div>
            <img
              referrerPolicy="no-referrer"
              className="rounded-full"
              src={avatar}
              alt={name}
            />
          </div>
        )}
      </div>
      {uid !== "" && (
        <>
          <h1>Está comprando {email} </h1>
          <button
            onClick={handleSignOutUser}
          >
            Cerrar sesión
          </button>
          <UserForm />
        </>
      )}
    </div>
  );
};

export default Checkout;
