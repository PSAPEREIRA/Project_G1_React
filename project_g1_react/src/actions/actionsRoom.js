import axios from 'axios'

export const FETCH_ROOMS_STARTED = 'FETCH_ROOMS_STARTED'
export const FETCH_ROOMS_SUCCESS = 'FETCH_ROOMS_SUCCESS'
export const FETCH_ROOMS_FAILURE = 'FETCH_ROOMS_FAILURE'

export const fetchRooms = () => {
    return dispatch => {
        dispatch(fetchRoomsStarted());
        const token = localStorage.getItem('id_token');
        axios.get("http://localhost:8443/room-configuration/rooms",
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
                dispatch(fetchRoomsFailure(err.response.data));
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


export const ADD_ROOM_SENSOR_SUCCESS = 'ADD_ROOM_SENSOR_SUCCESS';
export const ADD_ROOM_SENSOR_LOADING = 'ADD_ROOM_SENSOR_LOADING';
export const ADD_ROOM_SENSOR_FAILURE = 'ADD_ROOM_SENSOR_FAILURE';

export const addSensorToRoom = (roomName,sensor) => {

    return dispatch => {
        dispatch(addSensorToRoomStarted());
        const token = localStorage.getItem('id_token');
        axios.post('http://localhost:8443/room-configuration/rooms/'+roomName+'/new-sensor',
            {idOfSensor:sensor.idSensor,name:sensor.sensorName,sensorType:sensor.sensorType,
                installationDate:sensor.installationDate,unit:sensor.sensorUnits},
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            console.log("SUCCESS??")
            dispatch(addSensorToRoomSuccess(res.data));
        })
            .catch(err => {
                console.log("ERROR??")
                dispatch(addSensorToRoomFailure(err.response.data));


            });
    };
};

export function addSensorToRoomStarted() {
    return {
        type: ADD_ROOM_SENSOR_LOADING,

    }
}

export function addSensorToRoomSuccess(response) {
    return {
        type: ADD_ROOM_SENSOR_SUCCESS,
        payload: response
    }
}

export function addSensorToRoomFailure(message) {
    return {
        type: ADD_ROOM_SENSOR_FAILURE,
        payload: {
            error: message
        }
    }
}


