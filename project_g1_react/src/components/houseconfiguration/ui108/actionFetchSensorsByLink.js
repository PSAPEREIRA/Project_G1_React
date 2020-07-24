import axios from 'axios'

export const FETCH_SENSOR_BY_LINK_STARTED = 'FETCH_SENSOR_BY_LINK_STARTED'
export const FETCH_SENSOR_BY_LINK_SUCCESS = 'FETCH_SENSOR_BY_LINK_SUCCESS'
export const FETCH_SENSOR_BY_LINK_FAILURE = 'FETCH_SENSOR_BY_LINK_FAILURE'

export const fetchSensorsByLink = (link) => {
    return dispatch => {
        dispatch(fetchSensorsByLinkStarted());
        const token = localStorage.getItem('id_token');
        axios.get(link,
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(fetchSensorsByLinkSuccess(res.data));
        })
            .catch(err => {
                dispatch(fetchSensorsByLinkFailure(err.response.data));
            });
    };
};

export function fetchSensorsByLinkStarted() {
    return {
        type: FETCH_SENSOR_BY_LINK_STARTED,
    }
}

export function fetchSensorsByLinkSuccess(sensors) {
    return {
        type: FETCH_SENSOR_BY_LINK_SUCCESS,
        payload: {
            data:
                [...sensors]
        }

    }
}

export function fetchSensorsByLinkFailure(message) {
    return {
        type: FETCH_SENSOR_BY_LINK_FAILURE,
        payload: {
            error: message
        }
    }
}