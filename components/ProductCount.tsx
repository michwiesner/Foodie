import { View, Text } from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";

const ProductCount = () => {
  const [count, setCount] = useState(1);
  return (
    <View style={{ flex: 4, flexDirection: "row", alignItems: "center" }}>
      <IconButton
        icon="minus"
        mode="outlined"
        size={20}
        disabled={count === 1}
        onPress={() => setCount(count - 1)}
      />
      <Text style={{ fontSize: 20, margin: 20}}>{count}</Text>
      <IconButton icon="plus" mode="outlined" size={20} onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default ProductCount;
