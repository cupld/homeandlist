import { View, Text, Pressable ,StyleSheet, Image } from 'react-native'
import React from 'react'

const ShopItem = ({shop , navigation}) => {
  return (
    <View>
      <Pressable onPress={() =>navigation.navigate("ShopDetail")}>

      <Text style={styles.shopDetailTitle}>{shop.name}</Text>
      <Image style={{width: 150, height: 150}} source={{uri: shop.image}} />
      </Pressable>
    </View>
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