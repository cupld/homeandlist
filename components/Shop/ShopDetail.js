import React from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import shopStore from '../../stores/shopStore'
import { baseURL } from '../../stores/api';
import ProductList from '../Product/ProductList';
import { Spinner } from 'native-base';

const ShopDetail = ({navigation , route}) => {
  if (shopStore.loading) return <SafeAreaView><Spinner/></SafeAreaView> 
  // const shop=shopStore.shops[0];
  const shop = route.params.shop;
  console.log("🚀 ~ file: ShopDetail.js ~ line 11 ~ ShopDetail ~ shop", shop)
  const types = shop.type.map((_type) => <Text key={_type}>{_type}</Text>);
  
  return (
    <SafeAreaView>
    <View>
      <Text style={styles.shopDetailTitle}>{shop.name}</Text>
      <Image style={styles.shopDetailImage} source={{uri: shop.image}} />
      <ProductList products={shop.products}/>
    </View>
    </SafeAreaView>
  )
}

export default ShopDetail

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