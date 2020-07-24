import React, {Component} from 'react';
import Collapsible from 'react-collapsible';
import UI250RoomsAttributes from "./UI250RoomsAttributes";

class UI250CollasibleButton extends Component {

    render() {
        const {row} = this.props;
        return (
            <Collapsible trigger={row.name}>
                <UI250RoomsAttributes row={row}/>
            </Collapsible>
        )
    }
}

export default UI250CollasibleButton;