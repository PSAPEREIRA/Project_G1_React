import React, {Component} from 'react'

class UI265Button extends Component {


    render() {
        const {data} = this.props
            return (
                <div>
                    <button className={"Button265"} onClick={this.props.handleClick}> Import</button>
                    {data<0 &&
                        <h4>Invalid path of file</h4>}
                    {data.length > 1 &&
                    <h4>{data[0]} readings have been registered and {data[1]} readings added to sensors</h4>}
                </div>
            )

}
}

export default UI265Button