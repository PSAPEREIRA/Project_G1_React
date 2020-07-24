import {
    GET_ROOM_COMFORT_LEVEL_STARTED,
    GET_ROOM_COMFORT_LEVEL_SUCCESS,
    GET_ROOM_COMFORT_LEVEL_FAILURE
} from "../components/housemanagement/ui440-445/actionRoomComfortLevel";

const initState = {
    houseManagement: {
        loading: false,
        error: null,
        data: [],
    }
}

export default function houseManagementReducer(state = initState, action) {
    switch (action.type) {
        case GET_ROOM_COMFORT_LEVEL_STARTED:
            return {
                ...state,
                houseManagement: {
                    loading: true,
                    error: null,
                    data: []
                }
            };
        case GET_ROOM_COMFORT_LEVEL_SUCCESS:
            return {
                ...state,
                houseManagement: {
                    loading: false,
                    error: null,
                    data: [...action.payload.data]
                }
            };
        case GET_ROOM_COMFORT_LEVEL_FAILURE:
            return {
                ...state,
                houseManagement: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            };
        default:
            return state
    }
}
