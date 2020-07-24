import axios from 'axios'

export const FETCH_SENSORS_IN_GA_STARTED = 'FETCH_SENSORS_IN_GA_STARTED'
export const FETCH_SENSORS_IN_GA_SUCCESS = 'FETCH_SENSORS_IN_GA_SUCCESS'
export const FETCH_SENSORS_IN_GA_FAILURE = 'FETCH_SENSORS_IN_GA_FAILURE'

export const fetchSensorsInGA = (gaName) => {
    return dispatch => {
        dispatch(fetchSensorsInGAStarted());
        const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU2MDcxMTEzMH0.WN4dyaYDYICNCsGOykkj3SOE-mc_lXKjVaiZbyBIIHe9IHrgqUsw9PrxPSYSDo8pvPXRbNsRjYMy9vEETsguqg";
        axios.get('http://localhost:8443/geographic-area-configuration/geographic_areas/'+gaName+'/sensors',
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(fetchSensorsInGASuccess(res.data));
        })
            .catch(err => {
                dispatch(fetchSensorsInGAFailure(err.message));
            });
    };
};

export function fetchSensorsInGAStarted() {
    return {
        type: FETCH_SENSORS_IN_GA_STARTED,

    }
}

export function fetchSensorsInGASuccess(sensors) {
    console.log(">>>>>>fetch sensors:"+sensors[0].idOfSensor);
    return {
        type: FETCH_SENSORS_IN_GA_SUCCESS,
        payload: {
            data:
                [...sensors]
        }

    }
}

export function fetchSensorsInGAFailure(message) {
    return {
        type: FETCH_SENSORS_IN_GA_FAILURE,
        payload: {
            error: message
        }
    }
}

