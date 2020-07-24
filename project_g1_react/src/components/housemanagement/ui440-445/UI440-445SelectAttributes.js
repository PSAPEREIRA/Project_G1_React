import React, {Component} from 'react'
import {connect} from "react-redux";
import {fetchRooms} from "../../../actions/actionsRoom";
import {getRoomComfortLevel} from "./actionRoomComfortLevel";

class UI440TemperatureFellBelowComfortLevel extends Component {

    componentDidMount() {
        this.props.onFetchRoom();
    }

    constructor(props) {
        super(props);
        this.state = {
            room: '',
            option: '',
            category: '',
            firstDate: '',
            secondDate: '',
        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleClick = () => {
        if (this.state.room.trim() && this.state.category.trim() && this.state.firstDate.trim() && this.state.secondDate.trim()) {
            this.props.onGetTemperatureFellBelow(this.state.room, this.state.option, this.state.category, this.state.firstDate, this.state.secondDate);
        } else {
            alert('Missing input data, please check all inputs');
        }
    };

    render() {
        const {loading, error, data} = this.props.rooms;
        if (loading === true) {
            return (<h1>Loading ....</h1>);
        } else {
            if (error !== null) {
                return (<h1>Error ....</h1>);
            } else {
                if (data.length > 0) {
                    return (
                        <div className={"ComfortLevelDiv"}>
                            <h5 className={"TitleChooseRoom"}>Please choose the room that you want</h5>
                            <form onSubmit={e => {
                                e.preventDefault();
                            }}>
                                <select name="room" className="browser-default"
                                        ref="ballManipuation" onChange={(e) => this.handleChange(e)}>
                                    {data.map(function (row, key) {
                                        return (
                                            <option key={key} value={row.key}>{row.name}</option>
                                        )
                                    })}
                                </select>

                                <h5 className={"TitleOptionComfortLevel"}> Choose the option Lower or Higher</h5>

                                <select name="option" className="browser-default"
                                        ref="ballManipuation" onChange={(e) => this.handleChange(e)}
                                        defaultValue={'DEFAULT'}>
                                    <option value="DEFAULT" disabled>Choose a option</option>
                                    <option value="HIGHER">Higher</option>
                                    <option value="LOWER">Lower</option>
                                </select>

                                <h5 className={"TitleCategory"}>Please choose the category that you want</h5>

                                <select name="category" className="browser-default"
                                        ref="ballManipuation" onChange={(e) => this.handleChange(e)}
                                        defaultValue={'DEFAULT'}>
                                    <option value="DEFAULT" disabled>Choose a category</option>
                                    <option value="1">I</option>
                                    <option value="2">II</option>
                                    <option value="3">III</option>
                                </select>
                                <div className={"DatesDiv"}>
                                    <h5 className={"TitleComfortLevelDate"}>Please enter the initial date</h5>

                                    <input name="firstDate" type="date" onChange={(e) => this.handleChange(e)}
                                           value={this.state.firstDate}/>

                                    <h5>Please enter the final date</h5>

                                    <input name="secondDate" type="date" onChange={(e) => this.handleChange(e)}
                                           value={this.state.secondDate}/>

                                </div>
                                <button className={"ButtonComfortLevel"} onClick={this.handleClick}> Get Instants
                                </button>
                                {this.props.houseManagement.data && this.props.houseManagement.data.length === 0}
                                {/*&&*/}
                                {/*<h5>No readings out of comfort level on selected period</h5>}*/}
                                <table>
                                    <tr>
                                        <th>Number</th>
                                        <th>Instant</th>
                                    </tr>

                                    {this.props.houseManagement.data.length > 0 && this.props.houseManagement.data && this.props.houseManagement.data.map((number, i) =>
                                        <tr>
                                            <td key={i}>{i+1}</td>
                                            <td key={i}>{number}</td>
                                        </tr>)}
                                </table>
                            </form>
                        </div>
                    )
                } else {
                    return (
                        <h1><img alt="database" id="data_info" src={require('../../../imgs/no-database.png')}/>No data
                            ....</h1>);
                }
            }
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
        houseManagement: {
            data: state.houseManagementRed.houseManagement.data,
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchRoom: () => {
            dispatch(fetchRooms())
        },
        onGetTemperatureFellBelow: (room, option, category, firstDate, secondDate) => {
            dispatch(getRoomComfortLevel(room, option, category, firstDate, secondDate))

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UI440TemperatureFellBelowComfortLevel)