import { View, Text } from "react-native";
import React from "react";
// Libraries Call:
import { createStackNavigator } from "@react-navigation/stack";
// Components Call:
import Home from "../Home";
import ShopList from "../Shop/ShopList";
import ShopDetail from "../Shop/ShopDetail";
import CartList from "../Cart/CartList";
import CartIcon from "../Buttons/Cart";
import SignIn from "../Auth/SignIn";
import Signup from "../Auth/Signup";

const index = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#90d4ed",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: { backgroundColor: "yellow" },
        }}
      />
      <Screen
        name="Shops"
        component={ShopList}
        options={{ headerRight: () => <CartIcon /> }}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => ({ headerTitle: route.params.shop.name })}
      />
      {/* <Screen name="Products" component={ProductList}/> */}
      <Screen name="Cart" component={CartList} />
      <Screen name="signin" component={SignIn} />
      <Screen name="signup" component={Signup} />
    </Navigator>
  );
};

export default index;
