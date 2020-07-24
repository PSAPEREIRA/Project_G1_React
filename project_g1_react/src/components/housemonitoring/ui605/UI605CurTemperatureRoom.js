import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {fetchCurrentTemperatureInRoom} from "./actionFetchRoomCurTemp605";
import {fetchRooms} from "../../../actions/actionsRoom";



class UI605CurTemperatureRoom extends Component{

    state = {
        roomName: '',
    }

    componentDidMount() {
        this.props.onFetchRooms();
    }


    handleChange = (event) => {
        this.setState({roomName: event.target.value})
    }

    handleClick = () =>{
        this.props.getCurrentTemp(this.state.roomName)
    }


    render () {
        const {data} = this.props.rooms;
        return (
            <div className={"Div-CurrentTemperature-Room"} >
                <select className="browser-default" onChange={this.handleChange}>
                    {data.map(function (room, key) {
                        return (
                            <option key={key} value={room.key}>{room.name}</option>)
                    })}
                </select>
                <h5 className={"h5CurTemperature"}>Selected room is : {this.state.roomName}</h5>

                <button className="ButtonCurTemperatureRoom" onClick={this.handleClick}>
                   Current Temperature
                </button>
                <h4>The server response is : {this.props.response}</h4>
            </div>
        )

    }
}

const
    mapStateToProps = (state) => {
        return {
            rooms: {
                loading: state.roomRed.rooms.loading,
                data: state.roomRed.rooms.data,
                error: state.roomRed.rooms.error,
            },

            response: state.houseMonitoringRed.roomCurrentTemp
        }
    }


const
    mapDispatchToProps = (dispatch) => {
        return {
            onFetchRooms : () => dispatch (fetchRooms()),
            getCurrentTemp: (roomName) =>  dispatch(fetchCurrentTemperatureInRoom(roomName))
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(UI605CurTemperatureRoom)

