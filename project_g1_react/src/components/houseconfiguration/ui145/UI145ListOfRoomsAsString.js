import React, {Component} from 'react';

class UI145ListOfRoomsAsString extends Component {

    render() {
        const {data} = this.props;
        const rows = data.roomList.map((row, index) => {
            return (
                <tr key={index}>
                    <td>
                        <p>{row}</p>
                    </td>
                </tr>
            )
        })
        return (
            <table>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default UI145ListOfRoomsAsString;