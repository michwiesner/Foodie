import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { customTheme } from "../utils/theme";

const Address = () => {
  const [deliveryAddress, setDeliveryAddress] = useState(
    {} as {
      name: string;
      address: string;
      extendedAddress: string;
      zipCode: string;
      city: string;
      state: string;
    }
  );

  const handleChangeValue = (key: string, value: string) =>
    setDeliveryAddress({ ...deliveryAddress, [key]: value });

  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          color: customTheme.colors.textDark,
          marginBottom: 10,
        }}
      >
        Address
      </Text>
      <TextInput
        mode="outlined"
        style={{ backgroundColor: "white" }}
        label="Receiver"
        value={deliveryAddress.name}
        onChangeText={(text) => handleChangeValue("name", text)}
        placeholder="John"
      />
      <TextInput
        label="Address"
        mode="outlined"
        style={{ backgroundColor: "white" }}
        value={deliveryAddress.address}
        onChangeText={(text) => handleChangeValue("address", text)}
        placeholder="1234 nw 33rd s"
      />
      <TextInput
        label="Extended address"
        mode="outlined"
        style={{ backgroundColor: "white" }}
        value={deliveryAddress.extendedAddress}
        onChangeText={(text) => handleChangeValue("extendedAddress", text)}
        placeholder="2nd floor department b"
      />
      <TextInput
        label="State"
        mode="outlined"
        style={{ backgroundColor: "white" }}
        value={deliveryAddress.state}
        onChangeText={(text) => handleChangeValue("state", text)}
        placeholder="California"
      />
      <TextInput
        label="City"
        mode="outlined"
        style={{ backgroundColor: "white" }}
        value={deliveryAddress.city}
        onChangeText={(text) => handleChangeValue("city", text)}
        placeholder="Sacramento"
      />
      <TextInput
        label="Zip code"
        mode="outlined"
        style={{ backgroundColor: "white" }}
        value={deliveryAddress.zipCode}
        onChangeText={(text) => handleChangeValue("zipCode", text)}
        placeholder="12345"
      />

      <Button mode="contained">Next</Button>
    </View>
  );
};

export default Address;
