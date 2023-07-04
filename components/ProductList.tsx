import { FlatList } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../context/productContext";
import { fetchData } from "../helper/dataProvider";

const ProductList = () => {
  const { selectedCategory } = useContext(ProductContext);
  const [products, setProducts] = useState(
    [] as {
      price: string;
      strMeal: string;
      strMealThumb: string;
      idMeal: string;
    }[]
  );

  const getProducts = async () => {
    try {
      const response = await fetchData({
        url: `/list-meals/${selectedCategory}`,
        method: "get",
      });
      setProducts(response);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    if (selectedCategory) getProducts();
  }, [selectedCategory]);

  return (
    <FlatList
      contentContainerStyle={{ marginBottom: 20 }}
      columnWrapperStyle={{ margin: 5 }}
      data={products}
      keyExtractor={(item) => item.idMeal}
      renderItem={({ item }) => <ProductCard {...item} />}
      numColumns={2}
    />
  );
};

export default ProductList;
