import {
    FETCH_SENSORS_IN_GA_STARTED,
    FETCH_SENSORS_IN_GA_SUCCESS,
    FETCH_SENSORS_IN_GA_FAILURE
} from "../components/houseconfiguration/ui011/actionFetchSensorsInGa";
import {
    REMOVE_SENSOR_OF_GA_STARTED,
    REMOVE_SENSOR_OF_GA_SUCCESS,
    REMOVE_SENSOR_OF_GA_FAILURE
} from "../components/houseconfiguration/ui011/actionRemoveSensorOfGA"

const initState = {
    sensors: {
        loading: false,
        error: null,
        data: [],
    }
}

export default function gaSensorsReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_SENSORS_IN_GA_STARTED:
            return {
                ...state,
                sensors: {
                    loading: true,
                    error: null,
                    data: []
                }
            }
        case FETCH_SENSORS_IN_GA_SUCCESS:
            return {
                ...state,
                sensors: {
                    loading: false,
                    error: null,
                    data: [...action.payload.data]
                }
            }
        case FETCH_SENSORS_IN_GA_FAILURE:
            return {
                ...state,
                sensors: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }
        case REMOVE_SENSOR_OF_GA_STARTED:
            return {
                ...state,
                sensors: {
                    loading: true,
                    error: null,
                    data: []
                }
            }
        case REMOVE_SENSOR_OF_GA_SUCCESS:
            console.log(">>>>>>>>>>>>>>>>>>>>>>"+action.payload.data);
            console.log("state sensors data:"+state.sensors.data[0].idOfSensor);
            return {
                ...state,
                sensors: {
                    loading: false,
                    error: null,
                    data: state.sensors.data.filter( row =>  row.idOfSensor !== action.payload.data)
                }
            }
        case REMOVE_SENSOR_OF_GA_FAILURE:
            return {
                ...state,
                sensors: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }
        default:
            return state
    }
}

