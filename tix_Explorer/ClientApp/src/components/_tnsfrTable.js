import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import './Blocks.css';
import AgeCount from './_ageAgo';

import { AddEllipsis } from './_addEllipsis';

export class TnsfrTable extends Component {
    static displayName = TnsfrTable.name;
    constructor(props) {
        super(props);
        this.state = {
            feed: props.feed,
            page: props.page,
            address: props.address
        };
        //debugger;
       // const studentId = window.location.href.split('/')[3];
    }
  
  render() {
    return (
        <table>
                                                <thead className="ant-table-thead">
                                                    <tr>  <th className="ant-table-cell ant_table td-center" scope="col">  <div className="see-txn-detail no-hover-status">  </div>  </th>
                                                        <th className="ant-table-cell ant_table td-center" scope="col">Txn Hash</th>
                                                        <th className="ant-table-cell ant_table td-left" scope="col">Block</th>
                                                        <th className="ant-table-cell ant_table ant_table_timetd-center" scope="col"> Age </th>
                                                        <th className="ant-table-cell  ant_table filter-transaction-type td-left" scope="col">Transaction Type</th>
                                                        <th className="ant-table-cell ant_table from_address td-left" scope="col">From</th>
                                                        <td className="ant-table-cell td-center">  </td>
                                                        <th className="ant-table-cell ant_table to_address td-left" scope="col">To</th>
                                                        <th className="ant-table-cell ant_table td-right" scope="col"> Token</th>
                                                        <th className="ant-table-cell ant_table td-center" scope="col">Result</th>
                                                    </tr>

                                                </thead>
                                                
                                                <tbody className="ant-table-tbody">
                                                    {this.state.feed.map(tx => 
                                                        <tr className="ant-table-row ant-table-row-level-0">
                                                            <td className="ant-table-cell ant_table td-center">
                                                                
                                                            </td>
                                                            <td className="ant-table-cell ant_table td-left">
                                                                <div class="table-txn-remark-wrap" id="table-txn-remark-wrap-7d4c69cf-6967-4d93-b555-d4262971c119" style={{ width: "120px;" }} >
                                                                    <div class="d-flex align-items-center position-relative">
                                                                        {tx.hash &&
                                                                            <a className="color-tron-100 list-item-word" href={"transaction/" + tx.hash}>
                                                                                <div className="ellipsis_box"><AddEllipsis hash={tx.hash} /></div>
                                                                            </a>
                                                                        }
                                                                    </div></div>
                                                               
                                                            </td>
                                                            <td className="ant-table-cell ant_table td-left">
                                                                <Link to={"/block/" + tx.blocknumber}>
                                                                    {tx.blocknumber}
                                                                </Link>

                                                            </td>
                                                            <td className="ant-table-cell ant_table ant_table_time td-left">
                                                                <div>{tx.blocktime ? <AgeCount unixseconds={tx.blocktime} /> : <></>}</div>
                                                            </td>
                                                            <td className="ant-table-cell  ant_table filter-transaction-type td-left">
                                                                {
                                                                    tx.methodid && <span> {tx.methodid == 1 ? "TXH Transfer" : "Transfer"}</span> 
                                                                }
                                                            </td>
                                                            <td className="ant-table-cell ant_table from_address td-left">
                                                                {tx.from &&
                                                                    <Link to={"/address/" + tx.from} className="color-tron-100 list-item-word">
                                                                        <div className="ellipsis_box"><AddEllipsis hash={tx.from} /></div>
                                                                    </Link>

                                                                }
                                                            </td>
                                                            <td className="ant-table-cell td-center">
                                                            </td>
                                                            <td className="ant-table-cell ant_table to_address td-left">
                                                                {tx.to &&
                                                                    <Link to={"/address/" + tx.to} className="color-tron-100 list-item-word">
                                                                        <div className="ellipsis_box"><AddEllipsis hash={tx.to} /></div>
                                                                    </Link>

                                                                }
                                                            </td>
                                                            <td className="ant-table-cell ant_table td-center">
                                                                {
                                                                    tx.tokenamount && <div><span className="mr-4px"> tx.tokenamount </span><span><a className="token-span" href="#/token/0">TXH<span></span></a></span> </div>
                                                                }
                                                            </td>
                                                            <td className="ant-table-cell ant_table to_address td-left">
                                                                <span><svg class="icon tron-icon tron-font-size-20px" aria-hidden="true"><use xlinkHref="#icon-icon-v1"></use></svg></span>
                                                            </td>
                                                        </tr>
                                                
                                                    )}
                                                    
                                                </tbody>
                                            </table>                             
    );
  }
}
