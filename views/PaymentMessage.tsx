import { View, Text } from "react-native";
import React from "react";

const PaymentMessage = ({ route: { params }, navigation: { navigate } }) => {
  const { type, name, message } = params;
  return (
    <View>
      <Text>{type}</Text>
      <Text>{name}</Text>
      <Text>{message}</Text>
    </View>
  );
};

export default PaymentMessage;
