import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isAllDoctorsData: false,
    DoctorsDataSuccess: [],
    DoctorsDataFailure: null,
    isScanSkin:false,
    ScanSuccess:null,
    ScanFailure:null,
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
        case actionTypes.SCAN_START:
            return {
                ...state,
                isScanSkin:true,
            };  
            case actionTypes.SCAN_START_SUCCESS :
                return {
                    ...state,
                    isScanSkin:false,
                    ScanSuccess:{},
                };
                case actionTypes.SCAN_START_FAILURE :
                    return {
                        ...state,
                        isScanSkin:false,
                        ScanFailure:{},
                    };
        default:
            return state;
    }
}

export default homePatientReducer;
