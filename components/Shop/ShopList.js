import { View, Text } from 'react-native'
import React from 'react'
import ShopItem from "./ShopItem"
import { observer } from 'mobx-react-lite'
import shopStore from '../stores/shopStore'

const ShopList = () => {
    const shops = shopStore.shops.map(shop =>(<ShopItem key={shop._id} shop={shop} />));
  return (
    <View>
      <Text>{shops}</Text>
    </View>
  )
}

export default observer(ShopList)