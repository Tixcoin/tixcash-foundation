import React, { Component } from 'react';

import { Link } from "react-router-dom";
//import './Blocks.css';

import Paging from './_paging';

import { AddEllipsis } from './_addEllipsis';

import Shimmer from './Shimmer'
export class ContractsList extends Component {
    static displayName = ContractsList.name;
    constructor(props) {
        super(props);
        this.state = {
            verified: props.verified,
            page: 1,
          
            loading: true
        };
       
    }
     
  

    subscribe = async (p) => {

        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + '/weatherforecast/GetContractList?verfiedOnly=' + this.state.verified + '&page=' + p);
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
                <td><Shimmer width="100%" height="20px" /></td>
                <td><Shimmer width="100%" height="20px" /></td>
            </tr>
        );

    return (

        <div className="token_black new_transcations table_new_style  new-transcations-wrapper" id="popupContainer">
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
                                                            <th className="ant-table-cell td-left" scope="col">Created On</th>
                                                            <th className="ant-table-cell td-left" scope="col">Verfied</th>
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
                                                                    <span>{f.version ? f.version.replace('soljson-', '') : 0}</span>
                                                                </td>
                                                                <td className="ant-table-cell ant_table td-left">
                                                                    <span>{f.license ? f.license : 0}</span>
                                                                </td>
                                                                <td className="ant-table-cell ant_table td-left">
                                                                    <span>{f.createdOn ? f.createdOn : "-"}</span>
                                                                </td>
                                                                <td className="ant-table-cell ant_table td-left">
                                                                    <span>{f.isVerified ? f.isVerified === 2 ? "CONFIRMED" : "UNCONFIRMED" : "UNCONFIRMED"}</span>
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
    );
  }
}
