import React from 'react'
import {Button, ButtonGroup} from "reactstrap";
import {Link} from "react-router-dom";

function HouseManagement() {
    return (
        <div className={'HouseManagementMenu'}>
            <ButtonGroup>
                <Link to="/house-management/room/comfort-level">
                    <Button className={'button2'}>
                        Instants in which the temperature fell below or above the comfort level
                    </Button>
                </Link>
            </ButtonGroup>
                    </div>
    )







}

export default HouseManagement