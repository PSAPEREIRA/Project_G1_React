import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchSensorsByLink} from "./actionFetchSensorsByLink";

class UI108RoomsAttributes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            room: '',
            count: 0
    };

    }
        handleClick = (link) => {
        this.props.onFetchSensors(link);
        this.setState({
            room: this.props.row.name,
        })
    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps)
        if (this.props.name !== nextProps.name) {
            return true;
        }
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }

    render() {
        const {row} = this.props;
        return (
            <div>
                <p><strong>Name of Room: </strong>{row.name}</p>
                <p><strong>Description: </strong>{row.description}</p>
                <p><strong>House Floor: </strong>{row.houseFloor}</p>
                <p><strong>Height: </strong>{row.height}</p>
                <p><strong>Width: </strong>{row.width}</p>
                <p><strong>Length: </strong>{row.length}</p>

                <button
                    name={this.props.name}
                    onClick={() => this.setState(state => ({count: state.count + 1}),() => this.handleClick(row.links[1].href))}>List Of Sensors</button>
                {this.props.sensors.data && this.state.room===row.name && this.props.sensors.data.map((sensor, i) =>
                    <p key={i}>{i}: {sensor.name}</p>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sensors: {
            loading: state.roomSensRed.sensors.loading,
            data: state.roomSensRed.sensors.data,
            error: state.roomSensRed.sensors.error,
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchSensors: (link) => {
            dispatch(fetchSensorsByLink(link))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UI108RoomsAttributes);