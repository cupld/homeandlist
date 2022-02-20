import { observer } from "mobx-react";
import React from "react";
//stores call:
import cartStore from "../../stores/cartStore";
import CartItem from "./CartItem";
import authStore from "../../stores/authStore";
//libraries call:
import { Button, VStack } from "native-base";
import { StyleSheet, Text, View } from "react-native";

const CartList = ({ navigation }) => {
  const cartItems = cartStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} />
  ));
  console.log(
    "🚀 ~ file: CartList.js ~ line 13 ~ CartList ~ cartStore.items",
    cartStore.items
  );
  const handleCheckout = () => {
    if (authStore.user) {
      cartStore.checkout();
    } else {
      Alert.alert("You are not signed in", "sign in to ocntinue", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => navigation.navigate("signin") },
      ]);
    }
  };
  return (
    <View>
      <Text>CartList</Text>
      <VStack space={3}>{cartItems}</VStack>
      <Button onPress={handleCheckout}>checkout</Button>
    </View>
  );
};

export default observer(CartList);

const styles = StyleSheet.create({});
