import axios from 'axios';
import * as actionTypes from './actionTypes';
import { basicAuth } from '../../utls/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Token_Key,User_Key} from '../../utls/constant'
export const setToken = (token) => ({
  type: actionTypes.SET_TOKEN,
  payload: { token },
});

export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  payload: { user },
});

const signUpStart = () => ({ type: actionTypes.SIGNUP_START });
const signUpSuccess = () => ({ type: actionTypes.SIGNUP_SUCCESS });
const signUpFailure = (error) => ({ type: actionTypes.SIGNUP_FAILURE, payload: { error } });

const LoginStart = () => ({ type: actionTypes.LOGIN_START });
const LoginSuccess = () => ({ type: actionTypes.LOGIN_SUCCESS});
const LoginFailure = (error) => ({ type: actionTypes.LOGIN_FAILURE, payload: { error } });

export const signUp = (displayName, email, phoneNumber, password, confirmPassword) => {
  return (dispatch, getState) => {
    dispatch(signUpStart());
    axios
    .post(`http://mahmoudeltab-001-site1.etempurl.com/api/Account/Register`, { displayName, email, phoneNumber, password, confirmPassword },{
     headers: {
            Authorization: basicAuth,
          }, 
    })
      .then((res) => {
        dispatch(signUpSuccess());
        console.log('Signup successful:', res.data);
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
      .post(`http://mahmoudeltab-001-site1.etempurl.com/api/Account/Login`, { email, password, rememberMe },
      {
        headers:{
          Authorization:basicAuth, 
        }
      }
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



