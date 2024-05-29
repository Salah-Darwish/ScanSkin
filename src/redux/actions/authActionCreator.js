import axios from 'axios';
import * as actionTypes from './actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Token_Key,Token_Key2,User_Key,BASE_URL} from '../../utls/constant'
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
axios.defaults.baseURL=BASE_URL;
const signUpStart = () => ({ type: actionTypes.SIGNUP_START });
const signUpSuccess = () => ({ type: actionTypes.SIGNUP_SUCCESS });
const signUpFailure = (error) => ({ type: actionTypes.SIGNUP_FAILURE, payload: { error } });

const LoginStart = () => ({ type: actionTypes.LOGIN_START });
const LoginSuccess = () => ({ type: actionTypes.LOGIN_SUCCESS});
const LoginFailure = (error) => ({ type: actionTypes.LOGIN_FAILURE, payload: { error } });

const ForgetPasswordStart=()=>({type:actionTypes.FORGETPASSWORD_START}); 
const ForgetPasswordSuccess=()=>({type:actionTypes.FORGETPASSWORD_SUCCESS}); 
const ForgetPasswordFailure=()=>({type:actionTypes.FORGETPASSWORD_FAILURE,payload:{error}});

const ResetPasswordStart=()=>({type:actionTypes.RESETPASSWORD_START}); 
const ResetPasswordSuccess=()=>({type:actionTypes.RESETPASSWORD_SUCCESS}); 
const ResetPasswordFailure=()=>({type:actionTypes.RESETPASSWORD_FAILURE,payload:{error}});

const RulesStart = () => ({ type: actionTypes.RULES_START });
const RulesSuccess = (data) => ({ type: actionTypes.RULES_SUCCESS, payload:data});
const RulesFailure = (error) => ({ type: actionTypes.RULES_FAILURE, payload: { error } });

const ConfirmStart = () => ({ type: actionTypes.CONFIRM_START });
const ConfirmSuccess = () => ({ type: actionTypes.CONFIRM_SUCCESS});
const ConfirmFailure = (error) => ({ type: actionTypes.CONFIRM_FAILURE, payload: { error } });

const RulesDoctorStart=()=>({type:actionTypes.RULESDOCTOR_START}); 
const RulesDoctorSuccess=()=>({type:actionTypes.RULESDOCTOR_SUCCESS}); 
const RulesDoctorFailure=()=>({type:actionTypes.RULESDOCTOR_FAILURE,payload:{error}}); 


const RulesPatientStart=()=>({type:actionTypes.RULESPATIENT_START}); 
const RulesPatientSuccess=()=>({type:actionTypes.RULESPATIENT_SUCCESS}); 
const RulesPatientFailure=()=>({type:actionTypes.RULESPATIENT_FAILURE,payload:{error}}); 


const ResndCodeStart=()=>({type:actionTypes.RESWNDCODE_START});
const ResndCodeSuccess=()=>({type:actionTypes.RESENDCODE_SUCCESS});
const ResendCodeFailure=()=>({type:actionTypes.RESENDCODE_FAILURE});



