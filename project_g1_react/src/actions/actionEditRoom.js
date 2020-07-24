import axios from 'axios'

export const EDIT_ROOMS_STARTED = 'edit_ROOMS_STARTED'
export const EDIT_ROOMS_SUCCESS = 'edit_ROOMS_SUCCESS'
export const EDIT_ROOMS_FAILURE = 'edit_ROOMS_FAILURE'

export const editRooms = ({name, description, houseFloor, height, width, length}) => {
    return dispatch => {
        const token = localStorage.getItem('id_token');
        dispatch(editRoomsStarted(name, description, houseFloor, height, width, length));
        axios.post("http://localhost:8443/room-configuration/" + name + "/edit",
            {name:name,description:description,houseFloor:houseFloor, height:height,width:width, length:length},
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(editRoomsSuccess(res.data));
        })
            .catch(err => {
                dispatch(editRoomsFailure(err.message));
            });
    };
};

export function editRoomsStarted() {
    return {
        type: EDIT_ROOMS_STARTED,
    }
}

export function editRoomsSuccess(room) {
    return {
        type: EDIT_ROOMS_SUCCESS,
        payload: {
            data: room
        }

    }
}

export function editRoomsFailure(message) {
    return {
        type: EDIT_ROOMS_FAILURE,
        payload: {
            error: message
        }
    }
}



