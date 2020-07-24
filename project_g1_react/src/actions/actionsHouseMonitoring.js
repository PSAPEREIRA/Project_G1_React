import axios from 'axios'

export const FETCH_HOUSE_MONITORING_CURRENT_TEMPERATURE_STARTED = 'FETCH_HOUSE_MONITORING_FIRST_HOTTEST_DAY_STARTED'
export const FETCH_HOUSE_MONITORING_CURRENT_TEMPERATURE_SUCCESS = 'FETCH_HOUSE_MONITORING_FIRST_HOTTEST_DAY_SUCCESS'
export const FETCH_HOUSE_MONITORING_CURRENT_TEMPERATURE_FAILURE = 'FETCH_HOUSE_MONITORING_FIRST_HOTTEST_DAY_FAILURE'


export const fetchHouseMonitoringCurrentTemperature = () => {
    return dispatch => {
        dispatch(fetchHouseMonitoringCurrentTemperatureStarted());
        const token = localStorage.getItem('id_token');
        axios.get('http://localhost:8443/house-monitoring/geographic-area/current-temperature',
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }).then(res => {
            dispatch(fetchHouseMonitoringCurrentTemperatureSuccess(res.data))
        })
            .catch(err => {
                dispatch(fetchHouseMonitoringCurrentTemperatureFailure(err.message));
            });
    };
};

export function fetchHouseMonitoringCurrentTemperatureStarted() {
    return {
        type: FETCH_HOUSE_MONITORING_CURRENT_TEMPERATURE_STARTED,

    }
}

export function fetchHouseMonitoringCurrentTemperatureSuccess(houseMonitoring) {
    return {
        type: FETCH_HOUSE_MONITORING_CURRENT_TEMPERATURE_SUCCESS,
        payload: {
            data: houseMonitoring
        }
    }
}

export function fetchHouseMonitoringCurrentTemperatureFailure(message) {
    return {
        type: FETCH_HOUSE_MONITORING_CURRENT_TEMPERATURE_FAILURE,
        payload: {
            error: message
        }
    }
}


export const FETCH_HOUSE_MONITORING_HIGHEST_TEMPERATURE_AMPLITUDE_STARTED = 'FETCH_HOUSE_MONITORING_HIGHEST_TEMPERATURE_AMPLITUDE_STARTED'
export const FETCH_HOUSE_MONITORING_HIGHEST_TEMPERATURE_AMPLITUDE_SUCCESS = 'FETCH_HOUSE_MONITORING_HIGHEST_TEMPERATURE_AMPLITUDE_SUCCESS'
export const FETCH_HOUSE_MONITORING_HIGHEST_TEMPERATURE_AMPLITUDE_FAILURE = 'FETCH_HOUSE_MONITORING_HIGHEST_TEMPERATURE_AMPLITUDE_FAILURE'

export const fetchHouseMonitoringHighestTemperatureAmplitudeDay = (initialDate, finalDate) => {
    return dispatch => {
        dispatch(fetchHouseMonitoringHighestTemperatureAmplitudeStarted(initialDate, finalDate));
        const token = localStorage.getItem('id_token');
        axios.get('http://localhost:8443/house-monitoring/geographic-area/sensors/highest-temperature-amplitude/?s=' + initialDate + '&e=' + finalDate, {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(res => {
                dispatch(fetchHouseMonitoringHighestTemperatureAmplitudeSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchHouseMonitoringHighestTemperatureAmplitudeFailure(err.message));
            });
    };
};

export function fetchHouseMonitoringHighestTemperatureAmplitudeStarted() {
    return {
        type: FETCH_HOUSE_MONITORING_HIGHEST_TEMPERATURE_AMPLITUDE_STARTED,

    }
}

export function fetchHouseMonitoringHighestTemperatureAmplitudeSuccess(houseMonitoring) {
    return {
        type: FETCH_HOUSE_MONITORING_HIGHEST_TEMPERATURE_AMPLITUDE_SUCCESS,
        payload: {
            data: houseMonitoring
        }
    }
}

export function fetchHouseMonitoringHighestTemperatureAmplitudeFailure(message) {
    return {
        type: FETCH_HOUSE_MONITORING_HIGHEST_TEMPERATURE_AMPLITUDE_FAILURE,
        payload: {
            error: message
        }
    }
}

export const FETCH_SUM_RAINFALL_STARTED = 'FETCH_SUM_RAINFALL_STARTED';
export const FETCH_SUM_RAINFALL_SUCCESS = 'FETCH_SUM_RAINFALL_SUCCESS';
export const FETCH_SUM_RAINFALL_FAILURE = 'FETCH_SUM_RAINFALL_FAILURE';


export const rfSumOnDay = (date) => {
    return dispatch => {
        dispatch(rfSumOnDayStarted());
        const token = localStorage.getItem('id_token');
        axios.get("http://localhost:8443/rainfall/sum?date=" + date,
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(rfSumOnDayHappy(res.data));
        })
            .catch(err => {
                dispatch(rfSumOnDaySad(err.message));
            });
    };
};


export function rfSumOnDayStarted() {
    return {
        type: FETCH_SUM_RAINFALL_STARTED
    }
}


export function rfSumOnDayHappy(sumValue) {
    return {
        type: FETCH_SUM_RAINFALL_SUCCESS,
        payload: sumValue
    }
}

export function rfSumOnDaySad(errMessage) {
    return {
        type: FETCH_SUM_RAINFALL_FAILURE,
        payload: errMessage
    }
}

export const FETCH_LCDAY_STARTED = 'FETCH_LCDAY_STARTED';
export const FETCH_LCDAY_SUCCESS = 'FETCH_LCDAY_SUCCESS';
export const FETCH_LCDAY_FAILURE = 'FETCH_LCDAY_FAILURE';


export const lcdOnPeriod = (sPeriod, ePeriod) => {
    return dispatch => {
        dispatch(lcdOnPeriodStarted());
        const token = localStorage.getItem('id_token');
        axios.get("http://localhost:8443/house-monitoring/house/geographic-area/last-coldest-day-in-period?s=" + sPeriod + "&e=" + ePeriod,
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(lcdOnPeriodHappy(res.data));
        })
            .catch(err => {
                dispatch(lcdOnPeriodSad(err.message));
            });
    };
};


