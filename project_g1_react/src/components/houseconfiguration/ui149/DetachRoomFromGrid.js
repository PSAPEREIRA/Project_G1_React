import React, {Component} from 'react';
import {connect} from "react-redux";
import {detachRoomFromHouseGrid, fetchHouseGrids} from "../../../actions/actionsHouseGrid";
import {fetchRooms} from "../../../actions/actionsRoom";




class DetachRoomFromGrid extends Component {

    state = {
      selectedRoom:'',
        selectedHg:''
    };

    componentDidMount() {
        this.props.onFetchHouseGrids();
        this.props.onFetchRoom();
    }
    handleChangeDropHG = (e) => {
        this.setState({
            selectedHg: e.target.value
        })
    };

    handleChangeDropRoom = (e) => {
        this.setState({
            selectedRoom: e.target.value
        })
    };
    handleClick = () => {
        // console.log(location)
        //  this.props.actionChangeHouseLocation(location,this.state.geo,this.state.location);
        // console.log(this.state)
        //  console.log(location)
        //  console.log(this.props)
       //   console.log(this.state);
        // this.props.actionChangeHouseLocation(this.state.geo,this.state.latitude,this.state.longitude,this.state.altitude);
        this.props.actionDetachRoomFromGrid(this.state.selectedHg,this.state.selectedRoom);



    };

    render() {
        const {loading, error, data} = this.props.houseGrids;
        const {roomData} = this.props.rooms;
        if (loading === true) {
            return (<h1>Loading ....</h1>);
        } else {
            if (error !== null) {
                return (<h1>Error ....</h1>);
            } else {
                if (data.length > 0) {
                    return (
                        <div className={"AddSensorToRoomDiv"}>
                            <h5 className={"TitleOfChosenRoom"}>Select a House Grid to detach room</h5>
                            <select className="browser-default" onChange={this.handleChangeDropHG}>
                                {data.map(function (hg, key) {
                                    return (
                                        <option key={key} value={hg.key}>{hg.code}</option>)
                                })}
                            </select>
                            <br>

                            </br>
                            <h5 className={"TitleOfChosenRoom"}>Select the room to detach</h5>
                            <select className="browser-default" onChange={this.handleChangeDropRoom}>
                                {roomData.map(function (room, key) {
                                    return (
                                        <option key={key} value={room.key}>{room.name}</option>)
                                })}
                            </select>

                            <button className={"Button253"} onClick={this.handleClick}> DETACH !!</button>

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
        houseGrids: {
            loading: state.houseConfigRed.houseGrids.loading,
            data: state.houseConfigRed.houseGrids.data,
            error: state.houseConfigRed.houseGrids.error,
        },
        rooms: {
            loading: state.roomRed.rooms.loading,
            roomData: state.roomRed.rooms.data,
            error: state.roomRed.rooms.error,
        },

        response:state.houseConfigRed.detachRoomFromHgResponse
    }

};


const mapDispatchToProps = (dispatch) => {
    return {
        onFetchHouseGrids: () => dispatch(fetchHouseGrids()),
        onFetchRoom: () => dispatch(fetchRooms()),
        actionDetachRoomFromGrid: (hg,room) => dispatch(detachRoomFromHouseGrid(hg,room))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(DetachRoomFromGrid);