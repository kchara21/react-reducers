import React from "react";

const ProductItem = ({ data, addToCart }: any) => {
  let { id, name, price }: any = data;
  return (
    <div style={{border:"thin solid gray",padding:"1rem"}}>
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button onClick={()=> addToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
