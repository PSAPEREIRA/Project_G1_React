import {
    CHANGE_LOCATION_FAILURE,
    CHANGE_LOCATION_LOADING,
    CHANGE_LOCATION_SUCCESS,
    CREATE_HOUSEGRID_LOADING,
    CREATE_HOUSEGRID_SUCCESS,
    CREATE_HOUSEGRID_FAILURE,
    FETCH_HOUSE_GEO_LOADING, FETCH_HOUSE_GEO_SUCCESS, FETCH_HOUSE_GEO_FAILURE
} from "../actions/actionsHouseConfiguration";
import {
    FETCH_HOUSES_GRIDS_FAILURE,
    FETCH_HOUSES_GRIDS_STARTED,
    FETCH_HOUSES_GRIDS_SUCCESS
} from "../actions/actionsUI147RoomsWithoutGrid";
import {
    DETACH_ROOM_FROM_HOUSE_GRID_FAILURE,
    DETACH_ROOM_FROM_HOUSE_GRID_STARTED,
    DETACH_ROOM_FROM_HOUSE_GRID_SUCCESS
} from "../actions/actionsHouseGrid";

const initState = {

    response: '',
    houseGrids: {
        loading: false,
        error: null,
        data: [],
    },
    detachRoomFromHgResponse:'Output is here',

    houseGeoLocation:'..'

};

export default function houseConfigurationReducer(state = initState, action) {
    switch (action.type) {
        case CHANGE_LOCATION_LOADING:
            return {
                ...state,
                response:'loading'
            };
        case CHANGE_LOCATION_SUCCESS:

            return {
                ...state,
                response: action.payload
            };
        case CHANGE_LOCATION_FAILURE:
            return {
                ...state,
                response: action.payload.error
            };

        case CREATE_HOUSEGRID_LOADING:
            return {
                ...state,
                response:'loading'
            };
        case CREATE_HOUSEGRID_SUCCESS:
            return {
                ...state,
                response: action.payload
            };
        case CREATE_HOUSEGRID_FAILURE:
            return {
                ...state,
                response: action.payload.error
            };

        case FETCH_HOUSES_GRIDS_STARTED:
            return {
                ...state,
                houseGrids: {
                    loading: true,
                    error: null,
                    data: [],
                }
            };
        case FETCH_HOUSES_GRIDS_SUCCESS:
            return {
                ...state,
                houseGrids: {
                    loading: false,
                    error: null,
                    data: [...action.payload.data],

                }
            };
        case FETCH_HOUSES_GRIDS_FAILURE:
            return {
                ...state,
                houseGrids: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            };

        case DETACH_ROOM_FROM_HOUSE_GRID_STARTED:
            return {
                ...state,
                detachRoomFromHgResponse:'loading'
            };
        case DETACH_ROOM_FROM_HOUSE_GRID_SUCCESS:
            return {
                ...state,
                detachRoomFromHgResponse: action.payload
            };
        case DETACH_ROOM_FROM_HOUSE_GRID_FAILURE:
            return {
                ...state,
                detachRoomFromHgResponse: action.payload.error
            };

        case FETCH_HOUSE_GEO_LOADING:
            return {
                ...state,
                houseGeoLocation:'Loading..'
            };
        case FETCH_HOUSE_GEO_SUCCESS:

            return {
                ...state,
                houseGeoLocation: action.payload
            };
        case FETCH_HOUSE_GEO_FAILURE:
            return {
                ...state,
                houseGeoLocation: action.payload.error
            };

        default:
            return state
    }
}