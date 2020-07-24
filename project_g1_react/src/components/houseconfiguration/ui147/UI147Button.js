import React, {Component} from 'react';

class UI147Button extends Component {

    render() {
        const {data} = this.props
        return (
            <div>
                <button class="myButtonGreen" onClick={this.props.handleClick}>Attach</button>
                <h4>{data}</h4>
            </div>
        )
}
}

export default UI147Button