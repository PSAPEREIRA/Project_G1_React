import { FETCH_HOUSE_GRIDS_STARTED, FETCH_HOUSE_GRIDS_SUCCESS, FETCH_HOUSE_GRIDS_FAILURE } from "../actions/actionsHouseGrid";
import { FETCH_HOUSES_GRIDS_STARTED, FETCH_HOUSES_GRIDS_SUCCESS, FETCH_HOUSES_GRIDS_FAILURE } from "../actions/actionsUI147RoomsWithoutGrid";

const initState = {
    houseGrids: {
        loading: false,
        error: null,
        data: [],
    }
}

export default function  gridReducer (state = initState, action){
    switch (action.type) {
        case FETCH_HOUSE_GRIDS_STARTED:
            return {
                ...state,
                houseGrids: {
                    loading: true,
                    error: null,
                    data: []
                }
            }
        case FETCH_HOUSE_GRIDS_SUCCESS:
            return {
                ...state,
                houseGrids: {
                    loading: false,
                    error: null,
                    data: [...action.payload.data]
                }
            }
        case FETCH_HOUSE_GRIDS_FAILURE:
            return {
                ...state,
                houseGrids: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }

        case FETCH_HOUSES_GRIDS_STARTED:
            return {
                ...state,
                houseGrids: {
                    loading: true,
                    error: null,
                    data: []
                }
            }
        case FETCH_HOUSES_GRIDS_SUCCESS:
            return {
                ...state,
                houseGrids: {
                    loading: false,
                    error: null,
                    data: [...action.payload.data]
                }
            }
        case FETCH_HOUSES_GRIDS_FAILURE:
            return {
                ...state,
                houseGrids: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }

        default:
            return state
    }
}
