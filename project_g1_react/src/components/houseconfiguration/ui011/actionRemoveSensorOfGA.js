import axios from 'axios'

export const REMOVE_SENSOR_OF_GA_STARTED = 'REMOVE_SENSOR_OF_GA_STARTED'
export const REMOVE_SENSOR_OF_GA_SUCCESS = 'REMOVE_SENSOR_OF_GA_SUCCESS'
export const REMOVE_SENSOR_OF_GA_FAILURE = 'REMOVE_SENSOR_OF_GA_FAILURE'

export const removeSensorOfGA = (gaName,sensor) => {
    return dispatch => {
        dispatch(removeSensorOfGAStarted());
        const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU2MDcxMTEzMH0.WN4dyaYDYICNCsGOykkj3SOE-mc_lXKjVaiZbyBIIHe9IHrgqUsw9PrxPSYSDo8pvPXRbNsRjYMy9vEETsguqg";
        axios.delete('http://localhost:8443/geographic-area-configuration/geographic_areas/'+gaName+'/sensors/'+sensor,
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(removeSensorOfGASuccess(res.data));
        })
            .catch(err => {
                dispatch(removeSensorOfGAFailure(err.message));
            });
    };
};

export function removeSensorOfGAStarted() {
    return {
        type: REMOVE_SENSOR_OF_GA_STARTED,

    }
}

export function removeSensorOfGASuccess(sensor) {
    return {
        type: REMOVE_SENSOR_OF_GA_SUCCESS,
        payload: {
            data: sensor
        }

    }
}

export function removeSensorOfGAFailure(message) {
    return {
        type: REMOVE_SENSOR_OF_GA_FAILURE,
        payload: {
            error: message
        }
    }
}

