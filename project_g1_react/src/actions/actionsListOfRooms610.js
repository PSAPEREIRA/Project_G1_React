import axios from "axios";
import {FETCH_ROOMS_STARTED} from "./actionsRoom";

export const FETCH_ROOMS_SUCCESS = 'FETCH_ROOMS_SUCCESS'
export const FETCH_ROOMS_FAILURE = 'FETCH_ROOMS_FAILURE'

export const fetchRooms = (name, date) => {
    return dispatch => {
        dispatch(fetchRoomsStarted());
        const token = localStorage.getItem('id_token');
        axios.get("http://localhost:8443/house-configuration/maximum-temperature?roomName=" + name + "&date=" + date,
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
                dispatch(fetchRoomsSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchRoomsFailure(err.message));
            });
    };
};

export function fetchRoomsStarted() {
    return {
        type: FETCH_ROOMS_STARTED,
    }
}

export function fetchRoomsSuccess(rooms) {
    return {
        type: FETCH_ROOMS_SUCCESS,
        payload: {
            data:
                [...rooms]
        }

    }
}

export function fetchRoomsFailure(message) {
    return {
        type: FETCH_ROOMS_FAILURE,
        payload: {
            error: message
        }
    }
}


