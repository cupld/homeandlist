import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import cartStore from "../../stores/cartStore";
import NumericInput from "react-native-numeric-input";
import { Card, Toast, useToast } from "native-base";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [] = useToast();
  const handleQuantity = (value) => setQuantity(value);

  const handleAdd = () => {
    const item = {
      product: product,
      quantity: quantity,
    };
    cartStore.addItemToCart(item);
    Toast.show({
      title: `${product.name} added succesfully`,
      status: "success",
      description: `${quantity} pc(s)`,
    });
    setQuantity(1);
  };

  return (
    <View>
      <Image
        style={styles.shopDetailImage}
        source={{ uri: baseURL + product.image }}
      ></Image>
      <Text style={styles.shopDetailTitle}>{product.name}</Text>
      <NumericInput
        rounded
        initValue={quantity}
        value={quantity}
        onChange={(value) => handleQuantity}
        totalHeight={30}
        totalWidth={60}
      />
      <Button onPress={handleAdd}>Add</Button>
    </View>
  );
};

export default ProductItem;

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
