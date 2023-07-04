import { FlatList } from "react-native";
import React from "react";
import CardItem from "./CardItem";

const CardItemList = ({ products }) => (
  <FlatList
    contentContainerStyle={{ margin: 20, paddingBottom: 20 }}
    data={products}
    keyExtractor={(item) => item.idMeal}
    renderItem={({ item }) => <CardItem {...item} />}
  />
);

export default CardItemList;
