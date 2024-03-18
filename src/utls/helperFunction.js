import axios from "axios";
import { Alert } from "react-native";
import { BASE_URL } from "./constant";
export const configureAxios = () => {
  axios.defaults.baseURL = BASE_URL;
};
export const shOWError =errorMessage=>{
Alert.alert(errorMessage)
}; 