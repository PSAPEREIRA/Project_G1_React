import {IMPORT_ROOMSENSORS_STARTED, IMPORT_ROOMSENSORS_SUCCESS, IMPORT_ROOMSENSORS_FAILURE} from "../components/roomconfiguration/ui260/actionImportRoomSensors";
import {
    FETCH_SENSOR_TYPES_FAILURE,
    FETCH_SENSOR_TYPES_STARTED,
    FETCH_SENSOR_TYPES_SUCCESS
} from "../actions/actionFetchSensorTypes";

import {
    FETCH_SENSOR_BY_LINK_STARTED,
    FETCH_SENSOR_BY_LINK_SUCCESS,
    FETCH_SENSOR_BY_LINK_FAILURE
} from "../components/houseconfiguration/ui108/actionFetchSensorsByLink";


const initState = {
    sensors: {
        loading: false,
        error: null,
        data: [],
    },

    sensorTypes: {
        loading: false,
        error: null,
        data: [],
    }

};

export default function roomSensorsReducer(state = initState, action) {
    switch (action.type) {
        case IMPORT_ROOMSENSORS_STARTED:
            return {
                ...state,
                sensors: {
                    loading: true,
                    error: null,
                    data: [],
                }
            }
        case IMPORT_ROOMSENSORS_SUCCESS:
            return {
                ...state,
                sensors: {
                    loading: false,
                    error: null,
                    data: [...action.payload.data],

                }
            }
        case IMPORT_ROOMSENSORS_FAILURE:
            return {
                ...state,
                sensors: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }

        case FETCH_SENSOR_TYPES_STARTED:
            return {
                ...state,
                sensorTypes: {
                    loading: true,
                    error: null,
                    data: [],
                }
            }
        case FETCH_SENSOR_TYPES_SUCCESS:
            return {
                ...state,
                sensorTypes: {
                    loading: false,
                    error: null,
                    data: [...action.payload.data],

                }
            }
        case FETCH_SENSOR_TYPES_FAILURE:
            return {
                ...state,
                sensors: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }
        case FETCH_SENSOR_BY_LINK_STARTED:
            return {
                ...state,
                sensors: {
                    loading: true,
                    error: null,
                    data: [],
                }
            }
        case FETCH_SENSOR_BY_LINK_SUCCESS:
            return {
                ...state,
                sensors: {
                    loading: false,
                    error: null,
                    data: action.payload.data,

                }
            }
        case FETCH_SENSOR_BY_LINK_FAILURE:
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

