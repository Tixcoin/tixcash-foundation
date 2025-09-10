import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { AddEllipsis } from './_addEllipsis';
import { AddressTxn } from './_addressTxn';
import { AddressInternalTxn } from './_addressInternalTxn';
import { AddressTnsfr } from './_addressTnsfr';
import { AddTimeZone } from './_addTimeZone';
import './Block.css';

import Copy from './Services';
export class Block extends Component {
    static displayName = Block.name;
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            activeFrame: window.location.href.split('/')[4].split('#')[1] ?? 'Transaction',
            block: window.location.href.split('/')[4].split('#')[0]  //5109384
        };
    }
    componentDidMount() {
        this.populateBlockData();
    }
    async populateBlockData() {

        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + '/weatherforecast/GetBlock?block=' + this.state.block);
        const resdata = await response.json();

        this.setState({ data: resdata.data, block: this.state.block, activeFrame: this.state.activeFrame });
      //  console.log(resdata.data);
        //debugger;
    }
  
    // Function to handle button click
    handleButtonClick = (frameName) => {
      
        this.setState({ activeFrame: frameName, data: this.state.data });
       // console.log(this.state);
    };


    render() {
        const { activeFrame, data } = this.state;
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
                                                <span>Block Details</span>
                                            </div>
                                      
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table style={{ backgroundColor: 'white', width:'100%', borderRadius:'10px' }}>
                                <thead>
                                    <tr> <th width="150px"></th> <th></th> <th></th> </tr>
                                </thead>
                                <tbody>
                                    <tr> <td >Block Number:</td> <td className="d-flex"><span>{data.number}</span> {data.number && <Copy value={data.number} />}
                                    </td>
                                    </tr>
                                    <tr> <td>Blockhash:</td> <td className="d-sm-none ">{data.blockhash} {data.blockhash && <Copy value={data.blockhash} />}</td>
                                        <td className="d-md-none"> {data.blockhash && <AddEllipsis hash={data.blockhash} />} {data.blockhash && <Copy value={data.blockhash} />}</td> </tr>
                                    <tr> <td>Time:</td> <td> {data.utcDate && <AddTimeZone dateUTC={data.utcDate} />} </td> </tr>
                                    <tr> <td>Block Size:</td>  <td>{data.blockSize}</td> </tr>
                                    <tr> <td>Status:</td>  <td></td> </tr>
                                    <tr> <td>Witness:</td>  <td>
                                        { data.witnessAddress && <Link to={"/address/" + data.witnessAddress} className="text-truncate address-link">
                                            <div className="ellipsis_box"><AddEllipsis hash={data.witnessAddress} /></div>
                                        </Link>
                                        } </td> </tr>

                                    <tr> <td>Parent Block Hash:</td> <td className="d-sm-none g-2">{data.parentHash} {data.parentHash && <Copy value={data.parentHash} />}</td> <td className="d-md-none">{data.parentHash && <AddEllipsis hash={data.parentHash} />} <span className="copy-icon iconfont copy-hover icon-copy"></span></td> </tr>
                                    <tr> <td>Version Number:</td>  <td>{data.version}</td> </tr>
                                    
                                </tbody>
                                <tfoot>
                                    <tr> <td colSpan="3"><hr></hr></td> </tr>
                                </tfoot>
                            </table>


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
                                                                         </ul>
                                </div>
                                <div className="card-body p-0 list-style-body__body">
                                    {activeFrame === "Transaction" && data.transactions && <AddressTxn feed={data.transactions} />}
                                    {activeFrame === "InternalTransaction" && data.internalTxns && <AddressInternalTxn feed={data.internalTxns} />}
                                    {activeFrame === "Transfer" && data.transfers && <AddressTnsfr feed={data.transfers} />}
                                </div>
                            </div>
                        </div>
                    </div>  <div className="tron-feedback-container false false">
                        <svg className="icon tron-icon tron-icon-like" aria-hidden="true">
                        <use xlinkHref="#icon-feedback">  </use>
                        </svg>
                        <span className="tron-feedback-text">
                            <span>Is this page helpful?</span>
                            <svg className="icon tron-icon tron-icon-close-feedback" aria-hidden="true">
                                <use xlinkHref="#icon-a-icon-close">  </use>
                            </svg>
                        </span>
                    </div>
                </main>
            </div>
                                      )
  }
}
