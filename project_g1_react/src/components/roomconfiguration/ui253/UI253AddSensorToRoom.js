import React, {Component} from 'react'
import {connect} from "react-redux";
import {addSensorToRoom, fetchRooms} from "../../../actions/actionsRoom";
import {fetchSensorTypes} from "../../../actions/actionFetchSensorTypes";

class UI253AddSensorToRoom extends Component {

    state = {
        roomName: '',
        newSensor: {
            idSensor: '',
            sensorName: '',
            sensorType: '',
            installationDate: '',
            sensorUnits: ''
        }
    };

    componentDidMount() {
        this.props.onFetchRoom();
        this.props.fetchSensorTypes();
    }

    handleChange = (e) => {

        this.setState({newSensor:{...this.state.newSensor,[e.target.name]: e.target.value}});

    };

    handleChangeDropName = (e) => {
        this.setState({
            roomName:e.target.value
        })
    };

    handleChangeDrop = (e) => {
        this.setState({
            newSensor:{...this.state.newSensor,sensorType: e.target.value}
        })
    };

    handleClick = () => {
        // if (this.state.sensorName.trim() && this.state.sensorType.trim()
        //     && this.state.idSensor.trim() && this.state.installationDate.trim() && this.state.unit.trim()) {
        //     this.props.onAddNewSensorToRoom(this.state.roomName, this.state.sensorName, this.state.sensorType,
        //          this.state.idSensor,this.state.installationDate, this.state.unit);
        //     this.setState({room: ""});
        //     this.setState({name: ""});
        //     this.setState({sensorType: ""});
        //     this.setState({idSensor: ""});
        //     this.setState({installationDate: ""});
        //     this.setState({unit: ""});
        //
        // } else {
        //     alert('Error: missing data data');
        // }

        this.props.actionAddNewSensor(this.state.roomName,this.state.newSensor);


    };

    render() {
        const {loading, error, roomData} = this.props.rooms;
        const {typesData} = this.props.sensorTypes;
        if (loading === true) {
            return (<h1>Loading ....</h1>);
        } else {
            if (error !== null) {
                return (<h1>Error ....</h1>);
            } else {
                if (roomData.length > 0) {
                    return (
                        <div className={"AddSensorToRoomDiv"}>
                            <h5 className={"TitleOfChosenRoom"}>Please choose the room that you want</h5>
                            <select className="browser-default" onChange={this.handleChangeDropName}>
                                {roomData.map(function (room, key) {
                                    return (
                                        <option key={key} value={room.key}>{room.name}</option>)
                                })}
                            </select>
                            <p> Id Sensor: <input value={this.state.newSensor.idSensor} type="text" name="idSensor"
                                                  onChange={this.handleChange}/></p>

                            <p> Name of Sensor: <input value={this.state.newSensor.sensorName} type="text" name="sensorName"
                                                       onChange={this.handleChange}/></p>

                            <h5 className={"TitleOfChosenRoom"}>Select the sensor type:</h5>
                            <select className="browser-default" onChange={this.handleChangeDrop}>
                                {typesData.map(function (type, key) {
                                    return (
                                        <option key={key} value={type.key}>{type.designation}</option>)
                                })}
                            </select>


                            {/*<p> Sensor Type: <input value={this.state.newSensor.sensorType} type="text" name="sensorType"*/}
                            {/*                        onChange={this.handleChange}/></p>*/}

                            <p>Installation Date</p>
                            <input name="installationDate" type="date" onChange={this.handleChange}
                                   value={this.state.newSensor.installationDate}/>

                            <p> Unit: <input value={this.state.newSensor.sensorUnits} type="text" name="sensorUnits"
                                             onChange={this.handleChange}/></p>

                            <button className={"Button253"} onClick={this.handleClick}> Submit Sensor</button>
                            <h5>{this.props.response}</h5>
                        </div>
                    )
                } else {
                    return (<h1><img alt="database" id="data_info" src={require('../../../imgs/no-database.png')}/>No data ....</h1>);
                }
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        rooms: {
            loading: state.roomRed.rooms.loading,
            roomData: state.roomRed.rooms.data,
            error: state.roomRed.rooms.error,
        },
        sensorTypes: {
            loadingTypes: state.roomSensRed.sensorTypes.loading,
            typesData: state.roomSensRed.sensorTypes.data,
            errorTypes: state.roomSensRed.sensorTypes.error,
        },


        response:state.roomRed.addSensorResponse
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchRoom: () => {
            dispatch(fetchRooms())
        },
        // onAddNewSensorToRoom: (room, name, sensorType, listOfStatus, idOfSensor, installationDate, unit) => {
        //     dispatch(addNewSensorToRoom(room, name, sensorType, listOfStatus, idOfSensor, installationDate, unit))
        //
        // }

        fetchSensorTypes:() =>{
            dispatch(fetchSensorTypes())
        },

        actionAddNewSensor:(roomName,newSensor) =>{
            dispatch(addSensorToRoom(roomName,newSensor))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UI253AddSensorToRoom)