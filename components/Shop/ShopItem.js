import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native-svg'

const ShopItem = ({shop}) => {
  return (
    <View>
      <Text>{shop.name}</Text>
      <Image source={{uri: shop.Image}} />
    </View>
  )
}

export default ShopItem