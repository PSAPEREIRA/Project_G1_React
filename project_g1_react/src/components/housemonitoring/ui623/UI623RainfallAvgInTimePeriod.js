import React, {Component} from 'react';
import {connect} from "react-redux";
import {RainfallAvgInTimeInterval} from "../../../actions/actionsHouseMonitoring";
import ButtonRFA from "../ui623/ButtonRFA";

class RainfallAvg extends Component {

    constructor(props) {

        super(props)
        this.state = {
            initialDate: "",
            finalDate: ""

        }
    }

    handleClick = () => {
        if (this.state.initialDate.trim() && this.state.finalDate.trim()) {
            this.props.onSubmit(this.state.initialDate, this.state.finalDate);
            this.setState({initialDate: ""});
            this.setState({finalDate: ""});
        } else {
            alert('Error: no data');
        }
    }


    updateInputInitial = input => {
        this.setState({
            initialDate: input
        });
    };

    updateInputFinal = input => {
        this.setState({
            finalDate: input
        });
    };

    render() {

        /*const {data} = this.props.avgRf.value;*/

        return (
            <div>
                <p>Initial Date</p>
                <form onSubmit={e => {
                    e.preventDefault();
                }}>
                    <input type="date" onChange={(e) => this.updateInputInitial(e.target.value)}
                           value={this.state.initialDate}/>
                    <p>Final Date</p>
                    <input type="date" onChange={(e) => this.updateInputFinal(e.target.value)}
                           value={this.state.finalDate}/>
                    <ButtonRFA handleClick={this.handleClick} data={this.props.avgRf.value}/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        avgRf: {
            loading: state.houseMonitoringRed.avgRf.loading,
            value: state.houseMonitoringRed.avgRf.value,
            error: state.houseMonitoringRed.avgRf.error,
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (initialDate, finalDate) => {
            dispatch(RainfallAvgInTimeInterval(initialDate, finalDate))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RainfallAvg);

