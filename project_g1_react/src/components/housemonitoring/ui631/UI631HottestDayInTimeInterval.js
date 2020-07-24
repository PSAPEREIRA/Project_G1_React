import React, {Component} from "react";
import {fetchHottestDayInTimeInterval} from "../../../actions/actionsHouseMonitoring";
import connect from "react-redux/es/connect/connect";
import SubmitDateButton from "../ui631/SubmitDateButton"


class UI631HottestDayInTimeInterval extends Component {

    constructor(props) {

        super(props)
        this.state = {
            initialDate: "",
            finalDate: ""

        }
    }

    handleClick = () => {
        if (this.state.initialDate.trim() && this.state.finalDate.trim()) {
            console.log(this.state)
            this.props.onSubmit(this.state.initialDate, this.state.finalDate);
            this.setState({initialDate: ""});
            this.setState({finalDate: ""});}
        else {
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

        /*const {data} = this.props.hotDay.value;*/

        return (
            <div>
                <p>Initial Date</p>
                <input type="date" onChange={(e) => this.updateInputInitial(e.target.value)}
                       value={this.state.initialDate}/>
                <p>Final Date</p>
                <input type="date" onChange={(e) => this.updateInputFinal(e.target.value)}
                       value={this.state.finalDate}/>
                <SubmitDateButton handleClick={this.handleClick} data={this.props.hotDay.value}/>

            </div>
        );
    }
}
    const mapStateToProps = (state) => {
    return {
        hotDay: {
            loading: state.houseMonitoringRed.hotDay.loading,
            value: state.houseMonitoringRed.hotDay.value,
            error: state.houseMonitoringRed.hotDay.error,
        }
    }
}

    const mapDispatchToProps = (dispatch) => {
        return {
            onSubmit: (initialDate, finalDate) => {
                dispatch(fetchHottestDayInTimeInterval(initialDate, finalDate))
            }
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(UI631HottestDayInTimeInterval);
