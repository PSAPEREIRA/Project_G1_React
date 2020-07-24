import React from 'react';

/*const lines = this.props.houseGrids.data.map((option, index) => (
        <option key={index} value={option.code}>{option.code}</option>
));*/

class UI149SeeHouseGrids extends React.PureComponent{

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

export default UI149SeeHouseGrids;