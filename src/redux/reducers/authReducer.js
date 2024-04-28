
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
Rules:false, 
RulesSuccess:null, 
RulesFailure:null, 
isConfirmCode:false, 
ConfirmSuccess:null, 
ConfirmFailure:null, 
isRulesDoctor:false, 
RulesDoctorSuccess:null, 
RulesDoctorFailure:null, 

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
            };
            case actionTypes.RULES_START:
    return{
...state, 
Rules:true

    };
    case actionTypes.RULES_SUCCESS:
        return{
...state,
Rules:false,
RulesSuccess:{}
        };
case actionTypes.RULES_FAILURE:
return{
 ...state,
 Rules:false, 
RulesFailure:{}
            }; 
              case actionTypes.CONFIRM_START:
    return{
...state, 
isConfirmCode:true

    };
    case actionTypes.CONFIRM_SUCCESS:
        return{
...state,
isConfirmCode:false,
ConfirmSuccess:{}
        };
case actionTypes.CONFIRM_FAILURE:
return{
 ...state,
 isConfirmCode:false, 
ConfirmFailure:{}
            };
                case actionTypes.RULESDOCTOR_START:
    return{
...state, 
isRulesDoctor:true

    };
    case actionTypes.RULESDOCTOR_SUCCESS:
        return{
...state,
isRulesDoctor:false,
RulesDoctorSuccess:{}
        };
case actionTypes.RULESDOCTOR_FAILURE:
return{
 ...state,
 isRulesDoctor:false, 
RulesDoctorFailure:{}
            };
default:
    return state;
    
}
}
export default authReducer;