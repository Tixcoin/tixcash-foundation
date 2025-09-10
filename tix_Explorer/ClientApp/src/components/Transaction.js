
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { AddressInternalTxn } from './_addressInternalTxn';
import { AddressTnsfr } from './_addressTnsfr';
import { AddEllipsis } from './_addEllipsis';
import Shimmer from './Shimmer';
import './Transaction.css';
import Copy from './Services';

import { AddTimeZone } from './_addTimeZone';
export class Transaction extends Component {
    static displayName = Transaction.name;
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            activeFrame: window.location.href.split('/')[4].split('#')[1] ?? 'Transfer',
            txn: window.location.href.split('/')[4].split('#')[0]  //5109384
        };
    }

    componentDidMount() {
        this.populateTxnData();
    }

    async populateTxnData() {
        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + '/weatherforecast/GetTransaction?tx=' + this.state.txn);
        const resdata = await response.json();
        this.setState({ data: resdata.data, txn: this.state.txn, activeFrame: this.state.activeFrame });
    }

    handleButtonClick = (frameName) => {
        this.setState({ activeFrame: frameName, data: this.state.data });
    };

   

    render() {
        const { activeFrame, data } = this.state;
        const tx = data && data.transactions && data.transactions[0];

        const renderShimmerRow = () => (
            <tr>
                <td><Shimmer width="100%" height="20px" /></td>
                <td><Shimmer width="100%" height="20px" /></td>
            </tr>
        );

        return (
            <div id="mainContent">
                <main className="container header-overlap account-new address-container address-page">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="top-head">
                                <div className="address-top">
                                    <div className="address-title">
                                        <div className="address-title-box">
                                            <div className="address-title-name">
                                                <span>Transaction Details</span>
                                            </div>
                                        </div>
                                        <div className="accounttop">
                                            <span>Account</span>
                                            <span>{ }</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table style={{ backgroundColor: 'white', width: '100%', borderRadius: '10px' }}>
                                <thead>
                                    <tr>
                                        <th width="150px"></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data ? (
                                        <>
                                            <tr>
                                                <td>Transaction hash:</td>
                                                <td className=" d-sm-none ">{tx && tx.hash} {tx && <Copy value={tx.hash} />}</td>
                                                <td className="d-md-none ">{tx && <AddEllipsis hash={tx.hash} />}{tx && <Copy value={tx.hash} />} </td>
                                            </tr>
                                            <tr>
                                                <td>Status:</td>
                                                <td className="text-green">{tx && tx.resultCode}</td>
                                            </tr>
                                            <tr>
                                                <td>Type:</td>
                                                <td>{tx && tx.type}</td>
                                            </tr>
                                            <tr>
                                                <td>Block number:</td>
                                                <td >
                                                    {tx && <Link className="d-flex" to={"/block/" + tx.blocknumber}>
                                                        {tx.blocknumber}{<Copy value={tx.blocknumber} />}
                                                    </Link>}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Timestamp:</td>
                                                <td>{tx && <AddTimeZone dateUTC={tx.utcDate} />}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2"><hr /></td>
                                            </tr>
                                            <tr>
                                                <td>Value:</td>
                                                <td>{tx && tx.amount + " TXH"}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2"><hr /></td>
                                            </tr>
                                            <tr>
                                                <td>Consumption:</td>
                                                <td className="feeHtml">
                                                    <div>
                                                        <span className="trsn">EnergyFee <span>{tx && tx.receipt && tx.receipt.energyFee / 6} TXH</span></span>
                                                        {/*<span className="trsn">EnergyUsage <span>{tx && tx.receipt && tx.receipt.energyUsage} Energy</span></span>*/}
                                                        {/*<span className="trsn">EnergyUsageTotal <span>{tx && tx.receipt && tx.receipt.energyUsageTotal} Energy</span></span>*/}
                                                        {/*<span className="trsn">NetUsage <span>{tx && tx.receipt && tx.receipt.netUsage} Bandwidth</span></span>*/}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2"></td>
                                            </tr>
                                            <tr>
                                                <td>Fee & Limit:</td>
                                                <td className="feeHtml">
                                                    <div>
                                                        <span className="trsn">Net Fee <span>{tx && tx.receipt && tx.receipt.netFee / 6} TXH</span></span>
                                                        <span className="trsn">Fee Limit <span>{tx && tx.feeLimit / 6} TXH</span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    ) : (
                                        <>
                                            {renderShimmerRow()}
                                            {renderShimmerRow()}
                                            {renderShimmerRow()}
                                            {renderShimmerRow()}
                                            {renderShimmerRow()}
                                            {renderShimmerRow()}
                                            {renderShimmerRow()}
                                        </>
                                    )}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="2"><hr /></td>
                                    </tr>
                                </tfoot>
                            </table>
                            <div id="tab_data_list" className="card mt-3 new-list-style-body address-table-pagination list-style-body">
                                <div className="card-header list-style-body__header false">
                                    <ul className="nav nav-tabs card-header-tabs">
                                        <li className="nav-item">
                                            <Link to='#Transfer' className={`nav-link text-dark ${activeFrame === 'Transfer' ? 'active' : ''}`} onClick={() => this.handleButtonClick('Transfer')}>
                                                <span><span>Transfers</span></span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='#InternalTransaction' className={`nav-link text-dark ${activeFrame === 'InternalTransaction' ? 'active' : ''}`} onClick={() => this.handleButtonClick('InternalTransaction')}>
                                                <span><span>Internal txns</span></span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='#EventLogs' className={`nav-link text-dark ${activeFrame === 'EventLogs' ? 'active' : ''}`} onClick={() => this.handleButtonClick('EventLogs')}>
                                                <span><span>Event Logs</span></span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body p-0 list-style-body__body">
                                    {activeFrame === "Transfer" && data && data.transactions[0].transfers && <AddressTnsfr feed={data.transactions[0].transfers} />}
                                    {activeFrame === "InternalTransaction" && data && data.transactions[0].internalTxns && <AddressInternalTxn feed={data.transactions[0].internalTxns} />}
                                    {activeFrame === "EventLogs"}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tron-feedback-container false false">
                        <svg className="icon tron-icon tron-icon-like" aria-hidden="true">
                            <use xlinkHref="#icon-feedback"></use>
                        </svg>
                        <span className="tron-feedback-text">
                            <span>Is this page helpful?</span>
                            <svg className="icon tron-icon tron-icon-close-feedback" aria-hidden="true">
                                <use xlinkHref="#icon-a-icon-close"></use>
                            </svg>
                        </span>
                    </div>
                </main>
            </div>
        );
    }
}

