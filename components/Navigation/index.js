import { View, Text } from 'react-native'
import React from 'react'
// Libraries Call:
import { createStackNavigator } from '@react-navigation/stack'
// Components Call:
import Home from "../Home"
import ShopList from "../Shop/ShopList"
import ProductList from '../Product/ProductList'



const index = () => {
    const { Navigator , Screen } = createStackNavigator();
  return (
      <Navigator>
          <Screen name="Home" component={Home} />
          <Screen name="Shops" component={ShopList}/>
          <Screen name="Products" component={ProductList}/>
      </Navigator>
  )
}

export default index