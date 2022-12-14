import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import EditProductMain from "../components/products/EditProductMain";
import products from "../data/products";

const EditProductScreen = () => {
  let { id } = useParams();
  const productId = products.find((p) => p.id === Number(id));
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditProductMain productId={productId} />
      </main>
    </>
  );
};

export default EditProductScreen;
