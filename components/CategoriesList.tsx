import { View, Text, FlatList } from "react-native";
import React from "react";
import { Chip } from "react-native-paper";
import { customTheme } from "../utils/theme";

const categories = [
  {
    id: "1",
    name: "hamburger",
  },
  {
    id: "2",
    name: "pasta",
  },
  {
    id: "3",
    name: "pizza",
  },
  {
    id: "4",
    name: "seafood",
  },
  {
    id: "5",
    name: "hamburger",
  },
  {
    id: "6",
    name: "hamburger",
  },
  {
    id: "7",
    name: "hamburger",
  },
  {
    id: "8",
    name: "hamburger",
  },
];

const CategoriesList = () => {
  return (
    <View style={{ margin: 10 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          color: customTheme.colors.textDark,
          marginBottom: 10,
        }}
      >
        Categories
      </Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Chip
            style={{ margin: 10 }}
            mode="outlined"
            onPress={() => console.log("Pressed")}
          >
            {item.name}
          </Chip>
        )}
        horizontal
      />
    </View>
  );
};

export default CategoriesList;
