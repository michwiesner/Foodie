import { Text, Image, View } from "react-native";
import React from "react";
import { Portal, Modal, Button } from "react-native-paper";
import ProductCount from "./ProductCount";

const ProductModal = ({ visible, hideModal, product }) => {
  const containerStyle = {
    backgroundColor: "white",
    padding: 30,
    margin: 20,
    borderRadius: 10,
  };
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
        theme={{ colors: { backdrop: "rgba(0,0,0,0.5)" } }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 200, height: 200, flex: 3 }}
              source={{ uri: product.url }}
            />
            <Text style={{ flex: 3, padding: 20 }}>{product.name}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <ProductCount />
            <Button style={{ flex: 3 }} mode="contained">
              Add to cart
            </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default ProductModal;
