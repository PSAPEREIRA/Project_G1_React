import React, {Component} from 'react';
import UI149SeeRoomsWithoutGrid from "./UI149SeeRoomsWithoutGrid";
import UI149SeeHouseGrids from "./UI149SeeHouseGrids";
import connect from "react-redux/es/connect/connect";
import 'react-daypicker/lib/DayPicker.css';

import UI149Button from './UI149Button';

import {fetchHouseGrids,fetchHouseMonitoringDetachRoomToHouseGrid} from "../../../actions/actionsUI147RoomsWithoutGrid";
import {fetchRooms} from "../../../actions/actionsRoom";

// fetchHouseMonitoringRoomsInHouseGrid

class UI149DettachRoomToGrid extends Component {

    componentDidMount() {
        this.props.onFetchRooms();
        this.props.onFetchHouseGrids();
        this.props.onSubmitTwo();
    }

    constructor(props) {
        super(props);
        this.state = {
            houseGrid: "",
            room: "",
            houseGridForRooms: "",

        };

        this.buttonClickGrid = this.buttonClickGrid.bind(this);
        this.secondFun = this.secondFun.bind(this);
    }

    render() {

                    const {data} = this.props.houseMonitoring.data;

                    const rows = this.props.rooms.data.map((row, index) => {
                        return (

                            <div key={index}>
                                <div>
                                    <UI149SeeRoomsWithoutGrid row={row}/>
                                </div>
                            </div>
                        )
                    })

                    const lines = this.props.houseGrids.data.map((line, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <UI149SeeHouseGrids line={line}/>
                                </div>
                            </div>
                        )
                    })

                    console.log('Info:'+{lines});

                    return (
                        <table id="table_view" >
                            <tr>
                                <td id="maxwidth">House Grids:</td>
                                <td id="maxwidth">Rooms of Grid:</td>
                            </tr>

                            <tr>
                                <td id="grid"></td>
                                <td id="room"></td>
                            </tr>

                            <tr>
                                <td><div onClick={this.buttonClickGrid}>{lines}</div></td>
                                <td><div onClick={this.buttonClickRoom} id="rows">{rows}</div></td>
                            </tr>
                            <tr>
                                <td colspan="2" id="text_center"><UI149Button handleClick={this.handleClick} data={data}/></td>
                            </tr>
                        </table>
                    )
                }

    buttonClickGrid = event => {

      //  const fooElem = document.getElementById('rows').innerText;

        //if (! fooElem == ' '){
        //    document.getElementById('rows').innerHTML = ' ';
        //}

        this.setState({
            houseGridForRooms: event.target.innerText
        });

        console.log("INFO-Room: " + event.target.innerText);

        document.getElementById('grid').innerHTML = `Chosen GRID is: <b>$event.target.innerText<b>`;

        document.getElementById('room').innerHTML = ' ';

        //const inner = this.setState({houseGridForRooms: event.target.innerText});

        this.secondFun()
    }


    secondFun() {

        if (this.state.houseGridForRooms.trim()) {
            this.props.onSubmitTwo(this.state.houseGridForRooms);
            this.setState({houseGridForRooms: ""});
            this.setState({
            })

        } else {
            //alert('Error: no data');
            alert('Are you sure?\nIf so, Click Again');
        }
    }

    buttonClickRoom = event => {
        //console.log("INFO-Room: " + event.target.innerText);

        document.getElementById('room').innerHTML = `Chosen ROOM is: <b>$event.target.innerText<b>`;

        this.setState({
            room: event.target.innerText
        });
    };

    handleClick = () => {
        if (this.state.houseGridForRooms.trim() && this.state.room.trim()) {
            this.props.onSubmit(this.state.houseGridForRooms, this.state.room);
            this.setState({houseGridForRooms: ""});
            this.setState({room: ""});
            this.setState({
            })

            //window.location.reload()

            alert('Room: ['+this.state.room+'] dettach of House Grid: ['+this.state.houseGridForRooms+'] with success.')

            this.props.history.push('/house-configuration/')

        } else {
            alert('Error: no data');
            //alert('Please, check again the House Grid and Room')
        }
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
            dispatch(fetchRooms())
        },
        onFetchHouseGrids: () => {
            dispatch(fetchHouseGrids())
        },
        onSubmit: (houseGrid, room) => {
            dispatch(fetchHouseMonitoringDetachRoomToHouseGrid(houseGrid, room))
        },
        onSubmitTwo: (houseGridForRooms) => {
                dispatch(fetchHouseGrids(houseGridForRooms))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UI149DettachRoomToGrid);
