import React from "react";
import { useNavigate } from "react-router-dom";

const OrderDetail = ({ itemOrder }) => {
  const { id, total, buyer, items } = itemOrder;
  const { name, lastname, email, phone, address } = buyer;
  const navigate = useNavigate();
  const handleBackToOrderList = () => {
    navigate("/orders");
  };
  return (
    <div>
      <h1>
        Detalle de su Orden
      </h1>
      <div>
        <h2> N° Codigo: {id}</h2>
        <h2> Total: ${total}</h2>
        <h2> Estado de orden: En proceso</h2>
      </div>
      <div>
        <h2> Info de usuario</h2>
        <div>
          <p>
            Nombre completo: {name} {lastname}
          </p>
          <p> E-mail: {email}</p>
          <p> Cel: {phone}</p>
          <p> Direcc: {address}</p>
        </div>
      </div>
      <div>
        <h2> Detalle de los productos:</h2>
        <div>
          {items.map((prod, i) => {
            const { name, price, quantity, id } = prod;
            return (
              <div key={id} className="gap-2 py-2">
                <p> Producto: {name}</p>
                <p> Precio: ${price}</p>
                <p> Cantidad: {quantity}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <button onClick={handleBackToOrderList}>
          Atras
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
