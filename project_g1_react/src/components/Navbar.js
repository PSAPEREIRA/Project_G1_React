import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import AuthService from "./AuthService";

import "../menuresponsive.css";

const Auth = new AuthService();

class Navbar extends Component {

    user='';

    handleLogout() {
        Auth.logout()
        this.props.history.replace('/login');
    }

    render() {
        this.user = localStorage.getItem('user');

        switch (this.user) {
            case 'admin':
                return (

                    <div className="nav">
                        <input type="checkbox" id="nav-check"></input>
                            <div className="nav-header">
                                <div className="nav-title">
                                    SmartHome <b>|</b>
                                </div>
                            </div>
                            <div className="nav-btn">
                                <label htmlFor="nav-check">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </label>
                            </div>

                            <div className="nav-links">
                                <Link to="/" >Home</Link>
                                <NavLink to="/house-configuration" >House Configuration</NavLink>
                                <NavLink to="/room-configuration" >Room Configuration</NavLink>
                                <NavLink to="/house-management" >House Management</NavLink>
                                <NavLink to="/house-monitoring" >House Monitoring</NavLink>
                                <NavLink to="/logout" onClick={this.handleLogout.bind(this)}>Logout</NavLink>
                            </div>

                    </div>

                /*<nav className="NavBar">
                    <a className="brand-logo">SmartHome</a>
                    <div className="container">
                        <a className="slash">|</a>
                        <ul className="right">
                            <li className={"Home"}><Link to="/">Home</Link></li>
                            <li><NavLink to="/house-configuration">House Configuration</NavLink></li>
                            <li><NavLink to="/room-configuration">Room Configuration</NavLink></li>
                            <li><NavLink to="/house-management">House Management</NavLink></li>
                            <li><NavLink to="/house-monitoring">House Monitoring</NavLink></li>
                            <li><NavLink to="/logout" onClick={this.handleLogout.bind(this)}>Logout</NavLink></li>
                        </ul>
                    </div>
                </nav>*/
                );

            case 'roomOwner':
                return (
                    /*<nav className="NavBar">
                        <a href="/" className="brand-logo">SmartHome</a>
                        <div className="container">
                            <a href="/"  className="slash">|</a>
                            <ul className="right">
                                <li><Link to="/">Home</Link></li>
                                <li><NavLink to="/house-management">House Management</NavLink></li>
                                <li><NavLink to="/house-monitoring">House Monitoring</NavLink></li>
                                <li><NavLink to="/logout" onClick={this.handleLogout.bind(this)}>Logout</NavLink></li>
                            </ul>
                        </div>
                    </nav>*/

                    <div className="nav">
                        <input type="checkbox" id="nav-check"></input>
                        <div className="nav-header">
                            <div className="nav-title">
                                SmartHome <b>|</b>
                            </div>
                        </div>
                        <div className="nav-btn">
                        <label htmlFor="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>

                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <NavLink to="/house-management" >House Management</NavLink>
                        <NavLink to="/house-monitoring" >House Monitoring</NavLink>
                        <NavLink to="/logout" onClick={this.handleLogout.bind(this)}>Logout</NavLink>
                    </div>

                    </div>

                );

            case 'regular':
                return (
                    /*<nav className="NavBar">
                        <a href="/"  className="brand-logo">SmartHome</a>
                        <div className="container">
                            <a href="/"  className="slash">|</a>
                            <ul className="right">
                                <li><Link to="/">Home</Link></li>
                                <li><NavLink to="/house-monitoring">House Monitoring</NavLink></li>
                                <li><NavLink to="/logout" onClick={this.handleLogout.bind(this)}>Logout</NavLink></li>
                            </ul>
                        </div>
                    </nav>*/

                    <div className="nav">
                        <input type="checkbox" id="nav-check"></input>
                        <div className="nav-header">
                            <div className="nav-title">
                                SmartHome <b>|</b>
                            </div>
                        </div>
                        <div className="nav-btn">
                        <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    </div>

                    <div className="nav-links">
                    <Link to="/">Home</Link>

                    <NavLink to="/house-monitoring" >House Monitoring</NavLink>
                    <NavLink to="/logout" onClick={this.handleLogout.bind(this)}>Logout</NavLink>
                    </div>

                    </div>

                );

            default:
                return (
                    /*<nav className="NavBar">
                        <a href="/" className="brand-logo">SmartHome</a>
                        <div className="container">
                            <a href="/"  className="slash">|</a>
                            <ul className="right">
                                <li><Link to="/">Home</Link></li>
                                <li><NavLink to="/logout" onClick={this.handleLogout.bind(this)}>Logout</NavLink></li>
                            </ul>
                        </div>
                    </nav>*/

                    <div className="nav">
                        <input type="checkbox" id="nav-check"></input>
                        <div className="nav-header">
                            <div className="nav-title">
                                SmartHome <b>|</b>
                            </div>
                        </div>
                        <div className="nav-btn">
                        <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    </div>

                    <div className="nav-links">
                    <Link to="/">Home</Link>

                    <NavLink to="/logout" onClick={this.handleLogout.bind(this)}>Logout</NavLink>
                    </div>

                    </div>
                );
        }
    }
}

export default Navbar