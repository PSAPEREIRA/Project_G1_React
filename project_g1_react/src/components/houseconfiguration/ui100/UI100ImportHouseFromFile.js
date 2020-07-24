import React, {Component} from 'react'
import 'react-daypicker/lib/DayPicker.css';
import connect from "react-redux/es/connect/connect";
import UI100Button from "./UI100Button";
import {importHouse} from "./actionImportHouse";
import FileImg from "../../../imgs/ficheiro.png";

class UI100ImportHouseFromFile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            path: "",
        };
    }

    updateInput = input => {
        this.setState({
            path: input
        });
    };


    handleClick = () => {
        if (this.state.path.trim()) {
            this.props.onSubmit(this.state.path);
            this.setState({path: ""});
        } else {
            alert('Error: no data');
        }
    }

    render() {
        const {loading, error, data} = this.props.house;
        if (loading === true) {
            return (<h1>Loading ....</h1>);
        } else {
            if (error !== null) {
                return (<h1>Error ....</h1>);
            } else {
                return (
                    <div className={"ImportRoomsSensorsDiv"}>
                        <p>Please enter the path of the House file <img className={"File"} src={FileImg} alt='File'/></p>
                        <input onChange={(e) => this.updateInput(e.target.value)}
                               value={this.state.path}/>
                        <UI100Button handleClick={this.handleClick} data={data}/>
                    </div>
                )
            }
        }
    }
}

const
    mapStateToProps = (state) => {
        return {
            house: {
                loading: state.importRed.house.loading,
                data: state.importRed.house.data,
                error: state.importRed.house.error,
            }
        }
    }

const
    mapDispatchToProps = (dispatch) => {
        return {
            onSubmit: (path) => {
                dispatch(importHouse(path))
            },
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(UI100ImportHouseFromFile)
