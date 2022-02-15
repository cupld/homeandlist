import axios from "axios";
import { makeAutoObservable } from "mobx";
import api from "../stores/api";

class ShopStore {
  constructor() {
    makeAutoObservable(this);
  }
  shops = [];
  loading = true;

  fetchShops = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/shops");
      this.shops = res.data;
      console.log("🚀 ~ file: shopStore.js ~ line 15 ~ ShopStore ~ fetchShops= ~ res.data", res.data)
      this.loading = false;
    } catch (error) {
      console.log(
        "🚀 ~ file: shopStore.js ~ line 15 ~ ShopStore ~ fetchShops= ~ error",
        error
      );
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();
export default shopStore;