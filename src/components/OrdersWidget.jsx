import { useContext } from "react";
import { FaListAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { OrdersContext } from "../contexts/OrdersContext";

const OrdersWidget = () => {
  const { getTotalOrders } = useContext(OrdersContext);
  const totalOrders = getTotalOrders();
  return (
    <>
      <NavLink to="/orders">
        <FaListAlt />
        {totalOrders}
      </NavLink>
    </>
  );
};

export default OrdersWidget;
