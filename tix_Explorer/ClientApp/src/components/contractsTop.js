import {React,  Component } from 'react';
import { Link } from "react-router-dom";
import Paging from './_paging';
import AgeCount from './_ageAgo';
import { AddEllipsis } from './_addEllipsis';
import './Blocks.css';
import Shimmer from './Shimmer'
export class ContractsTop extends Component {
   
    constructor(props) {
        
        super(props);
        this.state = {
            feed: [],
            totalCount: 0,
            page: 1,
            loading: true
        };
       
    }


    subscribe = async (p) => {

        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + '/weatherforecast/GetContractList?page=' + p);
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
                                    <div className="mb-20-style amount-wrapper-cont">
                                        <div className="card h-100">
                                            <div className="card-body d-flex justify-content-between flex-col align-items-start gap-10" id="txcont" style={{ width: '100%' }}>
                                                <h2>Top Contracts</h2>
                                                <div className=" representatives-data blocks-data">
                                                    <div className="d-flex gap-2">
                                                        <div className="d-flex desc mt-6px ms-4">
                                                            <span className="TxCountNum"><span><span>{this.state.totalCount}</span></span></span>
                                                            <div className="desc"><span>Total</span></div>
                                                           {/* <span className="txt"> {this.state.totalCount} Total</span>*/}
                                                        </div>
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
                            <div><span className="fs-14px">Only the first <span className="records">10,000</span> records are displayed.</span></div>
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
                                                                        <th className="ant-table-cell ant_table table-first-padding td-left" scope="col">Account</th>
                                                                       
                                                                        <th className="ant-table-cell ant_table td-left" scope="col">Contract Name</th>
                                                                        <th className="ant-table-cell td-left" scope="col">Number of Calls</th>
                                                                        <th className="ant-table-cell td-left" scope="col">TXH Balance</th>
                                                                        
                                                                        <th className="ant-table-cell ant_table td-left" scope="col">
                                                                            <div>
                                                                                <div className="mr-1">
                                                                                    Version
                                                                                </div>
                                                                            </div>
                                                                        </th>
                                                                        <th className="ant-table-cell ant_table td-left" scope="col">
                                                                            <div>
                                                                                <div className="mr-1">
                                                                                    License
                                                                                </div>
                                                                            </div>
                                                                        </th>
                                                                        <th className="ant-table-cell td-left" scope="col">Creator On</th>
                                                                        <th className="ant-table-cell td-left" scope="col">Verfied On</th>
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

                                                                    {!this.state.loading && this.state.feed.map(f =>
                                                                        <tr className="ant-table-row ant-table-row-level-0" data-row-key="tableKey0">
                                                                            <td className="ant-table-cell ant_table table-first-padding td-left">
                                                                                {
                                                                                    f.account &&
                                                                                    <Link to={"/contract/" + f.account}>
                                                                                        <AddEllipsis hash={f.account} />
                                                                                    </Link>
                                                                                }
                                                                                

                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-left">
                                                                                {f.acctName &&
                                                                                    <div className="line-ellipsis">{f.acctName}</div>
                                                                                }
                                                                            </td>
                                                                            <td className="ant-table-cell td-left">
                                                                                <span>{f.calls ? f.calls : 0}</span>
                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-left">
                                                                                <span>{f.balance ? f.balance : 0}</span>
                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-left">
                                                                                <span>{f.version ? f.version : 0}</span>
                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-left">
                                                                                <span>{f.license ? f.license : 0}</span>
                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-left">
                                                                                <span>{f.createdOn ? f.createdOn : "-"}</span>
                                                                            </td>
                                                                            <td className="ant-table-cell ant_table td-left">
                                                                                <span>{f.verfiedon ? f.verfiedon === 1 ? "CONFIRMED" : "UNCONFIRMED" : "UNCONFIRMED"}</span>
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
