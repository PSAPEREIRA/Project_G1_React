import axios from 'axios'

export const IMPORT_SENSOR_READINGS_OF_GA_STARTED = 'IMPORT_SENSOR_READINGS_OF_GA_STARTED'
export const IMPORT_SENSOR_READINGS_OF_GA_SUCCESS = 'IMPORT_SENSOR_READINGS_OF_GA_SUCCESS'
export const IMPORT_SENSOR_READINGS_OF_GA_FAILURE = 'IMPORT_SENSOR_READINGS_OF_GA_FAILURE'

export const importSensorReadingsOfGA = (path) => {
    return dispatch => {
        dispatch(importSensorReadingsOfGAStarted());
    //    console.log(path)
        const token = localStorage.getItem('id_token');
        axios.post("http://localhost:8443/geographic-area-configuration/import-sensor-readings",
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
            dispatch(importSensorReadingsOfGASuccess(res.data));
        })
            .catch(err => {
                dispatch(importSensorReadingsOfGAFailure(err.message));
            });
    };
};

export function importSensorReadingsOfGAStarted() {
    return {
        type: IMPORT_SENSOR_READINGS_OF_GA_STARTED,
    }
}

export function importSensorReadingsOfGASuccess(imports) {
    return {
        type: IMPORT_SENSOR_READINGS_OF_GA_SUCCESS,
        payload: {
            data:
                [...imports]
        }

    }
}

export function importSensorReadingsOfGAFailure(message) {
    return {
        type: IMPORT_SENSOR_READINGS_OF_GA_FAILURE,
        payload: {
            error: message
        }
    }
}


