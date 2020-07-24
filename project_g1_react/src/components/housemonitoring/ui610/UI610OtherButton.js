import React, {Component} from "react";

class UI610OtherButton extends Component {

    render() {
        const {data} = this.props
        return (
            <div>
                <button onClick={this.props.handleClick}> Click</button>
                <h4>{data}</h4>
            </div>
        )
    }
}

export default UI610OtherButton