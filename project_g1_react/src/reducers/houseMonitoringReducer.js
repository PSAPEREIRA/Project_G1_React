import {
    FETCH_HOUSE_MONITORING_CURRENT_TEMPERATURE_FAILURE,
    FETCH_HOUSE_MONITORING_CURRENT_TEMPERATURE_STARTED,
    FETCH_HOUSE_MONITORING_CURRENT_TEMPERATURE_SUCCESS,
    FETCH_HOUSE_MONITORING_HIGHEST_TEMPERATURE_AMPLITUDE_FAILURE,
    FETCH_HOUSE_MONITORING_HIGHEST_TEMPERATURE_AMPLITUDE_STARTED,
    FETCH_HOUSE_MONITORING_HIGHEST_TEMPERATURE_AMPLITUDE_SUCCESS,
    FETCH_HOTTEST_DAY_IN_TIME_INTERVAL_FAILURE,
    FETCH_HOTTEST_DAY_IN_TIME_INTERVAL_STARTED,
    FETCH_HOTTEST_DAY_IN_TIME_INTERVAL_SUCCESS
} from "../actions/actionsHouseMonitoring";

import {FETCH_ROOM_MAX_TEMP_STARTED,FETCH_ROOM_MAX_TEMP_SUCCESS,FETCH_ROOM_MAX_TEMP_FAILURE} from "../actions/actionsRoomTemp610";

import {FETCH_SUM_RAINFALL_STARTED,FETCH_SUM_RAINFALL_SUCCESS,FETCH_SUM_RAINFALL_FAILURE,
    FETCH_LCDAY_STARTED, FETCH_LCDAY_SUCCESS,FETCH_LCDAY_FAILURE,FETCH_AVG_RAINFALL_STARTED,FETCH_AVG_RAINFALL_SUCCESS,FETCH_AVG_RAINFALL_FAILURE,
} from "../actions/actionsHouseMonitoring";
import {
    FETCH_ROOM_CUR_TEMP_FAILURE,
    FETCH_ROOM_CUR_TEMP_STARTED,
    FETCH_ROOM_CUR_TEMP_SUCCESS
} from "../components/housemonitoring/ui605/actionFetchRoomCurTemp605";

const initState = {
    houseMonitoring: {
        loading: false,
        error: null,
        data: [],
    },

    sumRf: {
        loading: false,
        error: null,
        value: '<The sum value will be shown here>',
    },

    lcDay:{
        value:'The date will be show here'
    },

    roomCurrentTemp: 'Value will be shown here',

    avgRf: {
        loading: false,
        error: null,
        value: '',
    },

    hotDay: {
        loading: false,
        error: null,
        value: '<value>',
    },
};

export default function houseMonitoringReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_HOUSE_MONITORING_CURRENT_TEMPERATURE_STARTED:
            return {
                ...state,
                houseMonitoring: {
                    loading: true,
                    error: null,
                    data: []
                }
            }
        case FETCH_HOUSE_MONITORING_CURRENT_TEMPERATURE_SUCCESS:
            return {
                ...state,
                houseMonitoring: {
                    loading: false,
                    error: null,
                    data: action.payload
                }
            }
        case FETCH_HOUSE_MONITORING_CURRENT_TEMPERATURE_FAILURE:
            return {
                ...state,
                houseMonitoring: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }
        case FETCH_HOUSE_MONITORING_HIGHEST_TEMPERATURE_AMPLITUDE_STARTED:
            return {
                ...state,
                houseMonitoring: {
                    loading: true,
                    error: null,
                    data: []
                }
            }
        case FETCH_HOUSE_MONITORING_HIGHEST_TEMPERATURE_AMPLITUDE_SUCCESS:
            return {
                ...state,
                houseMonitoring: {
                    loading: false,
                    error: null,
                    data: action.payload
                }
            }
        case FETCH_HOUSE_MONITORING_HIGHEST_TEMPERATURE_AMPLITUDE_FAILURE:
            return {
                ...state,
                houseMonitoring: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }
        case FETCH_HOTTEST_DAY_IN_TIME_INTERVAL_STARTED:
            return {
                ...state,
                hotDay: {
                    loading: true,
                    error: null,
                    value: action.payload
                }
            }
        case FETCH_HOTTEST_DAY_IN_TIME_INTERVAL_SUCCESS:
            return {
                ...state,
                hotDay: {
                    loading: false,
                    error: null,
                    value: action.payload
                }
            }
        case FETCH_HOTTEST_DAY_IN_TIME_INTERVAL_FAILURE:
            return {
                ...state,
                hotDay: {
                    loading: false,
                    error: null,
                    value: action.payload,
                }
            }
        case FETCH_ROOM_MAX_TEMP_STARTED:
            return {
                ...state,
                houseMonitoring: {
                    loading: true,
                    error: null,
                    data: []
                }
            }
        case FETCH_ROOM_MAX_TEMP_SUCCESS:
            return {
                ...state,
                houseMonitoring: {
                    loading: false,
                    error: null,
                    data: action.payload
                }
            }
        case FETCH_ROOM_MAX_TEMP_FAILURE:
            return {
                ...state,
                houseMonitoring: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }

        case(FETCH_SUM_RAINFALL_STARTED):
            return {
                ...state,
                sumRf: {
                    loading: true,
                    error: null,
                    value: action.payload
                }
            };
        case(FETCH_SUM_RAINFALL_SUCCESS):
            return {
                ...state,
                sumRf: {
                    loading: false,
                    error: null,
                    value: action.payload
                }
            };
        case(FETCH_SUM_RAINFALL_FAILURE):
            return {
                ...state,
                sumRf: {
                    loading: false,
                    error: null,
                    value: action.payload
                }
            };

        case(FETCH_LCDAY_STARTED):
            return {
                ...state,
                lcDay: {
                    loading: true,
                    error: null,
                    value: action.payload
                }
            };
        case(FETCH_LCDAY_SUCCESS):
            return {
                ...state,
                lcDay: {
                    loading: false,
                    error: null,
                    value: action.payload
                }
            };
        case(FETCH_LCDAY_FAILURE):
            return {
                ...state,
                lcDay: {
                    loading: false,
                    error: null,
                    value: action.payload
                }
            };
        case FETCH_ROOM_CUR_TEMP_STARTED:
            return {
                ...state,
                houseMonitoring : {
                    loading: true,
                    error: null,
                    data: []
                }
            };
        case FETCH_ROOM_CUR_TEMP_SUCCESS:
            return {
                ...state,
                roomCurrentTemp: action.payload
            };
        case FETCH_ROOM_CUR_TEMP_FAILURE:
            return {
                ...state,
                houseMonitoring: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            };



        case(FETCH_AVG_RAINFALL_STARTED):
            return {
                ...state,
                avgRf: {
                    loading: true,
                    error: null,
                    value: action.payload
                }
            };
        case(FETCH_AVG_RAINFALL_SUCCESS):
            return {
                ...state,
                avgRf: {
                    loading: false,
                    error: null,
                    value: action.payload
                }
            };
        case(FETCH_AVG_RAINFALL_FAILURE):
            return {
                ...state,
                avgRf: {
                    loading: false,
                    error: null,
                    value: action.payload
                }
            };
        default:
            return state
    }
}
