import React, { useReducer } from "react";
import {
  shoppingReducer,
  shoppingInitialState,
} from "../reducers/shoppingReducer";
import CarItem from "./CarItem";
import ProductItem from "./ProductItem";
import { TYPES } from '../actions/shoppingActions';

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id:number) => {
    dispatch({type:TYPES.ADD_TO_CART,payload:id});
  };

  const deleteFromCart = (id:number,all:boolean=false) => {
    if(all){
        dispatch({type:TYPES.REMOVE_ALL_FROM_CART,payload:id});
    }else{
        dispatch({type:TYPES.REMOVE_ONE_FROM_CART,payload:id});
    }
  };

  const cleanCar = () => {
    dispatch({type:TYPES.CLEAR_CART});
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product: any) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box"></article>
      <button onClick={cleanCar}>Limpiar Carrito</button>
      {
        cart.map((item:any,index:number)=><CarItem key={index} data={item} deleteFromCart={deleteFromCart}/>)
      }
    </div>
  );
};

export default ShoppingCart;
