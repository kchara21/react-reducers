import React from "react";

const CarItem = ({ data, deleteFromCart }: any) => {
  let { id, name, price,quantity } = data;
  return (
    <div style={{borderBottom:"thin solid gray"}}>
      <h4>{name}</h4>
      <h5>${price}.00 x {quantity} = ${price*quantity}.00</h5>
      <button onClick={()=>deleteFromCart(id)}>Eliminar Uno</button>
      <br />
      <button onClick={()=>deleteFromCart(id,true)}>Eliminar Todos</button>
    </div>
  );
};

export default CarItem;