export const signUp = (displayName, email, phoneNumber, password, confirmPassword) => {
  return (dispatch, getState) => {
    dispatch(signUpStart());
    axios
    .post(`/Account/Register`, { displayName, email, phoneNumber, password, confirmPassword }
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
      .post(`/Account/Login`, { email, password, rememberMe  }
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
            const {role}=res.data; 
    dispatch(setUser(role))
    AsyncStorage.setItem(User_Key,role)
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
    axios.post('/SetDataForDoctorAndUser/SetRole',{role}
  ).then(res=>{
    if(res.status===200){
       AsyncStorage.getItem(Token_Key2).then(val=>{
    dispatch(setToken2(val));
      axios.defaults.headers.Authorization='Bearer '+val});
      console.log('Rules Successful:',res.data);
    dispatch(RulesSuccess(res.data));
  
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

export const Forgetpassword=(email)=>{
return(dispatch,getState)=>{
  dispatch(ForgetPasswordStart()); 
  axios.post('/Account/forgotPassword',{email})
  .then(res=>{
    if(res.status===200){
       AsyncStorage.getItem(Token_Key2).then(val=>{
    dispatch(setToken2(val));
      axios.defaults.headers.Authorization='Bearer '+val});
      console.log('Forget Password Successful: ',res.data);
dispatch(ForgetPasswordSuccess()); 
    }
    else{
      dispatch(ForgetPasswordFailure('Forget Password Failed :Invalid response status ')); 
    }
  })
  .catch(err=>{
    dispatch(ForgetPasswordFailure(err.message || 'Forget password failed')); 
    console.error('Forget password failed : ',err);
  }); 
}
}


export const Resetpassword=(newPassword,confirmPassword)=>{
return(dispatch,getState)=>{
  dispatch(ResetPasswordStart()); 
  axios.post('/Account/resetPassword',{newPassword,confirmPassword})
  .then(res=>{
    if(res.status===200){
       AsyncStorage.getItem(Token_Key2).then(val=>{
    dispatch(setToken2(val));
      axios.defaults.headers.Authorization='Bearer '+val});
      console.log('Reset Password Successful: ',res.data);
dispatch(ResetPasswordSuccess()); 
    }
    else{
      dispatch(ResetPasswordFailure('Reset Password Failed :Invalid response status ')); 
    }
  })
  .catch(err=>{
    dispatch(ResetPasswordFailure(err.message || 'Reset assword failed')); 
    console.error('Reset password failed : ',err);
  }); 
}
}



export const ConfirmCode=(confirmationCode)=>{
return (dispatch,getState)=>{
  dispatch(ConfirmStart()); 
  axios.post(`/Account/confirm`,{confirmationCode}).then(res=>{
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


export const ResendCode=()=>{
  return(dispatch,getState)=>{
    dispatch(ResndCodeStart()); 
    axios.post('/Account/ResendCode').then(res=>{
      if(res===200){
        AsyncStorage.getItem(Token_Key2).then(val=>{
          dispatch(setToken2(val)); 
          axios.defaults.headers.Authorization='Bearer '+val
        }); 
        dispatch(ResndCodeSuccess()); 
      }
      else{
        dispatch(ResendCodeFailure('Confirmation ResendCode Failed : Invalid response status'))
      }
    }).catch(err=>{
      dispatch(ResendCodeFailure(err.message||'Confirm ResendCode failed')); 
      console.error('Confirm Resend error ', err);
    })
    }
}

export const Rules_Doctor=(formData)=>{
  return(dispatch,getState)=>{
    dispatch(RulesDoctorStart()); 
    axios.post('/SetDataForDoctorAndUser/SetData/Doctor',formData,{
     headers:{
        'Content-Type': 'multipart/form-data',
      }
    }).then(res=>{
      if(res.status===200){ 
        AsyncStorage.getItem(Token_Key2).then(val=>{
    dispatch(setToken2(val));
      axios.defaults.headers.Authorization='Bearer '+val});
      console.log('RulesDoctor Successful:',res.data);
dispatch(RulesDoctorSuccess())
      }
else{
  dispatch(RulesDoctorFailure('RulesDoctor Failed : Invalid response status'))
}
    })
    .catch(err=>{
      dispatch(RulesDoctorFailure(err.message || 'RulesDoctor Failed')); 
       console.error('RulesDoctor error:', err);
    });

      }
}

export const Rules_Patient = (formData) => {
  return (dispatch, getState) => {
    dispatch(RulesPatientStart());

    // Make the axios POST request with multipart/form-data
    axios.post('/SetDataForDoctorAndUser/SetData', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(res => {
      if (res.status === 200) {
        AsyncStorage.getItem(Token_Key2).then(val => {
          dispatch(setToken2(val));
          axios.defaults.headers.Authorization = 'Bearer ' + val;
        });

        console.log('RulesPatient Successful:', res.data);
        dispatch(RulesPatientSuccess());
      } else {
        dispatch(RulesPatientFailure('RulesPatient Failed : Invalid response status'));
      }
    })
    .catch(err => {
      dispatch(RulesPatientFailure(err.message || 'RulesPatient Failed'));
      console.error('RulesPatient error:', err);
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





