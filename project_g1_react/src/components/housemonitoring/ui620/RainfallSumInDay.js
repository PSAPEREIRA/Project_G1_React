import React, {Component} from 'react';
import {connect} from "react-redux";
import {rfSumOnDay} from "../../../actions/actionsHouseMonitoring";
import RainfallImg from '../../../imgs/Rainfall.png';


class Rainfall extends Component {
    // console.log(props)
    //
    // setTimeout(()=>{
    //     props.history.push('/about')},
    //     2000);

    state = {
        date: ''
    };

    componentDidMount() {
        console.log(this.props)
    }

    handleChange = (e) => {
        this.setState({
            date: e.target.value
        })
    };


    handleClick = () => {
        //     console.log(this.state.date)
        this.props.actionRfOnDay(this.state.date);
    };

    // updateInputInitial = input => {
    //     this.setState({
    //         date: input
    //     });
    // };

    render() {
        return (
            <div className={"Div-Total-Rainfall"}>
                <h4 className={"TitleTotalRainfall"}>Total Rainfall In House Area <img className={"imgRainfall"}
                                                                                       src={RainfallImg}
                                                                                       alt='Rainfall'/></h4>
                <form onSubmit={e => {
                    e.preventDefault();
                }}>
                    <input type='date' onChange={this.handleChange} value={this.state.date}/>
                    <button className="ButtonRainfall" onClick={this.handleClick}>
                        Total Rainfall
                    </button>
                </form>
                <p className={"ResultRainfall"}>The sum of the rainfall on the selected day is
                    :{this.props.sumRf.value} </p>
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        sumRf: {
            loading: state.houseMonitoringRed.sumRf.loading,
            error: state.houseMonitoringRed.sumRf.error,
            value: state.houseMonitoringRed.sumRf.value
        }
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        actionRfOnDay: (date) => {
            dispatch(rfSumOnDay(date))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rainfall);