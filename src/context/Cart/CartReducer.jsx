import {
  REMOVE_ITEM,
  ADD_TO_CART,
  INCREASE,
  DECREASE,
  CHECKOUT,
  CLEAR,
} from "./CartTypes.js";

// Export function to calculate the total price of the cart and the total quantity of the cart
export const calculateItemTotals = (cartItems) => {
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};

// The reducer is listening for an action, which is the type that we defined in the CartTypes.js file
const CartReducer = (state, action) => {
  switch (action.type) {
    // If the action type is ADD_TO_CART, we want to add the item to the cartItems array
    case ADD_TO_CART: {
      const itemExists = state.cartItems.find((item) => item.id === action.payload.id);
      let newCartItems;

      if (itemExists) {
        newCartItems = state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCartItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
      }
      
      return {
        ...state,
        ...calculateItemTotals(newCartItems),
        cartItems: newCartItems,
      };
    }

    // If the action type is REMOVE_ITEM, we want to remove the item from the cartItems array
    case REMOVE_ITEM: {
      const newCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        ...calculateItemTotals(newCartItems),
        cartItems: newCartItems,
      };
    }

    // If the action type is INCREASE, we want to increase the quantity of the particular item in the cartItems array
    case INCREASE: {
      const newCartItems = state.cartItems.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        ...calculateItemTotals(newCartItems),
        cartItems: newCartItems,
      };
    }

    // If the action type is DECREASE, we want to decrease the quantity of the particular item in the cartItems array
    case DECREASE: {
      const newCartItems = state.cartItems.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      );
      return {
        ...state,
        ...calculateItemTotals(newCartItems),
        cartItems: newCartItems,
      };
    }

    // If the action type is CHECKOUT, we want to clear the cartItems array and set the checkout to true
    case CHECKOUT: {
      return {
        cartItems: [],
        checkout: true,
        itemCount: 0,
        total: 0,
      };
    }

    // If the action type is CLEAR, we want to clear the cartItems array
    case CLEAR: {
      return {
        cartItems: [],
        itemCount: 0,
        total: 0,
      };
    }

    // Return the state if the action type is not found
    default:
      return state;
  }
};

export default CartReducer;