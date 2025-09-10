import React, { Component } from 'react';
export class ContractRead extends Component {
    constructor(props) {
        super(props);
        this.state = { ABI: props.ABIEntries };
    }


    render() {
        return (

            <div className="tab-container">
                <div>
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
            </div>



        );
    }
}

export default ContractRead;










