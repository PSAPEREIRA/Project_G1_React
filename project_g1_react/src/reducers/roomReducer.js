import {
    ADD_ROOM_SENSOR_FAILURE,
    ADD_ROOM_SENSOR_LOADING, ADD_ROOM_SENSOR_SUCCESS,
    FETCH_ROOMS_FAILURE,
    FETCH_ROOMS_STARTED,
    FETCH_ROOMS_SUCCESS
} from "../actions/actionsRoom";
import {EDIT_ROOMS_FAILURE, EDIT_ROOMS_STARTED, EDIT_ROOMS_SUCCESS} from "../actions/actionEditRoom";
import {
    SENSORS_IN_ROOM_STARTED,
    SENSORS_IN_ROOM_SUCCESS,
    SENSORS_IN_ROOM_FAILURE
} from "../actions/actionSensorsInRoom";

import {FETCH_ROOMS_WITHOUT_GRID_STARTED,
    FETCH_ROOMS_WITHOUT_GRID_SUCCESS,
    FETCH_ROOMS_WITHOUT_GRID_FAILURE} from "../actions/actionsUI147RoomsWithoutGrid";

import {FETCH_HOUSE_MONITORING_ROOMS_ATTACH_TO_GRID_STARTED,
    FETCH_HOUSE_MONITORING_ROOMS_ATTACH_TO_GRID_SUCCESS,
    FETCH_HOUSE_MONITORING_ROOMS_ATTACH_TO_GRID_FAILURE
} from "../actions/actionsUI147RoomsWithoutGrid";

import {ADD_ROOMS_FAILURE, ADD_ROOMS_STARTED, ADD_ROOMS_SUCCESS} from "../actions/actionsAddRoom_105";

const initState = {
    rooms: {
        loading: false,
        error: null,
        data: [],
    },

    addSensorResponse:'OUTPUT IS HERE'



}

export default function roomReducer(state = initState, action) {
    switch (action.type) {

        case FETCH_ROOMS_WITHOUT_GRID_STARTED:
            return {
                ...state,
                rooms: {
                    loading: true,
                    error: null,
                    data: [],
                }
            }
        case FETCH_ROOMS_WITHOUT_GRID_SUCCESS:
            return {
                ...state,
                rooms: {
                    loading: false,
                    error: null,
                    data: [...action.payload.data],

                }
            }
        case FETCH_ROOMS_WITHOUT_GRID_FAILURE:
            return {
                ...state,
                rooms: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }

        case FETCH_ROOMS_STARTED:
            return {
                ...state,
                rooms: {
                    loading: true,
                    error: null,
                    data: [],
                }
            }
        case FETCH_ROOMS_SUCCESS:
            return {
                ...state,
                rooms: {
                    loading: false,
                    error: null,
                    data: [...action.payload.data],

                }
            }
        case FETCH_ROOMS_FAILURE:
            return {
                ...state,
                rooms: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }
        case EDIT_ROOMS_STARTED:
            return {
                ...state,
                rooms: {
                    loading: true,
                    error: null,
                    data: [],
                }
            }
        case EDIT_ROOMS_SUCCESS:
            return {
                ...state,
                rooms: {
                    loading: false,
                    error: null,
                    data: state.rooms.data.concat(action.payload.data)
                }
            }

        case EDIT_ROOMS_FAILURE:
            return {
                ...state,
                rooms: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }
        case SENSORS_IN_ROOM_STARTED:
            return {
                ...state,
                rooms: {
                    loading: true,
                    error: null,
                    data: [],
                }
            }
        case SENSORS_IN_ROOM_SUCCESS:
            return {
                ...state,
                rooms: {
                    loading: false,
                    error: null,
                    data: state.rooms.data.concat(action.payload.data)
                }
            }

        case SENSORS_IN_ROOM_FAILURE:
            return {
                ...state,
                rooms: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }


        case
        ADD_ROOMS_STARTED:
            return {
                ...state,
                rooms: {
                    loading: true,
                    error: null,
                    data: [],
                }
            }

        case
        ADD_ROOMS_SUCCESS:
            return {
                ...state,
                rooms: {
                    loading: false,
                    error: null,
                    data: state.rooms.data.concat(action.payload.data)
                }
            }

        case
        ADD_ROOMS_FAILURE:
            return {
                ...state,
                rooms: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }

        case ADD_ROOM_SENSOR_LOADING:
            return {
                ...state,
                addSensorResponse:'Loading..'
            };
        case ADD_ROOM_SENSOR_SUCCESS:

            return {
                ...state,
                addSensorResponse: action.payload
            };
        case ADD_ROOM_SENSOR_FAILURE:
            return {
                ...state,
                addSensorResponse: action.payload.error
            };

        case
        FETCH_HOUSE_MONITORING_ROOMS_ATTACH_TO_GRID_STARTED:
            return {
                ...state,
                rooms: {
                    loading: true,
                    error: null,
                    data: [],
                }
            }

        case
        FETCH_HOUSE_MONITORING_ROOMS_ATTACH_TO_GRID_SUCCESS:
            return {
                ...state,
                rooms: {
                    loading: false,
                    error: null,
                    data: state.rooms.data.concat(action.payload.data)
                }
         }

        case
        FETCH_HOUSE_MONITORING_ROOMS_ATTACH_TO_GRID_FAILURE:
            return {
                ...state,
                rooms: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }



        default:
            return state
    }

}

