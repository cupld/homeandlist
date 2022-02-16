import { View, Text } from 'react-native'
import React from 'react'
//import Libraries:
import { useNavigation } from '@react-navigation/native'
import { Button } from 'native-base';
import FontistoIcon from "react-native-vector-icons/Fontisto";


const CartIcon = () => {
    const navigation = useNavigation();
  return (
    <FontistoIcon name='opencart' size={30} color="white" onPress={() => navigation.navigate("Cart")} />
  )
}

export default CartIcon;