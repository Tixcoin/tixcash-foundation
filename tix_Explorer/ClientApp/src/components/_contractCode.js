import React, { Component } from 'react';
import { CAccordion } from '@coreui/react'
import { CAccordionBody } from '@coreui/react'
import { CAccordionHeader } from '@coreui/react'
import { CAccordionItem } from '@coreui/react'
import { Link } from "react-router-dom";
import './contractAdress.css';
import WriteContract from './Write_contract';
import Copy from './Services';
import ReadContract from './ReadContract';

import TronWebProxy from './__tronweb';
//import { keccak256 } from 'keccak256';
export class ContractCode extends Component {

    static displayName = ContractCode.name;
    constructor(props) {
        super(props);
        this.state = {
            address: props.add, account: {}, loading: true, activeTab: 'Code', readFun: [], writeFun: [],
            testABI: [{ "Inputs": [{ "internalType": "address", "Name": "val", "Type": "address" }], "StateMutability": 3, "Type": 1 }, { "anonymous": false, "Inputs": [{ "Indexed": false, "internalType": "uint256", "Name": "timestamp", "Type": "uint256" }, { "Indexed": false, "internalType": "address", "Name": "nodeId", "Type": "address" }, { "Indexed": false, "internalType": "address", "Name": "parentId", "Type": "address" }], "Name": "LogNewNode", "Type": 3 }, { "anonymous": false, "Inputs": [{ "Indexed": true, "internalType": "bytes32", "Name": "_type", "Type": "bytes32" }, { "Indexed": true, "internalType": "address", "Name": "node", "Type": "address" }, { "Indexed": false, "internalType": "uint256", "Name": "stakeid", "Type": "uint256" }, { "Indexed": false, "internalType": "uint256", "Name": "amount", "Type": "uint256" }, { "Indexed": false, "internalType": "uint256", "Name": "timestamp", "Type": "uint256" }], "Name": "LogStake", "Type": 3 }, { "Inputs": [{ "internalType": "address", "Name": "sponser", "Type": "address" }, { "internalType": "address", "Name": "user", "Type": "address" }], "Name": "Register", "Outputs": [{ "internalType": "uint256", "Name": "position", "Type": "uint256" }], "StateMutability": 3, "Type": 2 }, { "Inputs": [], "Name": "_owner", "Outputs": [{ "internalType": "address", "Name": "", "Type": "address" }], "StateMutability": 2, "Type": 2 }, { "Inputs": [], "Name": "_validator", "Outputs": [{ "internalType": "address", "Name": "", "Type": "address" }], "StateMutability": 2, "Type": 2 }, { "Inputs": [{ "internalType": "uint256", "Name": "p", "Type": "uint256" }], "Name": "addStakePerd", "Outputs": [], "StateMutability": 3, "Type": 2 }, { "Inputs": [{ "internalType": "uint256", "Name": "_perd", "Type": "uint256" }], "Name": "doStake", "Outputs": [], "StateMutability": 4, "Type": 2 }, { "Inputs": [{ "internalType": "uint256", "Name": "sid", "Type": "uint256" }], "Name": "doUnStake", "Outputs": [], "StateMutability": 4, "Type": 2 }, { "Inputs": [{ "internalType": "address", "Name": "user", "Type": "address" }, { "internalType": "uint256", "Name": "index", "Type": "uint256" }], "Name": "getNodeChildAtIndex", "Outputs": [{ "internalType": "address", "Name": "child", "Type": "address" }], "StateMutability": 2, "Type": 2 }, { "Inputs": [{ "internalType": "address", "Name": "user", "Type": "address" }], "Name": "getNodeChildCount", "Outputs": [{ "internalType": "uint256", "Name": "childCount", "Type": "uint256" }], "StateMutability": 2, "Type": 2 }, { "Inputs": [], "Name": "getNodesCount", "Outputs": [{ "internalType": "uint256", "Name": "count", "Type": "uint256" }], "StateMutability": 2, "Type": 2 }, { "Inputs": [{ "internalType": "address", "Name": "node", "Type": "address" }], "Name": "isNode", "Outputs": [{ "internalType": "bool", "Name": "isIndeed", "Type": "bool" }], "StateMutability": 2, "Type": 2 }, { "Inputs": [{ "internalType": "uint256", "Name": "", "Type": "uint256" }], "Name": "nodes", "Outputs": [{ "internalType": "address", "Name": "", "Type": "address" }], "StateMutability": 2, "Type": 2 }, { "Inputs": [{ "internalType": "address", "Name": "", "Type": "address" }], "Name": "ns", "Outputs": [{ "internalType": "address", "Name": "sponser", "Type": "address" }, { "internalType": "uint256", "Name": "createdOn", "Type": "uint256" }, { "internalType": "bool", "Name": "active", "Type": "bool" }, { "internalType": "bool", "Name": "isNode", "Type": "bool" }, { "internalType": "uint256", "Name": "pinx", "Type": "uint256" }, { "internalType": "uint256", "Name": "bus", "Type": "uint256" }], "StateMutability": 2, "Type": 2 }, { "Inputs": [{ "internalType": "uint256", "Name": "p", "Type": "uint256" }], "Name": "removeStakePerd", "Outputs": [], "StateMutability": 3, "Type": 2 }, { "Inputs": [{ "internalType": "uint256", "Name": "e", "Type": "uint256" }], "Name": "setEligibility", "Outputs": [], "StateMutability": 3, "Type": 2 }, { "Inputs": [{ "internalType": "uint256", "Name": "s", "Type": "uint256" }], "Name": "setMinimumStake", "Outputs": [], "StateMutability": 3, "Type": 2 }, { "Inputs": [{ "internalType": "uint256", "Name": "", "Type": "uint256" }], "Name": "sp", "Outputs": [{ "internalType": "bool", "Name": "", "Type": "bool" }], "StateMutability": 2, "Type": 2 }, { "Inputs": [{ "internalType": "uint256", "Name": "", "Type": "uint256" }], "Name": "sst", "Outputs": [{ "internalType": "uint256", "Name": "id", "Type": "uint256" }, { "internalType": "bool", "Name": "active", "Type": "bool" }, { "internalType": "uint256", "Name": "amount", "Type": "uint256" }, { "internalType": "uint256", "Name": "perd", "Type": "uint256" }, { "internalType": "uint256", "Name": "stakedOn", "Type": "uint256" }, { "internalType": "uint256", "Name": "unStakedOn", "Type": "uint256" }, { "internalType": "address", "Name": "requester", "Type": "address" }], "StateMutability": 2, "Type": 2 }]
        };
         
        //var o = keccak256('hello');
    }

