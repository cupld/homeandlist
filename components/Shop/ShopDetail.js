import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import shopStore from '../../stores/shopStore'
import { Image } from 'react-native-svg';
import { baseURL } from '../../stores/api';
import ProductList from '../Product/ProductList';
import { Spinner } from 'native-base';

const ShopDetail = () => {
  if (shopStore.loading) return <SafeAreaView><Spinner/></SafeAreaView> 
  const shop=shopStore.shops[0];
  const types = shop.type.map((_type) => <Text key={_type}>{_type}</Text>);
  
  return (
    <SafeAreaView>
    <View>
      <Text>{shop.name}</Text>
      <Image source={{uri: baseURL + shop.image}} />
      <ProductList products={shop.products} />
    </View>
    </SafeAreaView>
  )
}

export default ShopDetail