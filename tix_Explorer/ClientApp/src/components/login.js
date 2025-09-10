import React, { Component } from 'react';
import { Link, Navigate } from "react-router-dom";
import TokenGenerate from './_token';
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            mobile: '',
            password: '',
            status: '',
            token: TokenGenerate(),
            showPass: false,
        };
        // console.log(TokenGenerate());
    }

    setValues = (key, value) => {
        localStorage.setItem("token", this.state.token);
        localStorage.setItem("email", this.state.email);
        localStorage.setItem("mobile", this.state.mobile);
        this.setState({
            email: key == "email" ? value : this.state.email,
            password: key == "password" ? value : this.state.password,
            mobile: key == "mobile" ? value : this.state.mobile,
            status: key == "status" ? value : this.state.status,
            token: key == "token" ? value : this.state.token
        });

        if (key == "status" && value == "succeeded") setTimeout(this.props.onSuccess, 2000);
    }

    handleShowPass = () => {
        this.setState(prevState => ({
            showPass: !prevState.showPass
        }));
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setValues('status', await this._doSubmit());
    }

    _doSubmit = async () => {
        if (this.state.email === '') { return 'Email required'; return; }
        if (this.state.password === '') { return 'Password required'; return; }
        if (this.state.token === '') { return 'Catpcha missing'; return; }

        // create a new FormData object and append the file to it
        const file = new FormData();
        file.append("email", this.state.email);
        file.append("password", this.state.password);
        file.append("token", this.state.token);
        file.append("mobile", this.state.mobile);

        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + "/weatherforecast/Login", {
            method: 'POST',
            body: file
        });
        // console.log(await response.text());
        return await response.text();

    }
    render() {
        return (
            <div className="wrapperReg">
                <div class="ant-modal-wrap login-modal-wrap ant-modal-centered"  >
                    <div role="dialog" aria-modal="true" class="ant-modal login" >
                        <div tabindex="0" aria-hidden="true" ></div>
                        <div class="ant-modal-content">
                            <button onClick={this.props.onClose} type="button" aria-label="Close" class="ant-modal-close"><span class="ant-modal-close-x">X</span></button>
                            <div class="ant-modal-body">
                                <div class="login-container">
                                    <div class="tron-tabs">
                                        <div class="tron-tabs-nav-list">
                                            <div class="tron-tabs-tab tron-tabs-tab-active" id="tron-login-type-0">Email</div>
                                            {/*<Link onClick={this.props.onNumber} to="">*/}
                                            {/*    <div class="tron-tabs-tab " id="tron-login-type-1">Phone Number</div>*/}
                                            {/*</Link>*/}
                                            {/* <span class="tron-tabs-ink-bar ant-tabs-ink-bar-animated lf-50" ></span>*/}
                                        </div>
                                        <div class="tron-tabs-panel">
                                            <div class="">{this.state.status != "succeeded" && <span style={{ color: "white", backgroundColor: "red" }}>{this.state.status}</span>
                                            }</div>
                                            <div class="">{this.state.status == "succeeded" && <span style={{ color: "white", backgroundColor: "green" }}>Login Successfully. Please wait while your dashboard is being loaded <Navigate to="/dashboard" replace={true} /> </span>
                                            }</div>
                                            <form id="login" class="ant-form ant-form-horizontal">
                                                <div class="ant-form-item">
                                                    <div class="ant-row ant-form-item-row">
                                                        <div class="ant-col ant-form-item-label">
                                                            <label for="login_email" class="ant-form-item-required ant-form-item-no-colon" title="Email">Email</label></div>
                                                        <div class="ant-col ant-form-item-control">
                                                            <div class="ant-form-item-control-input">
                                                                <div class="ant-form-item-control-input-content">
                                                                    <input placeholder="Enter your email address" id="login_email" aria-required="true" class="ant-input" type="text"
                                                                        onChange={(e) => this.setValues('email', e.target.value)}
                                                                        value={this.state.email}
                                                                    />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-form-item form-item-login-password">
                                                    <div class="ant-row ant-form-item-row">
                                                        <div class="ant-col ant-form-item-label">
                                                            <label for="login_password" class="ant-form-item-required ant-form-item-no-colon" title="Password">Password</label></div>
                                                        <div class="ant-col ant-form-item-control">
                                                            <div class="ant-form-item-control-input">
                                                                <div class="ant-form-item-control-input-content"><span class="ant-input-affix-wrapper ant-input-password">
                                                                    <input autocomplete="off" placeholder="Enter your password" id="login_password" aria-required="true" type={this.state.showPass ? 'text' : 'password'} class="ant-input"
                                                                        onChange={(e) => this.setValues('password', e.target.value)}
                                                                        value={this.state.password}

                                                                    />
                                                                    {this.state.showPass ? <img onClick={this.handleShowPass} width="22" height="24" alt="show" src='./assets/img/eye.png' /> : <img width="22" onClick={this.handleShowPass} height="24" alt="show" src='./assets/img/eye_cross.png' />}
                                                                </span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-form-item form-item-login-password">
                                                    <div class="ant-row ant-form-item-row">
                                                        <div class="ant-col ant-form-item-label">
                                                            <label for="login_password" class="ant-form-item-required ant-form-item-no-colon" >Code</label></div>
                                                        <div class="ant-col ant-form-item-control">
                                                            <div class="ant-form-item-control-input">
                                                                <p class="ant-input" style={{ color: "green", fontWeight: 'bold', fontSize: '14pt', background: "url('assets/img/dotted.gif')", backgroundSize: 'contain' }} >{this.state.token}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-form-item">
                                                    <div class="ant-row ant-form-item-row">
                                                        <div class="ant-col ant-form-item-control">
                                                            <div class="ant-form-item-control-input">
                                                                <div class="ant-form-item-control-input-content">
                                                                    <button type="submit" class="ant-btn ant-btn-primary tron-login-btn " onClick={(e) => this.handleSubmit(e)} ><span>Log in</span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div class="tron-tabs-panel-footer">
                                                <div class="tron-forgot-password">
                                                    <Link onClick={this.props.onForgot} class="" to="">Forgot password?</Link>
                                                </div>
                                                <div class="tron-to-register">
                                                    <Link onClick={this.props.onRegister} class="" to="">Register</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >
            </div>
        )
    }
}