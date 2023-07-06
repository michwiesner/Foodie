import { View, Text } from "react-native";
import React, { useContext } from "react";
import { customTheme } from "../utils/theme";
import ProductCount from "./ProductCount";
import { ProductContext } from "../context/ProductContext";

const CardItem = ({ strMeal, idMeal, price, priceTotal, quantity }) => {
  const { changeCart } = useContext(ProductContext);
  const handleQuantityChange = (action: string) =>
    changeCart({ idMeal, strMeal, price, action });
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        borderBottomColor: "#ccc",
        borderBottomWidth: 0.5,
      }}
    >
      <View style={{ flex: 3 }}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 20,
            marginBottom: 10,
            color: customTheme.colors.textDark,
          }}
        >
          {strMeal}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          flex: 3,
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 20,
            alignItems: "center",
            marginRight: 20,
            marginBottom: 5,
          }}
        >
          ${priceTotal}
        </Text>
        <ProductCount
          quantity={quantity}
          handleQuantityChange={handleQuantityChange}
        />
      </View>
    </View>
  );
};

export default CardItem;
