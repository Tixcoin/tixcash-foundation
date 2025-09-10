import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ConnectorTxn from './FeedTransaction';
import { AddEllipsis } from './_addEllipsis';
import Paging from './_paging';
import AgeCount from './_ageAgo';
import './Transactions.css';
import GetMethodType from './MethodType';
import Shimmer from './Shimmer'
export class Transfers extends Component {
    static displayName = Transfers.name;
    constructor(props) {
        super(props);
        this.state = {
            feed: [],
            totalCount: 0,
            page: 1,
            loading: true
        }
    }
     
    subscribe = (p) => {

       // alert('');
        const { SubscribeTransfer } = ConnectorTxn();
        SubscribeTransfer(p)((message) => {
           // console.log(message);
            var jd = JSON.parse(message);
            var pg = message == '{}' ? (parseInt(p) > 1 ? parseInt(p) - 1 : 1) : parseInt(jd.pageindex);
            this.setState({
                totalCount: message == '{}' ? this.state.totalCount : jd.total,
                page: pg,
                loading: false,
                feed: message == '{}' ? [] : JSON.parse(jd.data).map(object => ({
                    hash: object.data.hash,
                    from: object.data.from,
                    to: object.data.to,
                    blocknumber: object.data.blocknumber,
                    blocktime: object.data.blocktime,
                    method: GetMethodType(object.data.methodid),
                    tokenamount: object.data.tokenamount ?? 0,
                    tokenamountInDecimal: object.data.tokenamountInDecimal ?? 0

                }))
            });
            //
            //console.log(this.state.feed);
        });

    }

