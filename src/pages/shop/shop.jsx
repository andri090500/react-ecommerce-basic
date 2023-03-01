import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Andri Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((data) => (
          <Product key={data.id} datas={data} />
        ))}
      </div>
    </div>
  );
};
