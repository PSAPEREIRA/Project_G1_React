import React, {Component} from 'react'
import 'react-daypicker/lib/DayPicker.css';
import connect from "react-redux/es/connect/connect";
import {fetchHouseMonitoringHighestTemperatureAmplitudeDay,} from "../../../actions/actionsHouseMonitoring";
import UI633Button from "./UI633Button";

class UI633HighestTemperatureAmplitudeInPeriod extends Component {


    constructor(props) {
        super(props);
        this.state = {
            initialDate: "",
            finalDate: ""
        };
    }

    updateInputInitial = input => {
        this.setState({
            initialDate: input
        });
    };

    updateInputFinal = input => {
        this.setState({
            finalDate: input
        });
    };

    handleClick = () => {
        if (this.state.initialDate.trim() && this.state.finalDate.trim()) {
            this.props.onSubmit(this.state.initialDate, this.state.finalDate);
            this.setState({initialDate: ""});
            this.setState({finalDate: ""});
            this.setState({
            })
        } else {
            alert('Error: no data');
        }
    }

    render() {
        const {data} = this.props.houseMonitoring.data;
        return (
            <div>
                <p>Initial Date</p>
                <input type="date" onChange={(e) => this.updateInputInitial(e.target.value)}
                       value={this.state.initialDate}/>
                <p>Final Date</p>
                <input type="date" onChange={(e) => this.updateInputFinal(e.target.value)}
                       value={this.state.finalDate}/>
                <UI633Button handleClick={this.handleClick} data={data}/>
            </div>
        )
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
            onSubmit: (initialDate, finalDate) => {
                dispatch(fetchHouseMonitoringHighestTemperatureAmplitudeDay(initialDate, finalDate))
            },
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(UI633HighestTemperatureAmplitudeInPeriod)
