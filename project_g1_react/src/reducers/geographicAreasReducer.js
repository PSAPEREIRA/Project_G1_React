
import { FETCH_GEOGRAPHIC_AREAS_STARTED, FETCH_GEOGRAPHIC_AREAS_SUCCESS, FETCH_GEOGRAPHIC_AREAS_FAILURE } from "../components/houseconfiguration/ui011/actionFetchGeographicAreas";

const initState = {
    geographicAreas: {
        loading: false,
        error: null,
        data: [],
    }
}

export default function  geographicAreasReducer (state = initState, action){
    switch (action.type) {
        case FETCH_GEOGRAPHIC_AREAS_STARTED:
            return {
                ...state,
                geographicAreas: {
                    loading: true,
                    error: null,
                    data: []
                }
            }
        case FETCH_GEOGRAPHIC_AREAS_SUCCESS:
            return {
                ...state,
                geographicAreas: {
                    loading: false,
                    error: null,
                    data: [...action.payload.data]
                }
            }
        case FETCH_GEOGRAPHIC_AREAS_FAILURE:
            return {
                ...state,
                geographicAreas: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                }
            }
        default:
            return state
    }
}
