/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from 'react';
export const CartContext = createContext({
  cartItems: [],
  addToCart: (product) => {},
  removeToCart: (product) => {},
  deleteToCart: (product) => {},
});

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const existingProductIndex = state.items.findIndex(
      (item) =>
        item.productId === action.item.productId &&
        // item.color === action.item.color &&
        // item.size === action.item.size
        item.variantId === action.item.variantId
    );
    const updateItems = [...state.items];
    if (existingProductIndex > -1) {
      const existingItem = state.items[existingProductIndex];
      const updateItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updateItems[existingProductIndex] = updateItem;
    } else {
      updateItems.push({ ...action.item });
    }
    localStorage.setItem('cart', JSON.stringify(updateItems));
    return { ...state, items: updateItems };
  }
  if (action.type === 'REMOVE_ITEM') {
    const existingProductIndex = state.items.findIndex(
      (item) =>
        item.id === action.item.id &&
        item.color === action.item.color &&
        item.size === action.item.size
    );
    const existingItem = state.items[existingProductIndex];
    const updateItems = [...state.items];
    if (existingItem.quantity === 1) {
      updateItems.splice(existingProductIndex, 1);
    } else {
      const updateItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updateItems[existingProductIndex] = updateItem;
    }
    localStorage.setItem('cart', JSON.stringify(updateItems));

    return { ...state, items: updateItems };
  }

  if (action.type === 'DELETE_ITEM') {
    const existingProductIndex = state.items.findIndex(
      (item) =>
        item.id === action.item.id &&
        item.color === action.item.color &&
        item.size === action.item.size
    );

    const updateItems = [...state.items];
    updateItems.splice(existingProductIndex, 1);
    localStorage.setItem('cart', JSON.stringify(updateItems));
    return { ...state, items: updateItems };
  }
  return state;
}

const cartItem = JSON.parse(localStorage.getItem('cart'));
export default function CartProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, {
    items: cartItem ? cartItem : [],
  });

  function addToCart(product) {
    dispatchCartAction({ type: 'ADD_ITEM', item: product });
    console.log(cart);
  }

  function removeToCart(product) {
    dispatchCartAction({ type: 'REMOVE_ITEM', item: product });
  }

  function deleteToCart(product) {
    dispatchCartAction({ type: 'DELETE_ITEM', item: product });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: cart.items,
        removeToCart,
        addToCart,
        deleteToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
