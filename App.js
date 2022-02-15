import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
// import Home from './components/Home';
import ShopList from './components/Shop/ShopList';
// import ShopDetail from './components/Shop/ShopDetail';

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
      {/* <Home/> */}
      <ShopList/>
      {/* <ShopDetail/> */}
      </View>
    </NativeBaseProvider>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Home/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
