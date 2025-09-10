import { React, Component } from 'react';
import { Link } from "react-router-dom";
import { ContractDetails } from './_contractDetails';
import { ContractCode } from './_contractCode';
import { AddressTxn } from './_addressTxn';
import { AddressInternalTxn } from './_addressInternalTxn';
import { AddressTnsfr } from './_addressTnsfr';
import './address.css';
import './Transactions.css';
import Copy from './Services';
export class Contract extends Component {
    static displayName = Contract.name;
    constructor(props) {
        super(props);
        this.state = {
            address: window.location.href.split('/')[4].split('#')[0],
            account: {},
            activeFrame: window.location.href.split('/')[4].split('#')[1] ?? 'Transaction',
            isVerified: 0
        };        
    }

    // Function to handle button click
    handleButtonClick = (frameName) => {
        this.setState({ activeFrame: frameName, address: this.state.address });
    };

    componentDidMount() {
        this.populateData();
    }
    async populateData() {

        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + '/weatherforecast/GetContractDetails?add=' + this.state.address);
        const data = await response.json();
        this.setState({ isVerified: data.isverified });
        //console.log(data);
        //debugger;
    }
    render() {
        const { activeFrame } = this.state;

    return (


        <div id="mainContent">
            <main className="container header-overlap account-new address-container address-page">
                <div className="row">
                    <div className="col-md-12">
                        <ContractDetails add={this.state.address} />
                        {/*<div className="profit-box address-profit">*/}
                        {/*    <div className="common-profit-wapper" id="profitWrapper">*/}
                        {/*        <iframe title="adver" width="100%" id="pid-001-0-003" name="pid-001-0-003" height="100" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://engine.tronads.io/html/pid-001-0-003.html?env%3D2%26pid%3D001-0-003%26is_mock%3D0%26lang%3Den%26uuid%3D6ae43f08-8aad-48b8-bde7-2b03ad022522%26waddr%3D%26tokenlist%3DTMw1Mzm6FWu1iRAWUeJvW1BiYFGVZbBzZx%26txid%3D" ></iframe>  </div>  </div>*/}
                        <div id="tab_data_list" className="card mt-3 new-list-style-body address-table-pagination list-style-body ">
                            <div className="card-header list-style-body__header false">
                                <ul className="nav nav-tabs card-header-tabs ">
                                    <li className="nav-item">
                                        <Link to='#Transaction' className={`nav-link text-dark ${activeFrame === 'Transaction' ? 'active' : ''}`} onClick={() => this.handleButtonClick('Transaction')}>
                                                <span>  <span>Transactions</span>  </span>  </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='#Transfer' className={`nav-link text-dark ${activeFrame === 'Transfer' ? 'active' : ''}`} onClick={() => this.handleButtonClick('Transfer')}>
                                            <span>  <span>Transfers</span>  </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='#InternalTransaction' className={`nav-link text-dark ${activeFrame === 'InternalTransaction' ? 'active' : ''}`} onClick={() => this.handleButtonClick('InternalTransaction')}>
                                                <span>  <span>Internal txns</span>  </span>  </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='#ContractCode' className={`d-flex align-items-center nav-link text-dark ${activeFrame === 'ContractCode' ? 'active' : ''}`} onClick={() => this.handleButtonClick('ContractCode')}>
                                            <span> Contract </span>  {this.state.isVerified === 2 && <img className="pass-img" style={{ marginTop:'8px' }} src="./assets/img/pass.svg" alt="pass" />}  </Link>
                                    </li>
                                    <li className="nav-item" style={{ display: 'none' }}>
                                        <a className="nav-link text-dark" href="#/address/TMw1Mzm6FWu1iRAWUeJvW1BiYFGVZbBzZx/freeze">  <span>  <span>Staking Details</span>  </span>  </a>  </li>
                                    <li className="nav-item" style={{ display: 'none' }}>
                                        <a className="nav-link text-dark" href="#/address/TMw1Mzm6FWu1iRAWUeJvW1BiYFGVZbBzZx/contracts">  <span>  <span>Contracts Published</span>  </span>  </a>  </li>
                                    <li className="nav-item" style={{ display: 'none' }}>
                                        <a className="nav-link text-dark" href="#/address/TMw1Mzm6FWu1iRAWUeJvW1BiYFGVZbBzZx/analysis">  <span>  <span>Analysis</span>  </span>  </a>  </li>
                                    <li className="nav-item" style={{ display: 'none' }}>
                                        <a className="nav-link text-dark" href="#/address/TMw1Mzm6FWu1iRAWUeJvW1BiYFGVZbBzZx/permissions">  <span>  <span>Account Permission </span>  </span>  </a>  </li>
                                </ul>
                            </div>
                            <div className="card-body p-0 list-style-body__body">
                                {this.state.activeFrame === "Transaction" && <AddressTxn add={this.state.address} feed={[]} /> }
                                {this.state.activeFrame === "InternalTransaction" && <AddressInternalTxn add={this.state.address} feed={[]} />}
                                {this.state.activeFrame === "Transfer" && <AddressTnsfr add={this.state.address} feed={[]} />}
                                {this.state.activeFrame === "ContractCode" && <ContractCode add={this.state.address} feed={[]} />}


                            </div>
                        </div>
                    </div>
                </div>  <div className="tron-feedback-container false false">  <svg className="icon tron-icon tron-icon-like" aria-hidden="true">  <use xlinkHref="#icon-feedback">  </use>  </svg>  <span className="tron-feedback-text">  <span>Is this page helpful?</span>  <svg className="icon tron-icon tron-icon-close-feedback" aria-hidden="true">  <use xlinkHref="#icon-a-icon-close">  </use>  </svg>  </span>  </div>
            </main>
        </div>


    );
  }
}
