import React, {Component} from "react";
import UI011ListOfSensorsToRemove from "./UI011ListOfSensorsToRemove";
import {fetchSensorsInGA} from "./actionFetchSensorsInGa";
import connect from "react-redux/es/connect/connect";

class UI011SelectGeoArea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }

    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
        this.props.onFetchSensorsInGA(e.target.value)
    }


    render() {
        const {data} = this.props;
        return (
            <div>
                <select className="browser-default"
                        ref="ballManipuation" onChange={this.handleChange}>
                    {data.map(function (row, key) {
                        return (
                            <option key={key} value={row.key}>{row.name}</option>)
                    })}
                </select>
                <UI011ListOfSensorsToRemove geographicArea = {this.state.value} data = {this.props.sensors} />
            </div>
        )

    }
}

const
    mapStateToProps = (state) => {
        return {
            sensors: {
                loading: state.gaSensorsRed.sensors.loading,
                data: state.gaSensorsRed.sensors.data,
                error: state.gaSensorsRed.sensors.error,
            }
        }
    }


const
    mapDispatchToProps = (dispatch) => {
        return {
            onFetchSensorsInGA: (name) => {
                dispatch(fetchSensorsInGA(name))
            }
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(UI011SelectGeoArea)