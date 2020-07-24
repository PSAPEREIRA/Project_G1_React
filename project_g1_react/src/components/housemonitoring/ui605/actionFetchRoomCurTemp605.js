import axios from "axios";

export const FETCH_ROOM_CUR_TEMP_STARTED = 'FETCH_ROOM_CUR_TEMP_STARTED'
export const FETCH_ROOM_CUR_TEMP_SUCCESS = 'FETCH_ROOM_CUR_TEMP_SUCCESS'
export const FETCH_ROOM_CUR_TEMP_FAILURE = 'FETCH_ROOM_CUR_TEMP_FAILURE'

export const fetchCurrentTemperatureInRoom = (roomName) => {
    return dispatch => {
        dispatch(fetchRoomCurTempStarted());
        const token = localStorage.getItem('id_token');
        axios.get("http://localhost:8443/room-configuration/"+roomName+"/current-room-temperature",
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(fetchRoomCurTempSuccess(res.data));
        })
            .catch(err => {
                dispatch(fetchRoomCurTempFailure(err.message));
            });
    };
};

export function fetchRoomCurTempStarted() {
    return {
        type: FETCH_ROOM_CUR_TEMP_STARTED,
    }
}

export function fetchRoomCurTempSuccess(value) {
    return {
        type: FETCH_ROOM_CUR_TEMP_SUCCESS,
        payload: value
        }
}

export function fetchRoomCurTempFailure(message) {
    return {
        type: FETCH_ROOM_CUR_TEMP_FAILURE,
        payload:[...message]

    }
}


