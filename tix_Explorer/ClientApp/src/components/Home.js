import React, { Component } from 'react';
import Connector from './FeedIndex';
import Hometop4blocks from './Hometop4blocks';
import Hometop4txns from './Hometop4txns';
import HomeStatsChart from "./HomeStatsChart";
import TxnsCharts from './txnCharts';
import Shimmer from './Shimmer'
import { Link } from "react-router-dom";
import { Buffer } from "buffer";
window.Buffer = window.Buffer || Buffer;
export class Home extends Component {
    static displayName = Home.name;
    constructor(props) {
        super(props);
        this.state = {
            feed: {},
            data: null,
            chartdata: [],
            statschartdata: []

        }
          
        //console.log(window.TronWeb);
        

        //this.getContract1();
//        tronWeb.trx.getContract("GSWhScp6ThzqmZDs3HyVfxcyA1b2bGy4bQ").then((res) => {        })
        //TEEXEWrkMFKapSMJ6mErg39ELFKDqEs6w3
    }
    
    getContract1 = async () => {
        const tronWeb = new window.TronWeb({
            fullNode: 'https://api.trongrid.io',
            solidityNode: 'https://api.trongrid.io',
        })

        // set the owner address
        tronWeb.setAddress('TYt4yb9YLCkXMj1gao3XnvAFp4xEAsCs46');

        let abi = [{ "constant": true, "inputs": [], "name": "investAmount", "outputs": [{ "name": "amount", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "owner_address", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "contractInfo", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_contributors", "type": "address[]" }, { "name": "_balances", "type": "uint256[]" }], "name": "multisendTRXtoUpgrade", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_addr", "type": "address" }], "name": "userInfo", "outputs": [{ "name": "referrals", "type": "uint256[16]" }, { "name": "income", "type": "uint256[16]" }, { "name": "directs", "type": "uint256[16]" }, { "name": "direct_income", "type": "uint256[16]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_users", "type": "address" }], "name": "pooler", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_amount", "type": "uint256" }], "name": "setInvestmentAmount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "poolInfo", "outputs": [{ "name": "", "type": "address[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "players", "outputs": [{ "name": "referral", "type": "address" }, { "name": "direct", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_referral", "type": "address" }], "name": "deposit", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "addr", "type": "address" }], "name": "Pool", "type": "event" }];

        let contract = await tronWeb.contract(abi, "TYt4yb9YLCkXMj1gao3XnvAFp4xEAsCs46");

        let result = await contract.contractInfo().call();
        console.log(result);
    }
    getContract = async () => {
        const tronWeb = new window.TronWeb({
            fullHost: 'https://reverseapi.tixcash.org',
            solidityNode: 'https://reverseapi.tixcash.org',
        });
        tronWeb.setAddress('GSWhScp6ThzqmZDs3HyVfxcyA1b2bGy4bQ');
        let abi = [{ "outputs": [{ "type": "uint256" }], "constant": true, "name": "last_completed_migration", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "address" }], "constant": true, "name": "owner", "stateMutability": "View", "type": "Function" }, { "inputs": [{ "name": "completed", "type": "uint256" }], "name": "setCompleted", "stateMutability": "Nonpayable", "type": "Function" }];

        //tronWeb.trx.getContract("GSWhScp6ThzqmZDs3HyVfxcyA1b2bGy4bQ").then((res) => {
        //    console.log(res);
        //})

        let contract = await tronWeb.contract(abi, "GSWhScp6ThzqmZDs3HyVfxcyA1b2bGy4bQ");
      
        let result = await contract.owner().call();
        //console.log(result);
    }

    componentDidMount() {
        const { SubscribeIf } = Connector();
        SubscribeIf((message) => {
            
            this.setState({ feed: JSON.parse(message) });
        }); 
        //this.populateAddressData();
        const intervalId = setInterval(() => { this.populateHomePageStatsData() }, 3000);
    }
    async populateHomePageStatsData() {

        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + '/weatherforecast/HomePageStats');
        const resdata = await response.json();
        //console.log(resdata);
        this.setState({
            data: resdata.Table[0], chartdata: [resdata.Table1, resdata.Table2], feed: this.state.feed,
            statschartdata: [
                { label: "Accounts", y: resdata.Table[0].totalAccounts },
                { label: "Transactions", y: resdata.Table[0].totalTransactions },
                { label: "Contracts", y: resdata.Table[0].totalContracts },
                //{ label: "Blocks", y: resdata.Table[0].latestblock }
            ]
        });
        //console.log(this.state.chatdata);
        //debugger;
    }

    render() {
        const { data } = this.state;
        const isLoading = !data;  

    return (
        <div id="mainContent">
            <main className="home pb-0 home-page">
                <div className="container-fluid position-relative d-flex  mx-auto flex-column">
                    <div className="container pc-home-splash p-0 p-md-3">
                        <div>
                            <div className="panel-group-wrapper pc-panel-group-wrapper">
                                <div className="panel-group-mainnet">
                                    <div className="panel-group-left">
                                        <section className="data-wrapper">
                                            <div className="card-body row home-stats mainnet-data">
                                                <section className="data-overview">
                                                    <div className="data-item">
                                                        <Link to={"/accounts"} >
                                                            <div className="data-item-left">
                                                                <img alt="TXH" src="assets/img/account_icon_new.png" />
                                                                <div className="data-item-center">
                                                                    <p className="m-0 panel-title">
                                                                        <span>Total Accounts</span>
                                                                    </p>
                                                                    <h2 className="m-0 panel-number">
                                                                        {isLoading ? <Shimmer width="100px" height="30px" /> : <span>{data.totalAccounts}</span>}
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>

                                                    <div className="data-item">
                                                        <Link to={"/transactions"} >
                                                            <div className="data-item-left">
                                                                <img alt="TXH" src="assets/img/transition_icon_new.png" />
                                                                <div className="data-item-center">
                                                                    <p className="m-0 panel-title">
                                                                        <span>Total Txns</span>
                                                                    </p>
                                                                    <h2 className="m-0 panel-number">
                                                                        {isLoading ? <Shimmer width="100px" height="30px" /> : <span>{data.totalTransactions}</span>}
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>

                                                    <div className="data-item">
                                                        <Link to={"/contracts"} >
                                                            <div className="data-item-left">
                                                                <img alt="TXH" src="assets/img/transferToken_icon_new.png" />
                                                                <div className="data-item-center">
                                                                    <p className="m-0 panel-title">
                                                                        <span>Total Contracts</span>
                                                                    </p>
                                                                    <h2 className="m-0 panel-number">
                                                                        {isLoading ? <Shimmer width="100px" height="30px" /> : <span>{data.totalContracts}</span>}
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>

                                                    <div className="data-item">
                                                        <Link to={"/block/" + (data ? data.latestblock : "#")} >
                                                            <div className="data-item-left">
                                                                <img alt="TXH" src="assets/img/tvl_icon_new.png" />
                                                                <div className="data-item-center">
                                                                    <p className="m-0 panel-title">
                                                                        <span>Latest Block</span>
                                                                    </p>
                                                                    <h2 className="m-0 panel-number">
                                                                        {isLoading ? <Shimmer width="100px" height="30px" /> : <span>{data.latestblock}</span>}
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </section>
                                                <section className="bottom-data-overview bottom-data-overview-en">
                                                    <div className="bottom-data-overview-item align-items-center">
                                                        <a href="#!" className="tron-cursor-default">
                                                            <Link to={"/nodes"} >
                                                                <section className="d-flex align-items-center">
                                                                    <span className="title">
                                                                        <span>Nodes</span>
                                                                    </span>
                                                                    <span className="number"><span>14</span> </span>
                                                                    </section>
                                                            </Link>
                                                        </a>
                                                    </div>
                                                    <div className="bottom-data-overview-item align-items-center">
                                                        <a href="#!" className="tron-cursor-default">
                                                            <Link to={"/nodes"} >
                                                                <section className="d-flex align-items-center">
                                                                    <span className="title">
                                                                        <span>Countries / Regions</span>
                                                                    </span>
                                                                    <span className="number"><span>6</span> </span>
                                                                </section>
                                                            </Link>
                                                        </a>
                                                    </div>
                                                    <div className="bottom-data-overview-item align-items-center">
                                                        <Link to={"/contracts"} >
                                                            <section className="d-flex align-items-center">
                                                                <span className="title"><span>Total
                                                                    Contracts</span></span>
                                                                <span className="number"><span>{this.state.data && this.state.data.totalContracts}</span> </span>
                                                            </section>
                                                        </Link>
                                                    </div>
                                                    <div className="bottom-data-overview-item align-items-center">
                                                        <Link to={"/tokens"} >
                                                            <section className="d-flex align-items-center">
                                                                <span className="title"><span>Total Tokens</span></span>
                                                                <span className="number"><span>0</span> </span>
                                                            </section>
                                                        </Link>
                                                    </div>
                                                </section>
                                            </div>
                                        </section>
                                    </div>
                                    <div className="panel-group-right">
                                        {this.state.statschartdata.length > 0 && (<HomeStatsChart chartdata={this.state.statschartdata} />)}
                                       
                                    </div>

                                  
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <Hometop4blocks bks={this.state.feed.Table1} />
                <Hometop4txns txns={this.state.feed.Table}  />
                {this.state.chartdata.length > 0 && (<TxnsCharts chartdata={this.state.chartdata} />)}

                {/* econsystem starts from here*/}
             

                <div className="transferBlockSec" style={{display: "none"} }>
                    <div className="container home-chart recent-tvl-panel">
                        <div className="header d-flex">
                            <span className="title-wrap"><span>TVL</span></span><span className="split-line">/</span><span
                                className="title-wrap-can-click"><span>TVC</span></span>
                            <div className="ml-auto d-flex align-items-center">
                                <a className="entry-text" href="#/tools/contactUs?feedbackType=applyForInclusion">
                                    <span>
                                        <span>Submit Project</span>
                                    </span>
                                </a>
                                <a className="more2" href="#/data/charts/defi/tvl">
                                    <span>
                                        <span>More</span>
                                    </span>
                                    <svg className="icon tron-icon tron-font-size-8px tron-right-icon"
                                        aria-hidden="true">
                                        <use xlinkHref="#icon-right-arrow"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="content">
                            <div className="row-flex">
                                <div className="col-44 home-tvl-chart">
                                    <div id="chart2"></div>
                                </div>
                                <div className="col-56 home-tvl-table">
                                    <div className="card ">
                                        <div>
                                            <div className="token_black defiTotalAmount table-tvl">
                                                <div className="col-md-12 table_pos">
                                                    <div className="right-tvl-bg">
                                                        <div className="smart-table-wrapper">
                                                            <div className="card table_pos ">
                                                                <div className="ant-table-wrapper">
                                                                    <div className="ant-spin-nested-loading">
                                                                        <div className="ant-spin-container">
                                                                            <div
                                                                                className="ant-table ant-table-fixed-header">
                                                                                <div className="ant-table-container">
                                                                                    <div className="ant-table-header">
                                                                                        <table className="table-main">
                                                                                            <colgroup>
                                                                                                <col className="col1" />
                                                                                                <col className="col2" />
                                                                                                <col className="col3" />
                                                                                                <col className="col4" />
                                                                                                <col className="col5" />
                                                                                            </colgroup>
                                                                                            <thead
                                                                                                className="ant-table-thead">
                                                                                                <tr>
                                                                                                    <th className="ant-table-cell"
                                                                                                        scope="col">
                                                                                                        Project</th>
                                                                                                    <th className="ant-table-cell"
                                                                                                        scope="col">
                                                                                                        Category
                                                                                                    </th>
                                                                                                    <th aria-sort="descending"
                                                                                                        className="ant-table-cell ant-table-cell-ellipsis cell-max-125 ant-table-column-sort ant-table-column-has-sorters"
                                                                                                        tabindex="0"
                                                                                                        scope="col">
                                                                                                        <div
                                                                                                            className="ant-table-column-sorters">
                                                                                                            <span
                                                                                                                className="ant-table-column-title">
                                                                                                                <div>
                                                                                                                    <span
                                                                                                                        className="mr-1">
                                                                                                                        <div
                                                                                                                            className="d-inline-block">
                                                                                                                            <div
                                                                                                                                className="question-mark">
                                                                                                                                <svg className="icon tron-icon question-mark-icon"
                                                                                                                                    aria-hidden="true">
                                                                                                                                    <use
                                                                                                                                        xlinkHref="#icon-icon-ask">
                                                                                                                                    </use>
                                                                                                                                </svg>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </span>TVL
                                                                                                                </div>
                                                                                                            </span><span
                                                                                                                className="ant-table-column-sorter ant-table-column-sorter-full">
                                                                                                                <span
                                                                                                                    className="ant-table-column-sorter-inner"
                                                                                                                    aria-hidden="true">
                                                                                                                    <span
                                                                                                                        role="img"
                                                                                                                        aria-label="caret-up"
                                                                                                                        className="anticon anticon-caret-up ant-table-column-sorter-up">
                                                                                                                        <svg viewBox="0 0 1024 1024"
                                                                                                                            focusable="false"
                                                                                                                            data-icon="caret-up"
                                                                                                                            width="1em"
                                                                                                                            height="1em"
                                                                                                                            fill="currentColor"
                                                                                                                            aria-hidden="true">
                                                                                                                            <path
                                                                                                                                d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z">
                                                                                                                            </path>
                                                                                                                        </svg>
                                                                                                                    </span><span
                                                                                                                        role="img"
                                                                                                                        aria-label="caret-down"
                                                                                                                        className="anticon anticon-caret-down ant-table-column-sorter-down active"><svg
                                                                                                                            viewBox="0 0 1024 1024"
                                                                                                                            focusable="false"
                                                                                                                            data-icon="caret-down"
                                                                                                                            width="1em"
                                                                                                                            height="1em"
                                                                                                                            fill="currentColor"
                                                                                                                            aria-hidden="true">
                                                                                                                            <path
                                                                                                                                d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z">
                                                                                                                            </path>
                                                                                                                        </svg></span>
                                                                                                                </span>
                                                                                                            </span>
                                                                                                        </div>
                                                                                                    </th>
                                                                                                    <th aria-label=""
                                                                                                        className="ant-table-cell ant-table-cell-ellipsis cell-max-150 ant-table-column-has-sorters"
                                                                                                        tabindex="0"
                                                                                                        scope="col">
                                                                                                        <div
                                                                                                            className="ant-table-column-sorters">
                                                                                                            <span
                                                                                                                className="ant-table-column-title">
                                                                                                                <div>
                                                                                                                    <span
                                                                                                                        className="mr-1">
                                                                                                                        <div
                                                                                                                            className="d-inline-block">
                                                                                                                            <div
                                                                                                                                className="question-mark">
                                                                                                                                <svg className="icon tron-icon question-mark-icon"
                                                                                                                                    aria-hidden="true">
                                                                                                                                    <use
                                                                                                                                        xlinkHref="#icon-icon-ask">
                                                                                                                                    </use>
                                                                                                                                </svg>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </span>Change
                                                                                                                    (24h)
                                                                                                                </div>
                                                                                                            </span><span
                                                                                                                className="ant-table-column-sorter ant-table-column-sorter-full">
                                                                                                                <span
                                                                                                                    className="ant-table-column-sorter-inner"
                                                                                                                    aria-hidden="true">
                                                                                                                    <span
                                                                                                                        role="img"
                                                                                                                        aria-label="caret-up"
                                                                                                                        className="anticon anticon-caret-up ant-table-column-sorter-up">
                                                                                                                        <svg viewBox="0 0 1024 1024"
                                                                                                                            focusable="false"
                                                                                                                            data-icon="caret-up"
                                                                                                                            width="1em"
                                                                                                                            height="1em"
                                                                                                                            fill="currentColor"
                                                                                                                            aria-hidden="true">
                                                                                                                            <path
                                                                                                                                d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z">
                                                                                                                            </path>
                                                                                                                        </svg>
                                                                                                                    </span><span
                                                                                                                        role="img"
                                                                                                                        aria-label="caret-down"
                                                                                                                        className="anticon anticon-caret-down ant-table-column-sorter-down"><svg
                                                                                                                            viewBox="0 0 1024 1024"
                                                                                                                            focusable="false"
                                                                                                                            data-icon="caret-down"
                                                                                                                            width="1em"
                                                                                                                            height="1em"
                                                                                                                            fill="currentColor"
                                                                                                                            aria-hidden="true">
                                                                                                                            <path
                                                                                                                                d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z">
                                                                                                                            </path>
                                                                                                                        </svg></span>
                                                                                                                </span>
                                                                                                            </span>
                                                                                                        </div>
                                                                                                    </th>
                                                                                                    <td
                                                                                                        className="ant-table-cell ant-table-cell-scrollbar">
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </thead>
                                                                                        </table>
                                                                                    </div>
                                                                                    <div className="ant-table-body">
                                                                                        <table className="table-main">
                                                                                            <colgroup>
                                                                                                <col className="col1" />
                                                                                                <col className="col2" />
                                                                                                <col className="col3" />
                                                                                                <col className="col4" />
                                                                                            </colgroup>
                                                                                            <tbody
                                                                                                className="ant-table-tbody">
                                                                                                <tr aria-hidden="true"
                                                                                                    className="ant-table-measure-row">
                                                                                                    <td className="td">
                                                                                                        <div>&nbsp;
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td className="td">
                                                                                                        <div>&nbsp;</div>
                                                                                                    </td>
                                                                                                    <td className="
                                                                                                                td">
                                                                                                        <div>
                                                                                                            &nbsp;
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td className="td">
                                                                                                        <div>&nbsp;
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr className="ant-table-row ant-table-row-level-0"
                                                                                                    data-row-key="0">
                                                                                                    <td
                                                                                                        className="ant-table-cell">
                                                                                                        <div
                                                                                                            className="d-flex align-items-center">
                                                                                                            <a className="target_url"
                                                                                                                href="#!"
                                                                                                                target="_blank"  rel="noreferrer" >
                                                                                                                <b
                                                                                                                    className="token-img-top">
                                                                                                                    <svg className="icon tron-icon tron-token-icon tron-mr-10px"
                                                                                                                        aria-hidden="true">
                                                                                                                        <use
                                                                                                                            xlinkHref="#icon-icon-justlend">
                                                                                                                        </use>
                                                                                                                    </svg>
                                                                                                                </b><span
                                                                                                                    className="text-normal project-wid">JustLend
                                                                                                                    DAO</span>
                                                                                                            </a>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <div
                                                                                                                    className="defi-type">
                                                                                                                    <span
                                                                                                                        className="defi-type-item">Lending</span><span
                                                                                                                            className="defi-type-item">Staking</span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell ant-table-cell-ellipsis cell-max-125 ant-table-column-sort">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span
                                                                                                                    className="text-normal">$<span>6,531,978,218</span></span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell ant-table-cell-ellipsis cell-max-150 td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span
                                                                                                                    className="text-danger">-0.60%</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr className="ant-table-row ant-table-row-level-0"
                                                                                                    data-row-key="1">
                                                                                                    <td
                                                                                                        className="ant-table-cell td-left">
                                                                                                        <div
                                                                                                            className="d-flex align-items-center">
                                                                                                            <a className="target_url"
                                                                                                                href="#!"
                                                                                                                target="_blank"  rel="noreferrer" >
                                                                                                                <b
                                                                                                                    className="token-img-top">
                                                                                                                    <svg className="icon tron-icon tron-token-icon tron-mr-10px"
                                                                                                                        aria-hidden="true">
                                                                                                                        <use
                                                                                                                            xlinkHref="#icon-icon-tron">
                                                                                                                        </use>
                                                                                                                    </svg>
                                                                                                                </b>
                                                                                                                <span
                                                                                                                    className="text-normal project-wid">TXH
                                                                                                                    Staking
                                                                                                                    Governance</span>
                                                                                                            </a>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell td-left">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <div
                                                                                                                    className="defi-type">
                                                                                                                    <span
                                                                                                                        className="defi-type-item">Governance</span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell ant-table-cell-ellipsis cell-max-125 ant-table-column-sort td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span
                                                                                                                    className="text-normal">$<span>5,017,986,939</span></span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell ant-table-cell-ellipsis cell-max-150 td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span
                                                                                                                    className="text-success">+0.79%</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr className="ant-table-row ant-table-row-level-0"
                                                                                                    data-row-key="2">
                                                                                                    <td
                                                                                                        className="ant-table-cell td-left">
                                                                                                        <div
                                                                                                            className="d-flex align-items-center">
                                                                                                            <a className="target_url"
                                                                                                                href="#!"
                                                                                                                target="_blank"  rel="noreferrer" >
                                                                                                                <b
                                                                                                                    className="token-img-top">
                                                                                                                    <svg className="icon tron-icon tron-token-icon tron-mr-10px tron-token-color"
                                                                                                                        aria-hidden="true">
                                                                                                                        <use
                                                                                                                            xlinkHref="#icon-icon-jst">
                                                                                                                        </use>
                                                                                                                    </svg>
                                                                                                                </b><span
                                                                                                                    className="text-normal project-wid">Just
                                                                                                                    Cryptos</span>
                                                                                                            </a>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell td-left">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <div
                                                                                                                    className="defi-type">
                                                                                                                    <span
                                                                                                                        className="defi-type-item">Cross
                                                                                                                        Chain</span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell ant-table-cell-ellipsis cell-max-125 ant-table-column-sort td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span
                                                                                                                    className="text-normal">$<span>4,836,873,572</span></span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell ant-table-cell-ellipsis cell-max-150 td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span
                                                                                                                    className="text-danger">-0.34%</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr className="ant-table-row ant-table-row-level-0"
                                                                                                    data-row-key="3">
                                                                                                    <td
                                                                                                        className="ant-table-cell td-left">
                                                                                                        <div
                                                                                                            className="d-flex align-items-center">
                                                                                                            <a className="target_url"
                                                                                                                href="#!"
                                                                                                                target="_blank"  rel="noreferrer" >
                                                                                                                <b
                                                                                                                    className="token-img-top">
                                                                                                                    <img alt="TXH"  width="20"
                                                                                                                        height="20"
                                                                                                                        src="https://static.tronscan.org/production/upload/logo/new/stUSDT_logo.png" />
                                                                                                                </b><span
                                                                                                                    className="text-normal project-wid">Staked
                                                                                                                    USDT</span>
                                                                                                            </a>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell td-left">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <div
                                                                                                                    className="defi-type">
                                                                                                                    <span
                                                                                                                        className="defi-type-item">RWA</span><span
                                                                                                                            className="defi-type-item">Staking</span><span
                                                                                                                                className="defi-type-item">Yield</span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell ant-table-cell-ellipsis cell-max-125 ant-table-column-sort td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span
                                                                                                                    className="text-normal">$<span>1,989,074,324</span></span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell ant-table-cell-ellipsis cell-max-150 td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span
                                                                                                                    className="text-success">+0.02%</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr className="ant-table-row ant-table-row-level-0"
                                                                                                    data-row-key="4">
                                                                                                    <td
                                                                                                        className="ant-table-cell td-left">
                                                                                                        <div
                                                                                                            className="d-flex align-items-center">
                                                                                                            <a className="target_url"
                                                                                                                href="#!"
                                                                                                                target="_blank"  rel="noreferrer" >
                                                                                                                <b
                                                                                                                    className="token-img-top">
                                                                                                                    <svg className="icon tron-icon tron-token-icon tron-mr-10px tron-stable-style">
                                                                                                                        <use
                                                                                                                            xlinkHref="#icon-icon-just1">
                                                                                                                        </use>
                                                                                                                    </svg>
                                                                                                                </b><span
                                                                                                                    className="text-normal project-wid">JustStable</span>
                                                                                                            </a>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell td-left">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <div
                                                                                                                    className="defi-type">
                                                                                                                    <span
                                                                                                                        className="defi-type-item">Stablecoin</span><span
                                                                                                                            className="defi-type-item">Lending</span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell ant-table-cell-ellipsis cell-max-125 ant-table-column-sort td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span
                                                                                                                    className="text-normal">$<span>1,276,595,091</span></span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell ant-table-cell-ellipsis cell-max-150 td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span
                                                                                                                    className="text-success">+0.90%</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr className="ant-table-row ant-table-row-level-0"
                                                                                                    data-row-key="5">
                                                                                                    <td
                                                                                                        className="ant-table-cell td-left">
                                                                                                        <div
                                                                                                            className="d-flex align-items-center">
                                                                                                            <a className="target_url"
                                                                                                                href="#!"
                                                                                                                target="_blank"  rel="noreferrer" >
                                                                                                                <b
                                                                                                                    className="token-img-top">
                                                                                                                    <svg className="icon tron-icon tron-token-icon tron-mr-10px"
                                                                                                                        aria-hidden="true">
                                                                                                                        <use
                                                                                                                            xlinkHref="#icon-icon-sun">
                                                                                                                        </use>
                                                                                                                    </svg>
                                                                                                                </b><span
                                                                                                                    className="text-normal project-wid">SUN.io</span>
                                                                                                            </a>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell td-left">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <div
                                                                                                                    className="defi-type">
                                                                                                                    <span
                                                                                                                        className="defi-type-item">DEX</span><span
                                                                                                                            className="defi-type-item">Stablecoin</span><span
                                                                                                                                className="defi-type-item">Farm</span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell ant-table-cell-ellipsis cell-max-125 ant-table-column-sort td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span
                                                                                                                    className="text-normal">$<span>350,331,125</span></span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell ant-table-cell-ellipsis cell-max-150 td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span
                                                                                                                    className="text-success">+0.23%</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr className="ant-table-row ant-table-row-level-0"
                                                                                                    data-row-key="6">
                                                                                                    <td
                                                                                                        className="ant-table-cell td-left">
                                                                                                        <div
                                                                                                            className="d-flex align-items-center">
                                                                                                            <a className="target_url"
                                                                                                                href="#!"
                                                                                                                target="_blank"  rel="noreferrer" >
                                                                                                                <b
                                                                                                                    className="token-img-top">
                                                                                                                    <svg className="icon tron-icon tron-token-icon tron-mr-10px"
                                                                                                                        aria-hidden="true">
                                                                                                                        <use
                                                                                                                            xlinkHref="#icon-icon-btt">
                                                                                                                        </use>
                                                                                                                    </svg>
                                                                                                                </b><span
                                                                                                                    className="text-normal project-wid">BTT
                                                                                                                    Staking
                                                                                                                    Governance</span>
                                                                                                            </a>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell td-left">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <div
                                                                                                                    className="defi-type">
                                                                                                                    <span
                                                                                                                        className="defi-type-item">Governance</span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell ant-table-cell-ellipsis cell-max-125 ant-table-column-sort td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span
                                                                                                                    className="text-normal">$<span>47,412,135</span></span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell ant-table-cell-ellipsis cell-max-150 td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span
                                                                                                                    className="text-danger">-2.76%</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transferBlockSec" style={{ display: "none" }}>
                    <div className="container home-chart recent-panel">
                        <div className="header d-flex "><a className="title-wrap"
                            href="#/data/analytics/stablecoin/overview"><span>Stablecoins</span></a></div>
                        <div className="content">
                            <div className="row-flex">
                                <div className="col-56 home-stablecoin-table">
                                    <div className="card ">
                                        <div>
                                            <div className="token_black stablecoin_table">
                                                <div className="col-md-12 table_pos">
                                                    <div>
                                                        <div className="smart-table-wrapper">
                                                            <div className="card table_pos ">
                                                                <div className="ant-table-wrapper">
                                                                    <div className="ant-spin-nested-loading">
                                                                        <div className="ant-spin-container">
                                                                            <div className="ant-table">
                                                                                <div className="ant-table-container">
                                                                                    <div className="ant-table-content">
                                                                                        <table className="t-auto">
                                                                                            <colgroup>
                                                                                                <col className="w-32" />
                                                                                            </colgroup>
                                                                                            <thead
                                                                                                className="ant-table-thead">
                                                                                                <tr>
                                                                                                    <th className="ant-table-cell td-left"
                                                                                                        scope="col">
                                                                                                        Stablecoin
                                                                                                    </th>
                                                                                                    <th aria-sort="descending"
                                                                                                        className="ant-table-cell ant-table-column-sort ant-table-column-has-sorters td-right"
                                                                                                        tabindex="0"
                                                                                                        scope="col">
                                                                                                        <div
                                                                                                            className="ant-table-column-sorters">
                                                                                                            <span
                                                                                                                className="ant-table-column-title">
                                                                                                                <div>
                                                                                                                    <span
                                                                                                                        className="mr-1">
                                                                                                                        <div
                                                                                                                            className="d-inline-block">
                                                                                                                            <div
                                                                                                                                className="question-mark">
                                                                                                                                <svg className="icon tron-icon question-mark-icon"
                                                                                                                                    aria-hidden="true">
                                                                                                                                    <use
                                                                                                                                        xlinkHref="#icon-icon-ask">
                                                                                                                                    </use>
                                                                                                                                </svg>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </span>Circulating
                                                                                                                    Supply
                                                                                                                </div>
                                                                                                            </span><span
                                                                                                                className="ant-table-column-sorter ant-table-column-sorter-full">
                                                                                                                <span
                                                                                                                    className="ant-table-column-sorter-inner"
                                                                                                                    aria-hidden="true">
                                                                                                                    <span
                                                                                                                        role="img"
                                                                                                                        aria-label="caret-up"
                                                                                                                        className="anticon anticon-caret-up ant-table-column-sorter-up">
                                                                                                                        <svg viewBox="0 0 1024 1024"
                                                                                                                            focusable="false"
                                                                                                                            data-icon="caret-up"
                                                                                                                            width="1em"
                                                                                                                            height="1em"
                                                                                                                            fill="currentColor"
                                                                                                                            aria-hidden="true">
                                                                                                                            <path
                                                                                                                                d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z">
                                                                                                                            </path>
                                                                                                                        </svg>
                                                                                                                    </span><span
                                                                                                                        role="img"
                                                                                                                        aria-label="caret-down"
                                                                                                                        className="anticon anticon-caret-down ant-table-column-sorter-down active"><svg
                                                                                                                            viewBox="0 0 1024 1024"
                                                                                                                            focusable="false"
                                                                                                                            data-icon="caret-down"
                                                                                                                            width="1em"
                                                                                                                            height="1em"
                                                                                                                            fill="currentColor"
                                                                                                                            aria-hidden="true">
                                                                                                                            <path
                                                                                                                                d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z">
                                                                                                                            </path>
                                                                                                                        </svg></span>
                                                                                                                </span>
                                                                                                            </span>
                                                                                                        </div>
                                                                                                    </th>
                                                                                                    <th aria-label=""
                                                                                                        className="ant-table-cell ant-table-column-has-sorters td-right"
                                                                                                        tabindex="0"
                                                                                                        scope="col">
                                                                                                        <div
                                                                                                            className="ant-table-column-sorters">
                                                                                                            <span
                                                                                                                className="ant-table-column-title">
                                                                                                                <div>
                                                                                                                    <span
                                                                                                                        className="mr-1">
                                                                                                                        <div
                                                                                                                            className="d-inline-block">
                                                                                                                            <div
                                                                                                                                className="question-mark">
                                                                                                                                <svg className="icon tron-icon question-mark-icon"
                                                                                                                                    aria-hidden="true">
                                                                                                                                    <use
                                                                                                                                        xlinkHref="#icon-icon-ask">
                                                                                                                                    </use>
                                                                                                                                </svg>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </span>Volume
                                                                                                                    (24h)
                                                                                                                </div>
                                                                                                            </span><span
                                                                                                                className="ant-table-column-sorter ant-table-column-sorter-full">
                                                                                                                <span
                                                                                                                    className="ant-table-column-sorter-inner"
                                                                                                                    aria-hidden="true">
                                                                                                                    <span
                                                                                                                        role="img"
                                                                                                                        aria-label="caret-up"
                                                                                                                        className="anticon anticon-caret-up ant-table-column-sorter-up">
                                                                                                                        <svg viewBox="0 0 1024 1024"
                                                                                                                            focusable="false"
                                                                                                                            data-icon="caret-up"
                                                                                                                            width="1em"
                                                                                                                            height="1em"
                                                                                                                            fill="currentColor"
                                                                                                                            aria-hidden="true">
                                                                                                                            <path
                                                                                                                                d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z">
                                                                                                                            </path>
                                                                                                                        </svg>
                                                                                                                    </span><span
                                                                                                                        role="img"
                                                                                                                        aria-label="caret-down"
                                                                                                                        className="anticon anticon-caret-down ant-table-column-sorter-down"><svg
                                                                                                                            viewBox="0 0 1024 1024"
                                                                                                                            focusable="false"
                                                                                                                            data-icon="caret-down"
                                                                                                                            width="1em"
                                                                                                                            height="1em"
                                                                                                                            fill="currentColor"
                                                                                                                            aria-hidden="true">
                                                                                                                            <path
                                                                                                                                d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z">
                                                                                                                            </path>
                                                                                                                        </svg></span>
                                                                                                                </span>
                                                                                                            </span>
                                                                                                        </div>
                                                                                                    </th>
                                                                                                </tr>
                                                                                            </thead>
                                                                                            <tbody
                                                                                                className="ant-table-tbody">
                                                                                                <tr className="ant-table-row ant-table-row-level-0"
                                                                                                    data-row-key="ant_table_stableUSDT">
                                                                                                    <td
                                                                                                        className="ant-table-cell td-left">
                                                                                                        <div>
                                                                                                            <a className="target_url stable_coin_target_url"
                                                                                                                href="https://tronscan.org/#/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t">
                                                                                                                <b
                                                                                                                    className="token-img-top">
                                                                                                                    <svg className="icon tron-icon tron-stable-token-icon"
                                                                                                                        aria-hidden="true">
                                                                                                                        <use
                                                                                                                            xlinkHref="#icon-icon-usdt">
                                                                                                                        </use>
                                                                                                                    </svg><svg
                                                                                                                        className="icon tron-icon tron-v-icon"
                                                                                                                        aria-hidden="true">
                                                                                                                        <use
                                                                                                                            xlinkHref="#icon-icon-v">
                                                                                                                        </use>
                                                                                                                    </svg>
                                                                                                                </b>
                                                                                                                <span
                                                                                                                    className="d-inline-flex align-items-center"><span
                                                                                                                        className="text-normal">Tether
                                                                                                                        USD</span>
                                                                                                                    <span
                                                                                                                        className="defi-type-item">USDT</span></span>
                                                                                                            </a>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell ant-table-column-sort td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span
                                                                                                                    className="text-normal"><span>50,819,943,510</span></span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span>$<span>13,606,544,718</span></span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr className="ant-table-row ant-table-row-level-0"
                                                                                                    data-row-key="ant_table_stableTUSD">
                                                                                                    <td
                                                                                                        className="ant-table-cell td-left">
                                                                                                        <div>
                                                                                                            <a className="target_url stable_coin_target_url"
                                                                                                                href="https://tronscan.org/#/token20/TUpMhErZL2fhh4sVNULAbNKLokS4GjC1F4">
                                                                                                                <b
                                                                                                                    className="token-img-top">
                                                                                                                    <svg className="icon tron-icon tron-stable-token-icon"
                                                                                                                        aria-hidden="true">
                                                                                                                        <use
                                                                                                                            xlinkHref="#icon-icon-tusd">
                                                                                                                        </use>
                                                                                                                    </svg><svg
                                                                                                                        className="icon tron-icon tron-v-icon"
                                                                                                                        aria-hidden="true">
                                                                                                                        <use
                                                                                                                            xlinkHref="#icon-icon-v">
                                                                                                                        </use>
                                                                                                                    </svg>
                                                                                                                </b><span
                                                                                                                    className="d-inline-flex align-items-center"><span
                                                                                                                        className="text-normal">TrueUSD</span>
                                                                                                                    <span
                                                                                                                        className="defi-type-item">TUSD</span></span>
                                                                                                            </a>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell ant-table-column-sort td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span
                                                                                                                    className="text-normal"><span>1,486,506,288</span></span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span>$<span>608,837,272</span></span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr className="ant-table-row ant-table-row-level-0"
                                                                                                    data-row-key="ant_table_stableUSDD">
                                                                                                    <td
                                                                                                        className="ant-table-cell td-left">
                                                                                                        <div>
                                                                                                            <a className="target_url stable_coin_target_url"
                                                                                                                href="https://tronscan.org/#/token20/TPYmHEhy5n8TCEfYGqW2rPxsghSfzghPDn">
                                                                                                                <b
                                                                                                                    className="token-img-top">
                                                                                                                    <svg className="icon tron-icon tron-stable-token-icon"
                                                                                                                        aria-hidden="true">
                                                                                                                        <use
                                                                                                                            xlinkHref="#icon-icon-usdd">
                                                                                                                        </use>
                                                                                                                    </svg><svg
                                                                                                                        className="icon tron-icon tron-v-icon"
                                                                                                                        aria-hidden="true">
                                                                                                                        <use
                                                                                                                            xlinkHref="#icon-icon-v">
                                                                                                                        </use>
                                                                                                                    </svg>
                                                                                                                </b><span
                                                                                                                    className="d-inline-flex align-items-center"><span
                                                                                                                        className="text-normal">Decentralized
                                                                                                                        USD</span>
                                                                                                                    <span
                                                                                                                        className="defi-type-item">USDD</span></span>
                                                                                                            </a>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell ant-table-column-sort td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span
                                                                                                                    className="text-normal"><span>725,332,033</span></span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span>$<span>1,870,173</span></span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr className="ant-table-row ant-table-row-level-0"
                                                                                                    data-row-key="ant_table_stableUSDC">
                                                                                                    <td
                                                                                                        className="ant-table-cell td-left">
                                                                                                        <div>
                                                                                                            <a className="target_url stable_coin_target_url"
                                                                                                                href="https://tronscan.org/#/token20/TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8">
                                                                                                                <b
                                                                                                                    className="token-img-top">
                                                                                                                    <svg className="icon tron-icon tron-stable-token-icon"
                                                                                                                        aria-hidden="true">
                                                                                                                        <use
                                                                                                                            xlinkHref="#icon-icon-usdc">
                                                                                                                        </use>
                                                                                                                    </svg><svg
                                                                                                                        className="icon tron-icon tron-v-icon"
                                                                                                                        aria-hidden="true">
                                                                                                                        <use
                                                                                                                            xlinkHref="#icon-icon-v">
                                                                                                                        </use>
                                                                                                                    </svg>
                                                                                                                </b><span
                                                                                                                    className="d-inline-flex align-items-center"><span
                                                                                                                        className="text-normal">USD
                                                                                                                        Coin</span>
                                                                                                                    <span
                                                                                                                        className="defi-type-item">USDC</span></span>
                                                                                                            </a>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell ant-table-column-sort td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span
                                                                                                                    className="text-normal"><span>268,585,824</span></span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span>$<span>410,497,166</span></span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr className="ant-table-row ant-table-row-level-0"
                                                                                                    data-row-key="ant_table_stableUSDJ">
                                                                                                    <td
                                                                                                        className="ant-table-cell td-left">
                                                                                                        <div>
                                                                                                            <a className="target_url stable_coin_target_url"
                                                                                                                href="https://tronscan.org/#/token20/TMwFHYXLJaRUPeW6421aqXL4ZEzPRFGkGT">
                                                                                                                <b
                                                                                                                    className="token-img-top">
                                                                                                                    <svg className="icon tron-icon tron-stable-token-icon"
                                                                                                                        aria-hidden="true">
                                                                                                                        <use
                                                                                                                            xlinkHref="#icon-icon-usdj">
                                                                                                                        </use>
                                                                                                                    </svg>
                                                                                                                    <svg className="icon tron-icon tron-v-icon"
                                                                                                                        aria-hidden="true">
                                                                                                                        <use
                                                                                                                            xlinkHref="#icon-icon-v">
                                                                                                                        </use>
                                                                                                                    </svg>
                                                                                                                </b><span
                                                                                                                    className="d-inline-flex align-items-center"><span
                                                                                                                        className="text-normal">JUST
                                                                                                                        Stablecoin</span>
                                                                                                                    <span
                                                                                                                        className="defi-type-item">USDJ</span></span>
                                                                                                            </a>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell ant-table-column-sort td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span
                                                                                                                    className="text-normal"><span>153,774,114</span></span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        className="ant-table-cell td-right">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                className="target_url">
                                                                                                                <span>$<span>121,744</span></span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="home-view-link"><a
                                                            href="#/data/analytics/stablecoin/overview">More<svg
                                                                className="icon tron-icon tron-font-size-8px"
                                                                aria-hidden="true">
                                                                <use xlinkHref="#icon-right-arrow"></use>
                                                            </svg></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-44 home-stablecoin-chart">
                                    <div className="card-body pt-0">
                                        <div className="card-body-child1">
                                            <div>
                                                <div
                                                    className="stablecoin-title-wrap home-title-wrap en-stablecoin-title-wrap mb-5">
                                                    <div className="title-wrap">
                                                        <span className="title">Volume (24h)</span>
                                                        <span className="ml-1">
                                                            <div className="d-inline-block">
                                                                <div className="question-mark">
                                                                    <svg className="icon tron-icon question-mark-icon"
                                                                        aria-hidden="true">
                                                                        <use xlinkHref="#icon-icon-ask"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <div className="amount">$15,031,961,229</div>
                                                </div>
                                                <div className="card-body-child2">
                                                    <div id="chartId_home_stablecoin" className="echarts-dom-class"
                                                        _echarts_instance_="ec_1705668084169">
                                                        <div id="chart-container-parent">
                                                            <div id="chart-container"></div>
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
                </div>
                <div className="transferBlockSec transferBlockSec2 d-none" style={{ display: "none" }}>
                    <div className="container home-chart home-statistics">
                        <div className="header d-flex"><a className="title-wrap"
                            href="#/data/charts"><span>Statistics</span></a></div>
                        <div className="content">
                            <div className="home-accounts">
                                <div className="title-container">
                                    <span className="active-title title">Active Accounts</span><span
                                        className="divide-line">/</span><span className="title">New Accounts</span>
                                    <span className="divide-line">/</span><span className="title">Total Accounts</span>
                                    <div className="d-flex align-items-center ">
                                        <div className="ant-dropdown-trigger camera-icon">
                                            <svg className="icon tron-icon tron-icon-camera false" aria-hidden="true">
                                                <use xlinkHref="#icon-icon-xiazaitupian"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-account-chart d-flex align-items-center justify-content-center">
                                    <div id="chart-container2"></div>
                                </div>
                                <div className="gap-row-line"></div>
                                <div className="recent-data">
                                    <ul>
                                        <li>
                                            <h2 className="indicators">Active Accounts (Yesterday)</h2>
                                            <div className="indicators-content"><span
                                                className="indicators-data">1,889,417</span><span
                                                    className="indicators-percent"><span className="reduce">
                                                        -3.82%</span></span></div>
                                        </li>
                                        <li>
                                            <h2 className="indicators">Average Active Accounts (Past 1 month)</h2>
                                            <div className="indicators-content"><span
                                                className="indicators-data">1,889,280</span></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="home-protocol-income">
                                <div className="title-container">
                                    <span className="active-title title">Protocol Revenue</span>
                                    <div className="d-flex align-items-center ">
                                        <div className="ant-dropdown-trigger camera-icon">
                                            <svg className="icon tron-icon tron-icon-camera false" aria-hidden="true">
                                                <use xlinkHref="#icon-icon-xiazaitupian"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-protocol-chart d-flex align-items-center justify-content-center">
                                    <div id="chart3"></div>
                                </div>
                                <div className="gap-row-line"></div>
                                <div className="recent-data">
                                    <ul>
                                        <li>
                                            <h2 className="indicators">Protocol Revenue (Yesterday)</h2>
                                            <div className="indicators-content">
                                                <span className="indicators-data">$1,290,839</span><span
                                                    className="indicators-percent"><span className="reduce">
                                                        -2.73%</span></span>
                                            </div>

                                        </li>
                                        <li>
                                            <h2 className="indicators">Total Protocol Revenue</h2>
                                            <div className="indicators-content">
                                                <span className="indicators-data">$794,696,379</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container TXH-charts-wrap  d-none" style={{ display: "none" }}>
                    <div className="home-supply-wrap">
                        <div className="home-supply-container">
                            <div className="home-supply-title">
                                <div className="home-supply-title-left">
                                    <div className="home-supply-title-text active">TXH Supply</div>
                                    <div className="home-supply-title-split">/</div>
                                    <div className="home-supply-title-text false">TXH Net Increase</div>
                                    <div className="d-flex align-items-center ">
                                        <div className="ant-dropdown-trigger camera-icon">
                                            <svg className="icon tron-icon tron-icon-camera false" aria-hidden="true">
                                                <use xlinkHref="#icon-icon-xiazaitupian"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-supply-title-right">
                                    <div className="home-supply-title-btns">
                                        <div className="home-supply-title-btn active">2W</div>
                                        <div className="home-supply-title-btn false">1M</div>
                                        <div className="home-supply-title-btn false">6M</div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-supply-chart">
                                <div id="chart"></div>
                            </div>
                            <div className="gap-row-line"></div>
                            <div className="home-supply-footer">
                                <div className="home-supply-overview">
                                    <div className="home-supply-overview-title">TXH Supply</div>
                                    <div className="home-supply-overview-data"><span
                                        className="home-supply-overview-data-num">88,214,395,995</span><span
                                            className="home-supply-overview-data-tag"></span></div>
                                </div>
                                <div className="home-supply-overview">
                                    <div className="home-supply-overview-title">
                                        Annualized Inflation Rate<div className="d-inline-block">
                                            <div className="question-mark">
                                                <svg className="icon tron-icon question-mark-icon" aria-hidden="true">
                                                    <use xlinkHref="#icon-icon-ask"></use>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-supply-overview-data"><span
                                        className="home-supply-overview-data-num"><span
                                            className="reduce">-2.57%</span><span
                                                className="indicators-desc">Deflation</span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-supply-wrap">
                        <div className="home-staked-container">
                            <div className="home-staked-title">
                                <div className="home-staked-title-left">
                                    <div className="home-staked-title-text active">TXH Staked</div>
                                    <div className="home-staked-title-split">/</div>
                                    <div className="home-staked-title-text false">TXH Staking Rate</div>
                                    <div className="d-flex align-items-center ">
                                        <div className="ant-dropdown-trigger camera-icon">
                                            <svg className="icon tron-icon tron-icon-camera false" aria-hidden="true">
                                                <use xlinkHref="#icon-icon-xiazaitupian"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-staked-title-right">
                                    <div className="home-staked-title-legend "><span
                                        className="home-staked-title-legend-circle home-staked-title-legend-circle-blue"></span>Stake
                                        2.0</div>
                                    <div className="home-staked-title-legend "><span
                                        className="home-staked-title-legend-circle home-staked-title-legend-circle-red "></span>Stake
                                        1.0</div>
                                </div>
                            </div>
                            <div className="home-staked-chart">
                                <div className="home-staked-chart-child">
                                    <div id="chart_home_trx_staked" className="echarts-dom-class"
                                        _echarts_instance_="ec_1705556095509">
                                        <div id="first-chart-child">
                                            <canvas data-zr-dom-id="zr_0" height="218"></canvas>
                                        </div>
                                        <div className="echart-tooltip-wrapper"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="gap-row-line"></div>
                            <div className="home-staked-footer">
                                <div className="home-staked-overview">
                                    <div className="home-staked-overview-title">TXH Staked</div>
                                    <div className="home-staked-overview-data"><span
                                        className="home-staked-overview-data-num">46,109,646,357</span></div>
                                </div>
                                <div className="home-staked-overview">
                                    <div className="home-staked-overview-title">Stake 2.0</div>
                                    <div className="home-staked-overview-data"><span
                                        className="home-staked-overview-data-num">14,552,204,390</span><span
                                            className="home-staked-overview-data-tag"><span
                                            >(31.56%)</span></span></div>
                                </div>
                                <div className="home-staked-overview">
                                    <div className="home-staked-overview-title">Stake 1.0</div>
                                    <div className="home-staked-overview-data"><span
                                        className="home-staked-overview-data-num">31,557,441,967</span><span
                                            className="home-staked-overview-data-tag"><span>(68.44%)</span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-view-more" style={{ display: "none" }}>
                    <a href="#/data/charts">
                        <span>View More Data</span>
                        <svg className="icon tron-icon tron-font-size-8px" aria-hidden="true">
                            <use xlinkHref="#icon-right-arrow"></use>
                        </svg>
                    </a>
                </div>
               
            </main>
        </div>


    );
  }
}
