import axios from 'axios'

export const ADD_SENSOR_TO_ROOM_STARTED = 'ADD_SENSOR_TO_ROOM_STARTED'
export const ADD_SENSOR_TO_ROOM_SUCCESS = 'ADD_SENSOR_TO_ROOM_SUCCESS'
export const ADD_SENSOR_TO_ROOM_FAILURE = 'ADD_SENSOR_TO_ROOM_FAILURE'

export const addNewSensorToRoom = (room, name, sensorType, listOfStatus, idOfSensor, installationDate, unit) => {
    return dispatch => {
        dispatch(addNewSensorToRoomStarted(name, sensorType, listOfStatus, idOfSensor, installationDate, unit));
        const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU2MDcxMTEzMH0.WN4dyaYDYICNCsGOykkj3SOE-mc_lXKjVaiZbyBIIHe9IHrgqUsw9PrxPSYSDo8pvPXRbNsRjYMy9vEETsguqg";
        axios.post('http://localhost:8443/rooms/' + room + '/new-sensor', {name:name, sensorType:sensorType, listOfStatus:listOfStatus,
            idOfSensor:idOfSensor, installationDate:installationDate, unit:unit},
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(addNewSensorToRoomSuccess(res.data));
        })
            .catch(err => {
                dispatch(addNewSensorToRoomFailure(err.message));
            });
    };
};

export function addNewSensorToRoomStarted(name, sensorType, listOfStatus, idOfSensor, installationDate, unit) {
    return {
        type: ADD_SENSOR_TO_ROOM_STARTED,
        payload:{name:name, sensorType:sensorType, listOfStatus:listOfStatus,
            idOfSensor:idOfSensor, installationDate:installationDate, unit:unit}

    }
}

export function addNewSensorToRoomSuccess(dates) {
    return {
        type:  ADD_SENSOR_TO_ROOM_SUCCESS,
        payload: {
            data:
                [...dates]
        }

    }
}

export function addNewSensorToRoomFailure(message) {
    return {
        type:  ADD_SENSOR_TO_ROOM_FAILURE,
        payload: {
            error: message
        }
    }
}

