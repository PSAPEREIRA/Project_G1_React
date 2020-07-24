import React, {Component} from 'react';

class UI149SeeRoomsWithoutGrid extends Component{

    render() {
        const {row} = this.props;

        return (

            <div id="borderspace">
                <div className="myButton">
                    {row}
                </div>
            </div>



        )
    }
}

export default UI149SeeRoomsWithoutGrid;