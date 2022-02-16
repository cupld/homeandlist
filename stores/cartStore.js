import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

class CartStore {
  constructor() {
    makeAutoObservable(this);
  }
  items = [
    {
      product: {
        _id: "6182a8b31bd7fa38942fdf23",
        name: "Cookie",
        price: 5,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 5,
    },
    {
      product: {
        _id: "6182a8b31bd7fa46652fdf88",
        name: "Another cookie",
        price: 15,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 3,
    },
  ];

  fetchCart = async () => {
    try {
      const cart = await AsyncStorage.getItem("cart");
      this.items = cart ? JSON.parse(cart) : [];
    } catch (error) {
      console.log(error);
    }
  };

  addItemToCart = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.product._id === newItem.product._id
    );
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);
    const stringfiedCart = JSON.stringify(this.item);
    await AsyncStorage.setItem("cart", stringfiedCart);
  };

  removeItemFromCart = async (productId) => {
    try {
      this.items = this.items.filter((item) => item.product._id !== productId);
      const stringfiedCart = JSON.stringify(this.item);
      await AsyncStorage.setItem("cart", stringfiedCart);
    } catch (error) {
      console.log(error);
    }
  };
  checkout = async () => {
    try {
      await AsyncStorage.setItem("cart");
      this.items = [];
    } catch (error) {
      console.log(error);
    }
  };
}

const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
