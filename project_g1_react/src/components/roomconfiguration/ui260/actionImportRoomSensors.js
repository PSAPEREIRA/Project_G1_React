import axios from 'axios'

export const IMPORT_ROOMSENSORS_STARTED = 'IMPORT_ROOMSENSORS_STARTED'
export const IMPORT_ROOMSENSORS_SUCCESS = 'IMPORT_ROOMSENSORS_SUCCESS'
export const IMPORT_ROOMSENSORS_FAILURE = 'IMPORT_ROOMSENSORS_FAILURE'

export const importRoomSensors = (path) => {
    return dispatch => {
        dispatch(importRoomSensorsStarted());
        const token = localStorage.getItem('id_token');
        axios.post("http://localhost:8443/room-configuration/import-sensors",
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
            dispatch(importRoomSensorsSuccess(res.data));
        })
            .catch(err => {
                dispatch(importRoomSensorsFailure(err.message));
            });
    };
};

export function importRoomSensorsStarted() {
    return {
        type: IMPORT_ROOMSENSORS_STARTED,
    }
}

export function importRoomSensorsSuccess(house) {
    return {
        type: IMPORT_ROOMSENSORS_SUCCESS,
        payload: {
            data:
                [...house]
        }

    }
}

export function importRoomSensorsFailure(message) {
    return {
        type: IMPORT_ROOMSENSORS_FAILURE,
        payload: {
            error: message
        }
    }
}


