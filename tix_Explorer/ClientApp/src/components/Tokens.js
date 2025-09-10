import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ConnectorBks from './FeedBlocks';
import Paging from './_paging';
import AgeCount from './_ageAgo';
import { AddEllipsis } from './_addEllipsis';
import './Blocks.css';
import Shimmer from './Shimmer'
export class Tokens extends Component {
    static displayName = Tokens.name;
    constructor(props) {
        super(props);
        this.state = {
            feed: [],
            totalCount: 0,
            page: 1, loading:true
        }
    }

    subscribe = async (p) => {

        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + '/weatherforecast/GetTokens?page=' + p);
        const data = await response.json();
        if (data.length > 0) {
            var jd = data[0];
            this.setState({ feed: JSON.parse(jd.data), totalCount: jd.totrec, page: parseInt(jd.pageindex), loading: false });
        } else
            this.setState({ feed: [], totalCount: this.state.totalCount, page: parseInt(p > 1 ? p - 1 : p), loading: false });
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
                                    <h2 className="m-3">Tokens</h2>
                                    <div className="mb-20-style amount-wrapper-cont">
                                        <div className="card h-100">
                                            <div className="card-body d-flex flex-col align-items-start" id="txcont" style={{ width: '100%' }}>
                                                <h2 className="mb-3">Number of Tokens</h2>
                                                <div className=" representatives-data blocks-data">
                                                    <div className="d-flex gap-2">
                                                        <span className="num TxCountNum"><span><a href="#/block/58365252">{this.state.totalCount}</a></span></span><div className="d-flex desc mt-6px ms-4"><span className="txt">(Total)</span></div>
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
                                                                        <th className="ant-table-cell ant_table table-first-padding td-left" scope="col">#</th>
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
                                                                                </div><span>Token (abbr)<svg className="icon tron-icon icon-block-age" aria-hidden="true"><use xlinkHref="#icon-block-age"></use></svg></span>
                                                                            </div>
                                                                        </th>
                                                                        <th className="ant-table-cell ant_table td-left" scope="col">Total Supply</th>
                                                                        <th className="ant-table-cell td-left" scope="col">Holders</th>
                                                                        <th className="ant-table-cell ant_table td-left" scope="col">
                                                                            <div>
                                                                                <div className="mr-1">
                                                                                    Frozen Supply
                                                                                </div>
                                                                            </div>
                                                                        </th>
                                                                        <th className="ant-table-cell ant_table td-left" scope="col">
                                                                          
                                                                                <div className="mr-1">
                                                                                    Circulating Supply
                                                                                </div>
                                                                           
                                                                        </th>
                                                                        <th className="ant-table-cell ant_table td-left" scope="col">
                                                                            <div>
                                                                                <div className="mr-1">
                                                                                    Txn Count
                                                                                </div>
                                                                            </div>
                                                                        </th>
                                                                        <th className="ant-table-cell ant_table td-left" scope="col">
                                                                            <div>
                                                                                <div className="mr-1">
                                                                                   Age
                                                                                </div>
                                                                            </div>
                                                                        </th>
                                                                        
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

                                                                    {!this.state.loading && this.state.feed.map(a =>
                                                                        <tr className="ant-table-row ant-table-row-level-0" data-row-key="tableKey0">
                                                                            <td className="ant-table-cell ant_table table-first-padding td-left">
                                                                                <span>{a.id} </span>
                                                                               

                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-left">
                                                                                <Link to={"/token/" + a.token}>
                                                                                    <span>{a.name}({a.abbr}) <br /> {a.token} </span>
                                                                                </Link>

                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-left">
                                                                                <span>{a.totalSupply} </span>
                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-left">
                                                                                <span>{a.cirSupply} </span>
                                                                            </td>
                                                                            <td className="ant-table-cell td-left">
                                                                                <span>{a.holders} </span>
                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-left">
                                                                                <span>{a.frozenSupply}</span>
                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-left">
                                                                                <span>{a.txnCount ? a.txnCount : 0}</span>
                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-left">
                                                                                <div className="token_black table_pos">
                                                                                    <div>
                                                                                        {a.age ? <AgeCount unixseconds={a.age} />: <></>}
                                                                                    </div>
                                                                                </div>
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
