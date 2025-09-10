import React, { Component } from 'react';

import { Link } from "react-router-dom";
import './contractAdress.css';
import WriteContract from './Write_contract';
import Copy from './Services';
export class ContractCode extends Component {

    static displayName = ContractCode.name;
    constructor(props) {
        super(props);
        this.state = { address: props.add, account: {}, loading: true, readFun: [], writeFun: [], activeTab: 'tab1' };
    }

    componentDidMount() {
        this.populateData();
    }
    async populateData() {
        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + '/weatherforecast/GetContractDetails?add=' + this.state.address);
        const data = await response.json();
        // console.log(data.Abi.Entrys);
        //debugger;
        //this.populateReadWriteTab();
        this.setState({
            account: data, address: this.state.address, loading: false,
            readFun: data.Abi.Entrys.filter((element) => {
                if ((element.StateMutability == 1 || element.StateMutability == 2) && element.Type == 2) return element;
           }),
            writeFun: data.Abi.Entrys.filter((element) => {
                if (!(element.StateMutability == 1 || element.StateMutability == 2) && element.Type == 2) return element
            })
        });
       // debugger;
    }

    
    async fillReadTab() {

    }

    async fillWriteTab() {
        
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
                                            {activeTab === 'tab2' && <div><div className="tab-container">
                                                {this.state.readFun.map(read =>
                                                    <div>


                                                        <div><main class="read-container" id="Tab-read-F1"><div><form class="ant-legacy-form ant-legacy-form-horizontal css-2i2tap"><div class="ant-collapse ant-collapse-icon-position-end"><div class="ant-collapse-item ant-collapse-item-active"><div class="ant-collapse-header" aria-expanded="true" aria-disabled="false" role="button" tabindex="0"><span class="ant-collapse-header-text"><div class="panel-header-content" id="Tab-read-F1header"><span id="06a8f8a2">1. <span>admin2</span> <span>(06a8f8a2)</span></span><div><svg class="icon tron-icon" aria-hidden="true">
                                                            <use xlinkHref="#icon-icon-copy"></use></svg><svg class="icon tron-icon tron-ml-12px" aria-hidden="true">
                                                                <use xlinkHref="#icon-icon-link1-copy"></use></svg></div></div></span></div><div class="ant-collapse-content ant-collapse-content-active" ><div class="ant-collapse-content-box"><div><div>
                                                                <div class="d-flex result-item"><img src="/static/media/resulticon-new.34141ca376117e1eba6ada52959a650e.svg" /><span class="address-container   "><div class="react-contextmenu-wrapper"><span><div class="truncate-ellipsis"><span><div class="d-flex address-link-wrap " style={{ alignItems: 'center' }}  ><a class="text-truncate address-link " href="#/address/T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb"><span class=""><div class="ellipsis_box "><div class="line-ellipsis">T9yD14Nj9j7xAB4dbGeiX9h8unk</div><div>KHxuWwb</div></div></span></a><div class="labelShow"></div></div></span></div></span></div><span class="new-address-content-menu-wrap">
                                                                    <nav role="menu" tabindex="-1" class="react-contextmenu dropdown-menu show new-address-content-menu" style= {{ zIndex: '899', position:'fixed', opacity:'0', pointerEvents:'none' }} ><a class="dropdown-item" href="#!"><svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                    <use xlinkHref="#icon-link-open"></use></svg><span>Open in New Tab	 </span></a><a class="dropdown-item" href="#!"><svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                    <use xlinkHref="#icon-icon-labels"></use></svg><span>Edit Private Name</span></a><a class="dropdown-item" href="#!"><svg class="icon tron-icon" aria-hidden="true">
                                                                        <use xlinkHref="#icon-user-circle"></use></svg><span>View Account Profile</span></a><div class="menu-gap-line"></div><a class="dropdown-item" href="#!"><svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                        <use xlinkHref="#icon-icon-copy1"></use></svg><span>Copy Address</span></a><a class="dropdown-item" href="#!">
                                                                        <svg class="icon tron-icon copy-icon" aria-hidden="true"><use xlinkHref="#icon-qrcode"></use></svg><span>Show QR Code</span></a><a class="dropdown-item" href="#!"><svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                        <use xlinkHref="#icon-transfer"></use></svg><span>Send Tokens</span></a></nav></span></span><i class="type">address</i></div></div></div></div></div></div></div></form></div></main></div>



                                                        <div className="my-2">

                                                            {/*<div className="operate">*/}
                                                            {/*    <span>[<span>Expand</span>]</span>*/}
                                                            {/*    <span>[<span>Reset</span>]</span>*/}
                                                            {/*</div>*/}
                                                        </div>


                                                        <div className="accordion my-3" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                        1. AddBlacklist
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <div>
                                                                            <div>
                                                                                <div class="contract-item">
                                                                                    <span>_evilUser_address</span>
                                                                                    <div class="ant-row ant-legacy-form-item css-2i2tap">
                                                                                        <div class="ant-col ant-legacy-form-item-control-wrapper css-2i2tap">
                                                                                            <div class="ant-legacy-form-item-control">
                                                                                                <span class="ant-legacy-form-item-children">
                                                                                                    <input autocomplete="off" placeholder="_evilUser_address" id="contract_info_submitValues[0]" data-__meta="[object Object]" data-__field="[object Object]" class="ant-input" type="text" value="" style={{ borderRadius: '10px' }} />
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                <div class="d-flex">
                                                                                    <div class="search-btn">
                                                                                        <span>Send</span></div>
                                                                                    <div class="search-btn ml12" style={{ width: 'auto' }}>
                                                                                        <span>Multi-signature</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="accordion my-3" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                                        2. unpause
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseTwo" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <div>
                                                                            <div class="d-flex">
                                                                                <div class="search-btn">
                                                                                    <span>Send</span></div>
                                                                                <div class="search-btn ml12" style={{ width: 'auto' }}>
                                                                                    <span>Multi-signature</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="accordion my-3" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                                        3. pause
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseThree" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <div>
                                                                            <div class="d-flex">
                                                                                <div class="search-btn">
                                                                                    <span>Send</span></div>
                                                                                <div class="search-btn ml12" style={{ width: 'auto' }}>
                                                                                    <span>Multi-signature</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="accordion my-3" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseThree">
                                                                        4. setParams
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseFour" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <div>
                                                                            <div>
                                                                                <div class="contract-item">
                                                                                    <span>newBasisPoints_uint256</span>
                                                                                    <div class="ant-row ant-legacy-form-item css-2i2tap">
                                                                                        <div class="ant-col ant-legacy-form-item-control-wrapper css-2i2tap">
                                                                                            <div class="ant-legacy-form-item-control">
                                                                                                <span class="ant-legacy-form-item-children">
                                                                                                    <input autocomplete="off" placeholder="_evilUser_address" id="contract_info_submitValues[0]" data-__meta="[object Object]" data-__field="[object Object]" class="ant-input" type="text" value="" style={{ borderRadius: '10px' }} />
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="contract-item">
                                                                                    <span>newMaxFee_uint256</span>
                                                                                    <div class="ant-row ant-legacy-form-item css-2i2tap">
                                                                                        <div class="ant-col ant-legacy-form-item-control-wrapper css-2i2tap">
                                                                                            <div class="ant-legacy-form-item-control">
                                                                                                <span class="ant-legacy-form-item-children">
                                                                                                    <input autocomplete="off" placeholder="_evilUser_address" id="contract_info_submitValues[0]" data-__meta="[object Object]" data-__field="[object Object]" class="ant-input" type="text" value="" style={{ borderRadius: '10px' }} />
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                <div class="d-flex">
                                                                                    <div class="search-btn">
                                                                                        <span>Send</span></div>
                                                                                    <div class="search-btn ml12" style={{ width: 'auto' }}>
                                                                                        <span>Multi-signature</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="accordion my-3" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseThree">
                                                                        5.removeBlackList
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseFive" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <div>
                                                                            <div class="contract-item">
                                                                                <span>newBasisPoints_uint256</span>
                                                                                <div class="ant-row ant-legacy-form-item css-2i2tap">
                                                                                    <div class="ant-col ant-legacy-form-item-control-wrapper css-2i2tap">
                                                                                        <div class="ant-legacy-form-item-control">
                                                                                            <span class="ant-legacy-form-item-children">
                                                                                                <input autocomplete="off" placeholder="_evilUser_address" id="contract_info_submitValues[0]" data-__meta="[object Object]" data-__field="[object Object]" class="ant-input" type="text" value="" style={{ borderRadius: '10px' }} />
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="d-flex">
                                                                                <div class="search-btn">
                                                                                    <span>Send</span></div>
                                                                                <div class="search-btn ml12" style={{ width: 'auto' }}>
                                                                                    <span>Multi-signature</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>




                                                    </div>


                                                )}
                                            </div></div>}
                                            {activeTab === 'tab3' && <div>Content of Tab 3</div>}
                                        </div>
                                        
                                    </div>

                                </main>
                            </div>
                        </div>
                        <div className="tron-feedback-container false false">
                            <svg className="icon tron-icon tron-icon-like" aria-hidden="true"><use xlinkHref="#icon-feedback"></use></svg><span className="tron-feedback-text"><span>Is this page helpful?</span><svg className="icon tron-icon tron-icon-close-feedback" aria-hidden="true">
                                <use xlinkHref="#icon-a-icon-close"></use></svg></span>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}
