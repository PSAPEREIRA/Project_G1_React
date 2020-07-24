import React, {Component} from 'react';
import {connect} from "react-redux";
import RainfallImg from '../../../imgs/Rainfall.png';
import {RainfallAvgInTimeInterval} from "../../../actions/actionsHouseMonitoring";



class RainfallAvgInPeriod extends Component {


    state = {
        period: {
            start:'',
            end:''
        }
    };


    handleChangeStart = (e) => {
        this.setState({
            period:{...this.state.period,start:e.target.value}
        })
    };

    handleChangeEnd = (e) => {
        this.setState({
            period:{...this.state.period,end:e.target.value}
        })
    };


    handleClick = () => {
      //  console.log(this.state.period)
      //  console.log(this.state.period.start.length)
        if (this.state.period.start.length>0 && this.state.period.end.length>0){
            this.props.actionAvgOnPeriod(this.state.period.start,this.state.period.end);
        }
        else{
            alert("Please select both the start and end of the period to validate!")
        }
    };


    render() {
        return (
            <div className={"Div-Total-Rainfall"}>
                <h4 className={"TitleTotalRainfall"}>Average Rainfall On Given Period In House Area <img className={"imgRainfall"} src={RainfallImg} alt='Rainfall' /> </h4>
                <label>Start of period</label>
                <input type ='date' onChange={this.handleChangeStart} value={this.state.period.start}/>
                <label>End of period</label>
                <input type ='date' onChange={this.handleChangeEnd} value={this.state.period.end}/>
                <button className ="ButtonRainfall" onClick ={this.handleClick}>
                    Get average
                </button>
                <p className={"ResultRainfall"}>The rainfall average on the given period is : {this.props.avgRf.value}{this.props.avgRf.error} </p>
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        avgRf: {
            loading: state.houseMonitoringRed.avgRf.loading,
            error: state.houseMonitoringRed.avgRf.error,
            value: state.houseMonitoringRed.avgRf.value
        }
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        actionAvgOnPeriod: (s,e) => {
            dispatch(RainfallAvgInTimeInterval(s,e))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RainfallAvgInPeriod);