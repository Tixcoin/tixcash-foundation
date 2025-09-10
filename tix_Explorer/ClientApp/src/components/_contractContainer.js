import React, { Component } from 'react';

import { Link } from "react-router-dom";
import './contractAdress.css';
import WriteContract from './Write_contract';
import Copy from './Services';
export class ContractCode extends Component {

    static displayName = ContractCode.name;
    constructor(props) {
        super(props);
        this.state = { address: props.add, account: {}, loading: true, activeTab: 'tab1' };
    }

    componentDidMount() {
        this.populateData();
    }
    async populateData() {

        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + '/weatherforecast/GetContractDetails?add=' + this.state.address);
        const data = await response.json();
        // console.log(data.Abi.Entrys);
        debugger;
        this.setState({ account: data, address: this.state.address, loading: false });
    }

    handleTabChange = (tab) => {
        this.setState({ activeTab: tab });
    };

    render() {
        const { activeTab } = this.state;
        return (
            <div>
                <div id="mainContent">
                    <main className="container header-overlap account-new address-container address-page">
                        <div className="card new-list-style-body">

                            <div className="card-body p-0 list-style-body__body">
                                <main className="contract-container contract-0330 " id="contract-code-main min-h-200">
                                    <div>
                                        <div className="code-sticky-content flex-wrap flex justify-between" id="sticky-menu">
                                            <div className=" flex  ant-radio-group my-3 ant-radio-group-outline ant-radio-group-Small choice-btn mb-12px p-2 tron-light " style={{ borderRadius: '8px' }}>
                                                {/*<label className="ant-radio-button-wrapper mx-2 ant-radio-button-wrapper-checked">*/}
                                                {/*    <span className="ant-radio-button ant-radio-button-checked">*/}
                                                {/*        <input className="ant-radio-button-input mx-1" type="radio" value="code" checked="" name="options" />*/}
                                                {/*        <span className="ant-radio-button-inner"></span>*/}
                                                {/*    </span><span><span>Code</span></span>*/}
                                                {/*</label>*/}
                                                <div className="tab-buttons">
                                                    <button className={activeTab==='tab1' ? 'active': ""} onClick={() => this.handleTabChange('tab1')}>Tab 1</button>
                                                    <button className={activeTab === 'tab2' ? 'active' : ""} onClick={() => this.handleTabChange('tab2')}>Tab 2</button>
                                                    <button className={activeTab === 'tab3' ? 'active' : ""} onClick={() => this.handleTabChange('tab3')}>Tab 3</button>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="tab-content">
                                            {activeTab === 'tab1' && <div><div>
                                                <div className="tab-choice ant-radio-group-new mb-12px">
                                                    <div className="contract-source-code-title mb-12px">
                                                        {this.state.account &&
                                                            (this.state.account.isverified === 2 ?
                                                                <span className="contract_source_code_match">Contract Source Code Verified <span className="contract-code-match">(Perfect match)</span></span>
                                                                :
                                                                (this.state.account.isverified === 1 ?
                                                                    <span className="contract_source_code_match">Contract Source Code being verified</span>
                                                                    : <span className="d-flex align-items-center flex-wrap">
                                                                        <span>Contract source code is unverified.</span><span>&nbsp;</span><span>I am the creator of the contract, </span><span>&nbsp;</span>
                                                                        <Link to={'/verify/' + this.state.address} >
                                                                            <span>Verify and launch source code </span>  <img alt="img" className="img-style" src="/assets/img/no-pass-new.d02e31fcbdeda4bb1c76792560ba5611.svg" />
                                                                        </Link>
                                                                    </span>
                                                                )
                                                            )
                                                        }
                                                    </div>
                                                    <hr />
                                                    <div className="d-flex contract-header_list contract-detail contract-header-list-new ">
                                                        <div className="new-contract-header__item contract-header contract-header-new">
                                                            <ul>
                                                                <li><p className="contract-left"><span>Contract Name</span></p>{this.state.account && this.state.account.Name}</li>
                                                                <li><p><span>Optimization</span></p> {this.state.account && (this.state.account.optimization ? "True" : "False")} </li>

                                                            </ul>
                                                        </div><div className="new-contract-header__item contract-header contract-header-new">
                                                            <ul>
                                                                <li><p><span>Compiler Version</span></p>{this.state.account && this.state.account.version}</li>
                                                                <li><p>License</p>{this.state.account && this.state.account.license}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                                <div className="tab-container">
                                                    <div className="contract-info contract-info-new">
                                                        <div>
                                                            <div className="contract-infos-title mb-3 d-flex code-title justify-content-between z-90">
                                                                <span>Contract Code</span>
                                                                <div className="d-flex"></div>
                                                            </div>

                                                            <div className="w-100 form-control">
                                                                {!this.state.account.code &&
                                                                    <div className="d-flex justify-content-center align-items-center no-data-code">
                                                                        <img alt="img" src="/assets/img/nodata.png" width="115" />
                                                                        <span>No Data</span>
                                                                    </div>
                                                                }
                                                                {this.state.account.code &&
                                                                    <div className="scroll-new entry">
                                                                        {this.state.account.code.split(/\n/).map(line => <div key={line}>{line}</div>)}
                                                                    </div>
                                                                }

                                                            </div>
                                                        </div>

                                                        <div className="row mt-3 mt3-new" id="abi-container">
                                                            <div className="col-md-12">
                                                                <div className="d-flex mb-3 justify-content-between code-title contract-infos-title contract-infos-title-abi">
                                                                    <span><span>Contract ABI</span></span>
                                                                    <div className="d-flex align-items-center gap-5">
                                                                        <div className="ml-3 abi-nav-switch-list ">
                                                                            <span className="nav-item active">
                                                                                <span>JSON</span>
                                                                            </span>
                                                                            <span className="nav-item"><span>Raw/Text</span></span>
                                                                        </div>
                                                                        {this.state.account.Abi && <Copy value={JSON.stringify(this.state.account.Abi.Entrys)} />}
                                                                        <div className="full-code">
                                                                            <svg className="icon tron-icon iconfont" aria-hidden="true">
                                                                                <use xlinkHref="#icon-zhankai"></use>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="w-100 form-control h-180">
                                                                    {this.state.account.Abi && JSON.stringify(this.state.account.Abi.Entrys)}
                                                                    <div className="scroll-new entry">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr></hr>
                                                        <div className="row mt-3 mt3-new" id="byte-container">
                                                            <div className="col-md-12">
                                                                <div className="d-flex mb-3 justify-content-between code-title contract-infos-title contract-infos-title-abi">
                                                                    <span><span>Byte Code</span></span>
                                                                    <div className="d-flex align-items-center">
                                                                        {this.state.account.Bytecode && <Copy value={this.state.account.Bytecode} />}
                                                                        <div className="full-code mx-2">
                                                                            <svg className="icon tron-icon iconfont" aria-hidden="true">
                                                                                <use xlinkHref="#icon-zhankai"></use>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="w-100 form-control h-180">
                                                                    {this.state.account && this.state.account.Bytecode}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3 mt3-new">
                                                            <div className="col-md-12">
                                                                <div className="d-flex mb-3 code-title contract-infos-title contract-infos-title-abi">
                                                                    <div>
                                                                        <span className="mr-4px"><span>Constructor Arguments</span></span>
                                                                        <div className="d-inline-block">
                                                                            <div className="question-mark">
                                                                                <svg className="icon tron-icon question-mark-icon" aria-hidden="true">
                                                                                    <use xlinkHref="#icon-icon-ask"></use>
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="w-100 form-control fit">
                                                                    <div className="d-flex justify-content-center align-items-center no-data-code">
                                                                        <img alt="img" src="/assets/img/nodata.png" width="115" />
                                                                        <span>No Data</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div></div>}
                                            {activeTab === 'tab2' && <div>Content of Tab 2</div>}
                                            {activeTab === 'tab3' && <div>Content of Tab 3</div>}
                                        </div>
                                        
                                    </div>

                                </main>
                            </div>
                        </div>
                        <div className="tron-feedback-container false false">
                            <svg className="icon tron-icon tron-icon-like" aria-hidden="true"><use xlinkHref="#icon-feedback"></use></svg><span className="tron-feedback-text"><span>Is this page helpful?</span><svg className="icon tron-icon tron-icon-close-feedback" aria-hidden="true"><use xlinkHref="#icon-a-icon-close"></use></svg></span>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}
