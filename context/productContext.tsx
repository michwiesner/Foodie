import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext({} as any);

const ProductProvider = ({ children }: any) => {
  const [cart, setCart] = useState({ products: [], total: 0 } as {
    products: any[];
    total: number;
  });
  const [selectedCategory, setSelectedCategory] = useState("");

  const changeCart = ({ idMeal, strMeal, price, action }: any) => {
    let cartCopy = cart;
    const mealIndex = cartCopy.products.findIndex(
      ({ idMeal: idCart }) => idCart === idMeal
    );
  
    if (mealIndex >= 0) {
      const { quantity: productQuantity, priceTotal: totalProductPrice } =
        cartCopy.products[mealIndex];

      if (productQuantity === 1 && action === "minus") {
        const filteredCart = cartCopy.products.filter(
          ({ idMeal: idCart }) => idCart !== idMeal
        );
        cartCopy = {
          products: filteredCart,
          total: cartCopy.total - totalProductPrice,
        };
      } else {
        const updatedMeal = {
          idMeal,
          strMeal,
          price,
          priceTotal: totalProductPrice + (action === "plus" ? +price : -price),
          quantity: productQuantity + (action === "plus" ? +1 : -1),
        };
        cartCopy.products[mealIndex] = updatedMeal;
        cartCopy.total = cartCopy.total + (action === "plus" ? +price : -price);
      }

      setCart({ ...cartCopy });
    } else {
      setCart({
        products: [
          ...cart.products,
          { idMeal, strMeal, price, priceTotal: price, quantity: 1 },
        ],
        total: cart.total + price,
      });
    }
  };

  return (
    <ProductContext.Provider
      value={{ cart, selectedCategory, setSelectedCategory, changeCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
