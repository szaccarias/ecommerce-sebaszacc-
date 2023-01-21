import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { useParams } from "react-router-dom";
import OrderDetail from "./OrderDetail";

const OrderDetailContainer = () => {
  const [itemOrder, setItemOrder] = useState({});
  const [isLoadingOrderDetail, setIsLoadingOrderDetail] = useState(true);
  const { orderId } = useParams();
  useEffect(() => {
    const docRef = doc(db, "Ordenes-ecommerce-sebaszacc", orderId);
    setIsLoadingOrderDetail(true);
    getDoc(docRef)
      .then((doc) => {
        const itemOrderData = doc.data();
        const itemOrderAdapted = { id: doc.id, ...itemOrderData };
        setItemOrder(itemOrderAdapted);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoadingOrderDetail(false);
      });
  }, [orderId]);
  if (isLoadingOrderDetail) {
    return (
      <div>
        Cargando los datos . . .
      </div>
    );
  }
  return (
    <div>
      <OrderDetail itemOrder={itemOrder} />
    </div>
  );
};

export default OrderDetailContainer;
