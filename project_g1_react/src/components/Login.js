import React, {Component} from 'react';
import './Login.css';
import AuthService from './AuthService';
import SmartHomeLogin from "../imgs/SmartHomeGroup1.png";

class Login extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }

    componentWillMount() {
        if (this.Auth.loggedIn())
            this.props.history.replace('/');
    }

    render() {
        return (
            <div className={"BackgroundImage"}>
                <div className="center">
                    <img className={"SmartHomeGroup1"} src={SmartHomeLogin} alt='SmartHomeGroup1'/>
                    <div className="card">
                        <h1 className={"Login"}>Login</h1>
                        <form className={"Username"} onSubmit={this.handleFormSubmit}>
                            <input
                                className="form-item"
                                placeholder="Username goes here..."
                                name="username"
                                type="text"
                                onChange={this.handleChange}
                            />
                            <input
                                className="form-item"
                                placeholder="Password goes here..."
                                name="password"
                                type="password"
                                onChange={this.handleChange}
                            />
                            <input
                                className="form-submit"
                                value="SUBMIT"
                                type="submit"
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    handleFormSubmit(e) {
        e.preventDefault();

        this.Auth.login(this.state.username, this.state.password)
            .then(res => {
                this.props.history.replace('/');
            })
            .catch(err => {
                alert(err);
            })
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
}

export default Login;