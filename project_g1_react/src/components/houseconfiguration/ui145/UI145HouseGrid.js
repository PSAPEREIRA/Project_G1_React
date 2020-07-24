import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchHouseGrids} from '../../../actions/actionsHouseGrid';
import UI145CollasibleButton from "./UI145CollasibleButton";


class UI145HouseGrid extends Component {


    componentDidMount() {
        this.props.onFetchHouseGrids();
    }

    render() {
        const {loading, error, data} = this.props.houseGrids;
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
                                    <UI145CollasibleButton data={row}/>
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
        houseGrids: {
            loading: state.gridRed.houseGrids.loading,
            data: state.gridRed.houseGrids.data,
            error: state.gridRed.houseGrids.error,
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchHouseGrids: () => {
            dispatch(fetchHouseGrids())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UI145HouseGrid);