    componentDidMount() {
        this.populateData();
    }
    async populateData() {

        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + '/weatherforecast/GetContractDetails?add=' + this.state.address);
        const data = await response.json();
        // console.log(data.Abi.Entrys);
        //debugger;
        //readFun: data.Abi.Entrys.filter((element)
        //readFun: this.state.testABI.filter((element)
        this.setState({
            account: data, address: this.state.address, loading: false,
            readFun: data.Abi.Entrys.filter((element) => {
                if ((element.StateMutability == 1 || element.StateMutability == 2) && element.Type == 2) return element;
            }),
            writeFun: data.Abi.Entrys.filter((element) => {
                if (!(element.StateMutability == 1 || element.StateMutability == 2) && element.Type == 2) return element
            })
        });
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
                                                    <button className={activeTab === 'Code' ? 'active' : ""} onClick={() => this.handleTabChange('Code')}>Code</button>
                                                    <button className={activeTab === 'Read_Contract' ? 'active' : ""} onClick={() => this.handleTabChange('Read_Contract')}>Read Contract</button>
                                                    <button className={activeTab === 'Write_Contract' ? 'active' : ""} onClick={() => this.handleTabChange('Write_Contract')}>Write Contract</button>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="tab-content">
                                            {activeTab === 'Code' && <div><div>
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

                                                </div>
                                            </div>}

