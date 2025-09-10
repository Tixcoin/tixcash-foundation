import React, { Component } from 'react';

export class Staking extends Component {
    constructor(props) {
        super();
        this.state = {
            totaluser: null,
            vipuser: null,
            whitelistuser: null,
            totalstakedvalue:null,
            stakingincome: null,
            referralincome: null,
            apy: null,
            inputValue: null,
            calcValue: null,
            finalValue:null


        }

    }

  
    componentDidMount() {

        // this.populateData();


        fetch('https://explorerapi.tixcash.org/api/V3/getglobaldata', {
            method: 'GET',
            mode: 'cors',
           
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ totaluser: data.data.totaluser, vipuser: data.data.vipuser, whitelistuser: data.data.whitelistuser, totalstakedvalue: data.data.totalstakedvalue, stakingincome: data.data.stakingincome, referralincome: data.data.referralincome, apy: data.data.apy });
                
            })
            .catch((error) => {
                console.error('Error fetching price:', error);
            });



        


    }
    handleinput=(e)=> {
    this.setState({ inputValue: e.target.value })
    }

    handleCal = (e) => {
        console.log(e.target.value)
        this.setState({ calcValue: e.target.value })
       
    }

    render() {
        const { totaluser, stakingincome, totalstakedvalue, apy } = this.state;
        return (
            <div id="mainContent">
                <div class="staking-home-container" style={{ background:'transparent' }}>
                    <div class="container staking-introduce-container en staking-not-connect-introduce-container row">
                        <div class="introduce-wrap col-md-6">
                            <div class="title">
                                <span>TXH staking</span>
                            </div>
                            <div class="desc">Using the Tixcash Wallet, you have the opportunity to engage in Staking and the Referral Program, enabling you to boost your income while retaining ownership of your assets. </div>
                           
                        </div>
                        <div class="introduce-wrap col-md-6">
                            <img src="assets/img/staking.png" alt="staking" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div class="trx-overview">
                        <div class="trx-overview-list container">
                            <div class="trx-item">
                                <span class="title">Total User</span>
                                <span class="trx-num font-num-700-30">{totaluser}</span>
                            </div>
                            {/*<div class="trx-item">*/}
                            {/*    <span class="title">VIP User</span>*/}
                            {/*    <span class="trx-num font-num-700-30">{vipuser}</span>*/}
                            {/*</div>*/}
                            {/*<div class="trx-item">*/}
                            {/*    <span class="title">Whitelisted User</span>*/}
                            {/*    <span class="trx-num font-num-700-30">{whitelistuser}</span>*/}
                            {/*</div>*/}
                            <div class="trx-item">
                                <span class="title">Total Staked Value
                                </span>
                                <span class="trx-num font-num-700-30">{totalstakedvalue}</span>
                            </div>
                            <div class="trx-item">
                                        <span class="title">Staking Income Distributed
                                   </span>
                                      <span class="trx-num font-num-700-30"> {stakingincome}</span>
                            </div>
                            <div class="trx-item">
                                        <span class="title">Staking Rate
                                   </span>
                                <span class="trx-num font-num-700-30"> {Math.round((totalstakedvalue / 100000000000 * 100) * 100) / 100} {'%'} </span>
                             </div><div class="trx-item">
                                        <span class="title">Highest APY
                                </span>
                                {apy && <span class="trx-num font-num-700-30">{apy} {'%'} </span>}
                              
                             </div>
                            {/*<div class="trx-item">*/}
                            {/*    <span class="title">Referral Income Distributed*/}
                            {/*    </span>*/}
                            {/*    <span class="trx-num font-num-700-30">{referralincome}</span>*/}
                            {/*</div>*/}
                        </div>
                        
                    </div>

                    <div class="container calcu-pledge-income-wrap">
                        <div class="font-sub-title">Calculate Your Staking Rewards</div>
                        <div class="pledge-income-content"><div class="content-top d-flex">
                            <div class="content-top-left">
                                <span class="title">I want to stake</span>
                                <div data-observe="true" class="input-container d-flex flex-column align-items-start justify-content-between flex-1">
                                    <span class="ant-input-affix-wrapper">
                                        <input onChange={this.handleinput} autocomplete="off" placeholder="Enter the amount you want to stake" class="ant-input" type="number" value={this.state.inputValue} />
                                        <span class="ant-input-suffix"><div class="trx-suffix">
                                            <img src="assets/img/fav_logo.png" width="20" alt="icon" /> TXH</div></span></span>
                                    <div class="income-wrap"><span class="text">Est. Rewards </span>
                                        <span class="number">{(this.state.inputValue * this.state.calcValue * apy)/100}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="content-top-chart-container">
                                <div class="title-wrap"><span class="main-title">Highest APY</span>
                                   
                                    {apy && <span class="sub-title">{apy} {'%'} </span>}
                                </div>
                                <div class="img-container img-container-2">
                                    <div class="img-item  img-item-active"></div>
                                    <div class="img-item img-item-selected img-item-active"></div>
                                    <div class="img-item  "></div><div class="img-item  ">
                                    </div><div class="img-item  "></div></div>
                                <div class="btn-container"><div class="btn-item">
                                    <input type="button" value="1" onClick={this.handleCal} class="apy-btn " />Y
                                </div>
                                    <div class="btn-item">
                                        <input type="button" value="2" onClick={this.handleCal} class="apy-btn " />Y
                                    </div>
                                    <div class="btn-item">
                                        <input type="button" value="3" onClick={this.handleCal} class="apy-btn " />Y</div>
                                    <div class="btn-item"><input  type="button" value="4" onClick={this.handleCal} class="apy-btn " />Y</div>
                                    <div class="btn-item"> <input type="button"  value="5" onClick={this.handleCal} class="apy-btn " />Y </div>
                                </div></div>
                        </div>
                            <div class="content-desc">* The projected TXH rewards are determined by the chosen staking duration and the entered TXH amount. Please note that the actual APY and TXH rewards may differ. </div>
                            <a href="https://www.tixcash.org/Apk/tixcash.apk" target="_self" class="content-btn btn-common btn-default">Stake Now &gt;</a>
                        </div>
                    </div>
                  
                </div>

                
            </div>
    )
  }
}