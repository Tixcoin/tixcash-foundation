import { React, Component } from 'react';
import './address.css';
import { AddEllipsis } from './_addEllipsis';
import Copy from './Services';

import moment from 'moment';
export class ContractDetails extends Component {
    static displayName = ContractDetails.name;
    constructor(props) {
        super(props);
        this.state = { address: props.add, account: {}, loading: true };
    }

    componentDidMount() {
        this.populateData();
    }
    async populateData() {

        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + '/weatherforecast/GetContractDetails?add='+this.state.address);
        const data = await response.json();
        this.setState({ account: data, address: this.state.address, loading: false });
        //console.log(data);
        //debugger;
    }
    GetFormattedTime = (d) => {
        if (d > 0) {
            var dt = new Date(d).toUTCString();
            return localStorage.getItem("timeFormat") == 'LOCAL' ? moment.utc(dt).local().format('llll') : moment.utc(dt).format('llll');
        } else return '---';
    }
    render() {
    
    return (
          <div className="top-head">
                            <div className="address-top">
                                <div className="address-title">
                                    <div className="address-title-box">
                                        <div className="address-title-name">
                                            <span>Contract</span>
                                        </div>
                                        <div className="address-title-address-wrap flex-start">
                                            <div className="address-container address-title-address-cont address-all-container ">
                                                <div className="react-contextmenu-wrapper">
                                                    <div className="truncate-ellipsis">
                                                        <div>
                                                            <div className="d-flex address-link-wrap  align-items-center">
                                                                <a className="text-truncate address-link " href={"address/"+this.state.address} >
                                                                    <div className="d-inline-flex align-items-center">
                                                                        <img className="tron-square-24px tron-border-radius-100  tron-mr-8px d-inline-flex align-items-center" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2M3MTQ2ZiI+PC9yZWN0PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi41MjA2MjAwNjQyMTA3MDQgNS4zODA4NjI3NTE2MjU3NjcpIHJvdGF0ZSgyNjQuNCA1MCA1MCkiIGZpbGw9IiNmMzk0MDAiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzUuMzI5MzA1NTgyNDE1NTM2IDE1LjM2NTgxMTU3OTM4MjE3Nykgcm90YXRlKDIwMC4wIDUwIDUwKSIgZmlsbD0iIzE1YzRmMiI+PC9yZWN0PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNC42NjQ5MzI4MTg2MDAyNTYgODAuNDA1MzY4NjcyNzQwNjgpIHJvdGF0ZSgxNzMuOCA1MCA1MCkiIGZpbGw9IiNmMTcwMDIiPjwvcmVjdD48L3N2Zz4=" alt="" />
                                                                        <div className="ellipsis_box ellipsis_box_all">
                                                            <div className="d-inline-block line-ellipsis">{this.state.address}</div>  </div>  </div>  </a>
                                                <div className="labelShow">  </div>  {this.state.address && <Copy value={this.state.address} />}
                                                              
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="info-wrap">
                                <div className="address-info address-info-new">
                                    <div className="address-asset-wrap">
                                      </div>
                                    <table className="table m-0 contract_details">
                        <tbody>

                            <tr>
                                <th><span className="mr-1"><span>Name</span>:</span></th>
                                <td>
                                    <span>
                                        {this.state.account ? this.state.account.Name : "ABC"}
                                    </span>
                               </td>
                            </tr>

                            <tr>
                                <th><span className="mr-1"><span>Balance</span>:</span></th>
                                <td>  <span>
                                    {this.state.account.GetAccount ? this.state.account.GetAccount.Balance:0 }
                                </span> TXH</td>
                            </tr>

                            <tr>
                                <th><span className="mr-1"><span>Issuer</span>:</span></th>
                                <td>
                                    <span className="issuer_address" >
                                        {this.state.account.OriginAddress ? this.state.account.OriginAddress : "0x0"}
                                    </span>
                                    {/*<span className="d-md-none">*/}
                                    {/*    <AddEllipsis hash={this.state.account.OriginAddress} />*/}
                                    {/*</span>*/}
                                    {/*{window.innerWidth < 768 && }*/}
                                </td>
                            </tr>

                            <tr>
                                <th><span className="mr-1"><span>Created Txn</span>:</span></th>
                                <td>
                                    <span>
                                        {this.state.account.GetAccount ? this.state.account.GetAccount.CreatedTxn : "0x0"}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th><span className="mr-1"><span>CreateTime On</span>:</span></th>
                                <td>
                                    <span> {this.state.account.GetAccount && this.GetFormattedTime(this.state.account.GetAccount.CreateTime)}</span>
                                </td>
                            </tr>

                            <tr style={{ display: 'none' }}>
                                <th><span className="mr-1"><span>Energy Consumption <br/> Ratio:</span>:</span></th>
                                <td>
                                    Contract <span> {this.state.account.ConsumeUserResourcePercent + " %"}</span>
                                    User <span> {this.state.account.ConsumeUserResourcePercent + " %"}</span>
                                </td>
                            </tr>
                            
                            <tr style={{ display: 'none' }} ><th><span className="mr-1"><span>Total Bandwidth</span>:</span></th>
                                <td className="td-progress"><span className="remain-new"><i>
                                    <span>Available:</span> {this.state.account.GetAccountResource ? (this.state.account.GetAccountResource.FreeNetLimit-this.state.account.GetAccountResource.FreeNetUsed) : 0}</i>&nbsp;/&nbsp;<a href="#">
                                        <span className="rgb-194">{this.state.account.GetAccountResource ? this.state.account.GetAccountResource.FreeNetLimit : 0}</span></a></span></td></tr>

                            <tr style={{ display: 'none' }} ><th><span className="mr-1"><span>Total Energy</span>:</span></th><td className="td-progress"><span className="remain-new"><i><span>Available:</span> {this.state.account.GetAccountResource ? (this.state.account.GetAccountResource.EnergyLimit - this.state.account.GetAccountResource.EnergyUsed) : 0}</i>&nbsp;/&nbsp;<a href="#"  ><span className="rgb-194">{this.state.account.GetAccountResource ? (this.state.account.GetAccountResource.EnergyLimit) : 0}</span></a></span></td></tr>
                          </tbody>
                                    </table>
                                </div>
                <div className="asset-overview-table" style={{display: 'none'} }>
                    
                </div>

                                </div>

                        </div>
    );
  }
}
