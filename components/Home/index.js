import React from 'react'
import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import { Button } from "native-base";
import { observer } from 'mobx-react-lite';

const Home = ({ navigation }) => {

  return (
    <ImageBackground
  style={{ flex: 1, width: "100%", height: "100%" }}
  source={{
    uri:
      "https://annabanana.co/wp-content/uploads/2020/03/Chocolate-Chip-Cookies-22.jpg",
  }}
>
  <View
    style={{ height: "40%", alignItems: "center", justifyContent: "center" }}
  >
    <Text style={{ color: "#fff", fontSize: "38px", textAlign: "center" }}>
      Shops
    </Text>
  </View>
  <Button size={"lg"} onPress={() => navigation.navigate("Shops")}>Shop List</Button>
</ImageBackground>

  )
}

export default observer(Home)
