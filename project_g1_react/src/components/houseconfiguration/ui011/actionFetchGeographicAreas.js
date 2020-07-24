import axios from 'axios'

export const FETCH_GEOGRAPHIC_AREAS_STARTED = 'FETCH_GEOGRAPHIC_AREAS_STARTED'
export const FETCH_GEOGRAPHIC_AREAS_SUCCESS = 'FETCH_GEOGRAPHIC_AREAS_SUCCESS'
export const FETCH_GEOGRAPHIC_AREAS_FAILURE = 'FETCH_GEOGRAPHIC_AREAS_FAILURE'

export const fetchGeographicAreas = () => {
    return dispatch => {
        dispatch(fetchGeographicAreasStarted());
        const token = localStorage.getItem('id_token');
        axios.get('http://localhost:8443/geographic-area-configuration/geographic-areas',
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(fetchGeographicAreasSuccess(res.data));
        })
            .catch(err => {
                dispatch(fetchGeographicAreasFailure(err.message));
            });
    };
};

export function fetchGeographicAreasStarted() {
    return {
        type: FETCH_GEOGRAPHIC_AREAS_STARTED,

    }
}

export function fetchGeographicAreasSuccess(geographicAreas) {
    return {
        type: FETCH_GEOGRAPHIC_AREAS_SUCCESS,
        payload: {
            data:
                [...geographicAreas]
        }

    }
}

export function fetchGeographicAreasFailure(message) {
    return {
        type: FETCH_GEOGRAPHIC_AREAS_FAILURE,
        payload: {
            error: message
        }
    }
}

