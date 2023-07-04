import { View, Text } from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";

const ProductCount = ({ quantity, handleQuantityChange }) => (
  <View style={{ flex: 4, flexDirection: "row", alignItems: "center" }}>
    <IconButton
      icon={quantity <= 1 ? "trash-can" : "minus"}
      size={20}
      disabled={quantity === 0}
      onPress={() => handleQuantityChange("minus")}
    />
    <Text style={{ fontSize: 18, margin: 20 }}>{quantity}</Text>
    <IconButton
      icon="plus"
      size={20}
      onPress={() => handleQuantityChange("plus")}
    />
  </View>
);

export default ProductCount;
