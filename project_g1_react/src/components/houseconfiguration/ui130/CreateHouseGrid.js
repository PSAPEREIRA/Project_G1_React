import React, {Component} from 'react';
import {connect} from "react-redux";
import {createHouseGrid} from "../../../actions/actionsHouseConfiguration";


class CreateHouseGrid extends Component {

    state = {
        gridName: '',
        gridPower: ''
    };

    componentDidMount() {
    }

    handleChangeName = (e) => {
        this.setState({
            gridName: e.target.value,
        })
    };

    handleChangePower = (e) => {
        this.setState({
            gridPower: e.target.value,
        })
    };

    handleClick = () => {
        // console.log(this.state.gridName, this.state.gridPower);
        this.props.actionCreateHouseGrid(this.state.gridName, this.state.gridPower)
    };

    render() {
        return (
            <div>
                <p> Please insert a name for the House Grid: </p>
                <input type='text' onChange={this.handleChangeName} value={this.state.gridName}/>
                <p> Please select the maximum power limiter for the grid: </p>
                <input type='number' onChange={this.handleChangePower} value={this.state.gridPower}/>

                <button className="btn black" onClick={this.handleClick}>
                    Validate!
                </button>
                <p>The response of the server is: {this.props.response} </p>
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        response: state.houseConfigRed.response
    }

};


const mapDispatchToProps = (dispatch) => {
    return {
        actionCreateHouseGrid: (gridName, gridPower) => dispatch(createHouseGrid(gridName, gridPower))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CreateHouseGrid);