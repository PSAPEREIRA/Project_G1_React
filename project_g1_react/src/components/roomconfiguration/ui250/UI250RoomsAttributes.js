import React, {Component} from 'react';
import {sensorsInRoom} from "../../../actions/actionSensorsInRoom";
import connect from "react-redux/es/connect/connect";

class UI250RoomsAttributes extends Component {

    constructor(props){
        super(props);
        this.state=
        {
            name:this.props.row.name
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.onFetchSensors(this.state.name)
    }


    render() {
        const {row} = this.props;
        console.log(row)
        return (
            <div id="box_button">
                <button onClick={this.handleSubmit}> List Of Sensors </button>
            </div>
        )
    }
}


const
    mapDispatchToProps = (dispatch) => {
        return {
            onFetchSensors: (name) => {
                dispatch(sensorsInRoom(name))
            }

        }
    };


export default connect(null,mapDispatchToProps)(UI250RoomsAttributes)
;