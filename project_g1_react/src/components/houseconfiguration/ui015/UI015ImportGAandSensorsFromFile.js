import React, {Component} from 'react'
import 'react-daypicker/lib/DayPicker.css';
import connect from "react-redux/es/connect/connect";
import UI015Button from "./UI015Button";
import {importGAandSensors} from "./actionImportGAandSensors";


class UI015ImportGAandSensorsFromFile extends Component {

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
        const {loading, error, data} = this.props.geographicAreaSensors;
        if (loading === true) {
            return (<h1>Loading ....</h1>);
        } else {
            if (error !== null) {
                return (<h1>Error ....</h1>);
            } else {
                return (
                    <div>
                        <p>Please enter the path of the file</p>
                        <form onSubmit={e => {
                            e.preventDefault();
                        }}>
                            <input onChange={(e) => this.updateInput(e.target.value)}
                                   value={this.state.path}/>
                            <UI015Button handleClick={this.handleClick} data={data}/>
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
            geographicAreaSensors: {
                loading: state.importRed.geographicAreaSensors.loading,
                data: state.importRed.geographicAreaSensors.data,
                error: state.importRed.geographicAreaSensors.error,
            }
        }
    }

const
    mapDispatchToProps = (dispatch) => {
        return {
            onSubmit: (path) => {
                dispatch(importGAandSensors(path))
            },
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(UI015ImportGAandSensorsFromFile)
