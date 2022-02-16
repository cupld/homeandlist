import { View, Text } from 'react-native'
import React from 'react'
import ShopItem from "./ShopItem"
import { observer } from 'mobx-react-lite'
import shopStore from '../../stores/shopStore'
import { Box, Center, Heading, VStack } from 'native-base'

const ShopList = ({navigation}) => {
    const shops = shopStore.shops.map(shop =>(<ShopItem key={shop._id} shop={shop} navigation={navigation} />));


  return (
    <Center w="100%">
      <Box maxW="300" w="100%">
        <Heading mb="2" size="md">
          Shops
        </Heading>
        <VStack space={4}>
          <VStack space={2}>{shops}</VStack>
        </VStack>
      </Box>
    </Center>
  )
}

export default observer(ShopList)