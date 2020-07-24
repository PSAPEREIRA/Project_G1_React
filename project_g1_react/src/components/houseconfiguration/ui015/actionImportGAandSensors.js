import axios from 'axios'

export const IMPORT_GA_SENSOR_STARTED = 'IMPORT_GA_SENSOR_STARTED'
export const IMPORT_GA_SENSOR_SUCCESS = 'IMPORT_GA_SENSOR_SUCCESS'
export const IMPORT_GA_SENSOR_FAILURE = 'IMPORT_GA_SENSOR_FAILURE'

export const importGAandSensors = (path) => {
    return dispatch => {
        dispatch(importGAandSensorsStarted());
        const token = localStorage.getItem('id_token');
        axios.post("http://localhost:8443/geographic-area-configuration/import",
            path,
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(importGAandSensorsSuccess(res.data));
        })
            .catch(err => {
                dispatch(importGAandSensorsFailure(err.message));
            });
    };
};

export function importGAandSensorsStarted() {
    return {
        type: IMPORT_GA_SENSOR_STARTED,
    }
}

export function importGAandSensorsSuccess(GA) {
    return {
        type: IMPORT_GA_SENSOR_SUCCESS,
        payload: {
            data:
                [...GA]
        }

    }
}

export function importGAandSensorsFailure(message) {
    return {
        type: IMPORT_GA_SENSOR_FAILURE,
        payload: {
            error: message
        }
    }
}


