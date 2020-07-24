import React, {Component} from 'react';

/*const lines = this.props.houseGrids.data.map((option, index) => (
        <option key={index} value={option.code}>{option.code}</option>
));*/

class UI147SeeHouseGrids extends Component{

    /*defaultProps = {
        selected: false
    }*/
    render() {
        const {line} = this.props;
        //const {selected, handleSelect} = this.props;

        return (

            <div id="borderspace">
                <div className="myButton">
                    {line.code}
                </div>
            </div>

            /*<tr id="borderspace">
                <td><input name={line.code} type="checkbox" checked={selected} onChange={handleSelect} /></td>
                <td>{line.code}</td>
            </tr>*/
        )

    }
}

export default UI147SeeHouseGrids;