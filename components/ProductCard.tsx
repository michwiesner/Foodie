import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { ProductContext } from "../context/ProductContext";
import { customTheme } from "../utils/theme";

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
          style={{
            minHeight: 140,
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Text variant="bodyMedium">{strMeal}</Text>
          <View>
            <Text variant="titleSmall" style={{ marginVertical: 4 }}>
              ${price}
            </Text>
            <Button
              mode="contained"
              style={{ marginTop: 5 }}
              labelStyle={{ color: customTheme.colors.textLight }}
              onPress={() =>
                changeCart({ idMeal, strMeal, price, action: "plus" })
              }
            >
              Add to cart
            </Button>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ProductCard;
