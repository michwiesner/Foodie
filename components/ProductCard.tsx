import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { ProductContext } from "../context/productContext";

const ProductCard = ({ idMeal, price, strMeal, strMealThumb }) => {
  const { changeCart } = useContext(ProductContext);

  return (
    <View
      style={{
        flex: 1,
        margin: 10,
      }}
    >
      <Card elevation={0}>
        <Card.Cover source={{ uri: strMealThumb }} />
        <Card.Content
          style={{ height: 140, justifyContent: "space-between", padding: 10 }}
        >
          <Text variant="titleSmall">{strMeal}</Text>
          <Text variant="titleMedium">${price}</Text>
          <Button
            mode="contained"
            style={{ marginTop: 10 }}
            onPress={() =>
              changeCart({ idMeal, strMeal, price, action: "plus" })
            }
          >
            Add to cart
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ProductCard;
