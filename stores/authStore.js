import { makeAutoObservable, observable, action } from "mobx";
import axios from "axios";
import api from "./api";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this, {});
  }

  setUser = (token) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
    localStorage.setItem("myToken", token);
  };

  signUp = async (user, navigation, toast) => {
    try {
      const response = await api.post("/signup", user);
      this.setUser(response.data.token);
      navigation.navigate("Cart");
    } catch (error) {
      toast.show;
      ({
        title: "Invalid username or password",
        status: "danger",
      });
    }
  };
  signIn = async (user) => {
    try {
      const response = await api.post("/signin", user);
      this.setUser(response.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  logout = () => {
    try {
      this.user = null;
      delete api.defaults.headers.common.Authorization;
      localStorage.removeItem("myToken");
    } catch (error) {
      console.log(error);
    }
  };

  checkForToken = () => {
    const token = localStorage.getItem("MyToken");
    if (token) {
      const currentTime = Date.now();
      let user = decode(token);
      if (user.exp > currentTime) {
        this.setUser(token);
      } else {
        alert("Logged out");
        this.logout();
      }
    } else {
      this.logout();
    }
  };
}
const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
