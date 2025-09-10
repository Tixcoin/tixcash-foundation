import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export class Footer extends Component {
    static displayName = Footer.name;

    constructor(props) {
        super(props);

        this.state = {
            collapsed: true,
            isTranslatorOpen: false
        };
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    toggleTranslator = () => {
        this.setState(prevState => ({
            isTranslatorOpen: !prevState.isTranslatorOpen
        }));
    };

    render() {
        return (
            <div className="footer-compontent pb-0 footer-new">
                <div className="pt-5 home-footer">
                    <div className="footer-container-wrapper">
                        <div className="footerContainer container">
                            <div className="text-center text-xs-center text-sm-left text-md-left d-md-flex col-md-12">
                                <div>
                                    <div className="footer-slogan ">
                                        <img alt="TXH" src="assets/img/logo.png" />
                                        <p className="footer-slogan-desc">
                                            Tixcash Explorer is a Block Explorer for Tixcash Chain.
                                        </p>
                                        <p className="footer-slogan-desc mb-4">
                                            <span>To support Tixcash network</span><br/>
                                            <span>Donation channel </span>
                                        </p>
                                        <p className="footer-slogan-desc">
                                            <span>USDT/USDC (Bep20) Address: </span> <br/>
                                                0xD0a18f537CDbD43ddEd871747E344b14aDf8B1d5
                                        </p>
                                        <p className="footer-slogan-desc align-left" style={{display:'none'}}>
                                            <span>Tixcash:<br /></span> GUP1URKg48qDuvrz7t6BJWtbWyCKtue4gz
                                        </p>
                                        <ul className="d-flex medium mb-4 mb-md-0 align-items-center">
                                            <li className="telegram">
                                                <a href="https://t.me/www_Tixcash_org" target="_blank" rel="noreferrer">
                                                    <i className="iconfont iconfont icon-telegram1" style={{ fontSize: '18px' }}></i>
                                                </a>
                                            </li>
                                            <li className="telegram">
                                                <a href="https://x.com/tixcash?t=mQdUj2ep56wRzUkNbvqhZQ&s=09" target="_blank" rel="noreferrer">
                                                    <i className="iconfont iconfont icon-twitter1" style={{ fontSize: '18px' }}></i>
                                                </a>
                                            </li>
                                            <li className="telegram">
                                                <a href="https://www.instagram.com/tixcash?igsh=MXB3a25jdnEyOTJhcA==" target="_blank" rel="noreferrer">
                                                    <i className="iconfont iconfont icon-instagram"></i>
                                                </a>
                                            </li>
                                            <li className="telegram">
                                                <a href="/#" target="_blank" rel="noreferrer">
                                                    <i className="iconfont iconfont icon-discord"></i>
                                                </a>
                                            </li>
                                            <li className="telegram">
                                                <a href="https://github.com/tixcoin" target="_blank" rel="noreferrer">
                                                    <i className="iconfont iconfont icon-github"></i>
                                                </a>
                                            </li>
                                            <li className="telegram">
                                                <a href="https://www.facebook.com/tixcashtxh?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
                                                    <i className="iconfont iconfont icon-facebook" style={{ fontSize: '29px' }}></i>
                                                </a>
                                            </li>
                                            <li className="telegram">
                                                <a href="https://bitcore.io" target="_blank" rel="noreferrer">
                                                    <div className="icon-el">
                                                        <img src="assets/img/btcoreicon.png" className="img-fluid" alt="bitcore" />
                                                    </div>
                                                </a>
                                            </li><li className="telegram">
                                                <a href="https://tixcash.org" target="_blank" rel="noreferrer">
                                                    <div className="icon-el">
                                                        <img src="assets/img/fav_logo.png" className="img-fluid" alt="bitcore" />
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="d-md-flex flex-wrap">
                                    <div className="aboutUsWrapper d-flex flex-col">
                                        <ul className="list-unstyled quick-links d-flex gap-5 align-items-start">
                                            <li className="quick-links-li text-capitalize">
                                                <h5 className="text-capitalize">
                                                    <a href="https://explorer.btc.com/en" target="_blank" rel="noreferrer"> <img src="assets/img/btc_icon.png" className="img-fluid" alt="bitcoin" width="22" /></a>
                                                </h5>
                                            </li>
                                            <li className="quick-links-li text-capitalize">
                                                <h5 className="text-capitalize">
                                                    <a href="https://etherscan.io/" target="_blank" rel="noreferrer"> <img src="assets/img/eth_icon.png" className="img-fluid" alt="eth" width="22" /></a>
                                                </h5>
                                            </li>
                                            <li className="quick-links-li">
                                                <h5 className="text-capitalize">
                                                    <a href="https://bscscan.com/" target="_blank" rel="noreferrer"> <img src="assets/img/bsc_icon.png" className="img-fluid" alt="bsc" width="22" /></a>
                                                </h5>
                                            </li>
                                            <li className="quick-links-li">
                                                <h5 className="text-capitalize">
                                                    <a href="https://litecoinblockexplorer.net/" target="_blank" rel="noreferrer"> <img src="assets/img/ltc_icon.png" className="img-fluid" alt="ltc" width="22" /></a>
                                                </h5>
                                            </li>
                                            <li className="quick-links-li">
                                                <h5 className="text-capitalize">
                                                    <a href="https://explorer.bnbchain.org/" target="_blank" rel="noreferrer"> <img src="assets/img/bnbchain-logo.png" className="img-fluid" alt="bnb" width="22" /></a>
                                                </h5>
                                            </li>
                                            <li className="quick-links-li">
                                                <h5 className="text-capitalize">
                                                    <a href="https://www.omniexplorer.info/asset/31" target="_blank" rel="noreferrer"> <img src="assets/img/omni_icon.png" className="img-fluid" alt="omni" width="22" /></a>
                                                </h5>
                                            </li>
                                        </ul>
                                       
                                    </div>
                                    <div className="aboutUsWrapper sm-ml-1">
                                        <h5 className="text-capitalize">
                                            <span>About Us</span>
                                        </h5>
                                        <ul className="list-unstyled">
                                            <li className="quick-links-li text-capitalize">
                                                <h5 className="text-capitalize">
                                                    <span>Privacy Policy</span>
                                                </h5>
                                            </li>
                                            <li className="quick-links-li">
                                                <h5 className="text-capitalize">
                                                    <span>Terms of Services</span>
                                                </h5>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                    <div className="supportHelpWrapper mt-20px">
                                        <h5 className="text-capitalize"><span>Resources</span></h5>
                                        <ul className="list-unstyled quick-links">
                                            <li className="quick-links-li text-capitalize"><a href="/#" rel="noreferrer">TXH ETF</a></li>
                                            <li className="quick-links-li text-capitalize"><a href="/#" target="_blank" rel="noreferrer"><span>Tixcash white paper</span></a></li>
                                            <li className="quick-links-li"><a href="/#"  rel="noreferrer"><span>Tixcash Foundation</span></a></li>
                                            <li className="quick-links-li"><Link to="/voting"  rel="noreferrer"><span>Voting</span></Link></li>
                                            <li className="quick-links-li"><Link to="/donation"  rel="noreferrer"><span>Donation</span></Link></li>
                                            
                                        </ul>
                                    </div>
                                    <div className="supportHelpWrapper mt-20px">
                                        <h5 className="text-capitalize"><span>Services &amp; Support</span></h5>
                                        <ul className="list-unstyled quick-links">
                                            <li className="quick-links-li text-capitalize">
                                                <a href="#/developer/api"><span>API</span></a>
                                            </li>
                                            <li className="quick-links-li text-capitalize">
                                                <a href="#/adIntroduction"><span>Advertise</span></a>
                                            </li>
                                            <li className="quick-links-li text-capitalize">
                                                <a href="#/tools/contactUs"><span>Contact Us</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright footerCopyrightWrapper">
                            <div className="row footerContainer container copyrightFooterContainer">
                                <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                                    <div className="d-flex">
                                        <span className="text mr-3">Copyright &#169; 2022-2024 Tixcash Released under the MIT license</span>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 text-center"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*{this.state.isTranslatorOpen && (*/}
                {/*    <Translator onClose={this.toggleTranslator} />*/}
                {/*)}*/}

                

            </div>
        );
    }
}
