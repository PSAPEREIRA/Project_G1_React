import axios from 'axios'

export const ADD_ROOMS_STARTED = 'add_ROOMS_STARTED'
export const ADD_ROOMS_SUCCESS = 'add_ROOMS_SUCCESS'
export const ADD_ROOMS_FAILURE = 'add_ROOMS_FAILURE'


export const addRoom = ({name, description, houseFloor, height, width, length}) => {
    return dispatch => {
        const token = localStorage.getItem('id_token');
        dispatch(addRoomsStarted(name, description, houseFloor, height, width, length));

        axios.post("http://localhost:8443/room-configuration/new",
            {name:name,description:description,houseFloor:houseFloor, height:height,width:width, length:length},
            {
                headers: {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                },
            }
        ).then(res => {
            dispatch(addRoomsSuccess(res.data));
        })
            .catch(err => {
                dispatch(addRoomsFailure(err.message));
                alert("error");

            });
    };
};

export function addRoomsStarted(name, description, houseFloor, height, width, length) {
    return {
        type: ADD_ROOMS_STARTED,
        payload: {name:name, description:description, houseFloor:houseFloor, height:height, width:width, length:length}

    }
}

export function addRoomsSuccess(data) {
    return {
        type: ADD_ROOMS_SUCCESS,
        payload: {
            data:data
        }

    }
}

export function addRoomsFailure(message) {
    return {
        type: ADD_ROOMS_FAILURE,
        payload: {
            error: message
        }
    }
}