    componentDidMount() {
        this.subscribe(this.state.page);
    }
    callPageData = (pageinx) => {

        this.setState({
            feed: [],
            loading: true
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
        <div id="mainContent">
            <main className="container header-overlap pb-3 token_black transactions-list-box" id="popupContainer">
                <section className="transactions-list-wrapper">
                    <div className="representatives-list-wrap transaction-overview-cont">
                        <div className="row representatives-data-wrap transactions-data-wrap">
                            <div className="translation_title transactions_overview transactions_list_overview">
                                <div className="card-body d-flex flex-col align-items-start gap-10 justify-content-between" id="txcont">
                                    <h2 className="d-flex"><span className="d-flex title"><span>Transfers Count</span></span></h2>
                                    <div className="d-flex representatives-data transactions-data align-items-center">
                                        <div className="flex">
                                            <span className="TxCountNum"><span><span>{this.state.totalCount}</span></span></span>
                                            <div className="desc"><span>Total</span></div>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="card-body transaction-value-wrap" id="tradingAmount" style={{ display: 'none'} }>
                                    <h2 className="d-flex"><span className="d-flex title"><span>Trading Volume</span></span></h2>
                                    <div className="d-flex representatives-data transactions-data align-items-center">
                                        <div className="d-flex flex-column">
                                            <span className="volumeNum"><span>278,050.68</span>b&nbsp;<span>TXH</span></span><div className="d-flex usdShow"><span className="usdValue">≈$<span>30,702.38</span>b</span></div>
                                            <div className="d-flex desc"><span>Total</span></div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span className="volumeNum increase-color increase-count">+<span>265.41</span>b&nbsp;<span>TXH</span></span><div className="d-flex usdShow"><span className="usdValue">≈$<span>29.31</span>b</span></div>
                                            <div className="d-flex desc"><span>Yesterday</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mb-20-style transactions-overview-chart">
                                <div className="card" style={{ display: 'none' }}>
                                    <div className="bg-tron-light color-grey-100 pb-0">
                                        <div className="transactions-chart-title"><span className="title-name"><span>Daily Txn Distribution</span></span><span className="more"><a href="#/data/charts/txn/daily-txn"><span>More</span></a><i className="iconfont icon-more"></i></span></div>
                                    </div>
                                    <div className="card-body p-0">
                                        <div>
                                            <div id="ContractInvocationChart_0_3774022024190846" className="chart-new-style chart-new-style-1 echarts-wrapper" _echarts_instance_="ec_1705730335381">
                                                <div>
                                                    <script src="https://www.amcharts.com/lib/4/core.js"></script>
                                                    <script src="https://www.amcharts.com/lib/4/charts.js"></script>
                                                    <script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>
                                                    <div id="chartdiv"></div>
                                                   
                                                    
                                                </div>
                                                <div className="echart-tooltip-wrapper"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="profit-box transactions-list-picture-profit">*/}
                    {/*    <div className="common-profit-wapper" id="profitWrapper">*/}
                    {/*        <iframe id="pid-001-0-009" name="pid-001-0-009" width="100%" height="100%" marginwidth="0" marginheight="0" scrolling="false" frameborder="0" src="https://engine.tronads.io/html/pid-001-0-009.html?env%3D2%26pid%3D001-0-009%26is_mock%3D0%26lang%3Den%26uuid%3D60614f7c-ac0b-494b-abef-9daf41352dbb%26waddr%3D%26tokenlist%3D%26txid%3D"></iframe>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="transactions-table-list new-list-style-body">
                        <div className="flex-between d-flex align-items-center table-header">
                            <div><span><span className="fs-14px">Only the first <span className="records">10,000</span> records are shown.</span></span></div>
                            <div className="d-sm-none"> <Paging pageindex={this.state.page} onPageChange={this.callPageData} /> </div>

                        </div>
                        <div className="table_new_style list-style-body__body address-table-pagination transaction-table-wrapper position-relative">
                            <div className="smart-table-wrapper">
                                <div className="card table_pos ">
                                    <div className="ant-table-wrapper">
                                        <div className="ant-spin-nested-loading">
                                            <div className="ant-spin-container">
                                                <div className="ant-table">
                                                    <div className="ant-table-container">
                                                        <div className="ant-table-content mt-4">
                                                            <table>
                                                                
                                                                                                        <thead className="ant-table-thead">
                                                                                                            <tr>
                                                                                                                <th className="ant-table-cell" scope="col">
                                                                                                                    <div className="see-txn-detail no-hover-status"></div>
                                                                                                                </th>
                                                                                                                <th className="ant-table-cell ant_table td-left" scope="col">Hash</th>
                                                                                                                <th className="ant-table-cell ant_table td-left" scope="col">Block</th>
                                                                                                                <th className="ant-table-cell ant_table td-left" scope="col">
                                                                                                                    <span className="token-change-type default">
                                                                                                                        <span>Age</span>
                                                                                                                    </span>
                                                                                                                </th>
                                                                                                                <th className="ant-table-cell td-left" scope="col">
                                                                                                                    <span className="ln-22px">
                                                                                                                        Transaction Type
                                                                                                                    </span>
                                                                                                                </th>
                                                                                                                <th className="ant-table-cell ant_table address_max_width td-left" scope="col">From</th>
                                                                                                                <td className="ant-table-cell"></td>
                                                                                                                <th className="ant-table-cell ant_table address_max_width td-left" scope="col">To</th>
                                                                                                                <th className="ant-table-cell ant_table td-right" scope="col">
                                                                                                                    <div className="d-flex align-item-center justify-content-end ln-22px">
                                                                                                                       Token
                                                                                                                    </div>
                                                                                                                </th>
                                                                                                                <th className="ant-table-cell ant_table" scope="col">Result</th>
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

                                                                        <tr className="ant-table-row ant-table-row-level-0" data-row-key="79008445fb8fdc18dedf00275f8be4edd14d1a2a1bb1073a832e6c3d70ec7a5a">
                                                                            <td className="ant-table-cell">
                                                                                <div>
                                                                                    <div className="see-txn-detail"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-left">
                                                                                <div className="table-txn-remark-wrap w-120px" id="table-txn-remark-wrap-c24c7441-0add-4408-b78a-8e3a5780c935">
                                                                                    <div className="d-flex align-items-center position-relative">
                                                                                        <div className="truncate-ellipsis">

                                                                                            {tx.hash &&
                                                                                                <Link to={"/transaction/" + tx.hash} className="color-tron-100 list-item-word">
                                                                                                    <div className="ellipsis_box"><AddEllipsis hash={tx.hash} /></div>
                                                                                                </Link>

                                                                                            }
                                                                                          
                                                                                        </div>
                                                                                      
                                                                                    </div>
                                                                                    
                                                                                </div>
                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-left">
                                                                                <div className="d-flex align-items-center">
                                                                                    <Link to={"/block/" + tx.blocknumber}>
                                                                                        {tx.blocknumber}
                                                                                    </Link>
                                                                                </div>
                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-left">
                                                                                <div className="token_black table_pos">
                                                                                    <div>{tx.blocktime ? <AgeCount unixseconds={tx.blocktime} /> : <></>}</div>

                                                                                </div>
                                                                            </td>
                                                                            <td className="ant-table-cell td-left">
                                                                                <span className="text-capitalize">{tx.method}</span>
                                                                            </td>
                                                                            <td className="ant-table-cell ant_table address_max_width td-left">
                                                                                <span className="address-container ">
                                                                                    <div className="react-contextmenu-wrapper">
                                                                                        <div className="d-flex align-items-center address-link-wrap label-address-link-wrap">
                                                                                            {tx.from &&
                                                                                                <Link to={"/address/" + tx.from} className="text-truncate address-link">
                                                                                                    <div className="ellipsis_box"><AddEllipsis hash={tx.from} /></div>
                                                                                                </Link>
                                                                                            }
                                                                                        </div>
                                                                                          
                                                                                    </div>
                                                                                
                                                                                </span>
                                                                            </td>
                                                                            <td className="ant-table-cell">
                                                                                <div className="to-icon">
                                                                                    <img src="assets/img/transaction-arrow-new.svg" />
                                                                                </div>
                                                                            </td>
                                                                            <td className="ant-table-cell ant_table address_max_width td-left">
                                                                                <span className="transactionToAddressWrapper">
                                                                                    <span className="address-container ">
                                                                                        <div className="react-contextmenu-wrapper">
                                                                                            <div className="d-flex align-items-center address-link-wrap label-address-link-wrap">
                                                                                                {tx.to &&
                                                                                                    <Link to={"/address/" + tx.to} className="text-truncate address-link">
                                                                                                        <div className="ellipsis_box"><AddEllipsis hash={tx.to} /></div>
                                                                                                    </Link>
                                                                                                }
                                                                                            </div>
                                                                                              
                                                                                        </div>
                                                                                     
                                                                                    </span>
                                                                                </span>
                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-right">
                                                                               
                                                                                {
                                                                                    tx.tokenamountInDecimal && <div><span className="mr-4px"> {tx.tokenamountInDecimal} </span><span>TXH</span> </div>
                                                                                }
                                                                                
                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-center success-svg">
                                                                                <img src="assets/img/success.svg" />
                                                                            </td>
                                                                        </tr>


                                                                    )}
                                                                                                           
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <Paging pageindex={this.state.page} onPageChange={this.callPageData} />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                    </section>

                                                </main>
                                            </div>



    )
  }
}
