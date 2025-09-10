import React, { Component } from 'react';
import { Link } from "react-router-dom";

import {
    getCompilerVersions,
    solidityCompiler
} from '@agnostico/browser-solidity-compiler';


//https://github.com/rexdavinci/browser-solidity-compiler/blob/example/src/App.tsx

export class ContractVerification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //address: 'TK5qKN9xJoLfCzZPG6Mj642WQtvbiHCTMx',
            address: window.location.href.split('/')[4] && window.location.href.split('/')[4].split('#')[0],
            name: '',
            compiler: '',
            license: '',
            version: '',
            optimizer: 0,
            optimization:false,
            runs: 0,
            setting: '',
            filedata: new FormData(),
            code: '',
            usingVersion: '',
            solcVersions: null,
            releases: {},
            content: `contract C { 
                          function f() public { } 
                        }

                        contract D {
                          function g() public { }
                        }`,
            optimizeOption: {
                optimize: false,
                runs: 200,
            },
            published: false,
            err: null
        };
    }
  
    componentDidMount() {
        this.loadVersions()
      //  console.log(this.state);
        // this.populateData();
    }

    propSetState(key, value) {

        this.setState({
            name: key === "name" ? value : this.state.name,
            compiler: key === "compiler" ? value : this.state.compiler,
            license: key === "license" ? value : this.state.license,
            version: key === "version" ? value : this.state.version,
            optimization: key === "optimization" ? value : this.state.optimization,
            runs: key === "runs" ? value : this.state.runs,
            setting: key === "setting" ? value : this.state.setting,
            code: key === "code" ? value : this.state.code,
            filedata: key === "filedata" ? value : this.state.filedata,
            published: key === "published" ? value : this.state.published,
            err: key === "err" ? value : this.state.err
            
        });
    }
     
    async populateData() {
        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + '/weatherforecast/GetContractByAddress?add=' + this.state.address);
        const data = await response.json();
       // console.log(data[0]);
        var d = data[0];
        this.setState({
            name: d.acctName,
            compiler: d.version,
            license: d.license,
            version: d.version,
            optimization: d.optimization,
            runs: d.runs,
            setting: d.setting,
            code: d.code,
            filedata: this.state.filedata
        });
    }

    handleFileUpload = (event) => {
        if (!this.state.filedata.has("filedata"))
            this.state.filedata.append("filedata", event.target.files[0]);
        else
            this.state.filedata.set("filedata", event.target.files[0]);

        const reader = new FileReader();
        reader.onload = async (event) => {

            const text = (event.target.result);
            var lines = text.split('\n');
            var oLines  = [];
            //console.log(text)
            for (var line = 0; line < lines.length; line++) {
                var splits = lines[line].split(';');
                for (var split = 0; split < splits.length; split++)
                    if (splits[split].indexOf('/') < 0 && splits[split].indexOf('*') < 0)
                        oLines.push(lines[line]);
            }
            var t = oLines.join("\n");
            this.setState({ code: oLines.join('\n') });
        };

        const code = reader.readAsText(event.target.files[0]) 
        this.propSetState('filedata', this.state.filedata); 

    }

    setName = (value) => {
        this.propSetState('name', value);
    }

    setCompilerVersion = (value) => {
        this.propSetState('version', this.state.releases[value]);
    }

    setOptimization = (value) => {
        this.propSetState('optimization', value=='1');
    }

    setRuns = (value) => {
        this.propSetState('runs', parseInt(value));
    }

    setLicense = (value) => {
        this.propSetState('license', value);
    }

    validate = async () => {
        if (!this.state.address || !this.state.filedata || !this.state.name || !this.state.license || !this.state.version)
        { this.propSetState('err', 'Error: Verification failed. Please provide the correct Inputs.'); return false; }
        this.propSetState('err', null)
        return true;
    }

    loadVersions = async () => {
        const { releases, latestRelease, builds } = await getCompilerVersions();
        
        this.setState({
            releases: releases,
            solcVersions: {
                releases,
                latestRelease,
                builds: builds.map(({ version, path }) => ({ [version]: path })),
            }, usingVersion: releases[latestRelease]
        });
    };

    //compile = async () => {

    //    let options = this.state.optimization ? {
    //        optimizer = {
    //            enabled: this.state.optimization,
    //            runs: this.state.runs
    //        }
    //    } : {};

    //    return solidityCompiler({
    //        version: `https://binaries.soliditylang.org/bin/${this.state.usingVersion}`,
    //        contractBody: this.state.code.trim(),
    //        options
    //    });

    //}


    handleSubmit = async (event) => {
        var _valid = await this.validate();
        if (!_valid) return;

        debugger;

        event.preventDefault();
        let compiled;

        let options = {}
        if (this.state.optimization) {
            options.optimizer = {
                enabled: this.state.optimization,
                runs: this.state.runs,
            };
        }

        let trimContent = this.state.code.trim();
        const contractsAvailable = [...trimContent.matchAll(/contract/g)];
        const contractNames = [];
        if (contractsAvailable.length > 0) {
            

            let index = 0;

            while (index < contractsAvailable.length) {
                // trimContent = trimContent.slice(index);
                const fromContract = trimContent.slice(contractsAvailable[index].index);
                const contractSelector = fromContract.slice(
                    8,
                    fromContract.indexOf('{')
                );
                contractNames.push(contractSelector.trim());
                index++;
            }

            //var compiled1 = solidityCompiler({
            //    version: `https://binaries.soliditylang.org/bin/${this.state.usingVersion}`,
            //    contractBody: trimContent,
            //    options
            //});

            //compiled = solidityCompiler({
            //    version: `https://binaries.soliditylang.org/bin/${this.state.usingVersion}`,
            //    contractBody: trimContent,
            //    options
            //}); 

            //solidityCompiler({
            //    version: 'https://binaries.soliditylang.org/bin/'+this.state.usingVersion,
            //    contractBody: trimContent,
            //    options
            //}).then(res => this.submitData(contractNames, res)).catch(err => this.submitData(contractNames, err));
            this.submitData(contractNames, '{}');
            //console.log(compiled);
        }

        //setCompiledContract(() => compiled);
      
    }

    submitData = async (contractNames,compiled) => {

        // create a new FormData object and append the file to it
        const file = new FormData();
        file.append("name", this.state.name);
        file.append("version", this.state.version);
        file.append("address", this.state.address);
        file.append("compiler", this.state.compiler);
        file.append("license", this.state.license);
        file.append("compiled", JSON.stringify(compiled));
        file.append("contracts", contractNames.join());
        file.append("optimization", this.state.optimization);
        file.append("runs", this.state.runs);
        file.append("setting", this.state.setting);
        // file.append("filedata", this.state.filedata);
        //file.append("code", this.state.code);

        file.append("file", this.state.filedata.get("filedata"));
        // file.append("someData", JSON.stringify(this.state));

        // var bodydata = JSON.stringify(this.state);
        //debugger;
        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + "/weatherforecast/SubmitContractVerify", {
            method: 'POST',

            body: file
        });
        // debugger;
        this.propSetState('published', await response.json());
 }
    render() {
        return (
            <div id="mainContent">
           
                <main className="container header-overlap token_black tokencreated">
                    <div className="tron-feedback-container false false">
                        <svg className="icon tron-icon tron-icon-like" aria-hidden="true">
                            <use xlinkHref="#icon-feedback"></use>
                        </svg>
                        <span className="tron-feedback-text">
                            <span>Is this page helpful?</span>
                            <svg className="icon tron-icon tron-icon-close-feedback" aria-hidden="true">
                                <use xlinkHref="#icon-a-icon-close"></use>
                            </svg>
                        </span>
                       
                    </div>
                    <div className="row">
                        <h2 className="text-left"> Contract Verification</h2> 
                        <div className="col-sm-12">
                            {/* Contract Verification Content */}
                            {this.state.published &&
                                <div className="compile-text-container ">
                                    <div className="compile-text">
                                        <div className="isExpandWrapper d-flex  " style={{ flexDirection: 'column', padding: '10PX', background: 'darkgreen', color: 'white' }}>
                                            <div>

                                                <p style={{ color: 'white' }}> Contracts <Link to={'/contract/'+this.state.address} className="text-capitalize" >
                                                    <span>{this.state.address}</span>
                                                </Link> has been verified successfully. </p>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            }
                            
                            {!this.state.published &&
                            <div className="compile-text-container">
                                <div className="compile-text">
                                    <div className="isExpandWrapper d-flex " style={{ flexDirection: 'column' }}>
                                        <div>

                                            <p ><span>1</span> Contract verification is the matching of the smart contract code you write with the smart contract  </p>
                                            <p>code posted on the blockchain network to check the authenticity and transparency of the smart contract. </p>
                                            <p>You can validate your smart contract on Tronscan by uploading the smart contract file.</p>
                                        </div>
                                        <div>   
                                            <p style={{ marginTop: '8px', width: '100%' }}><strong>2.</strong> Tronscan respects the ownership of the developers (or the owner) of the source code.</p>
                                            <p> We are morally as well as legally obligated to ensure that the code will only be used within the service we provide.</p>
                                            <p style={{ marginTop: '8px', width: '100%' }}><strong>3.</strong> Please go to <strong>Source Code</strong> <a href="#/contracts/source-code-usage-terms">Terms of Use</a> for specific terms.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            }

                            {!this.state.published && this.state.err &&
                                <div className="compile-text-container ">
                                    <div className="compile-text">
                                        <div className="isExpandWrapper d-flex  " style={{ flexDirection: 'column', padding: '10PX', background: 'red', color: 'white' }}>
                                            <div>
                                                <span>{this.state.err}</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            }
                            {/* Contract Verification Form */}
                            {!this.state.published &&
                                <div className="w-100 verify-contranct">
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={this.handleSubmit} className="ant-legacy-form ant-legacy-form-horizontal css-2i2tap">
                                                <form className="ant-legacy-form ant-legacy-form-horizontal css-2i2tap">
                                                    <div className="ant-row ant-row-space-between p-3" style={{ marginLeft: '-12px', marginRight: '-12px' }}>
                                                        <div className="ant-col ant-col-11" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
                                                            <div className="ant-row ant-legacy-form-item css-2i2tap">
                                                                <div className="ant-col ant-col-8 ant-legacy-form-item-label css-2i2tap">
                                                                    <label htmlFor="contract_verify_contractAddress" className="" title="">
                                                                        <span>Contract Address</span>
                                                                    </label>
                                                                </div>
                                                                <div className="ant-col ant-col-16 ant-legacy-form-item-control-wrapper css-2i2tap">
                                                                    <div className="ant-legacy-form-item-control has-success">
                                                                        <span className="ant-legacy-form-item-children">
                                                                            <input
                                                                                placeholder="Contract Address"
                                                                                id="contract_verify_contractAddress"
                                                                                className="ant-input"
                                                                                type="text"
                                                                                defaultValue={this.state.address}
                                                                            />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div><div className="ant-col ant-col-11" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
                                                            <div className="ant-row ant-legacy-form-item css-2i2tap">
                                                                <div className="ant-col ant-col-8 ant-legacy-form-item-label css-2i2tap">
                                                                    <label htmlFor="contract_verify_contractAddress" className="" title="">
                                                                        <span>Contract Name</span>
                                                                    </label>
                                                                </div>
                                                                <div className="ant-col ant-col-16 ant-legacy-form-item-control-wrapper css-2i2tap">
                                                                    <div className="ant-legacy-form-item-control has-success">
                                                                        <span className="ant-legacy-form-item-children">
                                                                            <input
                                                                                placeholder="Please enter your Contract Name"
                                                                                id="contract_verify_contractName"
                                                                                className="ant-input"
                                                                                type="text"
                                                                                onChange={(e) => this.setName(e.target.value)}
                                                                                defaultValue={this.state.name}
                                                                            />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div><div className="ant-col ant-col-11" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
                                                            <div className="ant-row ant-legacy-form-item css-2i2tap">
                                                                <div className="ant-col ant-col-8 ant-legacy-form-item-label css-2i2tap">
                                                                    <label htmlFor="contract_verify_contractAddress" className="" title="">
                                                                        <span>Compiler</span>
                                                                    </label>
                                                                </div>
                                                                <div className="ant-col ant-col-16 ant-legacy-form-item-control-wrapper css-2i2tap">
                                                                    <div className="ant-legacy-form-item-control has-success">
                                                                        <span className="ant-legacy-form-item-children">
                                                                            <select type="select"
                                                                                id="contract_verify_CompilerVersion"
                                                                                autocomplete="off"
                                                                                className="ant-input"
                                                                                onChange={(e) => this.setCompilerVersion(e.target.value)}
                                                                                
                                                                                defaultValue={this.state.version}                                                                            >
                                                                                <option value=''></option>;
                                                                                {Object.entries(this.state.releases).length > 0 &&
                                                                                    Object.entries(this.state.releases).map(([key, value]) => {
                                                                                        //        return <div key={key}>{value[0]}</div>;
                                                                                        return <option value={key} >{value}</option>
                                                                                    })}

                                                                            </select>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div><div className="ant-col ant-col-11" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
                                                            <div className="ant-row ant-legacy-form-item css-2i2tap">
                                                                <div className="ant-col ant-col-8 ant-legacy-form-item-label css-2i2tap">
                                                                    <label htmlFor="contract_verify_contractAddress" className="" title="">
                                                                        <span>licence</span>
                                                                    </label>
                                                                </div>
                                                                <div className="ant-col ant-col-16 ant-legacy-form-item-control-wrapper css-2i2tap">
                                                                    <div className="ant-legacy-form-item-control has-success">
                                                                        <span className="ant-legacy-form-item-children">
                                                                            <select type="select"
                                                                                id="contract_verify_license"
                                                                                autocomplete="off"
                                                                                className="ant-input"
                                                                                onChange={(e) => this.setLicense(e.target.value)}
                                                                                defaultValue={this.state.license}
                                                                            >
                                                                                <option value=''></option>;
                                                                                <option value='NoLicense'>No License(None)</option>;
                                                                                <option value='Unlicense'>The Unlicense(Unlicense)</option>;
                                                                                <option value='MIT'>MIT License(MIT)</option>;
                                                                                <option value='GNUGPLv2'>GNU General Public License v2.0(GNU GPLv2)</option>;
                                                                                <option value='GNUGPLv3'>GNU General Public License v3.0(GNU GPLv3)</option>;
                                                                                <option value='GNULGPLv21'>GNU Lesser General Public License v2.1(GNU LGPLv2.1)</option>;
                                                                                <option value='GNULGPLv3'>GNU Lesser General Public License v3.0(GNU LGPLv3)</option>;
                                                                                <option value='BSD2Clause'>BSD 2-clause “Simplified” license(BSD-2-Clause)</option>;
                                                                                <option value='BSD3Clause'>BSD 3-clause “New” Or “Revised” license(BSD-3-Clause)</option>;


                                                                            </select>

                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div><div className="ant-col ant-col-11" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
                                                            <div className="ant-row ant-legacy-form-item css-2i2tap">
                                                                <div className="ant-col ant-col-8 ant-legacy-form-item-label css-2i2tap">
                                                                    <label htmlFor="contract_verify_contractAddress" className="" title="">
                                                                        <span>Optimization</span>
                                                                    </label>
                                                                </div>
                                                                <div className="ant-col ant-col-16 ant-legacy-form-item-control-wrapper css-2i2tap">
                                                                    <div className="ant-legacy-form-item-control has-success">
                                                                        <span className="ant-legacy-form-item-children">
                                                                            <select type="select"
                                                                                id="contract_verify_optimizer"
                                                                                autocomplete="off"
                                                                                className="ant-input"
                                                                                onChange={(e) => this.setOptimization(e.target.value)}
                                                                                value={this.state.optimization ? "1" : "0"}>
                                                                                <option value="0" >No</option>
                                                                                <option value="1" >Yes</option>
                                                                            </select>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div><div className="ant-col ant-col-11" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
                                                            <div className="ant-row ant-legacy-form-item css-2i2tap">
                                                                <div className="ant-col ant-col-8 ant-legacy-form-item-label css-2i2tap">
                                                                    <label htmlFor="contract_verify_contractAddress" className="" title="">
                                                                        <span>Runs</span>
                                                                    </label>
                                                                </div>
                                                                <div className="ant-col ant-col-16 ant-legacy-form-item-control-wrapper css-2i2tap">
                                                                    <div className="ant-legacy-form-item-control has-success">
                                                                        <span className="ant-legacy-form-item-children">
                                                                            <input
                                                                                placeholder=""
                                                                                id="contract_verify_runs"
                                                                                className="ant-input"
                                                                                type="number"
                                                                                onChange={(e) => this.setRuns(e.target.value)}
                                                                                defaultValue={this.state.runs}
                                                                            />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Repeat the same structure for other input fields */}
                                                    </div>
                                                    <div className="card-body no-select-contract" style={{ padding: '0.8rem 0px 0.8rem' }}>
                                                        <div className="row">
                                                            <img src="/assets/img/upload_icon.png" alt="Upload icon" />
                                                        </div>
                                                        <div className="row p-3 mb-2 no-select-contract" style={{ marginTop: '-0.5em' }}>
                                                            <span className="ant-upload-wrapper">
                                                                <div className="ant-upload ant-upload-select">
                                                                    <div tabIndex="0" className="ant-upload" role="button">
                                                                        <input type="file" id="fileInput" accept=".sol"
                                                                            onChange={this.handleFileUpload}
                                                                            style={{ opacity: '0', display: 'none' }}
                                                                        />
                                                                        <label for="fileInput" className="ant-btn ant-btn-default">
                                                                            {/*onClick={(e) => this.handleSubmit(e)}*/}
                                                                            Select Contract File(s)
                                                                        </label>

                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="" >

                                                        <div className="row p-3 mb-2 no-select-contract" >
                                                            <span className="ant-upload-wrapper">
                                                                <div className="ant-upload ant-upload-select">
                                                                    <div tabIndex="0" className="ant-upload" role="button">
                                                                        <input type="button" id="btnUpload" className="ant-btn ant-btn-default upload-button"
                                                                            onClick={(e) => this.handleSubmit(e)}
                                                                            value="Publish Contract"
                                                                        />

                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </form>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}