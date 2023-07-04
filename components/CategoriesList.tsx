import { View, Text, FlatList } from "react-native";
import React, { useContext, useEffect } from "react";
import { Chip } from "react-native-paper";
import { customTheme } from "../utils/theme";
import { ProductContext } from "../context/productContext";
import { fetchData } from "../helper/dataProvider";
import { useState } from "react";

const CategoriesList = () => {
  const { selectedCategory, setSelectedCategory } = useContext(ProductContext);
  const [categories, setCategories] = useState([] as { strCategory: string }[]);

  const getCategories = async () => {
    try {
      const response = await fetchData({
        url: "/all-categories",
        method: "get",
      });
      setCategories(response);
      setSelectedCategory(response[0].strCategory);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleChangeCategory = (category: string) =>
    setSelectedCategory(category);

  useEffect(() => {
    getCategories();
  }, []);

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
        keyExtractor={({ strCategory }) => strCategory}
        renderItem={({ item: { strCategory } }) => (
          <Chip
            style={{ margin: 10 }}
            mode="outlined"
            selectedColor={
              strCategory === selectedCategory
                ? customTheme.colors.primary
                : "black"
            }
            onPress={() => handleChangeCategory(strCategory)}
          >
            {strCategory}
          </Chip>
        )}
        horizontal
      />
    </View>
  );
};

export default CategoriesList;
