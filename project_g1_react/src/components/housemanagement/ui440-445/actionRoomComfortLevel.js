import axios from 'axios'

export const GET_ROOM_COMFORT_LEVEL_STARTED = 'GET_ROOM_COMFORT_LEVEL_STARTED'
export const GET_ROOM_COMFORT_LEVEL_SUCCESS = 'GET_ROOM_COMFORT_LEVEL_SUCCESS'
export const GET_ROOM_COMFORT_LEVEL_FAILURE = 'GET_ROOM_COMFORT_LEVEL_FAILURE'

export const getRoomComfortLevel = (room,option,category,firstDate,secondDate) => {
    return dispatch => {
        dispatch(getRoomComfortLevelStarted());
        const token = localStorage.getItem('id_token');
        axios.get('http://localhost:8443/house-management/comfort-level/'+room+'/'+category+'/'+option+'/?s='+firstDate+'&e='+secondDate ,
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(getRoomComfortLevelSuccess(res.data));
        })
            .catch(err => {
                dispatch(getRoomComfortLevelFailure(err.message));
            });
    };
};

export function getRoomComfortLevelStarted() {
    return {
        type: GET_ROOM_COMFORT_LEVEL_STARTED,

    }
}

export function getRoomComfortLevelSuccess(dates) {
    return {
        type:  GET_ROOM_COMFORT_LEVEL_SUCCESS,
        payload: {
            data:
                [...dates]
        }

    }
}

export function getRoomComfortLevelFailure(message) {
    return {
        type:  GET_ROOM_COMFORT_LEVEL_FAILURE,
        payload: {
            error: message
        }
    }
}

