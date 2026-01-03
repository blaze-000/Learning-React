import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];

    if (existingItemIndex > -1) {
      const updatedItem = {
        ...state.items[existingItemIndex],
        quantity: state.items[existingItemIndex].quantity + 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingItemIndex];

    const updatedItems = [...state.items];

    if (existingCartItem === 1) {
      updatedItems.splice(existingItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };

      updatedItems[existingItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }
  return state;
}




export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  const CartContextValue = {
    items: cart.items,
    addItem: (item) => {
      dispatchCartAction({ type: "ADD", item: item });
    },
    removeItem: (id) => {
      dispatchCartAction({ type: "REMOVE", id: id });
    },
  };

  console.log(CartContextValue);

  return <CartContext.Provider value={CartContextValue}>{children}</CartContext.Provider>;
}

export default CartContext;
