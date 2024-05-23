import axios from "axios";
import {config} from 'api-request-biolerplate-actions'
import { Alert } from "react-native";
import { BASE_URL } from "./constant";
export const configureAxios = () => {
  axios.defaults.baseURL = BASE_URL;
};
export const shOWError =errorMessage=>{
Alert.alert(errorMessage)
}; 
export const configureApiRequestBoilerplateActions=()=>{
config(store.dispatch,BASE_URL)
}; 