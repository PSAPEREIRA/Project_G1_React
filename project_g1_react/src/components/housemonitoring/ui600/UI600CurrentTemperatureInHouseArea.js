import React, {Component} from "react";
import {fetchHouseMonitoringCurrentTemperature} from "../../../actions/actionsHouseMonitoring";
import connect from "react-redux/es/connect/connect";
import Temperature from '../../../imgs/Temperature_1.png';


class UI600CurrentTemperatureInHouseArea extends Component {

    componentDidMount() {
        this.props.onFetchHouseMonitoringCurrentTemperature();
    }


    render() {

        const reading1 = this.props.houseMonitoring.data.data;

        return (
            <div id="temp-desktop" >
                <img className={"TemperatureIMG"} src={Temperature} alt='Temperature' />
            <div>
                <h5 className={"CurrentTemperature"}>The current temperature in House Area is:</h5>
                {reading1 &&
                <h5 className={"CurrentTemperatureUnit"}>{reading1.value} º{reading1.unit}</h5>
                }
            </div>
            </div>
        );

    }
}

const
    mapStateToProps = (state) => {
        return {
            houseMonitoring: {
                loading: state.houseMonitoringRed.houseMonitoring.loading,
                data: state.houseMonitoringRed.houseMonitoring.data,
                error: state.houseMonitoringRed.houseMonitoring.error,
            }
        }
    }
const
    mapDispatchToProps = (dispatch) => {
        return {
            onFetchHouseMonitoringCurrentTemperature: () => {
                dispatch(fetchHouseMonitoringCurrentTemperature())
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(UI600CurrentTemperatureInHouseArea)