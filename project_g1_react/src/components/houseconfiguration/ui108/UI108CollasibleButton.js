import React, {Component} from 'react';
import Collapsible from 'react-collapsible';
import UI108RoomsAttributes from "./UI108RoomsAttributes";

class UI108CollasibleButton extends Component {

    render() {
        const {row} = this.props;
        return (
            <Collapsible trigger={row.name}>
                <UI108RoomsAttributes row={row}/>
            </Collapsible>
        )
    }
}

export default UI108CollasibleButton;