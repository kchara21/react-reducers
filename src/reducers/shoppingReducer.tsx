import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 },
    { id: 4, name: "Producto 4", price: 400 },
    { id: 5, name: "Producto 5", price: 500 },
    { id: 6, name: "Producto 6", price: 600 },
  ],
  cart: [],
};

export function shoppingReducer(state: any, action: any) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        // Crear item en caso de que exista entre el inventario existente.
        (product: any) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item: any) => item.id === newItem.id); // Si el item agregado ya habia sido agregado antes devuelve el item.
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item: any) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
    }

    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find(
        (item: any) => item.id === action.payload
      );
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item: any) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item: any) => item.id !== action.payload),
          };
    }

    case TYPES.REMOVE_ALL_FROM_CART:{
      return {
        ...state,
        cart: state.cart.filter((item: any) => item.id !== action.payload)
      }
    }

    case TYPES.CLEAR_CART:
      return shoppingInitialState;

    default:
      return state;
  }
}
