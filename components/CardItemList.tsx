import { View, Text, FlatList } from "react-native";
import React from "react";
import CardItem from "./CardItem";

const products = [
  {
    id: "1",
    name: "hamburger",
    url: "https://picsum.photos/700",
    description: "a descrioption",
    price: "300",
  },
  {
    id: "2",
    name: "pasta",
    url: "https://picsum.photos/700",
    description: "a descrioption",
    price: "300",
  },
  {
    id: "3",
    name: "pizza",
    url: "https://picsum.photos/700",
    description: "a descrioption",
    price: "300",
  },
  {
    id: "4",
    name: "seafood",
    url: "https://picsum.photos/700",
    description: "a descrioption",
    price: "300",
  },
  {
    id: "5",
    name: "hamburger",
    url: "https://picsum.photos/700",
    description: "a descrioption",
    price: "300",
  },
];

const CardItemList = () => (
  <FlatList
    contentContainerStyle={{ margin: 20, paddingBottom: 20 }}
    data={products}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <CardItem item={item} />}
  />
);

export default CardItemList;
