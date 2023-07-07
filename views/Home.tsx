import React, { useContext } from "react";
import CategoriesList from "../components/CategoriesList";
import ProductList from "../components/ProductList";
import { ProductContext } from "../context/ProductContext";
import { Button } from "react-native-paper";
import { customTheme } from "../utils/theme";

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
          labelStyle={{ color: customTheme.colors.textLight, fontSize: 18 }}
          onPress={() => navigate("cart")}
        >
          View cart ({cart.products.length})
        </Button>
      )}
    </>
  );
};

export default Home;
