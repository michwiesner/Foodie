import { View, Text } from "react-native";
import React from "react";
import { customTheme } from "../utils/theme";
import ProductCount from "./ProductCount";

const CardItem = ({ item }) => {
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
          {item.name}
        </Text>
        <Text style={{ fontSize: 16, color: customTheme.colors.textDark }}>
          {item.description}
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
            marginBottom: 5
          }}
        >
          ${item.price}
        </Text>
        <ProductCount />
      </View>
    </View>
  );
};

export default CardItem;
