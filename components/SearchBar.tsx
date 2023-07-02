import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query: any) => setSearchQuery(query);

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};

export default SearchBar;
