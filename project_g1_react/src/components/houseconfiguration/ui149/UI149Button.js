import React, {Component} from 'react';

class UI149Button extends Component {

    render() {
        const {data} = this.props
        return (
            <div>
                <button class="myButtonRed" onClick={this.props.handleClick}>Detach</button>
                <h4>{data}</h4>
            </div>
        )
}
}

export default UI149Button