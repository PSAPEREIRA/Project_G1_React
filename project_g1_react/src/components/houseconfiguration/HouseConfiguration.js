import React from 'react'
import {Button, ButtonGroup} from 'reactstrap';
import {Link} from "react-router-dom";


function HouseConfiguration() {

    return (
        <div className={'HouseConfigurationMenu'}>
            <ButtonGroup>
                <Link to="/house-configuration/room/add">
                    <Button className={'button2'}>
                        Add a new room to the house
                    </Button>
                </Link>
                <Link to="/house-configuration/rooms">
                    <Button className={'button2'}>
                        List of existing rooms
                    </Button>
                </Link>
                <Link to="/house-configuration/room/edit">
                    <Button className={'button2'}>
                        Edit the configuration of an existing room
                    </Button>
                </Link>
                <Link to="/house-configuration/create-house-grid">
                    <Button className={'button2'}>
                        Create a house grid
                    </Button>
                </Link>
                <Link to="/house-configuration/house-grids">
                    <Button className={'button2'}>
                        List of existing rooms attached to a house grid
                    </Button>
                </Link>
                <Link to="/house-configuration/attach-room-to-houseGrid">
                    <Button className={'button2'}>
                        Attach a room to a house grid
                    </Button>
                </Link>
                <Link to="/house-configuration/detach-room-from-grid">
                    <Button className={'button2'}>
                        Detach a room from a house grid
                    </Button>
                </Link>
                <Link to="/house-configuration/geographic-areas/remove-sensor">
                    <Button className={'button2'}>
                        Remove sensor from Geographic Area
                    </Button>
                </Link>
                <Link to="/house-configuration/location">
                    <Button className={'button2'}>
                        Configure the location of the house
                    </Button>
                </Link>
                <Link to="/house-configuration/import-house">
                    <Button className={'button2'}>
                        Import House from file
                    </Button>
                </Link>
                <Link to="/house-configuration/import-sensor-readings-geo-area">
                    <Button className={'button2'}>
                        Import Sensor Readings of Geographic Area from file
                    </Button>
                </Link>
                <Link to="/geographical-area-configuration/import-sensors">
                    <Button className={'button2'}>
                        Import geographical areas and sensors
                    </Button>
                </Link>
            </ButtonGroup>
        </div>


    )

}

export default HouseConfiguration