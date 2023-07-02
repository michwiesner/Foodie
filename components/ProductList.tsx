import { View, Text, FlatList } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";

const categories = [
  {
    id: "1",
    name: "hamburger",
    url: "https://picsum.photos/700"
  },
  {
    id: "2",
    name: "pasta",
    url: "https://picsum.photos/700"
  },
  {
    id: "3",
    name: "pizza",
    url: "https://picsum.photos/700"
  },
  {
    id: "4",
    name: "seafood",
    url: "https://picsum.photos/700"
  },
  {
    id: "5",
    name: "hamburger",
    url: "https://picsum.photos/700"
  },
  {
    id: "6",
    name: "hamburger",
    url: "https://picsum.photos/700"
  },
  {
    id: "7",
    name: "hamburger",
    url: "https://picsum.photos/700"
  },
  {
    id: "8",
    name: "hamburger",
    url: "https://picsum.photos/700"
  },
  {
    id: "9",
    name: "hamburger",
    url: "https://picsum.photos/700"
  },
  {
    id: "10",
    name: "hamb",
    url: "https://picsum.photos/700"
  },
  {
    id: "11",
    name: "hamburger fhgg",
    url: "https://picsum.photos/700"
  },
  {
    id: "12",
    name: "hamburger hg",
    url: "https://picsum.photos/700"
  },
  {
    id: "13",
    name: "hamburger",
    url: "https://picsum.photos/700"
  },
];

const ProductList = () => (
  <FlatList
    contentContainerStyle={{ marginBottom: 20 }}
    columnWrapperStyle={{ margin: 5 }}
    data={categories}
    keyExtractor={(item) => item.id}
    renderItem={({ item, index }) => <ProductCard item={item} index={index} />}
    numColumns={2}
  />
);

export default ProductList;
