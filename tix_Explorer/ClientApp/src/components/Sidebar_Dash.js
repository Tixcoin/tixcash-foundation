import React, { Component } from 'react';

import { Link, Navigate } from "react-router-dom";
export class SidebarDash extends Component {

    constructor(props) {
        super(props);
        if (props.email)
            this.state = {
                email: props.email
            };
        // console.log(TokenGenerate());
    }

  

    render() {
        return (
            <div class="menu-container">
                <div class="account-info"><span class="avatar">{this.state.email.substr(0, 1).toUpperCase()}</span><span class="name">{this.state.email}</span></div>
                    <span class="menu-divider"></span><aside class="ant-layout-sider ant-layout-sider-dark">
                        <div class="ant-layout-sider-children">
                            <ul class="ant-menu ant-menu-root ant-menu-inline ant-menu-light menu-list" role="menu" tabindex="0" data-menu-list="true">
                            <li class="ant-menu-item ant-menu-item-selected pl-24" role="menuitem" tabindex="-1" path="" data-menu-id="rc-menu-uuid-15462-3-AccountOverview" >
                                    <svg class="icon tron-icon icon-overview ant-menu-item-icon" aria-hidden="true"><use ></use></svg>
                                <span class="ant-menu-title-content">
                                    <Link to="/Dashboard"><span>Account Overview</span></Link>
                                        
                                    </span>
                                </li>
                            <li class="ant-menu-item pl-24" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-15462-3-AccountSetting" >
                                    <svg class="icon tron-icon icon-setting ant-menu-item-icon" aria-hidden="true"><use ></use></svg>
                                <span class="ant-menu-title-content">
                                    <Link to="/DashboardSettings"><span>Account Settings</span></Link>
                                    </span>
                                </li>
                            <li style={{ display:"none" }} class="ant-menu-item pl-24" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-15462-3-FollowList" >
                                <svg class="icon tron-icon icon-like ant-menu-item-icon" aria-hidden="true"><use></use></svg>
                                <span class="ant-menu-title-content">
                                    <a class="menu-item" href="#/myaccount/followList"><span>Watch List</span></a>
                                  </span></li>
                            <li style={{ display: "none" }} class="ant-menu-item pl-24" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-15462-3-FavoriteChart" ><svg class="icon tron-icon icon-favorite ant-menu-item-icon" aria-hidden="true"><use ></use></svg>
                                <span class="ant-menu-title-content"><a class="menu-item favorite-chart-menu-item" href="#/data/charts/favorite"><span>Chart Favorites</span></a></span></li>
                            <li style={{ display: "none" }} class="ant-menu-item pl-24" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-15462-3-PrivateLabel" ><svg class="icon tron-icon icon-tag ant-menu-item-icon" aria-hidden="true"><use ></use></svg>
                                <span class="ant-menu-title-content"><a class="menu-item" href="#/myaccount/privateLabel"><span>Private Tags</span></a></span></li>
                            <li style={{ display: "none" }} class="ant-menu-item pl-24" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-15462-3-TxnRemark"><svg class="icon tron-icon icon-edit ant-menu-item-icon" aria-hidden="true"><use ></use></svg>
                                <span class="ant-menu-title-content"><a href="#/myaccount/txnRemark"><span className="ml-12">Private Txn Notes</span></a></span></li>
                            <li class="ant-menu-item pl-24" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-15462-3-APIKeys" ><svg class="icon tron-icon icon-key ant-menu-item-icon" aria-hidden="true"><use ></use></svg>
                                <span class="ant-menu-title-content"> <Link to="/DashboardApiKeys"><span>API Keys</span></Link></span></li>
                                <li><hr></hr></li>

                            <li onClick={this.props.onLogout} class="ant-menu-item pl-24 pt-20" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-15462-3-APIKeys" ><svg class="icon tron-icon icon-key ant-menu-item-icon" aria-hidden="true"><use ></use></svg>
                                <span class="ant-menu-title-content"><span  className="ml-12">Logout</span></span></li>

                        </ul>
                        <div aria-hidden="true" className="d-none" ></div>
                        </div>
                    </aside>
                </div>

        )
    }
}