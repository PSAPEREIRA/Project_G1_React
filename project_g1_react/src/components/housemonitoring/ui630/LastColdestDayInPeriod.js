import React, {Component} from 'react';
import {connect} from "react-redux";
import {lcdOnPeriod} from "../../../actions/actionsHouseMonitoring";

class LastColdestDayInPeriod extends Component {
    // console.log(props)
    //
    // setTimeout(()=>{
    //     props.history.push('/about')},
    //     2000);

    state = {
        startDate: '',
        endDate:''

    };

    componentDidMount() {
        console.log(this.props)
    }

    handleChangeSD = (e) => {
        this.setState({
            startDate: e.target.value
        })
    };

    handleChangeFD = (e) => {
        this.setState({
            endDate: e.target.value
        })
    };


    handleClick = () => {
        console.log(this.state);
        this.props.actionLCDay(this.state.startDate,this.state.endDate);
    };

    // updateInputInitial = input => {
    //     this.setState({
    //         date: input
    //     });
    // };

    render() {
        return (
            <div>
                <h4> LastColdestDayInPeriod</h4>
                <p>
                    You want to know last coldest day in a period? Please select the period limits!
                </p>
                <input type='date' onChange={this.handleChangeSD} value={this.state.startDate}/>
                <br /><div id="show">This is the value of the input : {this.state.startDate}</div><br/>
                <input type='date' onChange={this.handleChangeFD} value={this.state.endDate}/>
                <br />
                <div id="show">This is the value of the input : {this.state.endDate}</div><br/>
                <button className="btn black" onClick={this.handleClick}>
                    Click me!
                </button>
                <p>The sum of the rainfall on the selected day is :{this.props.lcDay} </p>
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return {

        lcDay: state.houseMonitoringRed.lcDay.value

    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        actionLCDay: (sDate,eDate) => {
            dispatch(lcdOnPeriod(sDate,eDate))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LastColdestDayInPeriod);