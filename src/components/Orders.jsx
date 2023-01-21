import { OrdersContext } from "../contexts/OrdersContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const { orderList, getTotalOrders, clearOrderList } =
    useContext(OrdersContext);
  const totalOrders = getTotalOrders();
  const navigate = useNavigate();
  const handleOrderId = (id) => {
    navigate(`/orders/${id}`);
  };
  if (totalOrders === 0) {
    return (
      <div>
        <h1>
          No se encuentran ordenes de compras
        </h1>
      </div>
    );
  }
  return (
    <div>
      <h1>
        Ordenes de compras
      </h1>
      {orderList.map((createdOrdersId, i) => (
        <button key={i} onClick={() => handleOrderId(createdOrdersId)}>
          {createdOrdersId}
        </button>
      ))}
      {<button onClick={clearOrderList}>Limpiar lista de ordenes</button>}
    </div>
  );
};

export default Orders;
