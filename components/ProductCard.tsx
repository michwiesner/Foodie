import React, { useState } from "react";
import { Modal, View } from "react-native";
import { Avatar, Button, Card, Portal, Text } from "react-native-paper";
import ProductModal from "./ProductModal";

const ProductCard = ({ item, index }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <>
      <ProductModal visible={visible} hideModal={hideModal} product={item} />
      <View
        style={{
          flex: 1,
          margin: 10,
        }}
      >
        <Card elevation={0}>
          <Card.Cover source={{ uri: item.url }} />
          <Card.Content>
            <Text variant="titleLarge">{item.name}</Text>
            <Text variant="bodyMedium">Card content</Text>
            <Button
              mode="contained"
              style={{ marginTop: 10 }}
              onPress={showModal}
            >
              Add to cart
            </Button>
          </Card.Content>
        </Card>
      </View>
    </>
  );
};

export default ProductCard;
