import React, { ReactNode, useState } from "react";
import Order from "../data/Order";

interface OrdersContextInterface {
  orders: Order[] | null;
  addOrder: (order: Order) => void;
}
interface Props {
  children?: ReactNode | ReactNode[];
}

//Context stores and provides local data about Orders
export const OrdersContext = React.createContext<OrdersContextInterface | null>(
  null
);

export const OrdersProvider = ({ children }: Props) => {
  const [orders, setOrders] = useState<Order[] | null>(null);
  const addOrder = (newOrder: Order) => {
    if (orders === null) {
      setOrders([newOrder]);
      return;
    }
    setOrders([...orders, newOrder]);
  };
  return (
    <OrdersContext.Provider
      value={{
        orders,
        addOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
