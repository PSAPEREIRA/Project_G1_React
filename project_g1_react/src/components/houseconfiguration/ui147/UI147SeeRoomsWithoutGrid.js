import React, {Component} from 'react';

class UI147SeeRoomsWithoutGrid extends Component{

    render() {
        const {row} = this.props;

        return (

            <div id="borderspace">
                <div className="myButton">
                    {row.name}
                </div>
            </div>



        )
    }
}

export default UI147SeeRoomsWithoutGrid;