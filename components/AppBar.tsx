import React, { useContext } from "react";
import { Appbar, Badge } from "react-native-paper";
import { customTheme } from "../utils/theme";
import { ProductContext } from "../context/ProductContext";
import { View } from "react-native";

const AppBar = ({ navigation }) => {
  const { cart } = useContext(ProductContext);
  
  return (
    <Appbar.Header style={{ backgroundColor: customTheme.colors.primary }}>
      <Appbar.Content
        title="Foodie"
        color={customTheme.colors.textLight}
        onPress={() => navigation.navigate("home")}
      />
      <View>
        <Badge
          visible={cart?.products.length > 0}
          style={{
            position: "absolute",
            top: 5,
            right: 5,
            backgroundColor: "red",
            color: customTheme.colors.textLight,
            zIndex: 1,
          }}
        >
          {cart?.products.length}
        </Badge>
        <Appbar.Action
          icon="cart"
          color={customTheme.colors.textLight}
          onPress={() => navigation.navigate("cart")}
        />
      </View>
    </Appbar.Header>
  );
};

export default AppBar;
