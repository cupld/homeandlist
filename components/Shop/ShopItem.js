import { View, Text, Pressable ,StyleSheet , Image } from 'react-native'
import { HStack } from 'native-base'
import React from 'react'


const ShopItem = ({shop , navigation}) => {
  return (
      <Pressable onPress={() => navigation.navigate("ShopDetail", {shop: shop})}>
      <HStack w="100%" alignItems="center">
      <Text style={styles.shopDetailTitle}>{shop.name}</Text>
      <Image style={{width: 150, height: 150}} source={{uri: shop.image}} />
      </HStack>
      </Pressable>
  )
}

export default ShopItem

const styles = StyleSheet.create({
  // shopDetailWrapper: {
  //   marginTop: 50,
  // },
  shopDetailImage: {
    width: 150,
    height: 150,
  },
  shopDetailTitle: {
    fontWeight: "bold",
    fontSize: 40,
  },
});