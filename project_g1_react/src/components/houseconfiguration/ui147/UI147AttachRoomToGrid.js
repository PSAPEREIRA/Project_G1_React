import React, {Component} from 'react';
import UI147SeeRoomsWithoutGrid from "./UI147SeeRoomsWithoutGrid";
import UI147SeeHouseGrids from "./UI147SeeHouseGrids";
import connect from "react-redux/es/connect/connect";
import 'react-daypicker/lib/DayPicker.css';

import UI147Button from './UI147Button';

import {fetchRoomsWithoutGrid,fetchHouseGrids,fetchHouseMonitoringAttachRoomToHouseGrid} from "../../../actions/actionsUI147RoomsWithoutGrid";


class UI147AttachRoomToGrid extends Component {

    componentDidMount() {
        this.props.onFetchRooms();
        this.props.onFetchHouseGrids();
    }

    constructor(props) {
        super(props);
        this.state = {
            houseGrid: "",
            room: ""
        };
    }

    updateInputInitial = event => {
        console.log("INFO-Grid: " + event.target.innerText);
        //alert ('the chosen Grid is: '+event.target.innerText);

        document.getElementById('grid').innerHTML = `Chosen GRID is: <b>$event.target.innerText<b>`;

        this.setState({
            houseGrid: event.target.innerText
        });
    };

    updateInputFinal = event => {
        console.log("INFO-Room: " + event.target.innerText);
        //alert ('the chosen Room is: '+event.target.innerText);

        document.getElementById('room').innerHTML = `Chosen ROOM is: <b>$event.target.innerText<b>`;

        this.setState({
            room: event.target.innerText
        });
    };

    handleClick = () => {
        if (this.state.houseGrid.trim() && this.state.room.trim()) {
            this.props.onSubmit(this.state.houseGrid, this.state.room);
            this.setState({houseGrid: ""});
            this.setState({room: ""});
            this.setState({
            })

            alert('Room: ['+this.state.room+'] Attach in House Grid: ['+this.state.houseGrid+'] with success.')

            this.props.history.push('/house-configuration/')

        } else {
            alert('Error: no data');
        }
    }

    render() {
                    const {data} = this.props.houseMonitoring.data;


                    const rows = this.props.rooms.data.map((row, index) => {
                        return (

                            <div key={index}>
                                <div>
                                    <UI147SeeRoomsWithoutGrid row={row}/>
                                </div>
                            </div>
                        )
                    })

                    const lines = this.props.houseGrids.data.map((line, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <UI147SeeHouseGrids line={line}/>
                                </div>
                            </div>
                        )
                    })

                    console.log('Info:'+{lines});

                    return (
                        <table id="table_view" >
                            <tr>
                                <td id="maxwidth">House Grids:</td>
                                <td id="maxwidth">Rooms Without Grid:</td>
                            </tr>

                            <tr>
                                <td id="grid"></td>
                                <td id="room"></td>
                            </tr>

                            <tr>
                                <td><div onClick={this.updateInputInitial}>{lines}</div></td>
                                <td><div onClick={this.updateInputFinal}>{rows}</div></td>
                            </tr>
                            <tr>
                                <td colspan="2" id="text_center"><UI147Button handleClick={this.handleClick} data={data}/></td>
                            </tr>
                        </table>
                    )
    }
}

const mapStateToProps = (state) => {
    return {
        rooms: {
            loading: state.roomRed.rooms.loading,
            data: state.roomRed.rooms.data,
            error: state.roomRed.rooms.error,
        },
        houseGrids: {
            loading: state.gridRed.houseGrids.loading,
            data: state.gridRed.houseGrids.data,
            error: state.gridRed.houseGrids.error,
        },
        houseMonitoring: {
            loading: state.houseMonitoringRed.houseMonitoring.loading,
            data: state.houseMonitoringRed.houseMonitoring.data,
            error: state.houseMonitoringRed.houseMonitoring.error,
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchRooms: () => {
            dispatch(fetchRoomsWithoutGrid())
        },
        onFetchHouseGrids: () => {
            dispatch(fetchHouseGrids())
        },
        onSubmit: (houseGrid, room) => {
            dispatch(fetchHouseMonitoringAttachRoomToHouseGrid(houseGrid, room))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UI147AttachRoomToGrid);
