
import * as actionTypes from '../actions/actionTypes'
const initialState={
    token:'', 
    user:null,
    isSigningUp:false,
SignUpSuccess:null, 
SignUpFailure:null, 
  isLogin:false,
LoginSuccess:null, 
LoginFailure:null,
};
function authReducer(state=initialState,action){
switch(action.type){
    case actionTypes.SET_TOKEN:
return {
...state,
token:action.payload.token
}; 
case actionTypes.SET_USER:
return {
...state,
token:action.payload.user

};
case actionTypes.SIGNUP_START:
    return{
...state, 
isSigningUp:true

    };
    case actionTypes.SIGNUP_SUCCESS:
        return{
...state,
isSigningUp:false,
SignUpSuccess:{}
        };
case actionTypes.SIGNUP_FAILURE:
return{
 ...state,
 isSigningUp:false, 
SignUpFailure:{}
            };
 case actionTypes.LOGIN_START:
return{
...state, 
isLogin:true

    };
    case actionTypes.LOGIN_SUCCESS:
return{
...state,
isLogin:false,
LoginSuccess:{}
        };
        case actionTypes.LOGIN_FAILURE:
            return{
                ...state,
                isLogin:false, 
                LoginFailure:{}
            }
default:
    return state;
    
}
}
export default authReducer;