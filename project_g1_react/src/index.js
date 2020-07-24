import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore,combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import gridReducer from './reducers/gridReducer'
import roomReducer from './reducers/roomReducer'
import houseMonitoringReducer from "./reducers/houseMonitoringReducer";
import gaSensorsReducer from "./reducers/gaSensorsReducer";
import geographicAreasReducer from "./reducers/geographicAreasReducer";
import importReducer from "./reducers/importReducer";
import houseManagementReducer from "./reducers/houseManagementReducer";
import Login from "./components/Login";
import {BrowserRouter, Route} from 'react-router-dom'
import houseConfigurationReducer from "./reducers/houseConfigurationReducer";
import roomSensorsReducer from "./reducers/roomSensorsReducer";



const rootReducer = combineReducers({

    gridRed:gridReducer,
    roomRed:roomReducer,
    houseMonitoringRed:houseMonitoringReducer,
    gaSensorsRed:gaSensorsReducer,
    geographicAreasRed:geographicAreasReducer,
    importRed:importReducer,
    houseConfigRed:houseConfigurationReducer,
    houseManagementRed:houseManagementReducer,
    roomSensRed:roomSensorsReducer

})

const store = createStore(rootReducer,compose(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
    </BrowserRouter>
</Provider>, document.getElementById('root'));

