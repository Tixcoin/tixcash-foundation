import React, { Component } from 'react';
import { Link, Navigate } from "react-router-dom";
import { SidebarDash } from './Sidebar_Dash';
import { DashAPiKeys } from './DashAPiKeys';


export class DashboardApiKeys extends Component {

    constructor(props) {
        super(props);
       // console.log(props);
        this.state = {
            timer: null, 
            email: localStorage.getItem("email"),
            mobile: localStorage.getItem("mobile"),
            auth: localStorage.getItem("email") && localStorage.getItem("token") ? true:false,
            token: localStorage.getItem("token")
        };
        if ((localStorage.getItem("email") && localStorage.getItem("token")))
            this.state.timer = setInterval(async () => { this.validateAuth() }, 900);
        else {
            if (this.state.timer) clearInterval(this.state.timer);
        }
        // console.log(TokenGenerate());
    }
    setValues = (key, value) => {
        if (key == "auth")
            if (!value)
                this.setState({
                    auth: key == "auth" ? value : this.state.auth
                });

        this.setState({
            email: key == "email" ? value : this.state.email,
            auth: key == "auth" ? value : this.state.auth,
            mobile: key == "mobile" ? value : this.state.mobile,
            token: key == "token" ? value : this.state.token
        });
    }
    componentDidMount() {
        this._doAuthRequest();
    }
    async _doAuthRequest() {
        var isAuth = false;
        isAuth = (((this.state.email != '' && this.state.email != null) || (this.state.mobile != '' && this.state.mobile != null)) && (this.state.token != '' && this.state.token != null))
        // create a new FormData object and append the file to it
        if (!isAuth) {
            const file = new FormData();
            file.append("email", this.state.email);
            file.append("mobile", this.state.mobile);
            file.append("token", this.state.token);

            const response = await fetch(process.env.REACT_APP_HUB_DATA_API + "/weatherforecast/AuthRequest", {
                method: 'POST',
                body: file
            });
            isAuth = await response.json();
        }

        this.setValues("auth", isAuth);
    }

    
    validateAuth = async () => {
        console.log('Validating');
        if (!(localStorage.getItem("email") && localStorage.getItem("token"))) {
            if (this.state.timer) clearInterval(this.state.timer);
            this.setValues("auth", false);
        }

    };
    dologgedOut = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("token"); 
    };

    render() {
        return (
            <div className="container">
                {!this.state.auth && (<Navigate to="/home" replace={true} />)}
            <div id="mainContent ">
                <div class="myaccount-container-new container loggedpage-wrapper">
                        <div class="ant-layout ant-layout-has-sider myaccount-layout">
                        
                            {this.state.auth && this.state.email != null && (<SidebarDash email={this.state.email} onLogout={this.dologgedOut} />)}
                            {this.state.auth && this.state.email != null && (<DashAPiKeys email={this.state.email} onLogout={this.dologgedOut} />)}

                    </div>
                </div>
                </div>
            </div>

        )
    }
}