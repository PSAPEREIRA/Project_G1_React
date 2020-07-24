import React, {Component} from 'react'

class SubmitDateButton extends Component {


    render() {
        const {data} = this.props;
        return (
            <div>
                <button onClick={this.props.handleClick}>Submit</button>

                <h4>{data} was the hottest day</h4>
            </div>
        )
    }
}
export default SubmitDateButton