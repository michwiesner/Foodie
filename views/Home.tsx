import React, { useContext } from "react";
import CategoriesList from "../components/CategoriesList";
import ProductList from "../components/ProductList";
import { ProductContext } from "../context/productContext";
import { Button } from "react-native-paper";

const Home = ({ navigation: { navigate } }) => {
  const { cart } = useContext(ProductContext);
  return (
    <>
      <CategoriesList />
      <ProductList />

      {cart.products.length > 0 && (
        <Button
          style={{ margin: 20 }}
          mode="contained"
          onPress={() => navigate("cart")}
        >
          View cart ({cart.products.length})
        </Button>
      )}
    </>
  );
};

export default Home;
