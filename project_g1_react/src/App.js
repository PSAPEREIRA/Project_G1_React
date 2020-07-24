import React, {Component} from 'react';
import Navbar from './components/Navbar'
import RoomConfiguration from './components/roomconfiguration/RoomConfiguration';
import HouseManagement from './components/housemanagement/HouseManagement';
import HouseConfiguration from "./components/houseconfiguration/HouseConfiguration";
import {BrowserRouter, Route} from 'react-router-dom'
import HouseMonitoring from './components/housemonitoring/HouseMonitoring';
import HouseGrid from "./components/houseconfiguration/ui145/UI145HouseGrid";
import UI108Rooms from "./components/houseconfiguration/ui108/UI108Rooms";
import UI011RemoveSensor from "./components/houseconfiguration/ui011/UI011RemoveSensorOfGA";
import UI600CurrentTemperatureInHouseArea from "./components/housemonitoring/ui600/UI600CurrentTemperatureInHouseArea";
import UI633HighestTemperatureAmplitudeInPeriod from "./components/housemonitoring/ui633/UI633HighestTemperatureAmplitudeInPeriod";
import UI109EditRoom from "./components/houseconfiguration/ui109/UI109EditRoom";
import UI147AttachRoomToGrid from "./components/houseconfiguration/ui147/UI147AttachRoomToGrid";
import UI149DettachRoomToGrid from "./components/houseconfiguration/ui149/UI149DettachRoomToGrid";
import UI631HottestDayInTimeInterval from "./components/housemonitoring/ui631/UI631HottestDayInTimeInterval";
import UI250ListOfSensorsInRoom from "./components/roomconfiguration/ui250/UI250ListOfSensorsInRoom";
import UI610MaximumTemperatureInRoom from "./components/housemonitoring/ui610/UI610getMaxTempRooms";
import withAuth from './components/withAuth';
import UI105AddRoom from "./components/houseconfiguration/ui105/UI105AddRoom";
import UI100ImportHouseFromFile from "./components/houseconfiguration/ui100/UI100ImportHouseFromFile";
import RainfallSumInDay from "./components/housemonitoring/ui620/RainfallSumInDay";
import UI260ImportRoomSensorsFromFile from "./components/roomconfiguration/ui260/UI260ImportRoomSensorsFromFile";
import UI605CurrentTemperatureRoom from "./components/housemonitoring/ui605/UI605CurTemperatureRoom";
import UI020ImportSensorsReadingsOfGA from "./components/houseconfiguration/ui020/UI020ImportSensorsReadingsOfGA";
import LastColdestDayInPeriod from "./components/housemonitoring/ui630/LastColdestDayInPeriod";
import UI015ImportGAandSensorsFromFile from "./components/houseconfiguration/ui015/UI015ImportGAandSensorsFromFile";
import ConfigureHouseLocation from "./components/houseconfiguration/ui101/ConfigureHouseLocation";
import UI265ImportSensorsReadingsOfRoom from "./components/roomconfiguration/ui265/UI265ImportSensorsReadingsOfRoom";
import CreateHouseGrid from "./components/houseconfiguration/ui130/CreateHouseGrid";
import UI440445RoomComfortLevel from "./components/housemanagement/ui440-445/UI440-445RoomComfortLevel";
import Home from "./components/Home"
import UI253AddSensorToRoom from "./components/roomconfiguration/ui253/UI253AddSensorToRoom";
import DetachRoomFromGrid from "./components/houseconfiguration/ui149/DetachRoomFromGrid";
import UI623RainfallAvgInTimePeriod from "./components/housemonitoring/ui623/UI623RainfallAvgInTimePeriod";


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar{...this.props}/>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/house-configuration' component={HouseConfiguration}/>
                    <Route exact path='/house-configuration/house-grids' component={HouseGrid}/>
                    <Route exact path='/house-configuration/rooms' component={UI108Rooms}/>
                    <Route exact path='/house-monitoring/geographic-area/current-temperature' component={UI600CurrentTemperatureInHouseArea}/>
                    <Route exact path='/house-monitoring/geographic-area/highest-temperature-amplitude' component={UI633HighestTemperatureAmplitudeInPeriod}/>
                    <Route exact path='/house-monitoring/geographic-area/hottest-day-temperature' component={UI631HottestDayInTimeInterval}/>
                    <Route exact path='/house-configuration/attach-room-to-houseGrid' component={UI147AttachRoomToGrid}/>
                    <Route exact path='/house-configuration/dettach-room-to-houseGrid' component={UI149DettachRoomToGrid}/>
                    <Route exact path='/house-monitoring/rooms/maximum-temperature' component={UI610MaximumTemperatureInRoom}/>
                    <Route exact path='/house-configuration/room/edit' component={UI109EditRoom}/>
                    <Route exact path='/house-configuration/geographic-areas/remove-sensor' component={UI011RemoveSensor}/>
                    <Route exact path='/house-configuration/room/add' component={UI105AddRoom}/>
                    <Route exact path='/house-configuration/import-house' component={UI100ImportHouseFromFile}/>
                    <Route exact path='/house-configuration/import-sensor-readings-geo-area' component={UI020ImportSensorsReadingsOfGA}/>
                    <Route exact path='/room-configuration' component={RoomConfiguration}/>
                    <Route exact path='/room-configuration/room/sensors' component={UI250ListOfSensorsInRoom}/>
                    <Route exact path='/room-configuration/import-sensors' component={UI260ImportRoomSensorsFromFile}/>
                    <Route exact path='/room-configuration/import-sensors-readings' component={UI265ImportSensorsReadingsOfRoom}/>
                    <Route exact path='/house-management' component={HouseManagement}/>
                    <Route exact path='/house-management/room/comfort-level' component={UI440445RoomComfortLevel}/>
                    <Route exact path='/house-monitoring' component={HouseMonitoring}/>
                    <Route exact path='/house-monitoring/rainfall-sum-in-day' component={RainfallSumInDay}/>
                    <Route exact path='/house-monitoring/rainfall-avg-in-time-interval' component={UI623RainfallAvgInTimePeriod}/>
                    <Route exact path='/house-monitoring/room/current-temperature' component={UI605CurrentTemperatureRoom}/>
                    <Route exact path='/geographical-area-configuration/import-sensors' component={UI015ImportGAandSensorsFromFile}/>
                    <Route exact path='/house-monitoring/last-coldest-day' component={LastColdestDayInPeriod}/>
                    <Route exact path='/house-configuration/location' component={ConfigureHouseLocation}/>
                    <Route exact path='/house-configuration/create-house-grid' component={CreateHouseGrid}/>
                    <Route exact path='/room-configuration/add-sensor' component={UI253AddSensorToRoom}/>
                    <Route exact path='/house-configuration/detach-room-from-grid' component={DetachRoomFromGrid}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default withAuth(App);
