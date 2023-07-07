import { View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { IconButton, Text } from "react-native-paper";
import { customTheme } from "../utils/theme";

const PaymentMessage = ({ route: { params }, navigation: { navigate } }) => {
  const [paymentMessage, setPaymentMessage] = useState({
    title: "",
    message: "",
  });
  const { type, name, message } = params;
  const successMessage = {
    title: `Congratulations ${name}`,
    message: "The order has been created successfully",
  };
  const errorMessage = { title: `We're sorry, ${name}`, message };

  useEffect(() => {
    setPaymentMessage(type === "success" ? successMessage : errorMessage);
  }, [type]);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 200, height: 200, margin: 20 }}
        // source={{ uri: "asset:/success.png" }}
        source={
          type === "failure"
            ? require("../assets/failure.png")
            : require("../assets/success.png")
        }
      />
      <Text
        variant="titleMedium"
        style={{ color: customTheme.colors.textDark, margin: 15 }}
      >
        {paymentMessage.title}
      </Text>
      <Text
        variant="bodyLarge"
        style={{ margin: 15, color: customTheme.colors.textDark }}
      >
        {paymentMessage.message}
      </Text>

      <IconButton
        style={{ marginTop: 250 }}
        icon="home"
        iconColor={customTheme.colors.primary}
        size={40}
        onPress={() => navigate("home")}
      />
      <Text style={{ color: customTheme.colors.textDark }}>Go home</Text>
    </View>
  );
};

export default PaymentMessage;
