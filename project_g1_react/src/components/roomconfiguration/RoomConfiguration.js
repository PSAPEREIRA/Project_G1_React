import React from 'react'
import {Button, ButtonGroup} from 'reactstrap';
import {Link} from "react-router-dom";


function RoomConfiguration() {

    return (
        <div className={'RoomConfigurationMenu'}>
            <ButtonGroup>
                <Link to="/room-configuration/room/sensors">
                    <Button className={'button2'}>
                            List of all sensors in a room
                    </Button>
                </Link>
                <Link to="/room-configuration/import-sensors">
                    <Button className={'button2'}>
                        Import Room Sensors from file
                    </Button>
                </Link>
                <Link to="/room-configuration/import-sensors-readings">
                    <Button className={'button2'}>
                        Import Room Sensors Readings from file
                    </Button>
                </Link>
                <Link to="/room-configuration/add-sensor">
                <Button className={'button2'}>
                    Add a new sensor to a room
                </Button>
                </Link>
            </ButtonGroup>
        </div>
    )
}

export default RoomConfiguration