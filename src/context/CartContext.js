import { createContext, useState, useContext } from "react";

// Create the context
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // const addToCart = (product) => {
  //   setCartItems((prevItems) => {
  //       //checking for duplicates
  //       if(prevItems.some((item) => item.id === product.id)) {
  //           return prevItems;
  //       }
  //       return [...prevItems, product];
  //   });
  // };

  //Add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      //check if product already exists
      const existingItems = prevItems.find((item) => item.id === product.id);

      if (existingItems) {
        //if exists, update quantity by increasing it by 1
        return prevItems.map((item) =>
          item.id === product.id ?
          { ...item, quantity: item.quantity + 1} : //update quantity
          item
        );
      } else {
        //if product doesn't exist, add it to cart with quantity set to 1
        return [ ...prevItems, { ...product, quantity: 1 }];
      }
    });
  };
  
  //remove from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
