import React from "react";
import { Text, View, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Open up App.js to start working on your app!xf dffgd df gfbc</Text>
      <Button title="Go to cart" onPress={() => navigation.navigate("cart")} />
    </View>
  );
};

export default Home;
