import React, {Component} from 'react';
import Collapsible from 'react-collapsible';
import UI109RoomsAttributes from "./UI109RoomsAttributes";

class UI109CollasibleButton extends Component {

    render() {
        const {row} = this.props;
        return (
            <Collapsible trigger={row.name}>
                <UI109RoomsAttributes row={row}/>
            </Collapsible>
        )
    }
}

export default UI109CollasibleButton;