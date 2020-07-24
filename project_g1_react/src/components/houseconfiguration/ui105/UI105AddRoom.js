import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {addRoom} from "../../../actions/actionsAddRoom_105";
import {Button} from "reactstrap";


class UI105AddRoom extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {name: '', description:'', houseFloor: '', height: '', width: '', length: ''};
        this.handleInputChange = attribute => event => {
            this.setState({[attribute]: event.target.value});
        };
    }

    handleSubmit() {
        this.props.onAddRooms(this.state);
        this.props.history.push('/house-configuration')
        }




    render() {
        return (
            <> <label> Name: <input value={this.state.name} type="text" name="name"
                                    onChange={this.handleInputChange('name')}/> </label>

                <label> Description: <input value={this.state.description} type="text" name="description"
                                            onChange={this.handleInputChange('description')}/> </label>

                <label> HouseFloor: <input value={this.state.houseFloor} type="number" name="houseFloor"
                                           onChange={this.handleInputChange('houseFloor')}/> </label>

                <label> Height: <input value={this.state.height} type="number" name="height"
                                       onChange={this.handleInputChange('height')}/> </label>

                <label> Width: <input value={this.state.width} type="number" name="width"
                                      onChange={this.handleInputChange('width')}/> </label>

                <label> Length: <input value={this.state.length} type="number" name="length"
                                       onChange={this.handleInputChange('length')}/> </label>

                <Button

                    onClick={this.handleSubmit}>Save new room
                    configuration</Button> </>)


    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddRooms: ({name, description, houseFloor, height, width, length}) => {
            dispatch(addRoom({name, description, houseFloor, height, width, length}))
        }

    }
};

export default connect(null, mapDispatchToProps)(UI105AddRoom)