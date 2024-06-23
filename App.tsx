import React, { useEffect } from 'react';
import { AppContainer } from './src/Navigation';
import { useDispatch,useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Token_Key,User_Key } from './src/utls/constant';
import axios from 'axios';
import { setToken ,setUser} from './src/redux/actions';

function App () {
  const dispatch=useDispatch(); 
    const user= useSelector(state=>state.auth.user);
    
const token=useSelector(state=> state.auth.token); 
  useEffect(()=>{
AsyncStorage.getItem(Token_Key).then(val=>{
dispatch(setToken(val));
axios.defaults.headers.Authorization='Bearer '+val;
}); 
AsyncStorage.getItem(User_Key).then(val=>{
  dispatch(setUser(val))
})
  },[token && user]);
  return(
token !== '' && <AppContainer isAuthenticated={!!token}  role={user}/>


  );
};

export default App;

