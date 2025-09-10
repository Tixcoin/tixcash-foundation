<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="index.html.cs" Inherits="_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">


    <div id="mainContent">
        <main class="home pb-0 home-page notranslate">
            <div class="position-relative d-flex  mx-auto flex-column">
                <div class="container pc-home-splash p-0 p-md-3">
                    <div>
                        <div class="panel-group-wrapper pc-panel-group-wrapper">
                            <div class="panel-group-mainnet">
                                <div class="panel-group-left">
                                    <section class="data-wrapper">
                                        <div class="card-body row home-stats mainnet-data">
                                            <section class="data-overview">
                                                <div class="data-item">
                                                    <a href="#/blockchain/accounts">
                                                        <div class="data-item-left">
                                                            <img src="assets/img/account_icon_new.png" />
                                                            <div class="data-item-center">
                                                                <p class="m-0 panel-title"><span>Total Accounts</span></p>
                                                                <h2 class="m-0 panel-number"><span>2,163,995</span></h2>
                                                            </div>
                                                        </div>
                                                        <div class="data-item-right">
                                                            <p class="m-0 right-24h"><span>24h</span></p>
                                                            <p class="m-0 number"><span class="green">+162,386</span></p>
                                                        </div>
                                                    </a>
                                                </div>
                                             
                                                <div class="data-item">
                                                    <a href="#/blockchain/transactions">
                                                        <div class="data-item-left">
                                                            <img src="assets/img/transition_icon_new.png"><div class="data-item-center">
                                                                <p class="m-0 panel-title"><span>Total Txns</span></p>
                                                                <h2 class="m-0 panel-number"><span>7,907,328</span></h2>
                                                            </div>
                                                        </div>
                                                        <div class="data-item-right">
                                                            <p class="m-0 right-24h"><span>24h</span></p>
                                                            <p class="m-0 number"><span class="green">+4,657,152</span></p>
                                                        </div>
                                                    </a>
                                                </div> 
<div class="data-item">
       <a href="#/data/charts/defi/tvl">
           <div class="data-item-left">
               <img src="assets/img/tvl_icon_new.png"><div class="data-item-center">
                   <p class="m-0 panel-title"><span>Total Contract</span></p>
                   <h2 class="m-0 panel-number">$<span>2,963,123</span></h2>
               </div>
           </div>
           <div class="data-item-right">
               <p class="m-0 right-24h"><span>24h</span></p>
               <p class="m-0 number"><span class="green">+0.15%</span></p>
           </div>
       </a>
   </div>



                                                <div class="data-item">
                                                    <a href="#/data/charts/tokens/volume-of-core-tokens">
                                                        <div class="data-item-left">
                                                            <img src="assets/img/transferToken_icon_new.png">
                                                            <div class="data-item-center">
                                                                <p class="m-0 panel-title"><span>Latest Block</span></p>
                                                                <h2 class="m-0 panel-number">$<span>48,647,388</span></h2>
                                                            </div>
                                                        </div>
                                                        <div class="data-item-right">
                                                            <p class="m-0 right-24h"><span>24h</span></p>
                                                            <p class="m-0 number">
                                                                <span class="green">+$1,082,209</span>
                                                            </p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </section>
                                            <section class="bottom-data-overview bottom-data-overview-en">
                                                <div class="bottom-data-overview-item align-items-center">
                                                    <a href="#!" class="tron-cursor-default">
                                                        <section class="d-flex align-items-center">
                                                            <span class="title">
                                                                <span>Current/Max TPS</span></span>
                                                            <span class="number">
                                                                <span><span>56</span></span>/<span><span>1,035</span></span></span>
                                                        </section>
                                                    </a>
                                                </div>
                                                <div class="bottom-data-overview-item align-items-center">
                                                    <a href="#!" class="tron-cursor-default">
                                                        <section class="d-flex align-items-center">
                                                            <span class="title">
                                                                <span>Nodes</span></span>
                                                            <span class="number"><span>7,536</span> </span>
                                                        </section>
                                                    </a>
                                                </div>
                                                <div class="bottom-data-overview-item align-items-center">
                                                    <a href="#!" class="tron-cursor-default">
                                                        <section class="d-flex align-items-center">
                                                            <span class="title"><span>Total Contracts</span></span>
                                                            <span class="number"><span>3,338,388</span> </span>
                                                        </section>
                                                    </a>
                                                </div>
                                                <div class="bottom-data-overview-item align-items-center">
                                                    <a href="#!" class="tron-cursor-default">
                                                        <section class="d-flex align-items-center">
                                                            <span class="title"><span>Total Tokens</span></span>
                                                            <span class="number"><span>84,575</span> </span>
                                                        </section>
                                                    </a>
                                                </div>
                                            </section>
                                        </div>
                                    </section>
                                </div>
                                <div class="panel-group-right">
                                    <section class="price-wrapper">
                                        <div class="trxgroup-wrapper price-content">
                                            <div class="trxgroup-wrapper-container">
                                                <a href="#/data/charts/trx/price">
                                                    <div class="trxgroup-header">
                                                        <div class="trxgroup-logo">
                                                            <div class="img">
                                                                <img src="assets/img/favicon.png" class="icon tron-icon tronImg" />
                                                            </div>
                                                            <div class="trxgroup-header-content">
                                                                <div class="title">TIX</div>
                                                                <div class="trxgroup-price">
                                                                    <span class="price-number">$0.819</span>
                                                                    <span class="trxgroup-wave up"><span>+</span>
                                                                        <span>1.16%</span>
                                                                        <span class="arrow-img">
                                                                            <i class="iconfont tron-font-size-10px icon-up"></i></span></span>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div class="trxgroup-time">
                                                            <div>
                                                                <div class="market-item">
                                                                    <span class="trxgroup-title">Market Cap</span>
                                                                    <span class="trxgroup-number">$9.6b</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div class="market-item">
                                                                    <span class="trxgroup-title">Volume (24h)</span>
                                                                    <span class="trxgroup-number">$227.5m</span>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div class="chart-content">
                                                            <div id="chartId_home_price" class="echarts-dom-class" _echarts_instance_="ec_1705556095510" style="user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); position: relative;">
                                                                <div style="position: relative; height: 55px; padding: 0px; margin: 0px; border-width: 0px;">
                                                                    <canvas data-zr-dom-id="zr_0" height="55" style="position: absolute; left: 0px; top: 0px; height: 55px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>


                                                                </div>
                                                                <div class="echart-tooltip-wrapper"></div>
                                                                <div id="chartDiv" style="max-width: 100%; height: 350px; margin: 0px auto"></div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </a>
                                                <div class="trxgroup-bottom-content">
                                                    <div class="trxgroup-bt-content">
                                                        <div class="trxgroup-chart">
                                                            <div id="chartId_home_supply" class="echarts-dom-class" _echarts_instance_="ec_1705556095503" style="user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); position: relative;">
                                                                <div style="position: relative; height: 104px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
                                                                    <canvas data-zr-dom-id="zr_0" height="104" style="position: absolute; left: 0px; top: 0px; height: 104px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
                                                                </div>
                                                                <script>
