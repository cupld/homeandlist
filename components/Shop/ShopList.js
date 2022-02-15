import { View, Text } from 'react-native'
import React from 'react'
import ShopItem from "./ShopItem"
import { observer } from 'mobx-react-lite'
import shopStore from '../../stores/shopStore'

const ShopList = () => {
    const shops = shopStore.shops.map(shop =>(<ShopItem key={shop._id} shop={shop} />));
    console.log("🚀 ~ file: ShopList.js ~ line 9 ~ ShopList ~ shops", shops)
  return (
    <View>
      <Text>{shops}</Text>
    </View>
  )
}

export default observer(ShopList)