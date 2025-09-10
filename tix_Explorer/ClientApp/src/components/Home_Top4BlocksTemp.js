import React, { useState, useEffect } from 'react';
//import Connector from './SignalRConnector';


function Hometop4blocks() {
    const { SubscribeIf} = Connector();
   
    const [Fourbks, setFourbks] = useState([{ bk: undefined, ts: undefined, txcnt: undefined, rwd: undefined, bngas: undefined, miner:undefined   }]);
    //const [FourTxs, setFourTxs] = useState([{ bk: undefined, ts: undefined, txcnt: undefined, rwd: undefined, bngas: undefined, miner: undefined }]);

    useEffect((onIndexfeed) => { SubscribeIf((_, message) => {
            let j = JSON.parse(message);
            j = j.Table1;
            console.log(j);
            setFourbks(j.map(object => ({
                //  only use these fields for newData
                bk: object.blocknumber, 
                miner: object.miner,
                ts: object.timestamp,
                txcnt: object.txncounts,
                rwd: object.rewards,
                bngas: object.burntfees
            })));
        })
    });
    
    return (
        <div className="parent_container">
            <div className="container home-chart">
                <div className="home-block-wrap">
                    <div className="block-title">
                        <div className="block-title-left">
                            <a href="#/blockchain/blocks">
                                <span>
                                    <span>Blocks</span>
                                </span>
                            </a>

                        </div>
                        <a className="block-more" href="#/blockchain/blocks">
                            <span><span>More</span></span>
                            <svg className="icon tron-icon tron-font-size-8px" aria-hidden="true">
                                <use xlinkHref="#icon-right-arrow"></use>
                            </svg>
                        </a>

                    </div>
                    <div className="home-block-content-wrap">
                        <div className="home-block-list-wrap">
                            <div className="home-block-list-main ">
                                <div className="home-block-list">
                                    {Fourbks.map(block =>
                                        <div className="block-item ">
                                            <div>
                                                <div className="block-top">
                                                    <a className="block-number"
                                                        href={"#/block/" + block.bk}>#<span>{block.bk}</span></a>
                                                    <a className="block-producer"
                                                        href={"#/address/" + block.miner}>
                                                        <span>{block.miner}</span>
                                                        <svg className="icon tron-icon tron-arrow-icon"
                                                            aria-hidden="true">
                                                            <use xlinkHref="#icon-right-arrow"></use>
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div className="block-time">
                                                    <div className="token_black table_pos">
                                                        <div>6 secs ago</div>
                                                    </div>
                                                    <div><b>{block.txcnt} <span>Txns</span></b></div>
                                                </div>
                                                <div className="block-detail">
                                                    <div
                                                        className="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <span>Reward</span> <b>0 TXH</b>
                                                        </div>
                                                        <div>
                                                            <svg className="icon tron-icon tron-icon-fire"
                                                                aria-hidden="true">
                                                                <use xlinkHref="#icon-icon-fire"></use>
                                                            </svg>
                                                            <b>0 TXH</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                 

                                </div>
                                <div className="home-block-list">
                                    <div className="block-item undefined">
                                        <div>
                                            <div className="block-top"><a className="block-number"
                                                href="#/block/58308239">#58308239</a><a
                                                    className="block-producer"
                                                    href="#/address/TJvaAeFb8Lykt9RQcVyyTFN2iDvGMuyD4M"><span>Poloniex</span><svg
                                                        className="icon tron-icon tron-arrow-icon"
                                                        aria-hidden="true">
                                                        <use xlinkHref="#icon-right-arrow"></use>
                                                    </svg></a></div>
                                            <div className="block-time">
                                                <div className="token_black table_pos">
                                                    <div>18 secs ago</div>
                                                </div>
                                                <div><b>255 <span>Txns</span></b></div>
                                            </div>
                                            <div className="block-detail">
                                                <div
                                                    className="d-flex justify-content-between align-items-center">
                                                    <div><span>Reward</span> <b>176 TXH</b></div>
                                                    <div>
                                                        <svg className="icon tron-icon tron-icon-fire"
                                                            aria-hidden="true">
                                                            <use xlinkHref="#icon-icon-fire"></use>
                                                        </svg><b>407.5547 TXH</b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-item undefined">
                                        <div>
                                            <div className="block-top"><a className="block-number"
                                                href="#/block/58308238">#58308238</a><a
                                                    className="block-producer"
                                                    href="#/address/TDpt9adA6QidL1B1sy3D8NC717C6L5JxFo"><span>Chain
                                                        Cloud</span><svg
                                                            className="icon tron-icon tron-arrow-icon"
                                                            aria-hidden="true">
                                                        <use xlinkHref="#icon-right-arrow"></use>
                                                    </svg></a></div>
                                            <div className="block-time">
                                                <div className="token_black table_pos">
                                                    <div>21 secs ago</div>
                                                </div>
                                                <div><b>273 <span>Txns</span></b></div>
                                            </div>
                                            <div className="block-detail">
                                                <div
                                                    className="d-flex justify-content-between align-items-center">
                                                    <div><span>Reward</span> <b>176 TXH</b></div>
                                                    <div>
                                                        <svg className="icon tron-icon tron-icon-fire"
                                                            aria-hidden="true">
                                                            <use xlinkHref="#icon-icon-fire"></use>
                                                        </svg><b>840.90378 TXH</b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-item undefined">
                                        <div>
                                            <div className="block-top">
                                                <a className="block-number"
                                                    href="#/block/58308237">#58308237</a><a
                                                        className="block-producer"
                                                        href="#/address/TMafrJCuNoYq3mg9dDThfg7c9VP6enZN6j">
                                                    <span>metaverse home</span>
                                                    <svg className="icon tron-icon tron-arrow-icon"
                                                        aria-hidden="true">
                                                        <use xlinkHref="#icon-right-arrow"></use>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div className="block-time">
                                                <div className="token_black table_pos">
                                                    <div>24 secs ago</div>
                                                </div>
                                                <div><b>162 <span>Txns</span></b></div>
                                            </div>
                                            <div className="block-detail">
                                                <div
                                                    className="d-flex justify-content-between align-items-center">
                                                    <div><span>Reward</span> <b>176 TXH</b></div>
                                                    <div>
                                                        <svg className="icon tron-icon tron-icon-fire"
                                                            aria-hidden="true">
                                                            <use xlinkHref="#icon-icon-fire"></use>
                                                        </svg><b>362.49282 TXH</b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-item undefined">
                                        <div>
                                            <div className="block-top"><a className="block-number"
                                                href="#/block/58308236">#58308236</a><a
                                                    className="block-producer"
                                                    href="#/address/TAAdjpNYfeJ2edcETNpad1QpQWJfyBdB9V"><span>Ant
                                                        Investment Group</span><svg
                                                            className="icon tron-icon tron-arrow-icon"
                                                            aria-hidden="true">
                                                        <use xlinkHref="#icon-right-arrow"></use>
                                                    </svg></a></div>
                                            <div className="block-time">
                                                <div className="token_black table_pos">
                                                    <div>27 secs ago</div>
                                                </div>
                                                <div><b>210 <span>Txns</span></b></div>
                                            </div>
                                            <div className="block-detail">
                                                <div
                                                    className="d-flex justify-content-between align-items-center">
                                                    <div><span>Reward</span> <b>176 TXH</b></div>
                                                    <div>
                                                        <svg className="icon tron-icon tron-icon-fire"
                                                            aria-hidden="true">
                                                            <use xlinkHref="#icon-icon-fire"></use>
                                                        </svg>
                                                        <b>570.70826 TXH</b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block-bg-animate-wrap">
                            <div>
                                <div className="slider-move"></div>
                            </div>
                        </div>
                        <div className="block-list-mask block-list-after mask-opacity">
                            <span className="">
                                <svg className="icon tron-icon tron-arrow-icon" aria-hidden="true">
                                    <use xlinkHref="#icon-right-arrow"></use>
                                </svg>
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );

}


export default Hometop4blocks;