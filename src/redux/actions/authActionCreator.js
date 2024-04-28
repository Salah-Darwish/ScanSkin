import axios from 'axios';
import * as actionTypes from './actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Token_Key,Token_Key2,User_Key} from '../../utls/constant'
export const setToken = (token) => ({
  type: actionTypes.SET_TOKEN,
  payload: { token },
});
export const setToken2 = (token) => ({
  type: actionTypes.SET_TOKEN2,
  payload: { token },
});
export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  payload: { user },
});
export const clearReduxData=()=>({type:actionTypes.CLEAR_REDUX_DATA});
const signUpStart = () => ({ type: actionTypes.SIGNUP_START });
const signUpSuccess = () => ({ type: actionTypes.SIGNUP_SUCCESS });
const signUpFailure = (error) => ({ type: actionTypes.SIGNUP_FAILURE, payload: { error } });

const LoginStart = () => ({ type: actionTypes.LOGIN_START });
const LoginSuccess = () => ({ type: actionTypes.LOGIN_SUCCESS});
const LoginFailure = (error) => ({ type: actionTypes.LOGIN_FAILURE, payload: { error } });

const RulesStart = () => ({ type: actionTypes.RULES_START });
const RulesSuccess = () => ({ type: actionTypes.RULES_SUCCESS});
const RulesFailure = (error) => ({ type: actionTypes.RULES_FAILURE, payload: { error } });

const ConfirmStart = () => ({ type: actionTypes.CONFIRM_START });
const ConfirmSuccess = () => ({ type: actionTypes.CONFIRM_SUCCESS});
const ConfirmFailure = (error) => ({ type: actionTypes.CONFIRM_FAILURE, payload: { error } });


const RulesDoctorStart = () => ({ type: actionTypes.RULESDOCTOR_START });
const RulesDoctorSuccess = () => ({ type: actionTypes.RULESDOCTOR_SUCCESS});
const RulesDoctorFailure = (error) => ({ type: actionTypes.RULESDOCTOR_FAILURE, payload: { error } });

export const signUp = (displayName, email, phoneNumber, password, confirmPassword) => {
  return (dispatch, getState) => {
    dispatch(signUpStart());
    axios
    .post(`http://skanskinapp.runasp.net/api/Account/Register`, { displayName, email, phoneNumber, password, confirmPassword }
    )
      .then((res) => {
        dispatch(signUpSuccess());
        console.log('Signup successful:', res.data);
          const { token } = res.data;
          const bearerToken = `Bearer ${token}`;
          axios.defaults.headers.Authorization = bearerToken;
          dispatch(setToken2(token));
           AsyncStorage.setItem(Token_Key2, token);
       
      })
      .catch((err) => {
        dispatch(signUpFailure(err.message || 'Signup failed'));
        console.error('Signup error:', err);
      });
  };
};
export const LoginIn = (email, password, rememberMe) => {
  return (dispatch, getState) => {
    dispatch(LoginStart());
    axios
      .post(`http://skanskinapp.runasp.net/api/Account/Login`, { email, password, rememberMe  }
      )
      .then(res => {
        if (res.status === 200) {
          console.log('Login successful:', res.data);
          const { token } = res.data;
          const bearerToken = `Bearer ${token}`;
          axios.defaults.headers.Authorization = bearerToken;
          dispatch(setToken(token));
      //    dispatch(setUser(userData));
          AsyncStorage.setItem(Token_Key, token);
         // AsyncStorage.setItem(User_Key, JSON.stringify(userData));
          dispatch(LoginSuccess());
        } else {
          dispatch(LoginFailure('Login failed: Invalid response status'));
        }
      })
      .catch(err => {
        dispatch(LoginFailure(err.message || 'Login failed'));
        console.error('Login error:', err);
      });
  };
};

export const SetRules=(role)=>{
  return(dispatch,getState)=>{
    dispatch(RulesStart());
    axios.post('http://skanskinapp.runasp.net/api/SetDataForDoctorAndUser/SetRole',{role}
  ).then(res=>{
    if(res.status===200){
       AsyncStorage.getItem(Token_Key2).then(val=>{
    dispatch(setToken2(val));
      axios.defaults.headers.Authorization='Bearer '+val});
      console.log('Rules Successful:',res.data);
    dispatch(RulesSuccess());
    }
    else{
       dispatch(  RulesFailure('Rules failed: Invalid response status'));
    }
  })
    .catch(err => {
        dispatch(RulesFailure(err.message || 'Rules failed'));
        console.error('Rules error:', err);
      });
  }

}
export const ConfirmCode=(confirmationCode)=>{
return (dispatch,getState)=>{
  dispatch(ConfirmStart()); 
  axios.post(`http://skanskinapp.runasp.net/api/Account/confirm`,{confirmationCode}).then(res=>{
    if(res.status===200){
      AsyncStorage.getItem(Token_Key2).then(val=>{
    dispatch(setToken2(val));
      axios.defaults.headers.Authorization='Bearer '+val});
      console.log('Confirmation successful : ',res.data);
       dispatch(ConfirmSuccess()); 
    }
    else{
      dispatch(ConfirmFailure('Confirmation Code Failed : Invalid response status')); 
    }
  })
  .catch(err=>{
    dispatch(ConfirmFailure(err.message || 'Confirm Code failed')); 
    console.error('Confirm error ', err);
  })
}
}

export const DoctorRules = (
  Experience,
  Price,
  AddressLocation,
  AddressDescription,
  Speciality,
  StartDay,
  EndDay
) => {
  return (dispatch, getState) => {
    dispatch(RulesDoctorStart());
    axios
      .post(
        'http://skanskinapp.runasp.net/api/SetDataForDoctorAndUser/SetData/Doctor',
        {
          Experience,
          Price,
          AddressLocation,
          AddressDescription,
          Speciality,
          StartDay,
          EndDay,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          AsyncStorage.getItem(Token_Key2)
            .then((val) => {
              console.log('Token from AsyncStorage:', val);
              dispatch(setToken2(val));
              axios.defaults.headers.Authorization = 'Bearer ' + val;
            })
            .catch((asyncErr) => {
              console.error('AsyncStorage Error:', asyncErr);
              dispatch(RulesDoctorFailure(asyncErr.message || 'AsyncStorage error'));
            });

          console.log('Rules Doctor Success:', res.data);
          dispatch(RulesDoctorSuccess());
        } else {
          dispatch(RulesDoctorFailure('RulesDoctor Failed: Invalid response status'));
        }
      })
      .catch((err) => {
        console.error('Rules Doctor error:', err);
        dispatch(RulesDoctorFailure(err.message || 'Rules Doctor failed'));
      });
  };
};

export const LogOut=()=>{
  return(dispatch,getState)=>{
    axios.defaults.headers.Authorization=undefined;
    AsyncStorage.clear(); 
    dispatch(clearReduxData());
  }; 
}





