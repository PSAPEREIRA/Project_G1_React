import axios from 'axios'

////// ROOMS LIST WITHOUT GRID ///////

export const FETCH_ROOMS_WITHOUT_GRID_STARTED = 'FETCH_ROOMS_WITHOUT_GRID_STARTED'
export const FETCH_ROOMS_WITHOUT_GRID_SUCCESS = 'FETCH_ROOMS_WITHOUT_GRID_SUCCESS'
export const FETCH_ROOMS_WITHOUT_GRID_FAILURE = 'FETCH_ROOMS_WITHOUT_GRID_FAILURE'

export const fetchRoomsWithoutGrid = () => {
    return dispatch => {
        console.log('estou aqui cara...o')
        dispatch(fetchRoomsWithoutGridStarted());
        const token = localStorage.getItem('id_token');
        axios.get("http://localhost:8443/house-grid-configuration/rooms-without-grid",
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(fetchRoomsWithoutGridSuccess(res.data));
        })
            .catch(err => {
                dispatch(fetchRoomsWithoutGridFailure(err.message));
            });
    };
};

export function fetchRoomsWithoutGridStarted() {
    return {
        type: FETCH_ROOMS_WITHOUT_GRID_STARTED,
    }
}

export function fetchRoomsWithoutGridSuccess(rooms) {
    return {
        type: FETCH_ROOMS_WITHOUT_GRID_SUCCESS,
        payload: {
            data:
                [...rooms]
        }
    }
}

export function fetchRoomsWithoutGridFailure(message) {
    console.log(message)
    return {
        type: FETCH_ROOMS_WITHOUT_GRID_FAILURE,
        payload: {
            error: message
        }
    }
}

////// HOUSE GRIDS LIST ///////

export const FETCH_HOUSES_GRIDS_STARTED = 'FETCH_HOUSE_GRIDS_STARTED'
export const FETCH_HOUSES_GRIDS_SUCCESS = 'FETCH_HOUSE_GRIDS_SUCCESS'
export const FETCH_HOUSES_GRIDS_FAILURE = 'FETCH_HOUSE_GRIDS_FAILURE'

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
        type: FETCH_HOUSES_GRIDS_STARTED,

    }
}

export function fetchHouseGridsSuccess(houseGrids) {
    return {
        type: FETCH_HOUSES_GRIDS_SUCCESS,
        payload: {
            data:
                [...houseGrids]
        }

    }
}

export function fetchHouseGridsFailure(message) {
    return {
        type: FETCH_HOUSES_GRIDS_FAILURE,
        payload: {
            error: message
        }
    }
}


////// ATTACH ROOM TO HOUSE GRIDS ///////

export const FETCH_HOUSE_MONITORING_ATTACH_ROOM_TO_HOUSE_GRIDS_STARTED = 'FETCH_HOUSE_MONITORING_ATTACH_ROOM_TO_HOUSE_GRIDS_STARTED'
export const FETCH_HOUSE_MONITORING_ATTACH_ROOM_TO_HOUSE_GRIDS_SUCCESS = 'FETCH_HOUSE_MONITORING_ATTACH_ROOM_TO_HOUSE_GRIDS_SUCCESS'
export const FETCH_HOUSE_MONITORING_ATTACH_ROOM_TO_HOUSE_GRIDS_FAILURE = 'FETCH_HOUSE_MONITORING_ATTACH_ROOM_TO_HOUSE_GRIDS_FAILURE'

export const fetchHouseMonitoringAttachRoomToHouseGrid = (houseGrid, room) => {
    return dispatch => {
        const token = localStorage.getItem('id_token');
        console.log(houseGrid)
        console.log(room)
        dispatch(fetchHouseMonitoringAttachRoomToHouseGridStarted(houseGrid, room));
        axios.post("http://localhost:8443/house-grid-configuration/house-grids/" + houseGrid + "/rooms?room-name=" + room,
            null,
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'text/plain',
                }
            })
            .then(res => {
                dispatch(fetchHouseMonitoringAttachRoomToHouseGridSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchHouseMonitoringAttachRoomToHouseGridFailure(err.message));
            });
    };
};


////// SEE ROOMS ATTACH TO GRID - US149 //////
export const FETCH_HOUSE_MONITORING_ROOMS_ATTACH_TO_GRID_STARTED = 'FETCH_HOUSE_MONITORING_ROOMS_ATTACH_TO_GRID_STARTED'
export const FETCH_HOUSE_MONITORING_ROOMS_ATTACH_TO_GRID_SUCCESS = 'FETCH_HOUSE_MONITORING_ROOMS_ATTACH_TO_GRID_SUCCESS'
export const FETCH_HOUSE_MONITORING_ROOMS_ATTACH_TO_GRID_FAILURE = 'FETCH_HOUSE_MONITORING_ROOMS_ATTACH_TO_GRID_FAILURE'

