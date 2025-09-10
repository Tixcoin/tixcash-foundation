import React, { Component } from 'react';

export class DashSetting extends Component {
    constructor(props) {
        super(props);
        if (props.email)
            this.state = {
                email: props.email,
                repass: null,
                pass: null,
                status: ''
            };
        // console.log(TokenGenerate());
    }
    
    setValues = (key, value) => {
        this.setState({
            email: key == "email" ? value : this.state.email,
            pass: key == "pass" ? value : this.state.pass,
            repass: key == "repass" ? value : this.state.repass,
            status: key == "status" ? value : this.state.status,
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setValues('status', await this._doSubmit());
    }

    _doSubmit = async () => {
        if (this.state.pass == null || this.state.pass == '') { return 'Password required'; return; }
        if (this.state.repass == null || this.state.repass == '') { return 'Repassword required'; return; }
        if (this.state.pass !== this.state.repass) { return 'Password mismatched'; return; }

        // create a new FormData object and append the file to it
        const file = new FormData();
        file.append("email", this.state.email);
        file.append("password", this.state.pass);

        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + "/weatherforecast/AuthUpdatePass", {
            method: 'POST',
            body: file
        });
        // console.log(await response.text());
        return await response.text();

    }

    render() {
        return (
             <main class="ant-layout-content">
                    <div class="myaccount-overview-container">
                        <div class="tron-feedback-container false false">
                            <svg class="icon tron-icon tron-icon-like" aria-hidden="true">
                                <use ></use>
                            </svg>
                            <span class="tron-feedback-text">
                                <span>Is this page helpful?</span>
                                <svg class="icon tron-icon tron-icon-close-feedback" aria-hidden="true"><use ></use></svg>
                            </span>
                        </div>
                        <div class="title">Account Settings</div>
                        <div class="content-wrapper">
                        <div class="content-title">Change password</div>
                       
                        <div class="d-flex flex-wrap justify-content-between flex-sm-col ant-form-item">
                            <div class="">{this.state.status != "succeeded" && <span style={{ color: "white", backgroundColor: "red" }}>{this.state.status}</span>
                            }</div>
                            <div class="">{this.state.status == "succeeded" && <span style={{ color: "white", backgroundColor: "green" }}>Password updated successfully.</span>
                            }</div>
                            <div class="cotent-item justify-content-between flex-sm-col">
                                <div class="content-itme-num mb-10">
                                    <input placeholder="Enter Password" id="dash_Favourite" aria-required="true" class="ant-input" type="text"
                                        onChange={(e) => this.setValues('pass', e.target.value)}
                                        value={this.state.favadd} />
                                </div>
                                <div class="content-itme-num mb-10">
                                    <input placeholder="Confirm password" id="dash_Favourite1" aria-required="true" class="ant-input" type="text"
                                        onChange={(e) => this.setValues('repass', e.target.value)}
                                        value={this.state.favadd} />
                                </div>
                                <div class="content-item-title">
                                    <button type="submit" id="btnPassUpdate" class="ant-btn ant-btn-primary" onClick={(e) => this.handleSubmit(e)}><span>Update Password</span></button>

                                </div>
                           
                            </div>
                                
                            </div>
                        </div>
                    </div>
                </main>
        )
    }
}