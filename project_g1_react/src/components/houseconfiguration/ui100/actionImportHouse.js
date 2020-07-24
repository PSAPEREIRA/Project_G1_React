import axios from 'axios'

export const IMPORT_HOUSE_STARTED = 'IMPORT_HOUSE_STARTED'
export const IMPORT_HOUSE_SUCCESS = 'IMPORT_HOUSE_SUCCESS'
export const IMPORT_HOUSE_FAILURE = 'IMPORT_HOUSE_FAILURE'

export const importHouse = (path) => {
    return dispatch => {
        dispatch(importHouseStarted());
        const token = localStorage.getItem('id_token');
        axios.post("http://localhost:8443/house-configuration/import",
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
            dispatch(importHouseSuccess(res.data));
        })
            .catch(err => {
                dispatch(importHouseFailure(err.message));
            });
    };
};

export function importHouseStarted() {
    return {
        type: IMPORT_HOUSE_STARTED,
    }
}

export function importHouseSuccess(house) {
    return {
        type: IMPORT_HOUSE_SUCCESS,
        payload: {
            data:
                [...house]
        }

    }
}

export function importHouseFailure(message) {
    return {
        type: IMPORT_HOUSE_FAILURE,
        payload: {
            error: message
        }
    }
}


