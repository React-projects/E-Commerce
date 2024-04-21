import axios from "axios";

const baseUrl = axios.create({
  baseUrl: "https://dummyjson.com/products",
});

export default baseUrl