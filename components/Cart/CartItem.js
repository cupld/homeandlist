import { View, Text } from 'react-native'
import React from 'react'
import { Avatar, HStack } from 'native-base'

const CartItem = ({ item }) => {
  return (
      <HStack>
    <Avatar source={{uri: item.product.image}}/>
      <Text>{item.product.name}</Text>
      <Text>{item.product.price}</Text>
      </HStack>

  )
}

export default CartItem