import axios from "axios";
export const FETCH_ROOM_MAX_TEMP_STARTED = 'FETCH_ROOM_MAX_TEMP_STARTED'
export const FETCH_ROOM_MAX_TEMP_SUCCESS = 'FETCH_ROOM_MAX_TEMP_SUCCESS'
export const FETCH_ROOM_MAX_TEMP_FAILURE = 'FETCH_ROOM_MAX_TEMP_FAILURE'

export const fetchRoomMaxTemp = (name, date) => {
    return dispatch => {
        dispatch(fetchRoomMaxTempStarted());
        const token = localStorage.getItem('id_token');
        axios.get("http://localhost:8443/house-configuration/maximum-temperature/" + name + "/" + date,
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(fetchRoomMaxTempSuccess(res.data));
        })
            .catch(err => {
                dispatch(fetchRoomMaxTempFailure(err.message));
            });
    };
};

export function fetchRoomMaxTempStarted() {
    return {
        type: FETCH_ROOM_MAX_TEMP_STARTED,
    }
}

export function fetchRoomMaxTempSuccess(houseMonitoring) {
    return {
        type: FETCH_ROOM_MAX_TEMP_SUCCESS,
        payload: {
            data:[...houseMonitoring]
        }

    }
}

export function fetchRoomMaxTempFailure(message) {
    return {
        type: FETCH_ROOM_MAX_TEMP_FAILURE,
        payload: {
            error: message
        }
    }
}


