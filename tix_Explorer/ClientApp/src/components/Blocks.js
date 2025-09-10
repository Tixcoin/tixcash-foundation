import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ConnectorBks from './FeedBlocks';
import Paging from './_paging';
import AgeCount from './_ageAgo';
import { AddEllipsis } from './_addEllipsis';
import './Blocks.css';
import Shimmer from './Shimmer'
export class Blocks extends Component {
    static displayName = Blocks.name;
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

        const { SubscribeBks } = ConnectorBks();

        SubscribeBks(p)((message) => {
           // if (pageindex == this.state.page) {
                var jd = JSON.parse(message);
                var pg = message == '{}' ? (parseInt(p) > 1 ? parseInt(p) - 1 : 1) : parseInt(jd.pageindex);
                this.setState({
                    totalCount: message == '{}' ? this.state.totalCount : jd.total,
                    page: pg,
                    loading: false,
                    feed: message == '{}' ? [] : JSON.parse(jd.data).map(object => ({
                        //  only use these fields for newData
                        bk: object.blocknumber,
                        miner: object.miner,
                        ts: object.timestamp,
                        txcnt: object.txncounts,
                        rwd: object.rewards,
                        bngas: object.burntfees
                    }))
                });
          //  }

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
            </tr>
        );
    return (
        <div id="mainContent">
           
            <main className="container header-overlap pb-3 token_black block-list-box">
                <section className="blocks-list-wrapper">
                    <div className="representatives-list-wrap blocks-overview-cont">
                        <div>
                            <div className="representatives-data-wrap blocks-data-wrap">
                                <div className="mb-20-style blocks_overview blocks_list_overview">
                                    <h2 className="m-3">Blocks</h2>
                                    <div className="mb-20-style amount-wrapper-cont">
                                        <div className="card h-100">
                                            <div className="card-body d-flex flex-col align-items-start" id="txcont" style={{ width: '100%' }}>
                                                <h2 className="mb-3">Count of Blocks</h2>
                                                <div className=" representatives-data blocks-data">
                                                    <div className="d-flex gap-2">
                                                        <span className="num TxCountNum"><span><a href="#/block/58365252">{this.state.totalCount}</a></span></span><div className="d-flex desc mt-6px ms-4"><span className="txt">Latest</span></div>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                    
                    <div className="block-list-bg">
                        <div className="flex-between d-flex align-items-center table-header">
                            <div><span><span className="fs-14px">Only the first <span className="records">10,000</span> records are shown.</span></span></div>
                            <div className="d-sm-none"> <Paging pageindex={this.state.page} onPageChange={this.callPageData} /></div>
                            

                        </div>
                        <div className="table_new_style">
                            <div className="smart-table-wrapper">
                                <div className="card table_pos ">
                                    <div className="ant-table-wrapper">
                                        <div className="ant-spin-nested-loading">
                                            <div className="ant-spin-container">
                                                <div className="ant-table">
                                                    <div className="ant-table-container">
                                                        <div className="ant-table-content mt-4">
                                                            <table>
                                                                <colgroup>
                                                                    <col className="w-110px" />
                                                                    <col className="w-170px" />
                                                                    <col className="w-180px" />
                                                                    <col className="w-100px" />
                                                                    <col className="w-230px" />
                                                                    <col className="w-150px" />
                                                                    <col className="w-150px" />
                                                                    <col className="w-150px" />
                                                                </colgroup>
                                                                <thead className="ant-table-thead">
                                                                    <tr>
                                                                        <th className="ant-table-cell ant_table table-first-padding td-left" scope="col">Block</th>
                                                                        <th className="ant-table-cell ant_table td-left" scope="col">
                                                                            <div className="token-change-type default">
                                                                                <div className="mr-1 mobile-margin-position">
                                                                                    <div className="d-inline-block">
                                                                                        <div className="question-mark">
                                                                                            <svg className="icon tron-icon question-mark-icon" aria-hidden="true">
                                                                                                <use xlinkHref="#icon-icon-ask"></use>
                                                                                            </svg>
                                                                                        </div>
                                                                                    </div>
                                                                                </div><span>Age<svg className="icon tron-icon icon-block-age" aria-hidden="true"><use xlinkHref="#icon-block-age"></use></svg></span>
                                                                            </div>
                                                                        </th>
                                                                        <th className="ant-table-cell ant_table td-left" scope="col">Producer</th>
                                                                        <th className="ant-table-cell td-left" scope="col">Txn Count</th>
                                                                        <th className="ant-table-cell ant_table td-left" scope="col">
                                                                            <div>
                                                                                <div className="mr-1">
                                                                                    Consumed Energy / Bandwidth
                                                                                </div>
                                                                            </div>
                                                                        </th>
                                                                        <th className="ant-table-cell ant_table td-left" scope="col">
                                                                            <div>
                                                                                <div className="mr-1">
                                                                                    Burned TXH
                                                                                </div>
                                                                            </div>
                                                                        </th>
                                                                        <th className="ant-table-cell ant_table td-left" scope="col">
                                                                            <div>
                                                                                <div className="mr-1">
                                                                                    Block Reward
                                                                                </div>
                                                                            </div>
                                                                        </th>
                                                                        <th className="ant-table-cell td-left" scope="col">Status</th>
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
                                                                    {!this.state.loading && this.state.feed.map(bk =>
                                                                        <tr className="ant-table-row ant-table-row-level-0" data-row-key="tableKey0">
                                                                            <td className="ant-table-cell ant_table table-first-padding td-left">
                                                                                <Link to={"/block/" + bk.bk}>
                                                                                    #<span>{bk.bk} </span>
                                                                                </Link>
                                                                                

                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-left">
                                                                                <div className="token_black table_pos">
                                                                                 
                                                                                    <div>
                                                                                        {bk.ts ? <AgeCount unixseconds={bk.ts} />
                                                                                            : <></>}                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-left">
                                                                                {bk.miner &&
                                                                                    <Link to={"/address/" + bk.miner} className="text-truncate address-link">
                                                                                    <div className="line-ellipsis"><AddEllipsis hash={bk.miner} /></div>
                                                                                </Link>}
                                                                            </td>
                                                                            <td className="ant-table-cell td-left"><span>{bk.txcnt ? bk.txcnt : 0}
                                                                                </span></td>
                                                                            <td className="ant-table-cell ant_table td-left">
                                                                                <div><span>0</span>/<span>0</span></div>
                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-left">
                                                                                <div><span>{bk.burntfees}</span></div>
                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-left"><span><span>0</span>&nbsp;<span>TXH</span></span></td>
                                                                            <td className="ant-table-cell td-left"><span>UNCONFIRMED</span></td>
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
                <div className="profit-box block-picture-profit">
                    <div className="common-profit-wapper" id="profitWrapper">
                        <img src="assets/img/Tixcash.png" alt="footer_banner" className="rounded" />
                    </div>
                </div>
            </main>
        </div>



    );
  }
}
