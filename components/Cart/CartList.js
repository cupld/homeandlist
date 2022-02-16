import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import cartStore from '../../stores/cartStore'
import CartItem from './CartItem'

const CartList = () => {
    const cartItems = cartStore.items.map((item) => (<CartItem item={item} key={item.product._id}/>));
  return (
    <View>
      <Text>CartList</Text>
      {cartItems}
    </View>
  );
};

export default CartList

const styles = StyleSheet.create({})