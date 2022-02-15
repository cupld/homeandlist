import { View, Text , StyleSheet } from 'react-native'
import React from 'react'

const ProductItem = () => {
  return (
    <View>
      <Image style={styles.shopDetailImage} source={{uri: baseURL + product.image}}></Image>
      <Text style={styles.shopDetailTitle}>{product.name}</Text>
    </View>
  )
}

export default ProductItem

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