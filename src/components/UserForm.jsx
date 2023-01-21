import { useContext } from "react";
import { OrdersContext } from "../contexts/OrdersContext";
import { UserContext } from "../contexts/UserContext";

const UserForm = () => {
  const { handleCreateOrder, handleChange } = useContext(OrdersContext);
  const { userInfo } = useContext(UserContext);
  return (
    <>
      <h2>
        Info de usuario
      </h2>
      <form  onSubmit={handleCreateOrder}>
        <label>
          <span>Nombre completo:</span>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="ej: Luis"
            onChange={handleChange}
            autoComplete="off"
            defaultValue={userInfo.name}
            required
          />
        </label>
        <label>
          <span>Apellido:</span>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="ej: Pérez"
            onChange={handleChange}
            autoComplete="off"
            defaultValue={userInfo.lastname}
            required
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            placeholder="ej: LuisSuarez@suemail.com"
            name="email"
            id="email"
            onChange={handleChange}
            autoComplete="off"
            defaultValue={userInfo.email}
            required
          />
        </label>
        <label>
          <span>Celular:</span>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Ej: +5491134546278"
            onChange={handleChange}
            autoComplete="off"
            defaultValue={userInfo.phone}
            required
          />
        </label>
        <label>
          <span>Domicilio:</span>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Ej: Ascasubi 1901, Llavallol, Buenos Aires, Argentina"
            onChange={handleChange}
            autoComplete="off"
            defaultValue={userInfo.address}
            required
          />
        </label>
        <div>
          <button type="submit">
            Confirmar su información
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
