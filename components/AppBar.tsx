import React from "react";
import { Appbar } from "react-native-paper";
import { customTheme } from "../utils/theme";

const AppBar = ({ navigation }) => (
  <Appbar.Header style={{ backgroundColor: customTheme.colors.primary }}>
    <Appbar.Content
      title="Foodie"
      color={customTheme.colors.textLight}
      onPress={() => navigation.navigate("home")}
    />
    <Appbar.Action
      icon="cart"
      color={customTheme.colors.textLight}
      onPress={() => navigation.navigate("cart")}
    />
  </Appbar.Header>
);

export default AppBar;
