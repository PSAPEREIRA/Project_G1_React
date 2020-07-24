import React, {Component} from 'react'
import 'react-daypicker/lib/DayPicker.css';
import connect from "react-redux/es/connect/connect";
import UI265Button from "./UI265Button";
import {importSensorReadingsOfRoom} from "./actionImportSensorReadingsOfRoom";
import FileImg from "../../../imgs/ficheiro.png";

class UI265ImportSensorsReadingsOfRoom extends Component {

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
        const {data, error, loading} = this.props.roomSensorReadings;
        if (loading === true) {
            return (<h1>Loading ....</h1>);
        } else {
            if (error !== null) {
                return (<h1>Error ....</h1>);
            } else {
                return (
                    <div className={"ImportSensorsReadingsDiv"}>
                        <p>Please enter the path of the file <img className={"File"} src={FileImg} alt='File'/></p>
                        <form onSubmit={e => {
                            e.preventDefault();
                        }}>
                            <input onChange={(e) => this.updateInput(e.target.value)}
                                   value={this.state.path}/>
                            <UI265Button handleClick={this.handleClick} data={data}/>
                        </form>
                    </div>
                )

            }
        }
    }
}

const
    mapStateToProps = (state) => {
        return {
            roomSensorReadings: {
                loading: state.importRed.roomSensorReadings.loading,
                data: state.importRed.roomSensorReadings.data,
                error: state.importRed.roomSensorReadings.error
            }
        }
    }

const
    mapDispatchToProps = (dispatch) => {
        return {
            onSubmit: (path) => {

                dispatch(importSensorReadingsOfRoom(path))
            },
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(UI265ImportSensorsReadingsOfRoom)
