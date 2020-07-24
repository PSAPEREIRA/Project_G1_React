import axios from 'axios'

export const FETCH_SENSOR_TYPES_STARTED = 'FETCH_SENSOR_TYPES_STARTED'
export const FETCH_SENSOR_TYPES_SUCCESS = 'FETCH_SENSOR_TYPES_SUCCESS'
export const FETCH_SENSOR_TYPES_FAILURE = 'FETCH_SENSOR_TYPES_FAILURE'

export const fetchSensorTypes = () => {
    return dispatch => {
        dispatch(fetchSensorTypesStarted());
        const token = localStorage.getItem('id_token');
        axios.get("http://localhost:8443/geographic-area-configuration/sensor-types",
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(fetchSensorTypesSuccess(res.data));
        })
            .catch(err => {
                dispatch(fetchSensorTypesFailure(err.response.data));
            });
    };
};

export function fetchSensorTypesStarted() {
    return {
        type: FETCH_SENSOR_TYPES_STARTED,
    }
}

export function fetchSensorTypesSuccess(sensorTypes) {
    return {
        type: FETCH_SENSOR_TYPES_SUCCESS,
        payload: {
            data:
                [...sensorTypes]
        }

    }
}

export function fetchSensorTypesFailure(message) {
    return {
        type: FETCH_SENSOR_TYPES_FAILURE,
        payload: {
            error: message
        }
    }
}