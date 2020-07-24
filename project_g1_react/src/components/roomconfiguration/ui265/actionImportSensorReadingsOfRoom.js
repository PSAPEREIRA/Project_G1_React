import axios from 'axios'

export const IMPORT_SENSOR_READINGS_OF_ROOM_STARTED = 'IMPORT_SENSOR_READINGS_OF_ROOM_STARTED'
export const IMPORT_SENSOR_READINGS_OF_ROOM_SUCCESS = 'IMPORT_SENSOR_READINGS_OF_ROOM_SUCCESS'
export const IMPORT_SENSOR_READINGS_OF_ROOM_FAILURE = 'IMPORT_SENSOR_READINGS_OF_ROOM_FAILURE'

export const importSensorReadingsOfRoom = (path) => {
    return dispatch => {
        dispatch(importSensorReadingsOfRoomStarted());
        const token = localStorage.getItem('id_token');
        axios.post("http://localhost:8443/room-configuration/import-sensor-readings",
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
            dispatch(importSensorReadingsOfRoomSuccess(res.data));
        })
            .catch(err => {
                dispatch(importSensorReadingsOfRoomFailure(err.message));
            });
    };
};

export function importSensorReadingsOfRoomStarted() {
    return {
        type: IMPORT_SENSOR_READINGS_OF_ROOM_STARTED,
    }
}

export function importSensorReadingsOfRoomSuccess(imports) {
    return {
        type: IMPORT_SENSOR_READINGS_OF_ROOM_SUCCESS,
        payload: {
            data: [...imports]
        }

    }
}

export function importSensorReadingsOfRoomFailure(message) {
    return {
        type: IMPORT_SENSOR_READINGS_OF_ROOM_FAILURE,
        payload: {
            error: message
        }
    }
}


