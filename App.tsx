import React, { useEffect } from 'react';
import { AppContainer } from './src/Navigation';
import { useDispatch,useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Token_Key,User_Key } from './src/utls/constant';
import ConfirmationCode from './src/screens/ConfirmationCode';
import axios from 'axios';
import { setToken ,setUser} from './src/redux/actions';
import RulesDoctor from './src/screens/RulesDoctor';
import SplachScreen from './src/screens/Splach';
function App (props) {
  const dispatch=useDispatch(); 
const token=useSelector(state=> state.auth.token); 
  useEffect(()=>{
AsyncStorage.getItem(Token_Key).then(val=>{
dispatch(setToken(val));
axios.defaults.headers.Authorization='Bearer '+val;
}); 
  },[token]);
  return(
    // <SplachScreen/>
     token !== '' && <AppContainer isAuthenticated={!!token} />
    //<RulesDoctor/>
    // <ConfirmationCode/>
  );
};

export default App;

