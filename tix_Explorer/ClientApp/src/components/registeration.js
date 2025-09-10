import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
export class Registration extends Component {

    constructor(props) {

        super(props);
        this.state = {
            email: '',
            mobile: '',
            password: '',
            confirmpassword: '',
            status: '',
            showPass: false,
        };

    }

    setValues = (key, value) => {
        this.setState({
            email: key == "email" ? value : this.state.email,
            password: key == "password" ? value : this.state.password,
            confirmpassword: key == "confirmpassword" ? value : this.state.confirmpassword,
            mobile: key == "mobile" ? value : this.state.mobile,
            status: key == "status" ? value : this.state.status,
            token: key == "token" ? value : this.state.token
        });
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
        if (this.state.password !== this.state.confirmpassword) { return 'password does not match'; return; }

        // create a new FormData object and append the file to it
        const file = new FormData();
        file.append("email", this.state.email);
        file.append("mobile", this.state.mobile);
        file.append("password", this.state.password);

        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + "/weatherforecast/Register", {
            method: 'POST',
            body: file
        });
        return await response.text();

    }



    render() {
        return (
            <div className="wrapperReg">
                {this.state.status == "succeeded" && <Navigate />}

                < div class="ant-modal-wrap login-modal-wrap ant-modal-centered"  >
                    <div role="dialog" aria-modal="true" class="ant-modal login">
                        <div tabindex="0" aria-hidden="true" ></div>
                        <div class="ant-modal-content">
                            <button onClick={this.props.onClose} type="button" aria-label="Close" class="ant-modal-close">
                                <span class="ant-modal-close-x">
                                    X
                                </span>
                            </button>
                            <div class="ant-modal-body p-20">
                                <div class="login-container">
                                    <div class="tron-madal-title">Create Account</div>
                                    <div class="">{this.state.status != "succeeded" && <span style={{ color: "white", backgroundColor: "red" }}>{this.state.status}</span>
                                    }</div>
                                    <div class="">{this.state.status == "succeeded" && <span style={{ color: "white", backgroundColor: "green" }}>Registered Successfully. Please do <Link onclick={this.props.onLogin} to="" class="register-footer-link">log in now</Link></span>
                                    }</div>
                                    <form id="register" class="ant-form ant-form-horizontal">
                                        <div class="ant-form-item">
                                            <div class="ant-row ant-form-item-row">
                                                <div class="ant-col ant-form-item-label">
                                                    <label for="register_email" class="ant-form-item-required ant-form-item-no-colon" title="Email">Email</label></div>
                                                <div class="ant-col ant-form-item-control">
                                                    <div class="ant-form-item-control-input">
                                                        <div class="ant-form-item-control-input-content">
                                                            <input placeholder="Enter your email address" id="register_email" aria-required="true" class="ant-input" type="text"
                                                                onChange={(e) => this.setValues('email', e.target.value)}
                                                                value={this.state.email}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ant-form-item">
                                            <div class="ant-row ant-form-item-row">
                                                <div class="ant-col ant-form-item-label">
                                                    <label for="register_mobile" class="ant-form-item-required ant-form-item-no-colon" title="Mobile">Mobile</label></div>
                                                <div class="ant-col ant-form-item-control">
                                                    <div class="ant-form-item-control-input">
                                                        <div class="ant-form-item-control-input-content">
                                                            <input placeholder="Enter your mobile" id="register_mobile" aria-required="true" class="ant-input" type="text"
                                                                onChange={(e) => this.setValues('mobile', e.target.value)}
                                                                value={this.state.mobile}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ant-form-item">
                                            <div class="ant-row ant-form-item-row">
                                                <div class="ant-col ant-form-item-label">
                                                    <label for="register_password" class="ant-form-item-required ant-form-item-no-colon" title="Password">Password</label></div>
                                                <div class="ant-col ant-form-item-control">
                                                    <div class="ant-form-item-control-input">
                                                        <div class="ant-form-item-control-input-content"><span class="ant-input-affix-wrapper ant-input-password">
                                                            <input autocomplete="new-password" placeholder="Enter your password" id="register_password" aria-required="true" type={this.state.showPass ? 'text' : 'password'} class="ant-input"
                                                                onChange={(e) => this.setValues('password', e.target.value)}
                                                                value={this.state.password}
                                                            />
                                                            {this.state.showPass ? <img onClick={this.handleShowPass} width="18" height="20" alt="show" src='./assets/img/eye.png' /> : <img width="18" onClick={this.handleShowPass} height="20" alt="show" src='./assets/img/eye_cross.png' />}

                                                            <span class="ant-input-suffix"><span class="ant-input-password-icon"></span></span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ant-form-item register-form-item-third">
                                            <div class="ant-row ant-form-item-row">
                                                <div class="ant-col ant-form-item-label">
                                                    <label for="register_verify_password" class="ant-form-item-required ant-form-item-no-colon" title="Confirm password">Confirm password</label></div>
                                                <div class="ant-col ant-form-item-control">
                                                    <div class="ant-form-item-control-input">
                                                        <div class="ant-form-item-control-input-content"><span class="ant-input-affix-wrapper ant-input-password">
                                                            <input autocomplete="new-password" placeholder="Enter password again" id="register_verify_password" aria-required="true" type={this.state.showPass ? 'text' : 'password'} class="ant-input"
                                                                onChange={(e) => this.setValues('confirmpassword', e.target.value)}
                                                                value={this.state.confirmpassword}
                                                            />
                                                            {this.state.showPass ? <img onClick={this.handleShowPass} width="18" height="20" alt="show" src='./assets/img/eye.png' /> : <img width="18" onClick={this.handleShowPass} height="20" alt="show" src='./assets/img/eye_cross.png' />}
                                                            <span class="ant-input-suffix"><span class="ant-input-password-icon"></span></span></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ant-form-item">
                                            <div class="ant-row ant-form-item-row">
                                                <div class="ant-col ant-form-item-control">
                                                    <div class="ant-form-item-control-input">
                                                        <div class="ant-form-item-control-input-content">
                                                            <label class="ant-checkbox-wrapper ant-checkbox-wrapper-in-form-item"><span class="ant-checkbox ant-wave-target">
                                                                <input id="register_agree" class="ant-checkbox-input" type="checkbox" /><span class="ant-checkbox-inner"></span></span><span> <span><span>I agree</span><a class="login-form-forgot login-form-forgot-a ml-2" href="/#/aboutUs/privacyPolicy" target="_blank">Privacy Policy</a><a class="login-form-forgot login-form-forgot-a ml-1" href="/#/aboutUs/termsOfService" target="_blank">Terms of Service</a></span></span></label></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ant-form-item">
                                            <div class="ant-row ant-form-item-row">
                                                <div class="ant-col ant-form-item-control">
                                                    <div class="ant-form-item-control-input">
                                                        <div class="ant-form-item-control-input-content">
                                                            <button type="submit" class="ant-btn ant-btn-primary tron-login-btn" onClick={(e) => this.handleSubmit(e)} ><span>Create</span></button></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="register-footer"><span class="register-footer-text">I have an account, </span><Link onclick={this.props.onLogin} to="" class="register-footer-link">log in now</Link></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}