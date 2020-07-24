import React, {Component} from 'react';
import Collapsible from 'react-collapsible';
import UI145ListOfRoomsAsString from "./UI145ListOfRoomsAsString";

class UI145CollasibleButton extends Component{

    render() {
        const {data} = this.props;
        return (
            <Collapsible trigger={data.code}>
                <UI145ListOfRoomsAsString data = {data}/>
            </Collapsible>

        );
    }

}

export default UI145CollasibleButton;