import { View, Text } from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";

const ProductCount = () => {
  const [count, setCount] = useState(1);
  return (
    <View style={{ flex: 4, flexDirection: "row", alignItems: "center" }}>
      <IconButton
        icon="minus"
        size={20}
        disabled={count === 0}
        onPress={() => setCount(count - 1)}
      />
      <Text style={{ fontSize: 18, margin: 20}}>{count}</Text>
      <IconButton icon="plus" size={20} onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default ProductCount;