export const fetchRoomsInHouseGrid = (hgCode) => {
    return dispatch => {
        const token = localStorage.getItem('id_token');
        console.log(hgCode);

        dispatch(fetchHouseMonitoringRoomsInHouseGridStarted(hgCode));

        // /house-grids/{house-grid-code}/rooms

        axios.get("http://localhost:8443/house-grid-configuration/house-grids/" + hgCode + "/rooms",

            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'text/plain',
                }
            })
            .then(res => {
                console.log("SUC");
                dispatch(fetchHouseMonitoringRoomsInHouseGridSuccess(res.data))
            })
            .catch(err => {
                console.log("ERR");
                dispatch(fetchHouseMonitoringRoomsInHouseGridFailure(err.message));
            });
    };
};

export function fetchHouseMonitoringRoomsInHouseGridStarted() {
    return {
        type: FETCH_HOUSE_MONITORING_ROOMS_ATTACH_TO_GRID_STARTED,

    }
}

export function fetchHouseMonitoringRoomsInHouseGridSuccess(rooms) {
    return {
        type: FETCH_HOUSE_MONITORING_ROOMS_ATTACH_TO_GRID_SUCCESS,
        payload: {
            data:
                [...rooms]
        }

    }
}

export function fetchHouseMonitoringRoomsInHouseGridFailure(message) {
    return {
        type: FETCH_HOUSE_MONITORING_ROOMS_ATTACH_TO_GRID_FAILURE,
        payload: {
            error: message
        }
    }
}
////// ---- //////


////// DETACH ROOM TO HOUSE GRIDS - US149 ///////
export const FETCH_HOUSE_MONITORING_DETACH_ROOM_TO_HOUSE_GRIDS_STARTED = 'FETCH_HOUSE_MONITORING_DETACH_ROOM_TO_HOUSE_GRIDS_STARTED'
export const FETCH_HOUSE_MONITORING_DETACH_ROOM_TO_HOUSE_GRIDS_SUCCESS = 'FETCH_HOUSE_MONITORING_DETACH_ROOM_TO_HOUSE_GRIDS_SUCCESS'
export const FETCH_HOUSE_MONITORING_DETACH_ROOM_TO_HOUSE_GRIDS_FAILURE = 'FETCH_HOUSE_MONITORING_DETACH_ROOM_TO_HOUSE_GRIDS_FAILURE'
/*
axios.delete(URL, {
 data: { foo: 'bar' }
})
 */
export const fetchHouseMonitoringDetachRoomToHouseGrid = (houseGrid, houseGridForRooms) => {
    return dispatch => {
        const token = localStorage.getItem('id_token');
        console.log(houseGrid)
        console.log(houseGridForRooms)
        dispatch(fetchHouseMonitoringDetachRoomToHouseGridStarted(houseGrid, houseGridForRooms));
        axios.delete("http://localhost:8443/house-grid-configuration/house-grids/" + houseGrid + "/rooms?room-name=" + houseGridForRooms,

            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'text/plain',
                }
            })
            .then(res => {
                dispatch(fetchHouseMonitoringDetachRoomToHouseGridSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchHouseMonitoringDetachRoomToHouseGridFailure(err.message));
            });
    };
};

export function fetchHouseMonitoringDetachRoomToHouseGridStarted() {
    return {
        type: FETCH_HOUSE_MONITORING_DETACH_ROOM_TO_HOUSE_GRIDS_STARTED,

    }
}

export function fetchHouseMonitoringDetachRoomToHouseGridSuccess(houseMonitoring) {
    return {
        type: FETCH_HOUSE_MONITORING_DETACH_ROOM_TO_HOUSE_GRIDS_SUCCESS,
        payload: {
            data: houseMonitoring
        }
    }
}

export function fetchHouseMonitoringDetachRoomToHouseGridFailure(message) {
    return {
        type: FETCH_HOUSE_MONITORING_DETACH_ROOM_TO_HOUSE_GRIDS_FAILURE,
        payload: {
            error: message
        }
    }
}
////// ---- //////


export function fetchHouseMonitoringAttachRoomToHouseGridStarted() {
    return {
        type: FETCH_HOUSE_MONITORING_ATTACH_ROOM_TO_HOUSE_GRIDS_STARTED,

    }
}

export function fetchHouseMonitoringAttachRoomToHouseGridSuccess(houseMonitoring) {
    return {
        type: FETCH_HOUSE_MONITORING_ATTACH_ROOM_TO_HOUSE_GRIDS_SUCCESS,
        payload: {
            data: houseMonitoring
        }
    }
}

export function fetchHouseMonitoringAttachRoomToHouseGridFailure(message) {
    return {
        type: FETCH_HOUSE_MONITORING_ATTACH_ROOM_TO_HOUSE_GRIDS_FAILURE,
        payload: {
            error: message
        }
    }
}