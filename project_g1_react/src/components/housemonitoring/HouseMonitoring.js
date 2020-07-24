import React from 'react'
import {Button, ButtonGroup} from 'reactstrap'
import {Link} from "react-router-dom";

class HouseMonitoring extends React.Component {
    render() {
        return (
            <div className={'HouseMonitoringMenu'}>
                <ButtonGroup>
                    <Link to="/house-monitoring/geographic-area/current-temperature">
                        <Button className={'button2'}>
                            Current temperature in the house area
                        </Button>
                    </Link>
                    <Link to="/house-monitoring/room/current-temperature">
                        <Button className={'button2'}>
                            Current temperature in a room
                        </Button>
                    </Link>
                    <Link to="/house-monitoring/rooms/maximum-temperature">
                        <Button className={'button2'}>
                            Maximum temperature in a room for a given day
                        </Button>
                    </Link>
                    <Link to="/house-monitoring/rainfall-sum-in-day">
                        <Button className={'button2'}>
                            Total rainfall in the house area for a given day
                        </Button>
                    </Link>
                    <Link to="/house-monitoring/rainfall-avg-in-time-interval">
                        <Button className={'button2'}>
                            Average rainfall in the house area in a given period
                        </Button>
                    </Link>
                    <Link to="/house-monitoring/last-coldest-day">
                        <Button className={'button2'}>
                            Last coldest day in the house area in a given period (lower maximum temperature)
                        </Button>
                    </Link>
                    <Link to="/house-monitoring/geographic-area/hottest-day-temperature">
                        <Button className={'button2'}>
                            First hottest day in the house area in a given period (higher maximum temperature)
                        </Button>
                    </Link>
                    <Link to="/house-monitoring/geographic-area/highest-temperature-amplitude">
                        <Button className={'button2'}>
                            Highest temperature amplitude in the house area in a given period
                        </Button>
                    </Link>
                </ButtonGroup>
            </div>
        )

    }
}

export default HouseMonitoring