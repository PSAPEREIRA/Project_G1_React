import React, {Component} from 'react';
import {editRooms} from "../../../actions/actionEditRoom";
import {connect} from "react-redux";

class UI109RoomsAttributes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isHidden: false,
            name: this.props.row.name,
            description: "",
            houseFloor: 0,
            height: 0,
            width: 0,
            length: 0,

        };

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleInputChange = attribute => event => {
            this.setState({[attribute]: event.target.value});
        };
    }

    handleSubmit() {
        this.setState({
            isHidden:true
        })
        this.props.onEditRooms(this.state)
    }


    render() {
        const {row} = this.props;
        return (
            <div>
                <p><strong>Name of Room: </strong>{row.name}</p>
                <p><strong>Description: </strong>{row.description}</p>
                <input value={this.state.description} type="text" name="description"
                       onChange={this.handleInputChange('description')}/>
                <p><strong>HouseFloor: </strong>{row.houseFloor}</p>
                <input value={this.state.houseFloor} type="text" name="houseFloor"
                       onChange={this.handleInputChange('houseFloor')}/>
                <p><strong>Height: </strong>{row.height}</p>
                <input value={this.state.height} type="text" name="height"
                       onChange={this.handleInputChange('height')}/>
                <p><strong>width: </strong>{row.width}</p>
                <input value={this.state.width} type="text" name="width"
                       onChange={this.handleInputChange('width')}/>
                <p><strong>length: </strong>{row.length}</p>
                <input value={this.state.length} type="text" name="length"
                       onChange={this.handleInputChange('length')}/>
                <button onClick={this.handleSubmit }> Edit</button>


            </div>
        )
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        onEditRooms: ({name, description, houseFloor, height, width, length}) => {
            dispatch(editRooms({name, description, houseFloor, height, width, length}))
        }

    }
};


export default connect(null, mapDispatchToProps)(UI109RoomsAttributes);