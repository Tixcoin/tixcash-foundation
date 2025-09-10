import React, { Component } from 'react';

import { Link } from "react-router-dom";
import ConnectorTxn from './FeedTransaction';
//import './Blocks.css';
import AgeCount from './_ageAgo';

import Paging from './_paging';
import GetMethodType from './MethodType'; 

import { AddEllipsis } from './_addEllipsis';

import Shimmer from './Shimmer'
export class AddressTxn extends Component {
    static displayName = AddressTxn.name;
    constructor(props) {
        super(props);
        this.state = {
            feed: props.feed,
            page: 1,
            address: props.add,
            loading: props.add ? true : false
        };
        //var r = GetMethodType(0);
        //console.log(this.state);
        //debugger;
       // const studentId = window.location.href.split('/')[3];
    }
     
    subscribe = (p) => {
        if (this.state.address) {
            //alert('address')
            const { SubscribeAddressTxns } = ConnectorTxn(this.state.address);
            SubscribeAddressTxns(this.state.address, p)((message,pinx) => {

                this.setState({
                    feed: JSON.parse(message).map(object => ({
                        //  only use these fields for newData
                        hash: object.hash,
                        from: object.from,
                        to: object.to,
                        blocknumber: object.blocknumber,
                        blocktime: object.blocktime,
                        status: object.status,
                        method: GetMethodType(object.methodid),
                        value: object.value
                    })),
                    page: message == '[]' ? (pinx > 1 ? pinx - 1 : 1) : pinx,
                    address: this.state.address,
                    loading: false
                });

               // console.log(this.state.feed);
            });
        }
    }

    componentDidMount() {
        this.subscribe(this.state.page);
    }
    callPageData = (pageinx) => {

        this.setState({
            feed: [], loading: true
        });
        this.subscribe(pageinx);
    }

    render() {

        const renderShimmerRow = () => (
            <tr>
                <td><Shimmer width="100%" height="20px" /></td>
                <td><Shimmer width="100%" height="20px" /></td>
                <td><Shimmer width="100%" height="20px" /></td>
                <td><Shimmer width="100%" height="20px" /></td>
                <td><Shimmer width="100%" height="20px" /></td>
                <td><Shimmer width="100%" height="20px" /></td>
                <td><Shimmer width="100%" height="20px" /></td>
                <td><Shimmer width="100%" height="20px" /></td>
                <td><Shimmer width="100%" height="20px" /></td>
                <td><Shimmer width="100%" height="20px" /></td>
            </tr>
        );

    return (

        <div className="token_black new_transcations table_new_style  new-transcations-wrapper" id="popupContainer">
            <div className="mt-14 d-flex justify-between flex-wrap overflow-auto-x top-wrapper">
                <div className="mb-14 ln-26px">
                    <section>
                        <div className="d-flex no-wrap-white align-items-center">
                            <div className="address-txn">
                                <div><span><span className="fs-14px">Only the first <span className="records">5000</span> transactions records are shown.</span></span></div>


                            </div>  <div className="d-flex align-items-center">  </div>
                        </div>
                    </section>
                </div> 
            </div>
            <div className="new_transactions_table ">
                <div className="smart-table-wrapper">
                    <div className="card table_pos ">
                        <div className="ant-table-wrapper">
                            <div className="ant-spin-nested-loading">
                                <div className="ant-spin-container">
                                    <div className="ant-table">
                                        <div className="ant-table-container">  <div className="ant-table-content">
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

                                                    {this.state.loading &&
                                                        <>
                                                            {renderShimmerRow()}
                                                            {renderShimmerRow()}
                                                            {renderShimmerRow()}
                                                            {renderShimmerRow()}
                                                            {renderShimmerRow()}
                                                            {renderShimmerRow()}
                                                            {renderShimmerRow()}
                                                            {renderShimmerRow()}
                                                            {renderShimmerRow()}
                                                            {renderShimmerRow()}
                                                            {renderShimmerRow()}
                                                        </>

                                                    }

                                                    {!this.state.loading && this.state.feed.map(tx => 
                                                        <tr className="ant-table-row ant-table-row-level-0">
                                                            <td className="ant-table-cell ant_table td-center">
                                                                
                                                            </td>
                                                            <td className="ant-table-cell ant_table td-left">
                                                                <div class="table-txn-remark-wrap" id="table-txn-remark-wrap-7d4c69cf-6967-4d93-b555-d4262971c119" style={{ width: "120px;" }} >
                                                                    <div class="d-flex align-items-center position-relative">
                                                                        
                                                                        {tx.hash &&
                                                                            <Link to={"/transaction/" + tx.hash} className="color-tron-100 list-item-word">
                                                                                <div className="ellipsis_box"><AddEllipsis hash={tx.hash} /></div>
                                                                            </Link>

                                                                        }

                                                                    </div>
                                                                </div>
                                                               
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
                                                                {tx.method}
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
                                                                {tx.value && <div>{tx.value} TXH</div>}
                                                            </td>
                                                            <td className="ant-table-cell ant_table to_address td-left">
                                                                <span><svg class="icon tron-icon tron-font-size-20px" aria-hidden="true"><use xlinkHref="#icon-icon-v1"></use></svg></span>
                                                            </td>
                                                        </tr>
                                                
                                                    )}
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                        </div>  <div className="ant-table-footer">  </div>  </div>
                                    <Paging pageindex={this.state.page} onPageChange={this.callPageData} />

                                </div>  </div>  </div> </div> </div>  </div>
            
        </div>
    );
  }
}