export function lcdOnPeriodStarted() {
    return {
        type: FETCH_LCDAY_STARTED
    }
}


export function lcdOnPeriodHappy(value) {
    return {
        type: FETCH_LCDAY_SUCCESS,
        payload: value
    }
}

export function lcdOnPeriodSad(errMessage) {
    return {
        type: FETCH_LCDAY_FAILURE,
        payload: errMessage
    }
}


export const FETCH_AVG_RAINFALL_STARTED = 'FETCH_AVG_RAINFALL_STARTED';
export const FETCH_AVG_RAINFALL_SUCCESS = 'FETCH_AVG_RAINFALL_SUCCESS';
export const FETCH_AVG_RAINFALL_FAILURE = 'FETCH_AVG_RAINFALL_FAILURE';


export const RainfallAvgInTimeInterval = (initialDate,finalDate) => {
    return dispatch => {
        dispatch(RainfallAvgInTimeIntervalStarted());
        const token = localStorage.getItem('id_token');
        axios.get('http://localhost:8443/rainfall/avg/?s=' + initialDate + '&e=' + finalDate,
            {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(RainFallAvgInTimeIntervalSuccess(res.data));
        })
            .catch(err => {

                dispatch(RainFallAvgInTimeIntervalFailure(err.response.data));
            });
    };
};


export function RainfallAvgInTimeIntervalStarted() {
    return {
        type: FETCH_AVG_RAINFALL_STARTED
    }
}


export function RainFallAvgInTimeIntervalSuccess(AvgRf) {
    return {
        type: FETCH_AVG_RAINFALL_SUCCESS,
        payload: AvgRf
    }
}

export function RainFallAvgInTimeIntervalFailure(message) {
    return {
        type: FETCH_AVG_RAINFALL_FAILURE,
        payload: message
    }
}

export const FETCH_HOTTEST_DAY_IN_TIME_INTERVAL_STARTED = 'FETCH_HOTTEST_DAY_IN_TIME_INTERVAL_STARTED'
export const FETCH_HOTTEST_DAY_IN_TIME_INTERVAL_SUCCESS = 'FETCH_HOTTEST_DAY_IN_TIME_INTERVAL_SUCCESS'
export const FETCH_HOTTEST_DAY_IN_TIME_INTERVAL_FAILURE = 'FETCH_HOTTEST_DAY_IN_TIME_INTERVAL_FAILURE'

export const fetchHottestDayInTimeInterval = (initialDate, finalDate) => {
    return dispatch => {
        dispatch(fetchHottestDayInTimeIntervalStarted());
        const token = localStorage.getItem('id_token');
        axios.get('http://localhost:8443/house-monitoring/house/geographic-area/sensors/hottestDay/?s=' + initialDate + '&e=' + finalDate, {
                'headers': {
                    'Authorization': token,
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => {
            dispatch(fetchHottestDayInTimeIntervalSuccess(res.data))
        })
            .catch(err => {
                dispatch(fetchHottestDayInTimeIntervalFailure(err.message));
            });
    };
};

export function fetchHottestDayInTimeIntervalStarted() {
    return {
        type: FETCH_HOTTEST_DAY_IN_TIME_INTERVAL_STARTED,

    }
}

export function fetchHottestDayInTimeIntervalSuccess(hotDay) {
    return {
        type: FETCH_HOTTEST_DAY_IN_TIME_INTERVAL_SUCCESS,
        payload: hotDay


    }
}

export function fetchHottestDayInTimeIntervalFailure(message) {
    return {
        type: FETCH_HOTTEST_DAY_IN_TIME_INTERVAL_FAILURE,
        payload:message

    }
}