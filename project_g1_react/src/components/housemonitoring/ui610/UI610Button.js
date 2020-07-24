import React, {Component} from 'react'
import {fetchRoomMaxTemp} from "../../../actions/actionsRoomTemp610";
import connect from "react-redux/es/connect/connect";

class UI610Button extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: this.props.row.name,
            date: "",
            isHidden: false,
        };

    }

    componentDidMount() {
        this.props.onSubmit(this.state.name, this.state.date)
    }

    updateInputInitial = input => {
        this.setState({
            date: input
        });
    };

    handleClick = () => {
        if (this.state.date.trim() && this.state.name.trim()) {
            this.setState({
                isHidden: !this.state.isHidden});
            this.props.onSubmit(this.state.name, this.state.date);
            this.setState({date: ""});
            this.setState({name: ""})
        } else {
            alert('Error: no data');
        }
    }


    render() {
        const {row} = this.props;
        const {data} = this.props.houseMonitoring.data;
        return (
            <div>
                <h4>{row.name}</h4>
                <p>Date</p>
                <input type="date" onChange={(e) => this.updateInputInitial(e.target.value)}
                       value={this.state.date}/>
                <button onClick={this.handleClick}> Click</button>
                {this.state.isHidden &&
                <h4>{data}</h4>}
            </div>
        )
    }
}

const
    mapStateToProps = (state) => {
        return {
            houseMonitoring: {
                loading: state.houseMonitoringRed.houseMonitoring.loading,
                data: state.houseMonitoringRed.houseMonitoring.data,
                error: state.houseMonitoringRed.houseMonitoring.error,
            }
        }
    }

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (name, date) => {
            dispatch(fetchRoomMaxTemp(name, date))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UI610Button)