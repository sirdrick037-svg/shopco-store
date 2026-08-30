import {
  createContext,
  useContext,
  useState,
} from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("shopco_cart");

    try {
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      let updatedCart;

      if (existingProduct) {
        updatedCart = currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        updatedCart = [
          ...currentCart,
          {
            ...product,
            quantity: 1,
          },
        ];
      }

      localStorage.setItem(
        "shopco_cart",
        JSON.stringify(updatedCart)
      );

      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) => {
      const updatedCart = currentCart.filter(
        (item) => item.id !== productId
      );

      localStorage.setItem(
        "shopco_cart",
        JSON.stringify(updatedCart)
      );

      return updatedCart;
    });
  };

  const increaseQuantity = (productId) => {
    setCart((currentCart) => {
      const updatedCart = currentCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      localStorage.setItem(
        "shopco_cart",
        JSON.stringify(updatedCart)
      );

      return updatedCart;
    });
  };

  const decreaseQuantity = (productId) => {
    setCart((currentCart) => {
      const updatedCart = currentCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0);

      localStorage.setItem(
        "shopco_cart",
        JSON.stringify(updatedCart)
      );

      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("shopco_cart");
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}