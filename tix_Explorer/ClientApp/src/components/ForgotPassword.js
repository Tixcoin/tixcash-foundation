import React, { Component } from 'react';
//import { Navigate } from "react-router-dom";

export class ForgotPassword extends Component {
    
    render() {
        return (
            <div className='wrapperReg'>
                <div class="ant-modal-wrap login-modal-wrap ant-modal-centered"  >
                    <div role="dialog" aria-modal="true" class="ant-modal login" >
                        <div tabindex="0" aria-hidden="true" ></div>
                        <div class="ant-modal-content">
                            <button onClick={this.props.onClose} type="button" aria-label="Close" class="ant-modal-close"><span class="ant-modal-close-x">X</span></button>
                            <div class="ant-modal-body">
                                <div class="login-container">
                                    <div class="tron-tabs">
                                        <div class="tron-tabs-nav-list">
                                            <div class="tron-tabs-tab tron-tabs-tab-active" id="tron-login-type-0">Reset Password</div>
                                          
                                        </div>
                                        <div class="tron-tabs-panel">
                                            {/*<div class="">{this.state.status !== "succeeded" && <span style={{ color: "white", backgroundColor: "red" }}>{this.state.status}</span>*/}
                                            {/*}</div>*/}
                                            {/*<div class="">{this.state.status === "succeeded" && <span style={{ color: "white", backgroundColor: "green" }}>Login Successfully. Please wait while your dashboard is being loaded <Navigate to="/Login" replace={true} /> </span>*/}
                                            {/*}</div>*/}
                                            <form id="login" class="ant-form ant-form-horizontal">
                                                <div class="ant-form-item">
                                                    <div class="ant-row ant-form-item-row">
                                                        <div class="ant-col ant-form-item-label">
                                                            <label for="login_email" class="ant-form-item-required ant-form-item-no-colon" title="Email">Email</label></div>
                                                        <div class="ant-col ant-form-item-control">
                                                            <div class="ant-form-item-control-input">
                                                                <div class="ant-form-item-control-input-content">
                                                                    <input placeholder="Enter the email linked to your account" id="login_email" aria-required="true" class="ant-input" type="text"
                                                                        
                                                                        
                                                                    />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-form-item">
                                                    <div class="ant-row ant-form-item-row">
                                                        <div class="ant-col ant-form-item-label">
                                                            <label for="login_email" class="ant-form-item-required ant-form-item-no-colon" title="Email">Verfication Code</label></div>
                                                        <div class="ant-col ant-form-item-control">
                                                            <div class="ant-form-item-control-input relative">
                                                                <div class="ant-form-item-control-input-content">
                                                                    <input placeholder="Enter the verification code in email" id="login_email" aria-required="true" class="ant-input" type="text"
                                                                       
                                                                    />
                                                                    <span class="ant-input-suffix send-btn">
                                                                        <div class="suffix-container">
                                                                           <span class="suffix-send-code suffix-send-code-not">Send</span>
                                                                        </div>
                                                                    </span>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-form-item">
                                                    <div class="ant-row ant-form-item-row">
                                                        <div class="ant-col ant-form-item-label">
                                                            <label for="login_email" class="ant-form-item-required ant-form-item-no-colon" title="Email">Set a new password</label></div>
                                                        <div class="ant-col ant-form-item-control">
                                                            <div class="ant-form-item-control-input">
                                                                <div class="ant-form-item-control-input-content">
                                                                    <input placeholder="Enter your new password" id="login_email" aria-required="true" class="ant-input" type="text"
                                                                      
                                                                    />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-form-item form-item-login-password">
                                                    <div class="ant-row ant-form-item-row">
                                                        <div class="ant-col ant-form-item-label">
                                                            <label for="login_password" class="ant-form-item-required ant-form-item-no-colon" title="Password">Confirm the new password</label></div>
                                                        <div class="ant-col ant-form-item-control">
                                                            <div class="ant-form-item-control-input">
                                                                <div class="ant-form-item-control-input-content"><span class="ant-input-affix-wrapper ant-input-password">
                                                                    <input autocomplete="off" placeholder="Enter your password" id="login_password" aria-required="true" type="password" class="ant-input"
                                                                      

                                                                    /></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="ant-form-item">
                                                    <div class="ant-row ant-form-item-row">
                                                        <div class="ant-col ant-form-item-control">
                                                            <div class="ant-form-item-control-input">
                                                                <div class="ant-form-item-control-input-content">
                                                                    <button type="submit" class="ant-btn ant-btn-primary tron-login-btn "  ><span>Reset password</span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div class="reset-password-footer"><div>I didn't receive the email verification code, what should I do?</div>
                                                <div>1. The email might be lost due to network connection error. Please resend a verification code or try again later. </div>
                                                <div>2. Please make sure you email address is still in use and check the Spam folder. </div>
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