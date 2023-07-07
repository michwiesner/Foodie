import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Button, TextInput } from "react-native-paper";
import { customTheme } from "../utils/theme";
import { ProductContext } from "../context/ProductContext";

const Address = ({ navigation: { navigate } }) => {
  const { customer, setCustomer } = useContext(ProductContext);

  const handleChangeValue = (key: string, value: string) =>
    setCustomer({ ...customer, [key]: value });

  return (
    <View
      style={{ padding: 20, justifyContent: "space-between", height: "100%" }}
    >
      <View>
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
          value={customer.name}
          onChangeText={(text) => handleChangeValue("name", text)}
          placeholder="John"
        />
        <TextInput
          mode="outlined"
          style={{ backgroundColor: "white" }}
          label="Email"
          value={customer.email}
          onChangeText={(text) => handleChangeValue("email", text)}
          placeholder="johndoe@example.com"
        />
        <TextInput
          label="Address"
          mode="outlined"
          style={{ backgroundColor: "white" }}
          value={customer.address}
          onChangeText={(text) => handleChangeValue("address", text)}
          placeholder="1234 nw 33rd s"
        />
        <TextInput
          label="Extended address"
          mode="outlined"
          style={{ backgroundColor: "white" }}
          value={customer.extendedAddress}
          onChangeText={(text) => handleChangeValue("extendedAddress", text)}
          placeholder="2nd floor department b"
        />
        <TextInput
          label="State"
          mode="outlined"
          style={{ backgroundColor: "white" }}
          value={customer.state}
          onChangeText={(text) => handleChangeValue("state", text)}
          placeholder="California"
        />
        <TextInput
          label="City"
          mode="outlined"
          style={{ backgroundColor: "white" }}
          value={customer.city}
          onChangeText={(text) => handleChangeValue("city", text)}
          placeholder="Sacramento"
        />
        <TextInput
          label="Zip code"
          mode="outlined"
          style={{ backgroundColor: "white" }}
          value={customer.zipCode}
          onChangeText={(text) => handleChangeValue("zipCode", text)}
          placeholder="12345"
        />
      </View>

      <Button
        mode="contained"
        style={{ justifyContent: "flex-end", marginBottom: 20 }}
        labelStyle={{ color: customTheme.colors.textLight, fontSize: 18 }}
        onPress={() => navigate("payment")}
      >
        Next
      </Button>
    </View>
  );
};

export default Address;
