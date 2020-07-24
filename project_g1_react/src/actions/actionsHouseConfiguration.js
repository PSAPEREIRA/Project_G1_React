import axios from 'axios'

export const CHANGE_LOCATION_SUCCESS = 'CHANGE_LOCATION_SUCCESS';
export const CHANGE_LOCATION_LOADING = 'CHANGE_LOCATION_LOADING';
export const CHANGE_LOCATION_FAILURE = 'CHANGE_LOCATION_FAILURE';

export const changeHouseLocation = (geoName, location) => {

    // console.log("OBJ IN ACTION - "+location);
    // console.log(location);
    // console.log("LAT - "+location.lat);
    // console.log(location.lat);
    // console.log("LONG - "+location.long);
    // console.log(location.long);
    // console.log("ALT - "+location.alt);
    // console.log(location.alt);


    // console.log(lat);
    // console.log(long);
    // console.log(alt);


    return dispatch => {
        dispatch(changeHouseLocationStarted());
        const token = localStorage.getItem('id_token');
        axios.put('http://localhost:8443/house-configuration/location?geo-name='+geoName,
            {latitude:location.lat,longitude:location.long,altitude:location.alt},
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(changeHouseLocationSuccess(res.data));
        })
            .catch(err => {
                dispatch(changeHouseLocationFailure(err.message));
                // console.log(err);
                // console.log(err.response);
                // console.log(err.response.data);

            });
    };
};

export function changeHouseLocationStarted() {
    return {
        type: CHANGE_LOCATION_LOADING,

    }
}

export function changeHouseLocationSuccess(response) {
    return {
        type: CHANGE_LOCATION_SUCCESS,
        payload: response
    }
}

export function changeHouseLocationFailure(message) {
    return {
        type: CHANGE_LOCATION_FAILURE,
        payload: {
            error: message
        }
    }
}

export const FETCH_HOUSE_GEO_SUCCESS = 'FETCH_HOUSE_GEO_SUCCESS';
export const FETCH_HOUSE_GEO_LOADING = 'FETCH_HOUSE_GEO_LOADING';
export const FETCH_HOUSE_GEO_FAILURE = 'FETCH_HOUSE_GEO_FAILURE';

export const fetchHouseLocation = () => {


    return dispatch => {
        dispatch(fetchHouseLocationStarted());
        const token = localStorage.getItem('id_token');
        axios.get('http://localhost:8443/house-configuration/location',
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(fetchHouseLocationSuccess(res.data));
        })
            .catch(err => {
                dispatch(fetchHouseLocationFailure(err.response.data));
            });
    };
};

export function fetchHouseLocationStarted() {
    return {
        type: FETCH_HOUSE_GEO_LOADING,

    }
}

export function fetchHouseLocationSuccess(response) {
    return {
        type: FETCH_HOUSE_GEO_SUCCESS,
        payload: response
    }
}

export function fetchHouseLocationFailure(message) {
    return {
        type: FETCH_HOUSE_GEO_FAILURE,
        payload: {
            error: message
        }
    }
}

export const CREATE_HOUSEGRID_SUCCESS = 'CREATE_HOUSEGRID_SUCCESS';
export const CREATE_HOUSEGRID_LOADING = 'CREATE_HOUSEGRID_LOADING';
export const CREATE_HOUSEGRID_FAILURE = 'CREATE_HOUSEGRID_FAILURE';

export const createHouseGrid = (gridName,gridPower) => {

    return dispatch => {
        dispatch(createHouseGridStarted());
        const token = localStorage.getItem('id_token');
        axios.post('http://localhost:8443/house-grid-configuration/create-house-grid',
            {code:gridName,powerLimiter:gridPower},
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(createHouseGridSuccess(res.data));
        })
            .catch(err => {
                dispatch(createHouseGridFailure(err.response.data));


            });
    };
};

export function createHouseGridStarted() {
    return {
        type: CREATE_HOUSEGRID_LOADING,

    }
}

export function createHouseGridSuccess(response) {
    return {
        type: CREATE_HOUSEGRID_SUCCESS,
        payload: response
    }
}

export function createHouseGridFailure(message) {
    return {
        type: CREATE_HOUSEGRID_FAILURE,
        payload: {
            error: message
        }
    }
}