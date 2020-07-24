import React, {Component} from 'react'
import 'react-daypicker/lib/DayPicker.css';
import connect from "react-redux/es/connect/connect";
import UI260Button from "./UI260Button";
import {importRoomSensors} from "./actionImportRoomSensors";
import FileImg from '../../../imgs/ficheiro.png';

class UI260ImportRoomSensorsFromFile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            path: "",
        };
    }

    //
    // componentDidMount(){
    //     this.props.roomSensors.error = null;
    // }

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
    };

    render() {
        let {loading, error, data} = this.props.roomSensors;

        // if (error !==null){
        //     error = null ;
        //
        //     this.setState({
        //         path: "Please insert a valid path/file!"
        //     });
        // }


        if (loading === true) {
            return (<h1>Loading ....</h1>);
        } else {
            if (error !== null) {
                return (<h1>Please insert a valid path/file! ....</h1>);
            } else {
                return (
                    <div className={"ImportRoomsSensorsDiv"}>
                        <p>Please enter the path of the Room Sensors file <img className={"File"} src={FileImg} alt='File'/></p>
                        <form onSubmit={e => {
                            e.preventDefault();
                        }}>
                            <input onChange={(e) => this.updateInput(e.target.value)}
                                   value={this.state.path}/>
                            <UI260Button handleClick={this.handleClick} data={data}/>
                        </form>
                    </div>
                )
            }
        }
    }
}

const
    mapStateToProps = (state) => {
        return {
            roomSensors: {
                loading: state.importRed.roomSensors.loading,
                data: state.importRed.roomSensors.data,
                error: state.importRed.roomSensors.error,
            }
        }
    };

const
    mapDispatchToProps = (dispatch) => {
        return {
            onSubmit: (path) => {
                dispatch(importRoomSensors(path))
            },
        }
    };

export default connect(mapStateToProps, mapDispatchToProps)(UI260ImportRoomSensorsFromFile)
