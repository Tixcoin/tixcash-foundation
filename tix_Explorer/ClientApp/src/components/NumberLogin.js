import React, { Component } from 'react';
import { Link } from "react-router-dom";
export class NumberLogin extends Component {
    render() {
        return (
            <div>
                < div class="ant-modal-wrap login-modal-wrap ant-modal-centered"  >
                <div role="dialog" aria-modal="true" class="ant-modal login" >
                    <div tabindex="0" aria-hidden="true" ></div>
                    <div class="ant-modal-content">
                            <button onClick={this.props.onClose} type="button" aria-label="Close" class="ant-modal-close"><span  class="ant-modal-close-x">
                                X
                            </span></button>
                        <div class="ant-modal-body">
                            <div class="login-container">
                                <div class="tron-tabs">
                                    <div class="tron-tabs-nav-list">
                                            <Link to=""><div onClick={this.props.onLogin} class="tron-tabs-tab " id="tron-login-type-0">Email</div></Link>
                                        <div class="tron-tabs-tab tron-tabs-tab-active " id="tron-login-type-1">Phone Number</div>
                                            <span class="tron-tabs-ink-bar ant-tabs-ink-bar-animated lf-32 num-active"></span></div>
                                    <div class="tron-tabs-panel">
                                        <form id="login" class="ant-form ant-form-horizontal">
                                            <div class="ant-form-item ant-form-item-with-help ant-form-item-has-success">
                                                <div class="ant-row ant-form-item-row">
                                                    <div class="ant-col ant-form-item-label">
                                                        <label for="login_mobile" class="ant-form-item-required ant-form-item-no-colon" title="Phone Number">Phone Number</label></div>
                                                    <div class="ant-col ant-form-item-control">
                                                        <div class="ant-form-item-control-input">
                                                            <div class="ant-form-item-control-input-content">
                                                                <div class="allow-dropdown separate-dial-code iti-sdc-3 intl-tel-input">
                                                                    <div class="flag-container">
                                                                        <div class="selected-flag" tabindex="0" title="India (भारत): +91">
                                                                            <div class="iti-flag in"></div>
                                                                            <div class="selected-dial-code">+91</div>
                                                                            <div class="arrow down"></div>
                                                                        </div>

                                                                    </div>
                                                                    <input type="tel" autocomplete="off" class="form-control-tel-input " name="" id="" placeholder="Enter your phone number" value="" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-wrap" >
                                                            <div id="login_mobile_help" class="ant-form-item-explain ant-form-item-explain-connected" role="alert">
                                                                <div class="ant-form-item-explain-success"></div>
                                                            </div>
                                                            <div ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-form-item-margin-offset mb-20px" ></div>
                                            </div>
                                            <div class="ant-form-item form-item-login-password">
                                                <div class="ant-row ant-form-item-row">
                                                    <div class="ant-col ant-form-item-label">
                                                        <label for="login_token" class="ant-form-item-required ant-form-item-no-colon" title="Verification Code">Verification Code</label></div>
                                                    <div class="ant-col ant-form-item-control">
                                                        <div class="ant-form-item-control-input">
                                                            <div class="ant-form-item-control-input-content"><span class="ant-input-affix-wrapper">
                                                                <input maxlength="6" placeholder="Enter verification code" id="login_token" aria-required="true" class="ant-input" type="text" value="" />
                                                                <span class="ant-input-suffix">
                                                                    <span class="suffix-container">
                                                                        <img alt="" src="/static/media/icon-line.d36405d4db5b90b2cd01c78082af728a.svg" class="suffix-icon-line" />
                                                                        <span class="suffix-send-code suffix-send-code-not">Send</span>

                                                                    </span>
                                                                </span></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ant-form-item">
                                                <div class="ant-row ant-form-item-row">
                                                    <div class="ant-col ant-form-item-control">
                                                        <div class="ant-form-item-control-input">
                                                            <div class="ant-form-item-control-input-content">
                                                                <button type="submit" class="ant-btn ant-btn-primary tron-login-btn tron-login-btn-disabled" disabled=""><span>Log in</span></button></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div class="tron-tabs-panel-footer tron-tabs-panel-footer-phone">
                                            <img alt="" src="/static/media/icon-tips-red.caae978f3a7c2622b99f61101b8fe35a.svg" class="tron-tabs-panel-footer-icon" /><span>Tixcash will soon stop supporting login with your phone number. Please register with your email address if you are new to Tixcash Explorer.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div tabindex="0" aria-hidden="true"></div>
                </div>

                </div>
            </div>
        )
    }
}