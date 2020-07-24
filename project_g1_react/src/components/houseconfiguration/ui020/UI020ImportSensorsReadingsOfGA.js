import React, {Component} from 'react'
import 'react-daypicker/lib/DayPicker.css';
import connect from "react-redux/es/connect/connect";
import UI020Button from "./UI020Button";
import {importSensorReadingsOfGA} from "./actionImportSensorReadingsOfGA";

class UI020ImportSensorsReadingsOfGA extends Component {

    constructor(props) {
        super(props);
        this.state = {
            path: "",
        };
    }

    updateInput = input => {
        this.setState({
            path: input
        });
    };


    handleClick = () => {
        if (this.state.path.trim()) {
            this.props.onSubmit(this.state.path);
            this.setState({path: ""});
        } else {
            alert('Error: no data');
        }
    }

    render() {

        const {data, error, loading} = this.props.geographicAreaSensorReadings;

        if (loading === true) {
            return (<h1>Loading ....</h1>);
        } else {
            if (error !== null) {
                return (<h1>Error ....</h1>);
            } else {
                return (
                    <div>
                        <p>Please enter the path of the file</p>
                        <input onChange={(e) => this.updateInput(e.target.value)}
                               value={this.state.path}/>
                        <UI020Button handleClick={this.handleClick} data={data}/>
                    </div>
                )

            }
        }
    }
}

const
    mapStateToProps = (state) => {
        return {
            geographicAreaSensorReadings: {
                loading: state.importRed.geographicAreaSensorReadings.loading,
                data: state.importRed.geographicAreaSensorReadings.data,
                error: state.importRed.geographicAreaSensorReadings.error
            }
        }
    }

const
    mapDispatchToProps = (dispatch) => {
        return {
            onSubmit: (path) => {
                dispatch(importSensorReadingsOfGA(path))
            },
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(UI020ImportSensorsReadingsOfGA)
