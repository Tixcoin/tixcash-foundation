import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import AgeCount from './_ageAgo';

function Home_Top4Blocks(props) {
   
    const [Fourbks, setFourbks] = useState([{ bk: undefined, ts: undefined, txcnt: undefined, rwd: undefined, bngas: undefined, miner: undefined }, { bk: undefined, ts: undefined, txcnt: undefined, rwd: undefined, bngas: undefined, miner: undefined }, { bk: undefined, ts: undefined, txcnt: undefined, rwd: undefined, bngas: undefined, miner: undefined }, { bk: undefined, ts: undefined, txcnt: undefined, rwd: undefined, bngas: undefined, miner: undefined }]);
    //const [FourTxs, setFourTxs] = useState([{ bk: undefined, ts: undefined, txcnt: undefined, rwd: undefined, bngas: undefined, miner: undefined }]);
   // console.log(props);
    
    useEffect(() => {
        if (props && props.bks)
            setFourbks((props.bks.map(object => ({
                //  only use these fields for newData
                bk: object.blocknumber,
                miner: object.miner,
                ts: object.timestamp,
                txcnt: object.txncounts,
                rwd: object.rewards,
                bngas: object.burntfees
            }))));
    }, [props]); // empty array means only once


       
    
    
    return (
        <div className="parent_container">
            <div className="container home-chart">
                <div className="home-block-wrap">
                    <div className="block-title">
                        <div className="block-title-left">
                           
                                <span>
                                    <span>Blocks</span>
                                </span>
                         
                        </div>
                        <Link to='/blocks' className="block-more" >
                            <span>More</span>
                            <svg className="icon tron-icon tron-font-size-8px" aria-hidden="true">
                                <use xlinkHref="#icon-right-arrow"></use>
                            </svg>
                        </Link> 
                       
                    </div>
                    <div className="home-block-content-wrap">
                        <div className="home-block-list-wrap">
                            <div className="home-block-list-main ">
                                <div className="home-block-list">
                                    {Fourbks.map(block =>
                                        <div className="block-item ">
                                            <div>
                                                <div className="block-top">
                                                    
                                                   
                                                    <Link to={"/block/" + block.bk} className="block-number">
                                                        #<span>{block.bk} </span>
                                                    </Link>
                                                    <Link to={"/address/" + block.miner} className="block-producer">
                                                        <span>{block.miner}</span>
                                                        <svg className="icon tron-icon tron-arrow-icon"
                                                            aria-hidden="true">
                                                            <use xlinkHref="#icon-right-arrow"></use>
                                                        </svg>
                                                    </Link>

                                                   
                                                </div>
                                                <div className="block-time">
                                                    
                                                    <div className="token_black table_pos">
                                                        <div>
                                                            {block.ts ? <AgeCount unixseconds={block.ts} />: <></>}   
                                                        </div>
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


export default Home_Top4Blocks;