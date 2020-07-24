import axios from 'axios'

export const FETCH_HOUSE_GRIDS_STARTED = 'FETCH_HOUSE_GRIDS_STARTED'
export const FETCH_HOUSE_GRIDS_SUCCESS = 'FETCH_HOUSE_GRIDS_SUCCESS'
export const FETCH_HOUSE_GRIDS_FAILURE = 'FETCH_HOUSE_GRIDS_FAILURE'

export const fetchHouseGrids = () => {
    return dispatch => {
        dispatch(fetchHouseGridsStarted());
        const token = localStorage.getItem('id_token');
        axios.get('http://localhost:8443/house-grid-configuration/house-grids',
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(fetchHouseGridsSuccess(res.data));
        })
            .catch(err => {
                dispatch(fetchHouseGridsFailure(err.message));
            });
    };
};

export function fetchHouseGridsStarted() {
    return {
        type: FETCH_HOUSE_GRIDS_STARTED,

    }
}

export function fetchHouseGridsSuccess(houseGrids) {
    return {
        type: FETCH_HOUSE_GRIDS_SUCCESS,
        payload: {
            data:
                [...houseGrids]
        }

    }
}

export function fetchHouseGridsFailure(message) {
    return {
        type: FETCH_HOUSE_GRIDS_FAILURE,
        payload: {
            error: message
        }
    }
}

////// DETACH ROOM TO HOUSE GRIDS - US149 ///////
export const DETACH_ROOM_FROM_HOUSE_GRID_STARTED = 'DETACH_ROOM_FROM_HOUSE_GRID_STARTED'
export const DETACH_ROOM_FROM_HOUSE_GRID_SUCCESS = 'DETACH_ROOM_FROM_HOUSE_GRID_SUCCESS'
export const DETACH_ROOM_FROM_HOUSE_GRID_FAILURE = 'DETACH_ROOM_FROM_HOUSE_GRID_FAILURE'
/*
axios.delete(URL, {
 data: { foo: 'bar' }
})
 */
export const detachRoomFromHouseGrid = (houseGrid, room) => {
    return dispatch => {
        const token = localStorage.getItem('id_token');

        dispatch(detachRoomFromHouseGridStarted(houseGrid, room));
        axios.delete("http://localhost:8443/house-grid-configuration/house-grids/" + houseGrid + "/rooms?room-name=" + room,

            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'text/plain',
                }
            })
            .then(res => {
                dispatch(detachRoomFromHouseGridSuccess(res.data))
            })
            .catch(err => {
                dispatch(detachRoomFromHouseGridFailure(err.response.data));
            });
    };
};

export function detachRoomFromHouseGridStarted() {
    return {
        type: DETACH_ROOM_FROM_HOUSE_GRID_STARTED,

    }
}

export function detachRoomFromHouseGridSuccess(response) {
    return {
        type: DETACH_ROOM_FROM_HOUSE_GRID_SUCCESS,
        payload:response
    }
}

export function detachRoomFromHouseGridFailure(message) {
    return {
        type: DETACH_ROOM_FROM_HOUSE_GRID_FAILURE,
        payload: {
            error: message
        }
    }
}

