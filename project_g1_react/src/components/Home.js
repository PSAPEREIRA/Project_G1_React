import React, {Component} from 'react'
import UI600CurrentTemperatureInHouseArea from "./housemonitoring/ui600/UI600CurrentTemperatureInHouseArea";
import SmartHome from '../imgs/SmartHome-House.png';

class Home extends Component {


    constructor(props) {
        super(props);

        this.state = {
            curTime: '',
            loggedAs: ""
        };
        this.mounted = false;

    }


    componentDidMount() {
        this.mounted = true;

        setInterval(() => {
            if (this.mounted) {
                this.setState({
                    curTime: new Date().toUTCString().toLocaleString()
                })
            }
        }, 1000);

        this.setState({loggedAs: this.user = localStorage.getItem('user')})
    }


    render() {
        return (
            <section>
                <div className="HomeDiv">
                    <h3 className={"LoggedAs"}> Hello! Welcome back {this.state.loggedAs}!</h3>
                    <h3 className={"TitleHome"}> </h3>
                    <div className={"SmartHomeDiv"}>
                        <img className={"SmartHome"} src={SmartHome} alt='SmartHome'/>
                    </div>
                    {/*<h3 className={"TitleAddress"}>Your Address:</h3>*/}
                    {/*<p className={"Address"}>R. Dr. António Bernardino de Almeida, nº431</p>*/}
                    {/*<h3 className={"TitleNumber"}>Number:</h3>*/}
                    <UI600CurrentTemperatureInHouseArea/>
                    <h4 className={"RealTime"}>{this.state.curTime}</h4>
                </div>
            </section>
        );
    }

    componentWillUnmount() {
        this.mounted = false;
    }
}

export default Home;