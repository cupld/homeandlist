import { View, Text } from "react-native";
import React, { useState } from "react";
//import libraries:
import { Avatar, HStack, VStack, Wrap, Button, Toast } from "native-base";
//import store:
import cartStore from "../../stores/cartStore";
import Icon from "react-native-vector-icons/EvilIcons";

const CartItem = ({ item }) => {
  const handleAdd = () => {
    const newItem = { quantity, item };
    cartStore.addItemToCart(newItem);
  };
  const handleRemove = () => {
    cartStore.removeItemFromCart(item.product._id);
    Toast.show({
      title: `${item.product.name} deleted`,
      status: "info",
    });
  };
  return (
    <HStack>
      <Wrap spacing={10} align="center" direction="row">
        <Avatar source={{ uri: item.product.image }} />
        <VStack>
          <Text>{item.product.name}</Text>
          <Text>quantity: {item.quantity}</Text>
          <Text>Price: {item.product.price}</Text>
          <Text>total: {item.quantity * item.product.price} KD</Text>
        </VStack>
        <Button onPress={handleAdd}>Add</Button>
        <Icon size="30" name="trash" onPress={() => handleRemove} />
      </Wrap>
    </HStack>
  );
};

export default CartItem;
