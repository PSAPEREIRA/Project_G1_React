import React, {Component} from 'react';


class UI011ButtonToRemove extends Component {
    render() {
        return(
            <button onClick={() => window.confirm("Are you sure you wish to delete this sensor?") && this.props.handleClick(this.props.geo,this.props.idOfSensor)}>
                Remove
            </button>

        )
    }
}
export default UI011ButtonToRemove;