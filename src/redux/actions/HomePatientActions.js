import axios from "axios";
import { BASE_URL, Token_Key2 } from "../../utls/constant";
import * as actionTypes from './actionTypes';
import AsyncStorage from "@react-native-async-storage/async-storage";
// export const setToken2 = (token) => ({
//   type: actionTypes.SET_TOKEN2,
//   payload: { token },
// });
axios.defaults.baseURL = BASE_URL;

const GetAllDoctorsStart = () => ({ type: actionTypes.AllDoctorsData_START });

const GetAllDoctorsSuccess = (data) => ({
  type: actionTypes.AllDoctorsData_SUCCESS,
  payload: data,
});

const GetAllDoctorsFailure = () => ({ type: actionTypes.AllDoctorsData_FAILURE });
const ScanStart=()=> ({type:actionTypes.SCAN_START})
const ScanStartSuccess=()=> ({type:actionTypes.SCAN_START_SUCCESS})
const ScanStartFailure=()=> ({type:actionTypes.SCAN_START_FAILURE,payload:{error}})
export const fetchDoctorsData = () => {
  return (dispatch, getState) => {
    dispatch(GetAllDoctorsStart());
    axios.get('/Patient/GetAllDoctors')
      .then(res => {
        if (res.status === 200) {
       //   console.log(res.data);
          dispatch(GetAllDoctorsSuccess(res.data)); 
        } else {
          dispatch(GetAllDoctorsFailure());
        }
      })
      .catch(err => {
        console.error('Doctors error: ' + err);
        dispatch(GetAllDoctorsFailure());
      });
  };
};

export const Scan = (formData) => {
  return (dispatch, getState) => {
    dispatch(ScanStart());
    axios.post('/api/Patient/RespondingToillness',formData,{
      headers: {
         'Content-Type' :'multipart/form-data',
      }
    })
      .then(res => {
        if (res.status === 200) {
          // AsyncStorage.getItem(Token_Key2).then(val=>{
          //   dispatch(setToken2(val));
          //     axios.defaults.headers.Authorization='Bearer '+val})
         console.log(res.data);
          dispatch(ScanStartSuccess()); 
        } else {
          dispatch(ScanStartFailure());
        }
      })
      .catch(err => {
        console.error('Scans error: ' + err);
        dispatch(ScanStartFailure());
      });
  };
};

// export default fetchDoctorsData;
