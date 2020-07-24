import axios from 'axios'

export const SENSORS_IN_ROOM_STARTED = 'SENSORS_IN_ROOM_STARTED'
export const SENSORS_IN_ROOM_SUCCESS = 'SENSORS_IN_ROOM_SUCCESS'
export const SENSORS_IN_ROOM_FAILURE = 'SENSORS_IN_ROOM_FAILURE'

export const sensorsInRoom = (name) => {
    return dispatch => {
        const token = localStorage.getItem('id_token');
        dispatch(sensorsInRoomStarted(name));
        axios.get("http://localhost:8443/room-configuration/" + name + "/sensors",
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(sensorsInRoomSuccess(res.data));
        })
            .catch(err => {
                dispatch(sensorsInRoomFailure(err.message));
            });
    };
};

export function sensorsInRoomStarted() {
    return {
        type: SENSORS_IN_ROOM_STARTED,
    }
}

export function sensorsInRoomSuccess(sensors) {
    return {
        type: SENSORS_IN_ROOM_SUCCESS,
        payload: {
            data: sensors
        }

    }
}

export function sensorsInRoomFailure(message) {
    return {
        type: SENSORS_IN_ROOM_FAILURE,
        payload: {
            error: message
        }
    }
}



