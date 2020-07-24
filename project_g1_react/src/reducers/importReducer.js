import {
    IMPORT_HOUSE_STARTED,
    IMPORT_HOUSE_SUCCESS,
    IMPORT_HOUSE_FAILURE
} from "../components/houseconfiguration/ui100/actionImportHouse";
import {
    IMPORT_GA_SENSOR_STARTED,
    IMPORT_GA_SENSOR_SUCCESS,
    IMPORT_GA_SENSOR_FAILURE
} from "../components/houseconfiguration/ui015/actionImportGAandSensors";

import {
    IMPORT_SENSOR_READINGS_OF_GA_STARTED,
    IMPORT_SENSOR_READINGS_OF_GA_FAILURE,
    IMPORT_SENSOR_READINGS_OF_GA_SUCCESS
} from "../components/houseconfiguration/ui020/actionImportSensorReadingsOfGA";

import {
    IMPORT_SENSOR_READINGS_OF_ROOM_STARTED,
    IMPORT_SENSOR_READINGS_OF_ROOM_SUCCESS,
    IMPORT_SENSOR_READINGS_OF_ROOM_FAILURE
} from "../components/roomconfiguration/ui265/actionImportSensorReadingsOfRoom";

import {
    IMPORT_ROOMSENSORS_STARTED,
    IMPORT_ROOMSENSORS_SUCCESS,
    IMPORT_ROOMSENSORS_FAILURE
} from "../components/roomconfiguration/ui260/actionImportRoomSensors";

const initState = {
    geographicAreaSensors: {
        loading: false,
        error: null,
        data: [],
    },
    roomSensors: {
        loading: false,
        error: null,
        data: [],
    },
    house: {
        loading: false,
        error: null,
        data: [],
    },
    geographicAreaSensorReadings: {
        loading: false,
        error: null,
        data: [],
    },
    roomSensorReadings: {
        loading: false,
        error: null,
        data: [],
    }

}
export default function importReducer(state = initState, action) {
    switch (action.type) {
        case IMPORT_GA_SENSOR_STARTED:
            return {
                ...state,
                geographicAreaSensors: {
                    loading: true,
                    error: null,
                    data: [],
                }
            }
        case IMPORT_GA_SENSOR_SUCCESS:
            return {
                ...state,
                geographicAreaSensors: {
                    loading: false,
                    error: null,
                    data: [...action.payload.data],
                }
            }
        case IMPORT_GA_SENSOR_FAILURE:
            return {
                ...state,
                geographicAreaSensors: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }

        case IMPORT_ROOMSENSORS_STARTED:
            return {
                ...state,
                roomSensors: {
                    loading: true,
                    error: null,
                    data: [],
                }
            }
        case IMPORT_ROOMSENSORS_SUCCESS:
            return {
                ...state,
                roomSensors: {
                    loading: false,
                    error: null,
                    data: [...action.payload.data],
                }
            }
        case IMPORT_ROOMSENSORS_FAILURE:
            return {
                ...state,
                roomSensors: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }

        case IMPORT_HOUSE_STARTED:
            return {
                ...state,
                house: {
                    loading: true,
                    error: null,
                    data: [],
                }
            }
        case IMPORT_HOUSE_SUCCESS:
            return {
                ...state,
                house: {
                    loading: false,
                    error: null,
                    data: [...action.payload.data],
                }
            }
        case IMPORT_HOUSE_FAILURE:
            return {
                ...state,
                house: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }
        case IMPORT_SENSOR_READINGS_OF_GA_STARTED:
            return {
                ...state,
                geographicAreaSensorReadings: {
                    loading: true,
                    error: null,
                    data: [],
                }
            }
        case IMPORT_SENSOR_READINGS_OF_GA_SUCCESS:
            return {
                ...state,
                geographicAreaSensorReadings: {
                    loading: false,
                    error: null,
                    data: [...action.payload.data],
                }
            }
        case IMPORT_SENSOR_READINGS_OF_GA_FAILURE:
            return {
                ...state,
                geographicAreaSensorReadings: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }
        case IMPORT_SENSOR_READINGS_OF_ROOM_STARTED:
            return {
                ...state,
                roomSensorReadings: {
                    loading: true,
                    error: null,
                    data: [],
                }
            }
        case IMPORT_SENSOR_READINGS_OF_ROOM_SUCCESS:
            return {
                ...state,
                roomSensorReadings: {
                    loading: false,
                    error: null,
                    data: [...action.payload.data],
                }
            }
        case IMPORT_SENSOR_READINGS_OF_ROOM_FAILURE:
            return {
                ...state,
                roomSensorReadings: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }
        default:
            return state
    }

}

