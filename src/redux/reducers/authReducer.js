
import * as actionTypes from '../actions/actionTypes'
const initialState={
    token:'', 
    user:'',
    isSigningUp:false,
SignUpSuccess:null, 
SignUpFailure:null, 
  isLogin:false,
LoginSuccess:null, 
LoginFailure:null,
isForgetpassword:false, 
ForgetpasswordSuccess:null, 
ForgetpasswordFailure:null, 
isResetpassword:false, 
ResetpasswordSuccess:null, 
ResetpasswordFailure:null, 
Rules:false, 
RulesSuccess:null, 
RulesFailure:null, 
isConfirmCode:false, 
ConfirmSuccess:null, 
ConfirmFailure:null, 
isResendCode:false,   
ResendCodeSuccess:null, 
ResendCodeFailure:null, 
isRulesDoctor:false, 
RulesDoctorSuccess:null,   
RulesDoctorFailure:null,   
isRulesPatient:false, 
RulesPatientSuccess:null,   
RulesPatientFailure:null,  

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
user:action.payload.user
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
            case actionTypes.FORGETPASSWORD_START:
return{
...state, 
isForgetpassword:true

    };
    case actionTypes.FORGETPASSWORD_SUCCESS:
return{
...state,
isForgetpassword:false,
ForgetpasswordSuccess:{}
        };
        case actionTypes.FORGETPASSWORD_FAILURE:
            return{
                ...state,
                isForgetpassword:false, 
                ForgetpasswordFailure:{}
            };
              case actionTypes.RESETPASSWORD_START:
return{
...state, 
isResetpassword:true

    };
    case actionTypes.RESETPASSWORD_SUCCESS:
return{
...state,
isResetpassword:false,
ResetpasswordSuccess:{}
        };
        case actionTypes.RESETPASSWORD_FAILURE:
            return{
                ...state,
                isResetpassword:false, 
                ResetpasswordFailure:{}
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
RulesSuccess:action.payload
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

                 case actionTypes.RESWNDCODE_START:
    return{
...state, 
isResendCode:true

    };
    case actionTypes.RESENDCODE_SUCCESS:
        return{
...state,
isResendCode:false,
ResendCodeSuccess:{}
        };
case actionTypes.RESENDCODE_FAILURE:
return{
 ...state,
 isResendCode:false, 
ResendCodeFailure:{}
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

  case actionTypes.RULESPATIENT_START:
    return{
...state, 
isRulesPatient:true

    };
    case actionTypes.RULESPATIENT_SUCCESS:
        return{
...state,
isRulesPatient:false,
RulesPatientSuccess:{}
        };
case actionTypes.RULESPATIENT_FAILURE:
return{
 ...state,
 isRulesPatient:false, 
RulesPatientFailure:{}
            };

default:
    return state;
    
}
}
export default authReducer;