import { useEffect, useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { calculateItemTotals } from "./CartReducer";
import {
  REMOVE_ITEM,
  ADD_TO_CART,
  INCREASE,
  DECREASE,
  CHECKOUT,
  CLEAR,
} from "./CartTypes.js";


const LOCAL_STORAGE_KEY = "cartItems";
const itemsInLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
const storage = itemsInLocalStorage
  ? JSON.parse(itemsInLocalStorage)
  : [];

const CartState = ({ children }) => {
  const { total, itemCount } = calculateItemTotals(storage);
  const initialState = {
    cartItems: storage,
    total,
    itemCount,
    checkout: false,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (payload) => {
    dispatch({ type: ADD_TO_CART, payload });
  };

  const increase = (payload) => {
    dispatch({ type: INCREASE, payload });
  };

  const decrease = (payload) => {
    dispatch({ type: DECREASE, payload });
  };

  const removeFromCart = (payload) => {
    dispatch({ type: REMOVE_ITEM, payload });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR });
  };

  const handleCheckout = () => {
    dispatch({ type: CHECKOUT });
  };

  // Sync state changes to local storage
  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(state.cartItems)
    );
  }, [state.cartItems]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        increase,
        decrease,
        handleCheckout,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
