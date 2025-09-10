import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { AddEllipsis } from './_addEllipsis';
import AgeCount from './_ageAgo';

import GetMethodType from './MethodType';
function Hometop4txns(props) {
    const [FourTxs, setFourTxs] = useState([{ hash: '', from: undefined, to: undefined, value: undefined, txnGAS: undefined, blocktime: undefined, status: undefined, method: undefined }, { hash: '', from: undefined, to: undefined, value: undefined, txnGAS: undefined, blocktime: undefined, status: undefined, method: undefined }, { hash: '', from: undefined, to: undefined, value: undefined, txnGAS: undefined, blocktime: undefined, status: undefined, method: undefined }, { hash: '', from: undefined, to: undefined, value: undefined, txnGAS: undefined, blocktime: undefined, status: undefined, method: undefined }, { hash: '', from: undefined, to: undefined, value: undefined, txnGAS: undefined, blocktime: undefined, status: undefined, method: undefined }, { hash: '', from: undefined, to: undefined, value: undefined, txnGAS: undefined, blocktime: undefined, status: undefined, method: undefined }, { hash: '', from: undefined, to: undefined, value: undefined, txnGAS: undefined, blocktime: undefined, status: undefined, method: undefined }, { hash: '', from: undefined, to: undefined, value: undefined, txnGAS: undefined, blocktime: undefined, status: undefined, method: undefined }, { hash: '', from: undefined, to: undefined, value: undefined, txnGAS: undefined, blocktime: undefined, status: undefined, method: undefined }, { hash: '', from: undefined, to: undefined, value: undefined, txnGAS: undefined, blocktime: undefined, status: undefined, method: undefined }]);
   

    useEffect(() => {
        console.log(props.txns[0].hash);
        if (props && props.txns)
            setFourTxs((props.txns.map(object => ({
                //  only use these fields for newData
                hash: object.hash,
                from: object.from,
                to: object.to,
                value: object.value,
                txnGAS: object.txnGAS,
                blocktime: object.blocktime,
                status: object.status,
                method: GetMethodType(object.methodid)
            }))));
    }, [props]); // empty array means only once
    //debugger;
   // console.log(props);

    return (
        <div className="parent_container2 ">
            <div className="container home-chart recent-transactions-panel">
                <div className="header d-flex">
                    <a className="title-wrap" href="#/blockchain/transactions">
                        <span>Transactions</span>
                    </a>
                </div>
                <div className="content">
                    <div className=" transaction">
                        <div className="col-56 home-translations-table">
                            <div className="card">
                                <ul className="list-group list-group-flush list-group-pc">
                                    {FourTxs.map(tx =>
                                    
                                    <li className="list-group-item transactions-body list-group-item-en">
                                        <div className="list-item-cont">
                                            <div className="hash-body mb-0 d-flex">
                                                <div
                                                    className="d-flex flex-shrink-1 flex-grow-1 flex-column align-items-start hash-link-item">
                                                    <div
                                                        className="ln1 it1 d-flex flex-grow-1 color-transfers-hash transaction-hash">
                                                        <div className="hash">
                                                            <div className="truncate-ellipsis">
                                                                    <span>
                                                                        {tx.hash &&
                                                                            <Link to={"/transaction/" + tx.hash} className="color-tron-100 list-item-word">
                                                                                <div className="ellipsis_box"><AddEllipsis hash={tx.hash} /></div>
                                                                            </Link>

                                                                        }

                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ln2 it1 d-flex list-item-word it1">
                                                        <div
                                                            className="text-right tron-font-size-12px tron-color-gray-dark">
                                                            <div className="token_black table_pos">
                                                                    <div>{tx.blocktime ? <AgeCount unixseconds={tx.blocktime} /> : <></>}</div>  
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex address-item">
                                                    <div className=" d-flex flex-column text-left">
                                                        <div className="d-flex ln1 it2">
                                                            <div
                                                                className="tron-color-gray-dark transactionAddressTitle en">
                                                                <span>From</span>
                                                            </div>
                                                            <div
                                                                className="address-container address_max_width_home  ">
                                                                <div className="react-contextmenu-wrapper">
                                                                    <div className="truncate-ellipsis">
                                                                        <div>
                                                                            <div
                                                                                className="d-flex address-link-wrap ">
                                                                                    <Link to={"/address/" + tx.from} className="text-truncate address-link" >
                                                                                        <div className="">
                                                                                        <div className="ellipsis_box ">
                                                                                          
                                                                                                <div>{tx.from}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    </Link> 
                                                                                <div className="labelShow">
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                              
                                                            </div>

                                                        </div>
                                                        <div
                                                            className="d-flex ln2 it2 transactionToAddressWrapper">
                                                                <div
                                                                    className="tron-color-gray-dark transactionAddressTitle en">
                                                                    <span>To</span>
                                                                </div>
                                                                <div
                                                                    className="address-container address_max_width_home  ">
                                                                    <div className="react-contextmenu-wrapper">
                                                                        <div className="truncate-ellipsis">
                                                                            <div>
                                                                                <div
                                                                                    className="d-flex address-link-wrap ">
                                                                                    <Link to={"/address/" + tx.to} className="text-truncate address-link">
                                                                                        <div className="">
                                                                                            <div
                                                                                                className="ellipsis_box ">
                                                                                             
                                                                                                <div>{tx.to}
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                    
                                                                                    
                                                                                    <div className="labelShow">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                 

                                                                </div>

                                                        </div>

                                                    </div>

                                                </div>
                                                <div className="transaction-type-box">
                                                    <div className="ln1 it3">
                                                        <div className="color-grey-200 d-flex it3">
                                                            <span className="d-inline-block text-truncate"><span
                                                                    className="tron-mr-2px">{tx.value}</span></span>
                                                            <div>
                                                                <div><span><a className=""
                                                                        href="#/token/0">TXH</a></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="ln2 d-flex flex-column transaction-type it3">
                                                        <div className="k-value-wrap"><span
                                                                className="k-value whitelist"><span>{tx.method}</span></span></div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </li>

                                    )}

                                </ul>
                                <div className="home-view-link home-translations-view-link">
                                    <Link to='/transactions' >
                                      More<svg className="icon tron-icon tron-font-size-8px"
                                            aria-hidden="true">
                                            <use xlinkHref="#icon-right-arrow"></use>
                                        </svg>
                                    </Link> 
                                </div>
                            </div>
                        </div>
                       

                    </div>

                </div>

            </div>

        </div>
    );

}


export default Hometop4txns;