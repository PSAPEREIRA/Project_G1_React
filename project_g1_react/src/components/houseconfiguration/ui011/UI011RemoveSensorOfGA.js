import React, {Component} from "react";
import {fetchGeographicAreas} from "./actionFetchGeographicAreas";
import connect from "react-redux/es/connect/connect";
import UI011SelectGeoArea from "./UI011SelectGeoArea";

class UI011RemoveSensorOfGA extends Component {


    componentDidMount() {
        this.props.onFetchGeographicAreas();

    }


    render() {
        const {data} = this.props.geographicAreas;
        return (
            <div>
                <h5>Choose the Geographic Area</h5>
                <UI011SelectGeoArea data={data}/>
            </div>
        )

    }
}

const
    mapStateToProps = (state) => {
        return {
            geographicAreas: {
                loading: state.geographicAreasRed.geographicAreas.loading,
                data: state.geographicAreasRed.geographicAreas.data,
                error: state.geographicAreasRed.geographicAreas.error,
            }
        }
    }


const
    mapDispatchToProps = (dispatch) => {
        return {
            onFetchGeographicAreas: () => {
                dispatch(fetchGeographicAreas())
            },


        }
    };


export default connect(mapStateToProps, mapDispatchToProps)(UI011RemoveSensorOfGA)
;