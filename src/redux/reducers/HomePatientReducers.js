import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isAllDoctorsData: false,
    DoctorsDataSuccess: [],
    DoctorsDataFailure: null,
};

function homePatientReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.AllDoctorsData_START:
            return {
                ...state,
                isAllDoctorsData: true,
            };
        case actionTypes.AllDoctorsData_SUCCESS:
            return {
                ...state,
                isAllDoctorsData: false,
                DoctorsDataSuccess: action.payload,
            };
        case actionTypes.AllDoctorsData_FAILURE:
            return {
                ...state,
                isAllDoctorsData: false,
                DoctorsDataFailure: true,
            };
        default:
            return state;
    }
}

export default homePatientReducer;
