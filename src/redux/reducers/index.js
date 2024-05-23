import { combineReducers } from "redux";
import authReducer from "./authReducer";
import homePatientReducer from "./HomePatientReducers";
import { CLEAR_REDUX_DATA } from "../actions/actionTypes";


const rootReducer=combineReducers({auth:authReducer,
    homePatient:homePatientReducer
});
const appReducer=(state,action)=>{
if(action.type===CLEAR_REDUX_DATA){
    return rootReducer(undefined,action); 
}
   return rootReducer(state,action); 
}; 

export default appReducer;