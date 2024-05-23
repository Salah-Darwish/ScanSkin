import axios from "axios";
import { BASE_URL } from "../../utls/constant";
import * as actionTypes from './actionTypes';

axios.defaults.baseURL = BASE_URL;

const GetAllDoctorsStart = () => ({ type: actionTypes.AllDoctorsData_START });

const GetAllDoctorsSuccess = (data) => ({
  type: actionTypes.AllDoctorsData_SUCCESS,
  payload: data,
});

const GetAllDoctorsFailure = () => ({ type: actionTypes.AllDoctorsData_FAILURE });

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

export default fetchDoctorsData;
