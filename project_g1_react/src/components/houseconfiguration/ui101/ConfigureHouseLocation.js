import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchGeographicAreas} from "../ui011/actionFetchGeographicAreas";
import {changeHouseLocation, fetchHouseLocation} from "../../../actions/actionsHouseConfiguration";


class ConfigureHouseLocation extends Component {

    state = {
        // latitude: '',
        // longitude: '',
        // altitude: '',
        houseGeoLocation: 'WUGAAA',
        geo: 'ISEP',
        location: {
            lat: '',
            long: '',
            alt: ''
        }
    };

    componentDidMount() {
        this.props.OnFetchHouseLocation();
        this.props.onFetchGeographicAreas();
        // console.log(this.handleChangeDrop)
    }

    handleChangeDrop = (e) => {
        this.setState({
            geo: e.target.value
        })
    };

    handleChangeLat = (e) => {
        this.setState({
            latitude: e.target.value,
            location: {...this.state.location, lat: e.target.value}
        })
    };
    handleChangeLong = (e) => {
        this.setState({
            longitude: e.target.value,
            location: {...this.state.location, long: e.target.value}
        })
    };
    handleChangeAlt = (e) => {
        this.setState({
            altitude: e.target.value,
            location: {...this.state.location, alt: e.target.value}
        })
    };

    handleClick = () => {
        //const location = "{latitude:" + this.state.latitude + ",longitude:" + this.state.longitude + ",altitude:" + this.state.altitude + "}";
        // console.log(location)
        //  this.props.actionChangeHouseLocation(location,this.state.geo,this.state.location);
        // console.log(this.state)
        //  console.log(location)
        //  console.log(this.props)
        //  console.log(this.state);
        // this.props.actionChangeHouseLocation(this.state.geo,this.state.latitude,this.state.longitude,this.state.altitude);

        if (this.state.location.lat.length < 1 || this.state.location.long.length < 1 || this.state.location.alt.length < 1) {
            alert("Missing coordinates data for location")
        } else {
            this.props.actionChangeHouseLocation(this.state.geo, this.state.location);
        }


    };

    render() {
        const areas = this.props.geographicAreas;
        //  console.log(areas)



        let resp = this.props.response;
       // let houseLoc = this.props.houseGeoLocation;


        return (
            <div className={"ConfigureLocationHouseDiv"}>
                {/*<h6 style={{color: 'gray'}}> {houseLoc} </h6>*/}
                <h5>Choose the Geographic Area where to set the house on:</h5>
                <select className="browser-default" onChange={this.handleChangeDrop}>
                    {areas.map(function (area, key) {
                        return (
                            <option key={key} value={area.key}>{area.name}</option>)
                    })}
                </select>
                <form onSubmit={e => {
                    e.preventDefault();
                }}>
                    <p> Please insert the latitude of the house: </p>
                    <input type='number' onChange={this.handleChangeLat} value={this.state.location.lat}/>

                    <p> Please insert the longitude of the house: </p>
                    <input type='number' onChange={this.handleChangeLong} value={this.state.location.long}/>

                    <p> Please insert the altitude of the house: </p>
                    <input type='number' onChange={this.handleChangeAlt} value={this.state.location.alt}/>

                    <button className="Button101" onClick={this.handleClick}>
                        Set Location
                    </button>
                    <br>

                    </br>
                    <h4>{resp}</h4>
                </form>
            </div>
        )
    }
}




const mapStateToProps = (state) => {

    return {
        houseGeoLocation: state.houseConfigRed.houseGeoLocation,
        geographicAreas: state.geographicAreasRed.geographicAreas.data,
        response: state.houseConfigRed.response
    }

};


const mapDispatchToProps = (dispatch) => {
    return {
        OnFetchHouseLocation: () => dispatch(fetchHouseLocation()),
        onFetchGeographicAreas: () => dispatch(fetchGeographicAreas()),
        actionChangeHouseLocation: (geoName, loc) => dispatch(changeHouseLocation(geoName, loc))
        //   actionChangeHouseLocation: (geoName, lat, long, alt) => dispatch(changeHouseLocation(geoName, lat, long, alt))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ConfigureHouseLocation);