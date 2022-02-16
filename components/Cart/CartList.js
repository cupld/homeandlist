import { StyleSheet, Text, View } from "react-native";
import React from "react";
import cartStore from "../../stores/cartStore";
import CartItem from "./CartItem";
import { observer } from "mobx-react";
import { Button, VStack } from "native-base";

const CartList = () => {
  const cartItems = cartStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} />
  ));
  return (
    <View>
      <Text>CartList</Text>
      <VStack space={3}>{cartItems}</VStack>
      <Button onPress={cartStore.checkout}>checkout</Button>
    </View>
  );
};

export default observer(CartItem);

const styles = StyleSheet.create({});
