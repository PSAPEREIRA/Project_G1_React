import React, {Component} from 'react';
import UI108CollasibleButton from "./UI108CollasibleButton";
import connect from "react-redux/es/connect/connect";
import {fetchRooms} from "../../../actions/actionsRoom";


class UI108Rooms extends Component {

    componentDidMount() {
        this.props.onFetchRooms();
    }

    render() {
        const {loading, error, data} = this.props.rooms;
        if (loading === true) {
            return (<h1>Loading ....</h1>);
        } else {
            if (error !== null) {
                return (<h1>Error ....</h1>);
            } else {
                if (data.length > 0) {
                    const rows = data.map((row, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <UI108CollasibleButton row={row}/>
                                </td>
                            </tr>
                        )
                    })
                    return (
                        <table>
                            <tbody>{rows}</tbody>
                        </table>
                    );
                } else {
                    return (<h1>No data ....</h1>);
                }
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        rooms: {
            loading: state.roomRed.rooms.loading,
            data: state.roomRed.rooms.data,
            error: state.roomRed.rooms.error,
        }
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchRooms: () => {
            dispatch(fetchRooms())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UI108Rooms)