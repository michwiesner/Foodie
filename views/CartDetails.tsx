import React, { useContext } from "react";
import { View, Text } from "react-native";
import CardItemList from "../components/CardItemList";
import { Button } from "react-native-paper";
import { ProductContext } from "../context/ProductContext";
import { customTheme } from "../utils/theme";

const CartDetails = ({ navigation }) => {
  const { cart } = useContext(ProductContext);

  return (
    <View style={{ justifyContent: "space-between", height: "100%" }}>
      <CardItemList products={cart.products} />
      <View style={{ marginBottom: 30, marginHorizontal: 20 }}>
        <View
          style={{
            width: "100%",
            marginBottom: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Total</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>${cart.total}</Text>
        </View>
        <Button mode="contained" labelStyle={{ color: customTheme.colors.textLight, fontSize: 18 }} disabled={cart.products.length === 0} onPress={() => navigation.navigate("address")}>
          Go to checkout
        </Button>
      </View>
    </View>
  );
};

export default CartDetails;
