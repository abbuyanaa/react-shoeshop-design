import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import OrderDetailMain from "../components/orders/OrderDetailMain";

const OrderDetailScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <OrderDetailMain />
      </main>
    </>
  );
};

export default OrderDetailScreen;