</script>
                                                                <%-- <div class="echart-tooltip-wrapper echarts-tooltip-new" style="position: absolute; display: block; border-style: solid; white-space: nowrap; z-index: 9999999; box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 10px; background-color: rgb(255, 255, 255); border-width: 1px; border-radius: 4px; color: rgb(102, 102, 102); font: 14px / 21px; padding: 10px; top: 0px; left: 0px; transform: translate3d(371px, 0px, 0px); border-color: rgb(255, 255, 255); pointer-events: none; visibility: hidden; opacity: 0;"
          <div class="tooltip-date tron-font-size-14px flex-between">
            2024-01-10 (UTC)
          </div>
          <div class="divider"></div>
          <div class="tooltip-content tron-font-size-12px flex-between">
            <div class="flex-start">
              <i style="background-color:#5D7FEB"></i>
              <span class="tron-font-size-12px tron-mr-15px font-highlight ">TIX Supply: </span>
            </div>
            <span class="chart-tooltip-div-item-number tron-font-size-12px tron-ml-4px font-highlight">
              88,260,741,241 TIX
            </span>
          </div>
          <div class="tooltip-content tron-font-size-12px flex-between">
            <div class="flex-start">
              <i></i>
              <span class="tron-font-size-12px tron-mr-15px">TIX Net Increase:</span>
            </div>
            <section>
              <span style="text-shadow: none; color: #B73E31" class="tron-font-size-12px">-7,728,275 TIX</span>
            </section>
          </div>
          <div class="tooltip-content tron-font-size-12px flex-between">
            <div class="flex-start">
              <i></i>
              <span class="tron-font-size-12px tron-mr-15px">Daily Supply Change:</span>
            </div>
            <section>
              <span style="text-shadow: none; color: #B73E31" class="tron-font-size-12px">-0.0088 %</span>
            </section>
          </div>
        </div>--%>
                                                            </div>
                                                            <div class="trxgroup-supply-data">
                                                                <span class="trxgroup-title"><span>Supply Trend (15 Days)</span></span>
                                                                <div class="trxgroup-content-number TIXgroup-content-number-red">-3.98%<span style="color: rgb(115, 120, 123);">/y</span></div>
                                                            </div>

                                                        </div>
                                                        <div class="trxgroup-freeze-content">
                                                            <div class="trxgroup-freeze-data">
                                                                <div class="trxgroup-title"><span>Supply</span></div>
                                                                <div class="trxgroup-content-number">
                                                                    <a href="#/data/charts/trx/supply">
                                                                        <span>88,214,232,680</span></a>
                                                                </div>
                                                            </div>
                                                            <div class="trxgroup-freeze-data">
                                                                <div class="trxgroup-title"><span>Staked</span></div>
                                                                <div class="trxgroup-content-number">
                                                                    <a href="#/data/charts/trx/staked"><span>46,109,658,563</span></a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div style="overflow: hidden;">
                <div class="container home-chart">
                    <div class="home-block-wrap">
                        <div class="block-title">
                            <div class="block-title-left">
                                <a href="#/blockchain/blocks">
                                    <span>
                                        <span>Blocks</span></span></a>

                            </div>
                            <a class="block-more" href="#/blockchain/blocks">
                                <span><span>More</span></span>
                                <svg class="icon tron-icon tron-font-size-8px" aria-hidden="true">
                                    <use xlink:href="#icon-right-arrow"></use></svg></a>

                        </div>
                        <div class="home-block-content-wrap">
                            <div class="home-block-list-wrap">
                                <div class="home-block-list-main " style="width: 200%;">
                                    <div class="home-block-list">
                                        <div class="block-item ">
                                            <div>
                                                <div class="block-top">
                                                    <a class="block-number" href="#/block/58308243">#<span>58,308,243</span></a>
                                                    <a class="block-producer" href="#/address/TKSXDA8HfE9E1y39RczVQ1ZascUEtaSToF">
                                                        <span>CryptoChain</span>
                                                        <svg class="icon tron-icon tron-arrow-icon" aria-hidden="true">
                                                            <use xlink:href="#icon-right-arrow"></use></svg></a>
                                                </div>
                                                <div class="block-time">
                                                    <div class="token_black table_pos">
                                                        <div>6 secs ago</div>
                                                    </div>
                                                    <div><b>168 <span>Txns</span></b></div>
                                                </div>
                                                <div class="block-detail">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <span>Reward</span> <b>176 TIX</b>
                                                        </div>
                                                        <div>
                                                            <svg class="icon tron-icon tron-icon-fire" aria-hidden="true">
                                                                <use xlink:href="#icon-icon-fire"></use></svg>
                                                            <b>405.907 TIX</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="block-item false">
                                            <div>
                                                <div class="block-top">
                                                    <a class="block-number" href="#/block/58308242">#58308242</a>
                                                    <a class="block-producer" href="#/address/TUD4YXYdj2t1gP5th3A7t97mx1AUmrrQRt">
                                                        <span>TRONGrid</span><svg class="icon tron-icon tron-arrow-icon" aria-hidden="true">
                                                            <use xlink:href="#icon-right-arrow"></use></svg></a>
                                                </div>
                                                <div class="block-time">
                                                    <div class="token_black table_pos">
                                                        <div>9 secs ago</div>

                                                    </div>
                                                    <div>
                                                        <b>243 
                                                            <span>Txns</span>

                                                        </b>

                                                    </div>

                                                </div>
                                                <div class="block-detail">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div><span>Reward</span> <b>176 TIX</b></div>
                                                        <div>
                                                            <svg class="icon tron-icon tron-icon-fire" aria-hidden="true">
                                                                <use xlink:href="#icon-icon-fire"></use></svg><b>830.46422 TIX</b>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="block-item false">
                                            <div>
                                                <div class="block-top">
                                                    <a class="block-number" href="#/block/58308241">#58308241</a>
                                                    <a class="block-producer" href="#/address/TGJBjL8wmRVyRStkghnhcVNYYgn6Yjno6X">
                                                        <span>BlockAnalysis</span>
                                                        <svg class="icon tron-icon tron-arrow-icon" aria-hidden="true">
                                                            <use xlink:href="#icon-right-arrow"></use></svg></a>
                                                </div>
                                                <div class="block-time">
                                                    <div class="token_black table_pos">
                                                        <div>12 secs ago</div>
                                                    </div>
                                                    <div>
                                                        <b>183 <span>Txns</span></b>
                                                    </div>
                                                </div>
                                                <div class="block-detail">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <span>Reward</span> <b>176 TIX</b>
                                                        </div>
                                                        <div>
                                                            <svg class="icon tron-icon tron-icon-fire" aria-hidden="true">
                                                                <use xlink:href="#icon-icon-fire"></use></svg><b>269.2609 TIX</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="block-item false">
                                            <div>
                                                <div class="block-top">
                                                    <a class="block-number" href="#/block/58308240">#58308240</a>
                                                    <a class="block-producer" href="#/address/TCZvvbn4SCVyNhCAt1L8Kp1qk5rtMiKdBB"><span>Crypto Labs</span>
                                                        <svg class="icon tron-icon tron-arrow-icon" aria-hidden="true">
                                                            <use xlink:href="#icon-right-arrow"></use></svg></a>
                                                </div>
                                                <div class="block-time">
                                                    <div class="token_black table_pos">
                                                        <div>15 secs ago</div>
                                                    </div>
                                                    <div><b>232 <span>Txns</span></b></div>
                                                </div>
                                                <div class="block-detail">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div><span>Reward</span> <b>176 TIX</b></div>
                                                        <div>
                                                            <svg class="icon tron-icon tron-icon-fire" aria-hidden="true">
                                                                <use xlink:href="#icon-icon-fire"></use></svg><b>1,209.56558 TIX</b>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div class="home-block-list">
                                        <div class="block-item undefined">
                                            <div>
                                                <div class="block-top"><a class="block-number" href="#/block/58308239">#58308239</a><a class="block-producer" href="#/address/TJvaAeFb8Lykt9RQcVyyTFN2iDvGMuyD4M"><span>Poloniex</span><svg class="icon tron-icon tron-arrow-icon" aria-hidden="true"><use xlink:href="#icon-right-arrow"></use></svg></a></div>
                                                <div class="block-time">
                                                    <div class="token_black table_pos">
                                                        <div>18 secs ago</div>
                                                    </div>
                                                    <div><b>255 <span>Txns</span></b></div>
                                                </div>
                                                <div class="block-detail">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div><span>Reward</span> <b>176 TIX</b></div>
                                                        <div>
                                                            <svg class="icon tron-icon tron-icon-fire" aria-hidden="true">
                                                                <use xlink:href="#icon-icon-fire"></use></svg><b>407.5547 TIX</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="block-item undefined">
                                            <div>
                                                <div class="block-top"><a class="block-number" href="#/block/58308238">#58308238</a><a class="block-producer" href="#/address/TDpt9adA6QidL1B1sy3D8NC717C6L5JxFo"><span>Chain Cloud</span><svg class="icon tron-icon tron-arrow-icon" aria-hidden="true"><use xlink:href="#icon-right-arrow"></use></svg></a></div>
                                                <div class="block-time">
                                                    <div class="token_black table_pos">
                                                        <div>21 secs ago</div>
                                                    </div>
                                                    <div><b>273 <span>Txns</span></b></div>
                                                </div>
                                                <div class="block-detail">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div><span>Reward</span> <b>176 TIX</b></div>
                                                        <div>
                                                            <svg class="icon tron-icon tron-icon-fire" aria-hidden="true">
                                                                <use xlink:href="#icon-icon-fire"></use></svg><b>840.90378 TIX</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="block-item undefined">
                                            <div>
                                                <div class="block-top">
                                                    <a class="block-number" href="#/block/58308237">#58308237</a><a class="block-producer" href="#/address/TMafrJCuNoYq3mg9dDThfg7c9VP6enZN6j"><span>metaverse home</span>
                                                        <svg class="icon tron-icon tron-arrow-icon" aria-hidden="true">
                                                            <use xlink:href="#icon-right-arrow"></use></svg></a>
                                                </div>
                                                <div class="block-time">
                                                    <div class="token_black table_pos">
                                                        <div>24 secs ago</div>
                                                    </div>
                                                    <div><b>162 <span>Txns</span></b></div>
                                                </div>
                                                <div class="block-detail">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div><span>Reward</span> <b>176 TIX</b></div>
                                                        <div>
                                                            <svg class="icon tron-icon tron-icon-fire" aria-hidden="true">
                                                                <use xlink:href="#icon-icon-fire"></use></svg><b>362.49282 TIX</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="block-item undefined">
                                            <div>
                                                <div class="block-top"><a class="block-number" href="#/block/58308236">#58308236</a><a class="block-producer" href="#/address/TAAdjpNYfeJ2edcETNpad1QpQWJfyBdB9V"><span>Ant Investment Group</span><svg class="icon tron-icon tron-arrow-icon" aria-hidden="true"><use xlink:href="#icon-right-arrow"></use></svg></a></div>
                                                <div class="block-time">
                                                    <div class="token_black table_pos">
                                                        <div>27 secs ago</div>
                                                    </div>
                                                    <div><b>210 <span>Txns</span></b></div>
                                                </div>
                                                <div class="block-detail">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div><span>Reward</span> <b>176 TIX</b></div>
                                                        <div>
                                                            <svg class="icon tron-icon tron-icon-fire" aria-hidden="true">
                                                                <use xlink:href="#icon-icon-fire"></use></svg>
                                                            <b>570.70826 TIX</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="block-bg-animate-wrap">
                                <div>
                                    <div class="slider-move"></div>
                                </div>
                            </div>
                            <div class="block-list-mask block-list-after mask-opacity">
                                <span class="">
                                    <svg class="icon tron-icon tron-arrow-icon" aria-hidden="true">
                                        <use xlink:href="#icon-right-arrow"></use></svg></span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <div class="transferBlockSec" style="padding-bottom: 0px;">
                <div class="container home-chart recent-transactions-panel">
                    <div class="header d-flex">
                        <a class="title-wrap" href="#/blockchain/transactions">
                            <span>Transactions</span></a>
                    </div>
                    <div class="content">
                        <div class="row-flex">
                            <div class="col-56 home-translations-table">
                                <div class="card">
                                    <ul class="list-group list-group-flush list-group-pc">
                                        <li class="list-group-item transactions-body list-group-item-en">
                                            <div class="list-item-cont">
                                                <div class="hash-body mb-0 d-flex">
                                                    <div class="d-flex flex-shrink-1 flex-grow-1 flex-column align-items-start hash-link-item">
                                                        <div class="ln1 it1 d-flex flex-grow-1 color-transfers-hash transaction-hash">
                                                            <div class="hash">
                                                                <div class="truncate-ellipsis">
                                                                    <span>
                                                                        <a class="color-tron-100 list-item-word" href="#/transaction/54145a60c0625f2e1f08c32257c784772b18bdef11debdd4c80b37b16a22d258">
                                                                            <div class="ellipsis_box">
                                                                                <div class="ellipsis_box_start">54145a60c0625f2e1f08c32257c784772b18bdef11debdd4c80b37b16a2</div>
                                                                                <div class="ellipsis_box_end">2d258</div>
                                                                            </div>
                                                                        </a>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ln2 it1 d-flex list-item-word it1">
                                                            <div class="text-right tron-font-size-12px tron-color-gray-dark">
                                                                <div class="token_black table_pos">
                                                                    <div>3 secs ago</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex address-item">
                                                        <div class=" d-flex flex-column text-left">
                                                            <span class="d-flex ln1 it2">
                                                                <div class="tron-color-gray-dark transactionAddressTitle en" style="white-space: nowrap;">
                                                                    <span>From</span>
                                                                </div>
                                                                <span class="address-container address_max_width_home  ">
                                                                    <div class="react-contextmenu-wrapper">
                                                                        <div class="truncate-ellipsis">
                                                                            <span>
                                                                                <div class="d-flex address-link-wrap " style="align-items: center;">
                                                                                    <a class="text-truncate address-link " href="#/address/TCiVFDkqytKDipvZEV7BAhdVxL4jSzhefG">
                                                                                        <span class="">
                                                                                            <div class="ellipsis_box ">
                                                                                                <div class="line-ellipsis">TCiVFDkqytKDipvZEV7BAhdVxL4</div>
                                                                                                <div>jSzhefG</div>
                                                                                            </div>
                                                                                        </span>
                                                                                    </a>
                                                                                    <div class="labelShow"></div>
                                                                                </div>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <span class="new-address-content-menu-wrap">
                                                                        <nav role="menu" tabindex="-1" class="react-contextmenu dropdown-menu show new-address-content-menu" style="z-index: 899; position: fixed; opacity: 0; pointer-events: none;">
                                                                            <a class="dropdown-item" href="#!">
                                                                                <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                    <use xlink:href="#icon-link-open"></use>
                                                                                </svg>
                                                                                <span>Open in New Tab</span>
                                                                            </a>
                                                                            <a class="dropdown-item" href="#!">
                                                                                <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                    <use xlink:href="#icon-icon-labels"></use>

                                                                                </svg>
                                                                                <span>Edit Private Tag</span>

                                                                            </a>
                                                                            <a class="dropdown-item" href="#!">
                                                                                <svg class="icon tron-icon" aria-hidden="true">
                                                                                    <use xlink:href="#icon-user-circle"></use>

                                                                                </svg>
                                                                                <span>View Account Profile</span>

                                                                            </a>
                                                                            <div class="menu-gap-line"></div>
                                                                            <a class="dropdown-item" href="#!">
                                                                                <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                    <use xlink:href="#icon-icon-copy1"></use>

                                                                                </svg>
                                                                                <span>Copy Address</span>

                                                                            </a>
                                                                            <a class="dropdown-item" href="#!">
                                                                                <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                    <use xlink:href="#icon-qrcode"></use>

                                                                                </svg>
                                                                                <span>Show QR Code</span></a>
                                                                            <a class="dropdown-item" href="#!">
                                                                                <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                    <use xlink:href="#icon-transfer"></use>

                                                                                </svg>
                                                                                <span>Send Tokens</span>

                                                                            </a>

                                                                        </nav>
                                                                    </span>

                                                                </span>

                                                            </span>
                                                            <span class="d-flex ln2 it2 transactionToAddressWrapper" style="position: relative;">
                                                                <div class="tron-color-gray-dark transactionAddressTitle en" style="white-space: nowrap;">
                                                                    <span>To</span>
                                                                </div>
                                                                <span class="d-flex">
                                                                    <span class="address-container address_max_width_home  ">
                                                                        <div class="react-contextmenu-wrapper">
                                                                            <div class="truncate-ellipsis">
                                                                                <span>
                                                                                    <div class="d-flex address-link-wrap label-address-link-wrap" style="align-items: center;">
                                                                                        <a class="text-truncate address-link tron-width-100 personal-address-link" href="#/contract/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t/code">
                                                                                            <div class="d-flex align-items-center">
                                                                                                <span class="flagIcon">
                                                                                                    <svg class="icon tron-icon contract-icon" aria-hidden="true">
                                                                                                        <use xlink:href="#icon-icon-sc"></use>
                                                                                                    </svg>
                                                                                                </span>
                                                                                                <div class="ellipsis_box tag-background contract-content-width ">
                                                                                                    <div class="d-inline-block line-ellipsis">USDT Token</div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </a>
                                                                                        <div class="labelShow"></div>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <span class="new-address-content-menu-wrap">
                                                                            <nav role="menu" tabindex="-1" class="react-contextmenu dropdown-menu show new-address-content-menu" style="z-index: 899; position: fixed; opacity: 0; pointer-events: none;">
                                                                                <a class="dropdown-item" href="#!">
                                                                                    <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                        <use xlink:href="#icon-link-open"></use></svg>
                                                                                    <span>Open in New Tab	 </span></a>
                                                                                <a class="dropdown-item" href="#!">
                                                                                    <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                        <use xlink:href="#icon-icon-labels"></use></svg>
                                                                                    <span>Edit Private Tag</span></a>
                                                                                <div class="menu-gap-line"></div>
                                                                                <a class="dropdown-item" href="#!">
                                                                                    <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                        <use xlink:href="#icon-icon-copy1"></use></svg>
                                                                                    <span>Copy Address</span></a>
                                                                                <a class="dropdown-item" href="#!">
                                                                                    <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                        <use xlink:href="#icon-qrcode"></use></svg>
                                                                                    <span>Show QR Code</span></a>

                                                                            </nav>

                                                                        </span>

                                                                    </span>

                                                                </span>

                                                            </span>

                                                        </div>

                                                    </div>
                                                    <div class="transaction-type-box">
                                                        <div class="ln1 it3">
                                                            <div class="color-grey-200 d-flex it3" style="font-size: 14px;">
                                                                <span class="d-inline-block text-truncate" style="max-width: 90px;"><span class="tron-mr-2px">0</span></span><div>
                                                                    <div><span style=""><a class="" href="#/token/0">TRX</a></span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ln2 d-flex flex-column transaction-type it3">
                                                            <div class="k-value-wrap"><span class="k-value whitelist"><span>Trigger Smart Contract</span></span></div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                        </li>
                                        <li class="list-group-item transactions-body list-group-item-en">
                                            <div class="list-item-cont">
                                                <div class="hash-body mb-0 d-flex">
                                                    <div class="d-flex flex-shrink-1 flex-grow-1 flex-column align-items-start hash-link-item">
                                                        <div class="ln1 it1 d-flex flex-grow-1 color-transfers-hash transaction-hash">
                                                            <div class="hash">
                                                                <div class="truncate-ellipsis">
                                                                    <span>
                                                                        <a class="color-tron-100 list-item-word" href="#/transaction/29c01c5ab93acc18cfc172b2e915230bb4f3003e61af02b34f48aba8e901372d">
                                                                            <div class="ellipsis_box">
                                                                                <div class="ellipsis_box_start">29c01c5ab93acc18cfc172b2e915230bb4f3003e61af02b34f48aba8e90</div>
                                                                                <div class="ellipsis_box_end">1372d</div>
                                                                            </div>
                                                                        </a></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ln2 it1 d-flex list-item-word it1">
                                                            <div class="text-right tron-font-size-12px tron-color-gray-dark">
                                                                <div class="token_black table_pos">
                                                                    <div>2 secs ago</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex address-item">
                                                        <div class=" d-flex flex-column text-left">
                                                            <span class="d-flex ln1 it2">
                                                                <div class="tron-color-gray-dark transactionAddressTitle en" style="white-space: nowrap;"><span>From</span></div>
                                                                <span class="address-container address_max_width_home  ">
                                                                    <div class="react-contextmenu-wrapper">
                                                                        <div class="truncate-ellipsis">
                                                                            <span>
                                                                                <div class="d-flex address-link-wrap " style="align-items: center;">
                                                                                    <a class="text-truncate address-link " href="#/address/TQyyj1sDQo9uTNtRyvWo9Qca9PBRuQVpuz"><span class="">
                                                                                        <div class="ellipsis_box ">
                                                                                            <div class="line-ellipsis">TQyyj1sDQo9uTNtRyvWo9Qca9PB</div>
                                                                                            <div>RuQVpuz</div>
                                                                                        </div>
                                                                                    </span></a>
                                                                                    <div class="labelShow"></div>
                                                                                </div>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <span class="new-address-content-menu-wrap">
                                                                        <nav role="menu" tabindex="-1" class="react-contextmenu dropdown-menu show new-address-content-menu" style="z-index: 899; position: fixed; opacity: 0; pointer-events: none;">
                                                                            <a class="dropdown-item" href="#!">
                                                                                <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                    <use xlink:href="#icon-link-open"></use></svg><span>Open in New Tab	 </span></a><a class="dropdown-item" href="#!">
                                                                                        <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                            <use xlink:href="#icon-icon-labels"></use></svg><span>Edit Private Tag</span></a><a class="dropdown-item" href="#!"><svg class="icon tron-icon" aria-hidden="true"><use xlink:href="#icon-user-circle"></use></svg><span>View Account Profile</span></a><div class="menu-gap-line"></div>
                                                                            <a class="dropdown-item" href="#!">
                                                                                <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                    <use xlink:href="#icon-icon-copy1"></use></svg><span>Copy Address</span></a><a class="dropdown-item" href="#!"><svg class="icon tron-icon copy-icon" aria-hidden="true"><use xlink:href="#icon-qrcode"></use></svg><span>Show QR Code</span></a><a class="dropdown-item" href="#!"><svg class="icon tron-icon copy-icon" aria-hidden="true"><use xlink:href="#icon-transfer"></use></svg><span>Send Tokens</span></a>
                                                                        </nav>
                                                                    </span></span></span><span class="d-flex ln2 it2 transactionToAddressWrapper" style="position: relative;">
                                                                        <div class="tron-color-gray-dark transactionAddressTitle en" style="white-space: nowrap;"><span>To</span></div>
                                                                        <span class="d-flex"><span class="address-container address_max_width_home  ">
                                                                            <div class="react-contextmenu-wrapper">
                                                                                <div class="truncate-ellipsis">
                                                                                    <span>
                                                                                        <div class="d-flex address-link-wrap label-address-link-wrap" style="align-items: center;">
                                                                                            <a class="text-truncate address-link tron-width-100 personal-address-link" href="#/contract/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t/code">
                                                                                                <div class="d-flex align-items-center">
                                                                                                    <span class="flagIcon">
                                                                                                        <svg class="icon tron-icon contract-icon" aria-hidden="true">
                                                                                                            <use xlink:href="#icon-icon-sc"></use></svg></span><div class="ellipsis_box tag-background contract-content-width ">
                                                                                                                <div class="d-inline-block line-ellipsis">USDT Token</div>
                                                                                                            </div>
                                                                                                </div>
                                                                                            </a>
                                                                                            <div class="labelShow"></div>
                                                                                        </div>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <span class="new-address-content-menu-wrap">
                                                                                <nav role="menu" tabindex="-1" class="react-contextmenu dropdown-menu show new-address-content-menu" style="z-index: 899; position: fixed; opacity: 0; pointer-events: none;">
                                                                                    <a class="dropdown-item" href="#!">
                                                                                        <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                            <use xlink:href="#icon-link-open"></use></svg><span>Open in New Tab	 </span></a><a class="dropdown-item" href="#!">
                                                                                                <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                                    <use xlink:href="#icon-icon-labels"></use></svg><span>Edit Private Tag</span></a><div class="menu-gap-line"></div>
                                                                                    <a class="dropdown-item" href="#!">
                                                                                        <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                            <use xlink:href="#icon-icon-copy1"></use></svg><span>Copy Address</span></a><a class="dropdown-item" href="#!"><svg class="icon tron-icon copy-icon" aria-hidden="true"><use xlink:href="#icon-qrcode"></use></svg><span>Show QR Code</span></a>
                                                                                </nav>
                                                                            </span></span></span></span>
                                                        </div>
                                                    </div>

                                                    <div class="transaction-type-box">
                                                        <div class="ln1 it3">
                                                            <div class="color-grey-200 d-flex it3" style="font-size: 14px;">
                                                                <span class="d-inline-block text-truncate" style="max-width: 90px;">
                                                                    <span class="tron-mr-2px">0</span></span><div>
                                                                        <div>
                                                                            <span style=""><a class="" href="#/token/0">TRX</a></span>
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                        <div class="ln2 d-flex flex-column transaction-type it3">
                                                            <div class="k-value-wrap">
                                                                <span class="k-value whitelist"><span>Trigger Smart Contract</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item transactions-body list-group-item-en">
                                            <div class="list-item-cont">
                                                <div class="hash-body mb-0 d-flex">
                                                    <div class="d-flex flex-shrink-1 flex-grow-1 flex-column align-items-start hash-link-item">
                                                        <div class="ln1 it1 d-flex flex-grow-1 color-transfers-hash transaction-hash">
                                                            <div class="hash">
                                                                <div class="truncate-ellipsis">
                                                                    <span><a class="color-tron-100 list-item-word" href="#/transaction/4f5d5078aaf8871ae9c641f581de6cfb8737f12f2374f906a6f677bd401e93cc">
                                                                        <div class="ellipsis_box">
                                                                            <div class="ellipsis_box_start">4f5d5078aaf8871ae9c641f581de6cfb8737f12f2374f906a6f677bd401</div>
                                                                            <div class="ellipsis_box_end">e93cc</div>
                                                                        </div>
                                                                    </a></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ln2 it1 d-flex list-item-word it1">
                                                            <div class="text-right tron-font-size-12px tron-color-gray-dark">
                                                                <div class="token_black table_pos">
                                                                    <div>2 secs ago</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex address-item">
                                                        <div class=" d-flex flex-column text-left">
                                                            <span class="d-flex ln1 it2">
                                                                <div class="tron-color-gray-dark transactionAddressTitle en" style="white-space: nowrap;"><span>From</span></div>
                                                                <span class="address-container address_max_width_home  ">
                                                                    <div class="react-contextmenu-wrapper">
                                                                        <div class="truncate-ellipsis">
                                                                            <span>
                                                                                <div class="d-flex address-link-wrap " style="align-items: center;">
                                                                                    <a class="text-truncate address-link " href="#/address/TRhTtt1wJ4o7vUUGPJsem7XuosVbNAUQT7"><span class="">
                                                                                        <div class="ellipsis_box ">
                                                                                            <div class="line-ellipsis">TRhTtt1wJ4o7vUUGPJsem7XuosV</div>
                                                                                            <div>bNAUQT7</div>
                                                                                        </div>
                                                                                    </span></a>
                                                                                    <div class="labelShow"></div>
                                                                                </div>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <span class="new-address-content-menu-wrap">
                                                                        <nav role="menu" tabindex="-1" class="react-contextmenu dropdown-menu show new-address-content-menu" style="z-index: 899; position: fixed; opacity: 0; pointer-events: none;">
                                                                            <a class="dropdown-item" href="#!">
                                                                                <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                    <use xlink:href="#icon-link-open"></use></svg><span>Open in New Tab	 </span></a><a class="dropdown-item" href="#!">
                                                                                        <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                            <use xlink:href="#icon-icon-labels"></use></svg><span>Edit Private Tag</span></a><a class="dropdown-item" href="#!"><svg class="icon tron-icon" aria-hidden="true"><use xlink:href="#icon-user-circle"></use></svg><span>View Account Profile</span></a>
                                                                            <div class="menu-gap-line"></div>
                                                                            <a class="dropdown-item" href="#!">
                                                                                <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                    <use xlink:href="#icon-icon-copy1"></use></svg><span>Copy Address</span></a><a class="dropdown-item" href="#!"><svg class="icon tron-icon copy-icon" aria-hidden="true"><use xlink:href="#icon-qrcode"></use></svg><span>Show QR Code</span></a><a class="dropdown-item" href="#!"><svg class="icon tron-icon copy-icon" aria-hidden="true"><use xlink:href="#icon-transfer"></use></svg>
                                                                                        <span>Send Tokens</span></a>
                                                                        </nav>
                                                                    </span></span></span><span class="d-flex ln2 it2 transactionToAddressWrapper" style="position: relative;">
                                                                        <div class="tron-color-gray-dark transactionAddressTitle en" style="white-space: nowrap;"><span>To</span></div>
                                                                        <span class="address-container address_max_width_home  ">
                                                                            <div class="react-contextmenu-wrapper">
                                                                                <div class="truncate-ellipsis">
                                                                                    <span>
                                                                                        <div class="d-flex address-link-wrap " style="align-items: center;">
                                                                                            <a class="text-truncate address-link " href="#/address/TNuSaM1YoJRd6a3VpsxfZC5LzL7xr6ejkJ"><span class="">
                                                                                                <div class="ellipsis_box ">
                                                                                                    <div class="line-ellipsis">TNuSaM1YoJRd6a3VpsxfZC5LzL7</div>
                                                                                                    <div>xr6ejkJ</div>
                                                                                                </div>
                                                                                            </span></a>
                                                                                            <div class="labelShow"></div>
                                                                                        </div>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <span class="new-address-content-menu-wrap">
                                                                                <nav role="menu" tabindex="-1" class="react-contextmenu dropdown-menu show new-address-content-menu" style="z-index: 899; position: fixed; opacity: 0; pointer-events: none;">
                                                                                    <a class="dropdown-item" href="#!">
                                                                                        <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                            <use xlink:href="#icon-link-open"></use></svg><span>Open in New Tab	 </span></a><a class="dropdown-item" href="#!">
                                                                                                <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                                    <use xlink:href="#icon-icon-labels"></use></svg><span>Edit Private Tag</span></a><a class="dropdown-item" href="#!"><svg class="icon tron-icon" aria-hidden="true"><use xlink:href="#icon-user-circle"></use></svg><span>View Account Profile</span></a><div class="menu-gap-line"></div>
                                                                                    <a class="dropdown-item" href="#!">
                                                                                        <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                            <use xlink:href="#icon-icon-copy1"></use></svg><span>Copy Address</span></a><a class="dropdown-item" href="#!"><svg class="icon tron-icon copy-icon" aria-hidden="true"><use xlink:href="#icon-qrcode"></use></svg><span>Show QR Code</span></a>
                                                                                    <a class="dropdown-item" href="#!">
                                                                                        <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                            <use xlink:href="#icon-transfer"></use></svg><span>Send Tokens</span></a>
                                                                                </nav>
                                                                            </span></span></span>
                                                        </div>
                                                    </div>
                                                    <div class="transaction-type-box">
                                                        <div class="ln1 it3">
                                                            <div class="color-grey-200 d-flex it3" style="font-size: 14px;">
                                                                <span class="d-inline-block text-truncate" style="max-width: 90px;"><span class="tron-mr-2px">0.000001</span></span><div>
                                                                    <div><span style=""><a class="" href="#/token/0">TRX</a></span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ln2 d-flex flex-column transaction-type it3">
                                                            <div class="k-value-wrap"><span class="k-value whitelist"><span>Transfer TIX</span></span></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </li>
                                        <li class="list-group-item transactions-body list-group-item-en">
                                            <div class="list-item-cont">
                                                <div class="hash-body mb-0 d-flex">
                                                    <div class="d-flex flex-shrink-1 flex-grow-1 flex-column align-items-start hash-link-item">
                                                        <div class="ln1 it1 d-flex flex-grow-1 color-transfers-hash transaction-hash">
                                                            <div class="hash">
                                                                <div class="truncate-ellipsis">
                                                                    <span><a class="color-tron-100 list-item-word" href="#/transaction/045b4849369ba0ae5da473d65117c497e3e57fa8ff9b313e0ce482e2c8e4486a">
                                                                        <div class="ellipsis_box">
                                                                            <div class="ellipsis_box_start">045b4849369ba0ae5da473d65117c497e3e57fa8ff9b313e0ce482e2c8e</div>
                                                                            <div class="ellipsis_box_end">4486a</div>
                                                                        </div>
                                                                    </a></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ln2 it1 d-flex list-item-word it1">
                                                            <div class="text-right tron-font-size-12px tron-color-gray-dark">
                                                                <div class="token_black table_pos">
                                                                    <div>2 secs ago</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="d-flex address-item">
                                                        <div class=" d-flex flex-column text-left">
                                                            <span class="d-flex ln1 it2">
                                                                <div class="tron-color-gray-dark transactionAddressTitle en" style="white-space: nowrap;"><span>From</span></div>
                                                                <span class="address-container address_max_width_home  ">
                                                                    <div class="react-contextmenu-wrapper">
                                                                        <div class="truncate-ellipsis">
                                                                            <span>
                                                                                <div class="d-flex address-link-wrap " style="align-items: center;">
                                                                                    <a class="text-truncate address-link " href="#/address/TQ6JSVEjwcERHPHdfjvJmWajVJVFvHLNmd"><span class="">
                                                                                        <div class="ellipsis_box ">
                                                                                            <div class="line-ellipsis">TQ6JSVEjwcERHPHdfjvJmWajVJV</div>
                                                                                            <div>FvHLNmd</div>
                                                                                        </div>
                                                                                    </span></a>
                                                                                    <div class="labelShow"></div>
                                                                                </div>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <span class="new-address-content-menu-wrap">
                                                                        <nav role="menu" tabindex="-1" class="react-contextmenu dropdown-menu show new-address-content-menu" style="z-index: 899; position: fixed; opacity: 0; pointer-events: none;">
                                                                            <a class="dropdown-item" href="#!">
                                                                                <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                    <use xlink:href="#icon-link-open"></use></svg><span>Open in New Tab	 </span></a><a class="dropdown-item" href="#!">
                                                                                        <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                            <use xlink:href="#icon-icon-labels"></use></svg><span>Edit Private Tag</span></a><a class="dropdown-item" href="#!"><svg class="icon tron-icon" aria-hidden="true"><use xlink:href="#icon-user-circle"></use></svg><span>View Account Profile</span></a><div class="menu-gap-line"></div>
                                                                            <a class="dropdown-item" href="#!">
                                                                                <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                    <use xlink:href="#icon-icon-copy1"></use></svg><span>Copy Address</span></a><a class="dropdown-item" href="#!"><svg class="icon tron-icon copy-icon" aria-hidden="true"><use xlink:href="#icon-qrcode"></use></svg><span>Show QR Code</span></a><a class="dropdown-item" href="#!"><svg class="icon tron-icon copy-icon" aria-hidden="true"><use xlink:href="#icon-transfer"></use></svg><span>Send Tokens</span></a>
                                                                        </nav>
                                                                    </span></span></span><span class="d-flex ln2 it2 transactionToAddressWrapper" style="position: relative;">
                                                                        <div class="tron-color-gray-dark transactionAddressTitle en" style="white-space: nowrap;"><span>To</span></div>
                                                                        <span class="address-container address_max_width_home  ">
                                                                            <div class="react-contextmenu-wrapper">
                                                                                <div class="truncate-ellipsis">
                                                                                    <span>
                                                                                        <div class="d-flex address-link-wrap " style="align-items: center;">
                                                                                            <a class="text-truncate address-link " href="#/address/TXdTWaoegTCKxu9ULuaz6WpWrHSHj7QFhA"><span class="">
                                                                                                <div class="ellipsis_box ">
                                                                                                    <div class="line-ellipsis">TXdTWaoegTCKxu9ULuaz6WpWrHS</div>
                                                                                                    <div>Hj7QFhA</div>
                                                                                                </div>
                                                                                            </span></a>
                                                                                            <div class="labelShow"></div>
                                                                                        </div>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <span class="new-address-content-menu-wrap">
                                                                                <nav role="menu" tabindex="-1" class="react-contextmenu dropdown-menu show new-address-content-menu" style="z-index: 899; position: fixed; opacity: 0; pointer-events: none;">
                                                                                    <a class="dropdown-item" href="#!">
                                                                                        <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                            <use xlink:href="#icon-link-open"></use></svg><span>Open in New Tab	 </span></a><a class="dropdown-item" href="#!">
                                                                                                <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                                    <use xlink:href="#icon-icon-labels"></use></svg><span>Edit Private Tag</span></a><a class="dropdown-item" href="#!"><svg class="icon tron-icon" aria-hidden="true"><use xlink:href="#icon-user-circle"></use></svg><span>View Account Profile</span></a><div class="menu-gap-line"></div>
                                                                                    <a class="dropdown-item" href="#!">
                                                                                        <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                            <use xlink:href="#icon-icon-copy1"></use></svg><span>Copy Address</span></a><a class="dropdown-item" href="#!">
                                                                                                <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                                    <use xlink:href="#icon-qrcode"></use></svg><span>Show QR Code</span></a><a class="dropdown-item" href="#!">
                                                                                                        <svg class="icon tron-icon copy-icon" aria-hidden="true">
                                                                                                            <use xlink:href="#icon-transfer"></use></svg><span>Send Tokens</span></a>
                                                                                </nav>
                                                                            </span></span></span>
                                                        </div>
                                                    </div>

                                                    <div class="transaction-type-box">
                                                        <div class="ln1 it3">
                                                            <div class="color-grey-200 d-flex it3" style="font-size: 14px;">
                                                                <span class="d-inline-block text-truncate" style="max-width: 90px;">
                                                                    <span class="tron-mr-2px">0.00001</span>

                                                                </span>
                                                                <div>
                                                                    <div>
                                                                        <span style="">
                                                                            <a class="" href="#/token/0">TRX</a></span>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ln2 d-flex flex-column transaction-type it3">
                                                            <div class="k-value-wrap">
                                                                <span class="k-value whitelist">
                                                                    <span>Transfer TIX</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="home-view-link home-translations-view-link">
                                        <a href="#/blockchain/transactions">More<svg class="icon tron-icon tron-font-size-8px" aria-hidden="true">
                                            <use xlink:href="#icon-right-arrow"></use></svg></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-44 home-translations-chart">
                                <div class="card-body pt-0">
                                    <div style="min-width: 255px; height: auto; min-height: 250px;">
                                        <div>
                                            <div class="title-wrap">
                                                <a href="#/data/charts/txn/daily-txn">Daily Txns (15 Days)</a>
                                            </div>
                                            <div style="height: 316px;">
                                                <div id="chartId_home_tronscation" class="echarts-dom-class" _echarts_instance_="ec_1705556095505" style="user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); position: relative;">
                                                    <div style="position: relative; width: 100%; height: 316px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">

                                                        <div id="chart1" style="width: 100%; height: 320px;"></div>

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
            <div class="transferBlockSec" style="padding-bottom: 0px;">
                <div class="container home-chart recent-tvl-panel">
                    <div class="header d-flex">
                        <span class="title-wrap"><span>TVL</span></span><span class="split-line">/</span><span class="title-wrap-can-click"><span>TVC</span></span>
                        <div class="ml-auto d-flex align-items-center">
                            <a class="entry-text" href="#/tools/contactUs?feedbackType=applyForInclusion">
                                <span>
                                    <span>Submit Project</span></span></a>
                            <a class="more2" href="#/data/charts/defi/tvl">
                                <span>
                                    <span>More</span></span>
                                <svg class="icon tron-icon tron-font-size-8px tron-right-icon" aria-hidden="true">
                                    <use xlink:href="#icon-right-arrow"></use></svg></a>
                        </div>
                    </div>
                    <div class="content">
                        <div class="row-flex">
                            <div class="col-44 home-tvl-chart">
                                <div id="chart2" style="width: 100%; height: 340px;"></div>
                            </div>
                            <div class="col-56 home-tvl-table">
                                <div class="card ">
                                    <div>
                                        <div class="token_black defiTotalAmount table-tvl">
                                            <div class="col-md-12 table_pos" style="padding: 0px;">
                                                <div class="right-tvl-bg" style="height: 354px;">
                                                    <div class="smart-table-wrapper">
                                                        <div class="card table_pos ">
                                                            <div class="ant-table-wrapper">
                                                                <div class="ant-spin-nested-loading">
                                                                    <div class="ant-spin-container">
                                                                        <div class="ant-table ant-table-fixed-header">
                                                                            <div class="ant-table-container">
                                                                                <div class="ant-table-header" style="overflow: hidden;">
                                                                                    <table style="table-layout: fixed;">
                                                                                        <colgroup>
                                                                                            <col style="width: 220px;">
                                                                                            <col style="width: 170px;">
                                                                                            <col style="width: 116px;">
                                                                                            <col style="width: 150px;">
                                                                                            <col style="width: 3px;">
                                                                                        </colgroup>
                                                                                        <thead class="ant-table-thead">
                                                                                            <tr>
                                                                                                <th class="ant-table-cell" scope="col" style="text-align: left;">Project</th>
                                                                                                <th class="ant-table-cell" scope="col" style="text-align: left;">Category</th>
                                                                                                <th aria-sort="descending" class="ant-table-cell ant-table-cell-ellipsis cell-max-125 ant-table-column-sort ant-table-column-has-sorters" tabindex="0" scope="col" style="text-align: right;">
                                                                                                    <div class="ant-table-column-sorters">
                                                                                                        <span class="ant-table-column-title">
                                                                                                            <div>
                                                                                                                <span class="mr-1">
                                                                                                                    <div class="d-inline-block">
                                                                                                                        <div class="question-mark">
                                                                                                                            <svg class="icon tron-icon question-mark-icon" aria-hidden="true">
                                                                                                                                <use xlink:href="#icon-icon-ask"></use></svg>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </span>TVL
                                                                                                            </div>
                                                                                                        </span><span class="ant-table-column-sorter ant-table-column-sorter-full"><span class="ant-table-column-sorter-inner" aria-hidden="true"><span role="img" aria-label="caret-up" class="anticon anticon-caret-up ant-table-column-sorter-up">
                                                                                                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                                                                                <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path></svg></span><span role="img" aria-label="caret-down" class="anticon anticon-caret-down ant-table-column-sorter-down active"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg></span></span></span>
                                                                                                    </div>
                                                                                                </th>
                                                                                                <th aria-label="" class="ant-table-cell ant-table-cell-ellipsis cell-max-150 ant-table-column-has-sorters" tabindex="0" scope="col" style="text-align: right;">
                                                                                                    <div class="ant-table-column-sorters">
                                                                                                        <span class="ant-table-column-title">
                                                                                                            <div>
                                                                                                                <span class="mr-1">
                                                                                                                    <div class="d-inline-block">
                                                                                                                        <div class="question-mark">
                                                                                                                            <svg class="icon tron-icon question-mark-icon" aria-hidden="true">
                                                                                                                                <use xlink:href="#icon-icon-ask"></use></svg>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </span>Change (24h)
                                                                                                            </div>
                                                                                                        </span><span class="ant-table-column-sorter ant-table-column-sorter-full"><span class="ant-table-column-sorter-inner" aria-hidden="true"><span role="img" aria-label="caret-up" class="anticon anticon-caret-up ant-table-column-sorter-up">
                                                                                                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                                                                                <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path></svg></span><span role="img" aria-label="caret-down" class="anticon anticon-caret-down ant-table-column-sorter-down"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg></span></span></span>
                                                                                                    </div>
                                                                                                </th>
                                                                                                <td class="ant-table-cell ant-table-cell-scrollbar"></td>
                                                                                            </tr>
                                                                                        </thead>
                                                                                    </table>
                                                                                </div>
                                                                                <div class="ant-table-body" style="overflow-y: scroll; max-height: 316px;">
                                                                                    <table style="table-layout: fixed;">
                                                                                        <colgroup>
                                                                                            <col style="width: 220px;">
                                                                                            <col style="width: 170px;">
                                                                                            <col style="width: 116px;">
                                                                                            <col style="width: 150px;">
                                                                                        </colgroup>
                                                                                        <tbody class="ant-table-tbody">
                                                                                            <tr aria-hidden="true" class="ant-table-measure-row" style="height: 0px; font-size: 0px;">
                                                                                                <td style="padding: 0px; border: 0px; height: 0px;">
                                                                                                    <div style="height: 0px; overflow: hidden;">&nbsp;</div>
                                                                                                </td>
                                                                                                <td style="padding: 0px; border: 0px; height: 0px;">
                                                                                                    <div style="height: 0px; overflow: hidden;">&nbsp;</div>
                                                                                                </td>
                                                                                                <td style="padding: 0px; border: 0px; height: 0px;">
                                                                                                    <div style="height: 0px; overflow: hidden;">&nbsp;</div>
                                                                                                </td>
                                                                                                <td style="padding: 0px; border: 0px; height: 0px;">
                                                                                                    <div style="height: 0px; overflow: hidden;">&nbsp;</div>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr class="ant-table-row ant-table-row-level-0" data-row-key="0">
                                                                                                <td class="ant-table-cell" style="text-align: left;">
                                                                                                    <div class="d-flex align-items-center">
                                                                                                        <a class="target_url" href="#!" target="_blank"><b class="token-img-top">
                                                                                                            <svg class="icon tron-icon tron-token-icon tron-mr-10px" aria-hidden="true">
                                                                                                                <use xlink:href="#icon-icon-justlend"></use></svg></b><span class="text-normal project-wid" style="color: inherit;">JustLend DAO</span></a>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell" style="text-align: left;">
                                                                                                    <div>
                                                                                                        <div class="target_url">
                                                                                                            <div class="defi-type"><span class="defi-type-item">Lending</span><span class="defi-type-item">Staking</span></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell ant-table-cell-ellipsis cell-max-125 ant-table-column-sort" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span class="text-normal">$<span>6,531,978,218</span></span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell ant-table-cell-ellipsis cell-max-150" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span class="text-danger">-0.60%</span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr class="ant-table-row ant-table-row-level-0" data-row-key="1">
                                                                                                <td class="ant-table-cell" style="text-align: left;">
                                                                                                    <div class="d-flex align-items-center">
                                                                                                        <a class="target_url" href="#!" target="_blank">
                                                                                                            <b class="token-img-top">
                                                                                                                <svg class="icon tron-icon tron-token-icon tron-mr-10px" aria-hidden="true">
                                                                                                                    <use xlink:href="#icon-icon-tron"></use></svg></b>
                                                                                                            <span class="text-normal project-wid" style="color: inherit;">TIX Staking Governance</span></a>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell" style="text-align: left;">
                                                                                                    <div>
                                                                                                        <div class="target_url">
                                                                                                            <div class="defi-type"><span class="defi-type-item">Governance</span></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell ant-table-cell-ellipsis cell-max-125 ant-table-column-sort" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span class="text-normal">$<span>5,017,986,939</span></span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell ant-table-cell-ellipsis cell-max-150" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span class="text-success">+0.79%</span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr class="ant-table-row ant-table-row-level-0" data-row-key="2">
                                                                                                <td class="ant-table-cell" style="text-align: left;">
                                                                                                    <div class="d-flex align-items-center">
                                                                                                        <a class="target_url" href="#!" target="_blank"><b class="token-img-top">
                                                                                                            <svg class="icon tron-icon tron-token-icon tron-mr-10px tron-token-color" aria-hidden="true">
                                                                                                                <use xlink:href="#icon-icon-jst"></use></svg></b><span class="text-normal project-wid" style="color: inherit;">Just Cryptos</span></a>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell" style="text-align: left;">
                                                                                                    <div>
                                                                                                        <div class="target_url">
                                                                                                            <div class="defi-type"><span class="defi-type-item">Cross Chain</span></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell ant-table-cell-ellipsis cell-max-125 ant-table-column-sort" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span class="text-normal">$<span>4,836,873,572</span></span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell ant-table-cell-ellipsis cell-max-150" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span class="text-danger">-0.34%</span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr class="ant-table-row ant-table-row-level-0" data-row-key="3">
                                                                                                <td class="ant-table-cell" style="text-align: left;">
                                                                                                    <div class="d-flex align-items-center">
                                                                                                        <a class="target_url" href="#!" target="_blank"><b class="token-img-top">
                                                                                                            <img width="20" height="20" src="https://static.tronscan.org/production/upload/logo/new/stUSDT_logo.png" style="margin-right: 10px;"></b><span class="text-normal project-wid" style="color: inherit;">Staked USDT</span></a>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell" style="text-align: left;">
                                                                                                    <div>
                                                                                                        <div class="target_url">
                                                                                                            <div class="defi-type"><span class="defi-type-item">RWA</span><span class="defi-type-item">Staking</span><span class="defi-type-item">Yield</span></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell ant-table-cell-ellipsis cell-max-125 ant-table-column-sort" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span class="text-normal">$<span>1,989,074,324</span></span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell ant-table-cell-ellipsis cell-max-150" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span class="text-success">+0.02%</span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr class="ant-table-row ant-table-row-level-0" data-row-key="4">
                                                                                                <td class="ant-table-cell" style="text-align: left;">
                                                                                                    <div class="d-flex align-items-center">
                                                                                                        <a class="target_url" href="#!" target="_blank"><b class="token-img-top">
                                                                                                            <svg class="icon tron-icon tron-token-icon tron-mr-10px tron-stable-style" aria-hidden="true">
                                                                                                                <use xlink:href="#icon-icon-just1"></use></svg></b><span class="text-normal project-wid" style="color: inherit;">JustStable</span></a>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell" style="text-align: left;">
                                                                                                    <div>
                                                                                                        <div class="target_url">
                                                                                                            <div class="defi-type"><span class="defi-type-item">Stablecoin</span><span class="defi-type-item">Lending</span></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell ant-table-cell-ellipsis cell-max-125 ant-table-column-sort" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span class="text-normal">$<span>1,276,595,091</span></span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell ant-table-cell-ellipsis cell-max-150" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span class="text-success">+0.90%</span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr class="ant-table-row ant-table-row-level-0" data-row-key="5">
                                                                                                <td class="ant-table-cell" style="text-align: left;">
                                                                                                    <div class="d-flex align-items-center">
                                                                                                        <a class="target_url" href="#!" target="_blank"><b class="token-img-top">
                                                                                                            <svg class="icon tron-icon tron-token-icon tron-mr-10px" aria-hidden="true">
                                                                                                                <use xlink:href="#icon-icon-sun"></use></svg></b><span class="text-normal project-wid" style="color: inherit;">SUN.io</span></a>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell" style="text-align: left;">
                                                                                                    <div>
                                                                                                        <div class="target_url">
                                                                                                            <div class="defi-type"><span class="defi-type-item">DEX</span><span class="defi-type-item">Stablecoin</span><span class="defi-type-item">Farm</span></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell ant-table-cell-ellipsis cell-max-125 ant-table-column-sort" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span class="text-normal">$<span>350,331,125</span></span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell ant-table-cell-ellipsis cell-max-150" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span class="text-success">+0.23%</span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr class="ant-table-row ant-table-row-level-0" data-row-key="6">
                                                                                                <td class="ant-table-cell" style="text-align: left;">
                                                                                                    <div class="d-flex align-items-center">
                                                                                                        <a class="target_url" href="#!" target="_blank"><b class="token-img-top">
                                                                                                            <svg class="icon tron-icon tron-token-icon tron-mr-10px" aria-hidden="true">
                                                                                                                <use xlink:href="#icon-icon-btt"></use></svg></b><span class="text-normal project-wid" style="color: inherit;">BTT Staking Governance</span></a>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell" style="text-align: left;">
                                                                                                    <div>
                                                                                                        <div class="target_url">
                                                                                                            <div class="defi-type"><span class="defi-type-item">Governance</span></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell ant-table-cell-ellipsis cell-max-125 ant-table-column-sort" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span class="text-normal">$<span>47,412,135</span></span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell ant-table-cell-ellipsis cell-max-150" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span class="text-danger">-2.76%</span></div>
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
            <div class="transferBlockSec" style="padding-bottom: 5px;">
                <div class="container home-chart recent-panel">
                    <div class="header d-flex "><a class="title-wrap" href="#/data/analytics/stablecoin/overview"><span>Stablecoins</span></a></div>
                    <div class="content" style="border-radius: 6px;">
                        <div class="row-flex">
                            <div class="col-56 home-stablecoin-table">
                                <div class="card ">
                                    <div>
                                        <div class="token_black stablecoin_table">
                                            <div class="col-md-12 table_pos" style="padding: 0px;">
                                                <div>
                                                    <div class="smart-table-wrapper">
                                                        <div class="card table_pos ">
                                                            <div class="ant-table-wrapper">
                                                                <div class="ant-spin-nested-loading">
                                                                    <div class="ant-spin-container">
                                                                        <div class="ant-table">
                                                                            <div class="ant-table-container">
                                                                                <div class="ant-table-content">
                                                                                    <table style="table-layout: auto;">
                                                                                        <colgroup>
                                                                                            <col style="width: 32%;">
                                                                                        </colgroup>
                                                                                        <thead class="ant-table-thead">
                                                                                            <tr>
                                                                                                <th class="ant-table-cell" scope="col" style="text-align: left;">Stablecoin</th>
                                                                                                <th aria-sort="descending" class="ant-table-cell ant-table-column-sort ant-table-column-has-sorters" tabindex="0" scope="col" style="text-align: right;">
                                                                                                    <div class="ant-table-column-sorters">
                                                                                                        <span class="ant-table-column-title">
                                                                                                            <div>
                                                                                                                <span class="mr-1">
                                                                                                                    <div class="d-inline-block">
                                                                                                                        <div class="question-mark">
                                                                                                                            <svg class="icon tron-icon question-mark-icon" aria-hidden="true">
                                                                                                                                <use xlink:href="#icon-icon-ask"></use></svg>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </span>Circulating Supply
                                                                                                            </div>
                                                                                                        </span><span class="ant-table-column-sorter ant-table-column-sorter-full">
                                                                                                            <span class="ant-table-column-sorter-inner" aria-hidden="true"><span role="img" aria-label="caret-up" class="anticon anticon-caret-up ant-table-column-sorter-up">
                                                                                                                <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                                                                                    <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path></svg></span><span role="img" aria-label="caret-down" class="anticon anticon-caret-down ant-table-column-sorter-down active"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg></span></span></span>
                                                                                                    </div>
                                                                                                </th>
                                                                                                <th aria-label="" class="ant-table-cell ant-table-column-has-sorters" tabindex="0" scope="col" style="text-align: right;">
                                                                                                    <div class="ant-table-column-sorters">
                                                                                                        <span class="ant-table-column-title">
                                                                                                            <div>
                                                                                                                <span class="mr-1">
                                                                                                                    <div class="d-inline-block">
                                                                                                                        <div class="question-mark">
                                                                                                                            <svg class="icon tron-icon question-mark-icon" aria-hidden="true">
                                                                                                                                <use xlink:href="#icon-icon-ask"></use></svg>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </span>Volume (24h)
                                                                                                            </div>
                                                                                                        </span><span class="ant-table-column-sorter ant-table-column-sorter-full"><span class="ant-table-column-sorter-inner" aria-hidden="true"><span role="img" aria-label="caret-up" class="anticon anticon-caret-up ant-table-column-sorter-up">
                                                                                                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                                                                                <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path></svg></span><span role="img" aria-label="caret-down" class="anticon anticon-caret-down ant-table-column-sorter-down"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg></span></span></span>
                                                                                                    </div>
                                                                                                </th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody class="ant-table-tbody">
                                                                                            <tr class="ant-table-row ant-table-row-level-0" data-row-key="ant_table_stableUSDT">
                                                                                                <td class="ant-table-cell" style="text-align: left;">
                                                                                                    <div>
                                                                                                        <a class="target_url stable_coin_target_url" href="https://tronscan.org/#/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"><b class="token-img-top">
                                                                                                            <svg class="icon tron-icon tron-stable-token-icon" aria-hidden="true">
                                                                                                                <use xlink:href="#icon-icon-usdt"></use></svg><svg class="icon tron-icon tron-v-icon" aria-hidden="true"><use xlink:href="#icon-icon-v"></use></svg></b>
                                                                                                            <span class="d-inline-flex align-items-center"><span class="text-normal">Tether USD</span> <span class="defi-type-item">USDT</span></span></a>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell ant-table-column-sort" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span class="text-normal"><span>50,819,943,510</span></span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span>$<span>13,606,544,718</span></span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr class="ant-table-row ant-table-row-level-0" data-row-key="ant_table_stableTUSD">
                                                                                                <td class="ant-table-cell" style="text-align: left;">
                                                                                                    <div>
                                                                                                        <a class="target_url stable_coin_target_url" href="https://tronscan.org/#/token20/TUpMhErZL2fhh4sVNULAbNKLokS4GjC1F4"><b class="token-img-top">
                                                                                                            <svg class="icon tron-icon tron-stable-token-icon" aria-hidden="true">
                                                                                                                <use xlink:href="#icon-icon-tusd"></use></svg><svg class="icon tron-icon tron-v-icon" aria-hidden="true"><use xlink:href="#icon-icon-v"></use></svg></b><span class="d-inline-flex align-items-center"><span class="text-normal">TrueUSD</span> <span class="defi-type-item">TUSD</span></span></a>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell ant-table-column-sort" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span class="text-normal"><span>1,486,506,288</span></span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span>$<span>608,837,272</span></span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr class="ant-table-row ant-table-row-level-0" data-row-key="ant_table_stableUSDD">
                                                                                                <td class="ant-table-cell" style="text-align: left;">
                                                                                                    <div>
                                                                                                        <a class="target_url stable_coin_target_url" href="https://tronscan.org/#/token20/TPYmHEhy5n8TCEfYGqW2rPxsghSfzghPDn"><b class="token-img-top">
                                                                                                            <svg class="icon tron-icon tron-stable-token-icon" aria-hidden="true">
                                                                                                                <use xlink:href="#icon-icon-usdd"></use></svg><svg class="icon tron-icon tron-v-icon" aria-hidden="true">
                                                                                                                    <use xlink:href="#icon-icon-v"></use></svg></b><span class="d-inline-flex align-items-center"><span class="text-normal">Decentralized USD</span> <span class="defi-type-item">USDD</span></span></a>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell ant-table-column-sort" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span class="text-normal"><span>725,332,033</span></span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span>$<span>1,870,173</span></span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr class="ant-table-row ant-table-row-level-0" data-row-key="ant_table_stableUSDC">
                                                                                                <td class="ant-table-cell" style="text-align: left;">
                                                                                                    <div>
                                                                                                        <a class="target_url stable_coin_target_url" href="https://tronscan.org/#/token20/TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8"><b class="token-img-top">
                                                                                                            <svg class="icon tron-icon tron-stable-token-icon" aria-hidden="true">
                                                                                                                <use xlink:href="#icon-icon-usdc"></use></svg><svg class="icon tron-icon tron-v-icon" aria-hidden="true"><use xlink:href="#icon-icon-v"></use></svg></b><span class="d-inline-flex align-items-center"><span class="text-normal">USD Coin</span> <span class="defi-type-item">USDC</span></span></a>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell ant-table-column-sort" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span class="text-normal"><span>268,585,824</span></span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span>$<span>410,497,166</span></span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr class="ant-table-row ant-table-row-level-0" data-row-key="ant_table_stableUSDJ">
                                                                                                <td class="ant-table-cell" style="text-align: left;">
                                                                                                    <div>
                                                                                                        <a class="target_url stable_coin_target_url" href="https://tronscan.org/#/token20/TMwFHYXLJaRUPeW6421aqXL4ZEzPRFGkGT"><b class="token-img-top">
                                                                                                            <svg class="icon tron-icon tron-stable-token-icon" aria-hidden="true">
                                                                                                                <use xlink:href="#icon-icon-usdj"></use></svg>
                                                                                                            <svg class="icon tron-icon tron-v-icon" aria-hidden="true">
                                                                                                                <use xlink:href="#icon-icon-v"></use></svg></b><span class="d-inline-flex align-items-center"><span class="text-normal">JUST Stablecoin</span> <span class="defi-type-item">USDJ</span></span></a>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell ant-table-column-sort" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span class="text-normal"><span>153,774,114</span></span></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td class="ant-table-cell" style="text-align: right;">
                                                                                                    <div>
                                                                                                        <div class="target_url"><span>$<span>121,744</span></span></div>
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
                                                    <div class="home-view-link" style="width: auto;"><a href="#/data/analytics/stablecoin/overview">More<svg class="icon tron-icon tron-font-size-8px" aria-hidden="true"><use xlink:href="#icon-right-arrow"></use></svg></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-44 home-stablecoin-chart">
                                <div class="card-body pt-0">
                                    <div style="min-width: 305px; height: auto; min-height: 280px;">
                                        <div>
                                            <div class="stablecoin-title-wrap home-title-wrap en-stablecoin-title-wrap mb-5">
                                                <div class="title-wrap">
                                                    <span class="title">Volume (24h)</span>
                                                    <span class="ml-1">
                                                        <div class="d-inline-block">
                                                            <div class="question-mark">
                                                                <svg class="icon tron-icon question-mark-icon" aria-hidden="true">
                                                                    <use xlink:href="#icon-icon-ask"></use>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div class="amount">$15,031,961,229</div>
                                            </div>
                                            <div style="height: 312px;">
                                                <div id="chartId_home_stablecoin" class="echarts-dom-class" _echarts_instance_="ec_1705668084169" style="user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); position: relative;">
                                                    <div style="position: relative; width: 100%; height: 312px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
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
            <div class="transferBlockSec d-none" style="padding-bottom: 0px;">
                <div class="container home-chart home-statistics">
                    <div class="header d-flex"><a class="title-wrap" href="#/data/charts"><span>Statistics</span></a></div>
                    <div class="content">
                        <div class="home-accounts">
                            <div class="title-container">
                                <span class="active-title title">Active Accounts</span><span class="divide-line">/</span><span class="title">New Accounts</span>
                                <span class="divide-line">/</span><span class="title">Total Accounts</span><div class="d-flex align-items-center ">
                                    <div class="ant-dropdown-trigger camera-icon">
                                        <svg class="icon tron-icon tron-icon-camera false" aria-hidden="true">
                                            <use xlink:href="#icon-icon-xiazaitupian"></use></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="home-account-chart d-flex align-items-center justify-content-center" style="height: 224px;">
                                <div id="chart-container2"></div>


                                <%--  --%>
                                <%--  --%>
                                <%--  --%>
                                <%--  --%>
                                <%--  --%>
                                <%--  --%>
                                <%--  --%>
                                <%--  --%>
                                <%--  --%>
                                <%--  --%>
                                <%--  --%>
                            </div>
                            <div class="gap-row-line"></div>
                            <div class="recent-data">
                                <ul>
                                    <li>
                                        <h2 class="indicators">Active Accounts (Yesterday)</h2>
                                        <div class="indicators-content"><span class="indicators-data">1,889,417</span><span class="indicators-percent"><span class="reduce"> -3.82%</span></span></div>
                                    </li>
                                    <li>
                                        <h2 class="indicators">Average Active Accounts (Past 1 month)</h2>
                                        <div class="indicators-content"><span class="indicators-data">1,889,280</span></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="home-protocol-income">
                            <div class="title-container">
                                <span class="active-title title">Protocol Revenue</span><div class="d-flex align-items-center ">
                                    <div class="ant-dropdown-trigger camera-icon">
                                        <svg class="icon tron-icon tron-icon-camera false" aria-hidden="true">
                                            <use xlink:href="#icon-icon-xiazaitupian"></use></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="home-protocol-chart d-flex align-items-center justify-content-center">
                                <div id="chart3" style="height: 220px;"></div>
                            </div>
                            <div class="gap-row-line"></div>
                            <div class="recent-data">
                                <ul>
                                    <li>
                                        <h2 class="indicators">Protocol Revenue (Yesterday)</h2>
                                        <div class="indicators-content">
                                            <span class="indicators-data">$1,290,839</span><span class="indicators-percent"><span class="reduce"> -2.73%</span></span>
                                        </div>

                                    </li>
                                    <li>
                                        <h2 class="indicators">Total Protocol Revenue</h2>
                                        <div class="indicators-content">
                                            <span class="indicators-data">$794,696,379</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container TIX-charts-wrap  d-none">
                <div class="home-supply-wrap">
                    <div class="home-supply-container">
                        <div class="home-supply-title">
                            <div class="home-supply-title-left">
                                <div class="home-supply-title-text active">TIX Supply</div>
                                <div class="home-supply-title-split">/</div>
                                <div class="home-supply-title-text false">TIX Net Increase</div>
                                <div class="d-flex align-items-center ">
                                    <div class="ant-dropdown-trigger camera-icon">
                                        <svg class="icon tron-icon tron-icon-camera false" aria-hidden="true">
                                            <use xlink:href="#icon-icon-xiazaitupian"></use></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="home-supply-title-right">
                                <div class="home-supply-title-btns">
                                    <div class="home-supply-title-btn active">2W</div>
                                    <div class="home-supply-title-btn false">1M</div>
                                    <div class="home-supply-title-btn false">6M</div>
                                </div>
                            </div>
                        </div>
                        <div class="home-supply-chart">
                            <div id="chart" style="height: 220px;"></div>
                        </div>
                        <div class="gap-row-line"></div>
                        <div class="home-supply-footer">
                            <div class="home-supply-overview">
                                <div class="home-supply-overview-title">TIX Supply</div>
                                <div class="home-supply-overview-data"><span class="home-supply-overview-data-num">88,214,395,995</span><span class="home-supply-overview-data-tag"></span></div>
                            </div>
                            <div class="home-supply-overview">
                                <div class="home-supply-overview-title">
                                    Annualized Inflation Rate<div class="d-inline-block">
                                        <div class="question-mark">
                                            <svg class="icon tron-icon question-mark-icon" aria-hidden="true">
                                                <use xlink:href="#icon-icon-ask"></use></svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="home-supply-overview-data"><span class="home-supply-overview-data-num"><span class="reduce">-2.57%</span><span class="indicators-desc">Deflation</span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="home-supply-wrap">
                    <div class="home-staked-container">
                        <div class="home-staked-title">
                            <div class="home-staked-title-left">
                                <div class="home-staked-title-text active">TIX Staked</div>
                                <div class="home-staked-title-split">/</div>
                                <div class="home-staked-title-text false">TIX Staking Rate</div>
                                <div class="d-flex align-items-center ">
                                    <div class="ant-dropdown-trigger camera-icon">
                                        <svg class="icon tron-icon tron-icon-camera false" aria-hidden="true">
                                            <use xlink:href="#icon-icon-xiazaitupian"></use></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="home-staked-title-right">
                                <div class="home-staked-title-legend "><span class="home-staked-title-legend-circle home-staked-title-legend-circle-blue"></span>Stake 2.0</div>
                                <div class="home-staked-title-legend "><span class="home-staked-title-legend-circle home-staked-title-legend-circle-red "></span>Stake 1.0</div>
                            </div>
                        </div>
                        <div class="home-staked-chart">
                            <div style="height: 218px;">
                                <div id="chart_home_trx_staked" class="echarts-dom-class" _echarts_instance_="ec_1705556095509" style="user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); position: relative;">
                                    <div style="position: relative; height: 218px; padding: 0px; margin: 0px; border-width: 0px;">
                                        <canvas data-zr-dom-id="zr_0" height="218" style="position: absolute; left: 0px; top: 0px; height: 218px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
                                    </div>
                                    <div class="echart-tooltip-wrapper"></div>
                                </div>
                            </div>
                        </div>
                        <div class="gap-row-line"></div>
                        <div class="home-staked-footer">
                            <div class="home-staked-overview">
                                <div class="home-staked-overview-title">TIX Staked</div>
                                <div class="home-staked-overview-data"><span class="home-staked-overview-data-num">46,109,646,357</span></div>
                            </div>
                            <div class="home-staked-overview">
                                <div class="home-staked-overview-title">Stake 2.0</div>
                                <div class="home-staked-overview-data"><span class="home-staked-overview-data-num">14,552,204,390</span><span class="home-staked-overview-data-tag"><span style="color: rgb(115, 120, 123);">(31.56%)</span></span></div>
                            </div>
                            <div class="home-staked-overview">
                                <div class="home-staked-overview-title">Stake 1.0</div>
                                <div class="home-staked-overview-data"><span class="home-staked-overview-data-num">31,557,441,967</span><span class="home-staked-overview-data-tag"><span style="color: rgb(115, 120, 123);">(68.44%)</span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-view-more">
                <a href="#/data/charts">
                    <span>View More Data</span>
                    <svg class="icon tron-icon tron-font-size-8px" aria-hidden="true">
                        <use xlink:href="#icon-right-arrow"></use></svg></a>
            </div>


        </main>

    </div>










    <style>
        .home-stablecoin-chart canvas {
            width: 460px !important;
            height: 350px !important;
        }
        .raphael-group-eKyqsEsR {
            display: none !important;
        }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.2.2/echarts.min.js"></script>


    <script src="assets/js/Charts.js"></script>


    

       
    </script>
    <script>
        
    </script>

</asp:Content>

