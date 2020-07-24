import React, {Component} from 'react'

class ButtonRFA extends Component {


    render() {
        const {data} = this.props;
        return (
            <div>
                <button onClick={this.props.handleClick}>Submit</button>
                <h4>The avg of rainfall on the selected period was  {data}</h4>
            </div>
        )
    }
}
export default ButtonRFA