                                            {activeTab === 'Read_Contract' && <div className="tab-container">
                                             <CAccordion flush>      
                                                    {this.state.readFun.map((read, index) =>
                                                     <div>
                                                        <div className="my-2">

                                                        </div>

                                                            <CAccordionItem itemKey={(index+1)}>
                                                                <CAccordionHeader>
                                                                    <div class="ant-collapse-header-text">
                                                                    <div class="panel-header-content p-3 " id="Tab-read-F1header">
                                                                            <span id="06a8f8a2">{(index + 1)}. <span>{read.Name}</span>
                                                                                <span></span></span>
                                                                            <div>
                                                                            <svg class="icon tron-icon" aria-hidden="true"><use  href="#icon-icon-copy"></use></svg>
                                                                            <svg class="icon tron-icon tron-ml-12px" aria-hidden="true"><use  href="#icon-icon-link1-copy"></use></svg>
                                                                           </div>
                                                                        </div>
                                                                    </div>  
                                                                </CAccordionHeader>
                                                                <CAccordionBody>
                                                               
                                                                            <div class="ant-collapse-content " >
                                                                                <div class="ant-collapse-content-box">
                                                                                    <div>

                                                                            {/* Input Div */}
                                                                                {read.Inputs.length > 0 && <div>
                                                                                    {read.Inputs.map((input, index) =>
                                                                                        <div class="contract-item"><span>{"_"+input.Name + "_" + input.Type}</span>
                                                                                            <div class="ant-row ant-legacy-form-item css-2i2tap">
                                                                                                <div class="ant-col ant-legacy-form-item-control-wrapper css-2i2tap">
                                                                                                    <div class="ant-legacy-form-item-control has-success">
                                                                                                        <span class="ant-legacy-form-item-children">
                                                                                                            <input autocomplete="off" placeholder={"_" + input.Name + "_" + input.Type} id="contract_info_submitValues[0]" class="ant-input" type="text" style={{ borderRadius: '10PX' }} /></span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                            }

                                                                            {/* Call & Result Div */}
                                                                            <div>
                                                                                    {read.Inputs.length>0 && <div class="d-flex"><div class="search-btn">Call</div></div>}

                                                                                    {/* Result Div */}
                                                                                    {read.Outputs.length > 0 && <div>
                                                                                        {read.Outputs.map((output, index) =>

                                                                                             <div class="d-flex result-item">
                                                                                                <img src="/assets/img/resulticon-new.34141ca376117e1eba6ada52959a650e.svg" />
                                                                                                {output.Type.slice(-2) == '[]' &&
                                                                                                    <span class="inline-block string-content2"><i class="type">{output.Type}</i><ul id=""></ul></span>}
                                                                                                {!(output.Type.slice(-2) == '[]') &&
                                                                                                    <span class="inline-block string-content2">{ }<i class="type">{output.Type}</i></span>}
                                                                                             </div>

                                                                                        )}
                                                                                    </div>
                                                                                    }
                                                                                   
                                                                                    </div>


                                                                                </div>
                                                                                </div>
                                                                                </div>


                                                                </CAccordionBody>
                                                            </CAccordionItem>
                                                          
                                                        </div>
                                                    )}
                                                </CAccordion>
                                            </div>}
                                            {activeTab === 'Write_Contract' && <div className="tab-container">
                                                <CAccordion flush>
                                                    {this.state.writeFun.map((write, index) =>
                                                        <div>
                                                            <div className="my-2">

                                                            </div>

                                                            <CAccordionItem itemKey={(index + 1)}>
                                                                <CAccordionHeader>
                                                                    <div class="ant-collapse-header-text">
                                                                        <div class="panel-header-content p-3 " id="Tab-read-F1header">
                                                                            <span id="06a8f8a2">{(index + 1)}. <span>{write.Name}</span>
                                                                                <span></span></span>
                                                                            <div>
                                                                                <svg class="icon tron-icon" aria-hidden="true"><use href="#icon-icon-copy"></use></svg>
                                                                                <svg class="icon tron-icon tron-ml-12px" aria-hidden="true"><use href="#icon-icon-link1-copy"></use></svg>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </CAccordionHeader>
                                                                <CAccordionBody>

                                                                    <div class="ant-collapse-content " >
                                                                        <div class="ant-collapse-content-box">
                                                                            <div>

                                                                                {/* Input Div */}
                                                                                {write.Inputs.length > 0 && <div>
                                                                                    {write.Inputs.map((input, index) =>
                                                                                        <div class="contract-item"><span>{"_" + input.Name + "_" + input.Type}</span>
                                                                                            <div class="ant-row ant-legacy-form-item css-2i2tap">
                                                                                                <div class="ant-col ant-legacy-form-item-control-wrapper css-2i2tap">
                                                                                                    <div class="ant-legacy-form-item-control has-success">
                                                                                                        <span class="ant-legacy-form-item-children">
                                                                                                            <input autocomplete="off" placeholder={"_" + input.Name + "_" + input.Type} id="contract_info_submitValues[0]" class="ant-input" type="text" style={{ borderRadius: '10PX' }} /></span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                                }

                                                                                {/* Call & Result Div */}
                                                                                <div>
                                                                                    <div class="d-flex"><div class="search-btn">Call</div></div>

                                                                                    {/* Result Div */}
                                                                                    {write.Outputs.length > 0 && <div>
                                                                                        {write.Outputs.map((output, index) =>

                                                                                            <div class="d-flex result-item">
                                                                                                <img src="/assets/img/resulticon-new.34141ca376117e1eba6ada52959a650e.svg" />
                                                                                                {output.Type.slice(-2) == '[]' &&
                                                                                                    <span class="inline-block string-content2"><i class="type">{output.Type}</i><ul id=""></ul></span>}
                                                                                                {!(output.Type.slice(-2) == '[]') &&
                                                                                                    <span class="inline-block string-content2">{ }<i class="type">{output.Type}</i></span>}
                                                                                            </div>

                                                                                        )}
                                                                                    </div>
                                                                                    }

                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                </CAccordionBody>
                                                            </CAccordionItem>

                                                        </div>
                                                    )}
                                                </CAccordion>
                                            </div>}
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
