import React, {Component} from 'react'

class UI260Button extends Component {


    render() {
        const {data} = this.props
        return (
            <div>
                <button className={"Button260"} onClick={this.props.handleClick}> Import</button>
                {data && data.map((number, i) =>
                    <h5 key={i}>{number}</h5>)}
            </div>
        )
}
}

export default UI260Button