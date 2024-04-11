import React from "react";
import { Row } from "react-bootstrap";
import ProductsCard from "../products/productsCard";
import Pagination from "../Utility/Pagination";
const UserFavoriteProducts = () => {
  return (
    <div>
      <div className="admin-content-text pb-4">قائمة المفضلة</div>
      <Row className="justify-content-start">
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </Row>
      <Pagination />
    </div>
  );
};

export default UserFavoriteProducts;
