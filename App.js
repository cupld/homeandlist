import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
//components Call:
// import Home from './components/Home';
// import ShopDetail from './components/Shop/ShopDetail';
// import ShopList from './components/Shop/ShopList';
//Navigator Call:
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./components/Navigation";

export default function App() {
  return (
    <NativeBaseProvider style={styles.container}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
