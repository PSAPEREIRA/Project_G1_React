import React from 'react';
import connect from "react-redux/es/connect/connect";
import {removeSensorOfGA} from "./actionRemoveSensorOfGA";
import UI011ButtonToRemove from "./UI011ButtonToRemove";

class UI011ListOfSensorsToRemove extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            remove: false,
        }
    }
    handleClick = (geo,name) => {
        this.props.onSubmit(geo,name);
    }

    render() {
        const {data} = this.props.data;
        const geo = this.props.geographicArea;
        const rows = data.map((row, index) => {
            return (
                    <tr key={index}>
                        <td>
                            <p> {row.name}</p>
                            <UI011ButtonToRemove handleClick = {this.handleClick} geo={geo} idOfSensor={row.idOfSensor}/>
                        </td>
                    </tr>
            )
        })
        return (
            <table>
                <tbody>{rows}</tbody>
            </table>
        );

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (geographicArea,sensor) => {
            dispatch(removeSensorOfGA(geographicArea,sensor))
        }
    }
}

export default connect(null,mapDispatchToProps)(UI011ListOfSensorsToRemove);