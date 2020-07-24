import React, {Component} from 'react'

class UI633Button extends Component {


    render() {
        const {data} = this.props
        return (
            <div>
                <button onClick={this.props.handleClick}> Click</button>
                <h4 id="result">{data}ºC</h4>
            </div>
        )
}
}

export default UI633Button