import { React, Component, createRef } from 'react';
import { Link } from "react-router-dom";
import './sidebar.css';
import { Login } from './login';
import { Registration } from './registeration';
import Notification from './Notification';
import TranslatorComp from './translator';


export class Header extends Component {
    static displayName = Header.name;

    constructor(props) {
        //debugger;
        super(props);
        //this.networkchange = this.networkchange.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.sidebarRef = createRef();
        this.state = {
            timer: null,
            collapsed: true,
            sidebarVisible: false,
            price: null,
            loading: true,
            isloginVisible: false,
            isRegisterVisible: false,
            isNumberVisible: false,
            isloggedIn: (localStorage.getItem("email") && localStorage.getItem("token")),
            initial: (localStorage.getItem("email") && localStorage.getItem("token")) ? localStorage.getItem("email").substring(0, 1).toUpperCase() : '',
            notifications: [],
            currentNotification: 0,
            showNotification: true,
            openSubmenu: null,
            settings: { addFormat: (localStorage.getItem("addFormat") ? localStorage.getItem("addFormat") : '') }

        };
        this.toggleLogin = this.toggleLogin.bind(this);

        if ((localStorage.getItem("email") && localStorage.getItem("token")))
            this.state.timer = setInterval(() => { this.validateAuth() }, 900);
        else {
            if (this.state.timer) clearInterval(this.state.timer);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    validateAuth = async () => {
        console.log('Validating');
        if (!(localStorage.getItem("email") && localStorage.getItem("token"))) {
            if (this.state.timer) clearInterval(this.state.timer);
            this.dologgedOut();
        }
    };

    async populateData() {
        const headers = { 'Content-Type': 'text/plain' }
        const response = await fetch('https://explorerapi.tixcash.org/api/V3/getprice', { headers });
        const data = await response.json();
            
    }

    componentDidMount() {
        if (this.props.isOpen) {
            document.addEventListener('mousedown', this.handleClickOutside);
        }
        // this.populateData();
        this.interval = setInterval(this.changeNotification, 5000);

        fetch('https://explorerapi.tixcash.org/api/V3/getprice', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ price: data.price, loading: false });
            })
            .catch((error) => {
                console.error('Error fetching price:', error);
            });

        // this.unlisten = this.props.history.listen(this.closeSidebar);


    }

    changeNotification = () => {
        this.setState({ showNotification: false });
        setTimeout(() => {

            fetch('https://explorerapi.tixcash.org/api/v3/genotification', {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7'
                }
            })
                .then((response) => response.json())
                .then((data) => {
               //     debugger;
                    this.setState((prevState) => ({
                        notifications: data.data,
                        showNotification: true
                    }));
                })
                .catch((error) => {
                    console.error('Error fetching price:', error);
                });

            
        }, 500);
    };

    //componentDidUpdate(prevProps) {
    //    if (this.props.location !== prevProps.location) {
    //        this.setState({ sidebarVisible: false });
    //    }
    //    if (this.props.isOpen && !prevProps.isOpen) {
    //        document.addEventListener('mousedown', this.handleClickOutside);
    //    } else if (!this.props.isOpen && prevProps.isOpen) {
    //        document.removeEventListener('mousedown', this.handleClickOutside);
    //    }
    //}


    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
            timer: this.state.timer
        });
    }



    networkchange = (n) => {
        localStorage.setItem('FEEDINDEXNETWORK', n === "main" ? process.env.REACT_APP_HUB_ADDRESS_MAINNET_INDEX : process.env.REACT_APP_HUB_ADDRESS_TESTNET_INDEX)
        localStorage.setItem('FEEDTXNSNETWORK', n === "main" ? process.env.REACT_APP_HUB_ADDRESS_MAINNET_TXNS : process.env.REACT_APP_HUB_ADDRESS_TESTNET_TXNS)
        localStorage.setItem('FEEDBKSNETWORK', n === "main" ? process.env.REACT_APP_HUB_ADDRESS_MAINNET_BKS : process.env.REACT_APP_HUB_ADDRESS_TESTNET_BKS)

        window.location.reload();
    };

    toggleLogin = () => {
        this.setState(prevState => ({
            isloginVisible: !prevState.isloginVisible,
            timer: this.state.timer
        }));
        localStorage.removeItem("email");
        localStorage.removeItem("token");
    }

    toggleSidebar = () => {
        this.setState(prevState => ({
            sidebarVisible: !prevState.sidebarVisible,
            timer: this.state.timer
        }));
    }
    handleClose = () => {
        if (this.state.timer) clearInterval(this.state.timer);
        this.setState(prevState => ({
            isloginVisible: false,
            isRegisterVisible: false,
            isNumberVisible: false,
            isloggedIn: false,
            initial: '',
            timer : this.state.timer
        }));
    };

    LoggedIn200K = () => {
        this.setState(prevState => ({
            isloginVisible: false,
            isRegisterVisible: false,
            isNumberVisible: false,
            isloggedIn: true,
            initial: localStorage.getItem("email").substring(0, 1).toUpperCase(),
            timer: this.state.timer
        }));
        if ((localStorage.getItem("email") && localStorage.getItem("token")))
            this.state.timer = setInterval(() => { this.validateAuth() }, 800);
    };

    dologgedOut = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        this.handleClose();
    };

    handleRegister = () => {
        this.setState(prevState => ({
            isRegisterVisible: !prevState.isRegisterVisible,
            timer: this.state.timer
        }))
        localStorage.removeItem("email");
        localStorage.removeItem("token");

    }
    handleNumberLogin = () => {
        this.setState(prevState => ({
            isNumberVisible: !prevState.isNumberVisible,
            timer: this.state.timer
        }))
    }
    closeSidebar = (event) => {
        event.stopPropagation();
        this.setState(() => ({
            sidebarVisible: false,
            isloggedIn: false,
            initial: '',
            timer: this.state.timer
        }))
    }

    toggleSubmenu = (menu, event) => {
        event.stopPropagation(); // Prevents the event from bubbling up to the parent

        this.setState((prevState) => ({
            openSubmenu: prevState.openSubmenu === menu ? null : menu
        }));
    };

    //toggleSubmenu = (menu, event) => {
    //    //event.stopPropagation();
    //    this.setState((prevState) => ({
    //        openSubmenu: prevState.openSubmenu === menu ? null : menu
    //    }));
       
    //};
    toggleTranslator = (event) => {
        event.stopPropagation(); // Prevents the event from bubbling up to the parent
        this.setState((prevState) => ({ isTranslatorOpen: !prevState.isTranslatorOpen }));
    };;

    setAddFormat = (v) => {
        localStorage.setItem("addFormat",v);
        this.setState(prevState => ({
            settings: { addFormat: (localStorage.getItem("addFormat") ? localStorage.getItem("addFormat") : '') }
        }));
       
    };

    render() {
        const { sidebarVisible } = this.state;
        const { price, loading } = this.state;
        const { notifications, currentNotification, showNotification } = this.state;
        const { openSubmenu } = this.state;
        return (


            <div className="language-en header-top nav-item-page">
                {this.state.isloginVisible && (
                    <Login onClose={this.handleClose} onLogout={this.dologgedOut} onRegister={this.handleRegister} onSuccess={this.LoggedIn200K} onNumber={this.handleNumberLogin} />
                )}
                {this.state.isRegisterVisible && (
                    <Registration onClose={this.handleClose} onLogin={this.toggleLogin} />
                )}

                <div  className="sticky-nav-wrapper"> 
                    <div className="logo-wrapper top-logo-wrapper">
                        <div className="d-flex px-0 menu-nav-wrapper">
                            <div className="navContainerSec">
                                <div className="mobileFlexible">
                                    <a href="/home">
                                        <img alt="TXH" src="assets/img/logo.png" className="logoNoPrice" />

                                        <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/coinPriceBlock.js"></script>
                                        <div id="coinmarketcap-widget-coin-price-block" coins="3890" currency="USD" theme="light" transparent="true" show-symbol-logo="false"> {loading ? (
                                            <p>Loading...</p>
                                        ) : (
                                            <p>TXH Value: {price}</p>
                                        )}</div>

                                    </a>

                                </div>
                                <section className="nav-bar-section">
                                    <div className="new-menu-List">
                                        <nav className="top-header-bar navbar navbar-expand-md navbar-dark">
                                            <div className="collapse navbar-collapse" id="navbar-top">
                                                <ul className="navbar-nav single-language-navbar-nav">
                                                    <li>
                                                        <a className="nav-link home-link active" aria-current="page" href="/home">
                                                            <span className="menu-active-tile-border menu-active-tilte-pc">
                                                                <span>Home</span>
                                                                <span className="menu-active-bottom-border"></span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                   
                                                    <li className="nav-item dropdown">
                                                        <div>
                                                            <span>
                                                                <span className="nav-link text-capitalize" data-toggle="dropdown">
                                                                    <span className="">
                                                                        <span>Blockchain</span>
                                                                        <span className="menu-active-bottom-border"></span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <div className="dropdown-menu flex-wrap dropdown-menu-network">
                                                                <div className="d-flex">
                                                                    <div className="multi-menu-dropdown">
                                                                        <Link to='/nodes' className="dropdown-item text-capitalize" >
                                                                            <span>  <span>Nodes</span>  </span>
                                                                        </Link>
                                                                       
                                                                        <Link to='/blocks' className="dropdown-item text-capitalize" >
                                                                            <span>  <span>Blocks</span>  </span>
                                                                        </Link>

                                                                        <Link to='/accounts' className="dropdown-item text-capitalize" >
                                                                            <span>  <span>Accounts</span>  </span>
                                                                        </Link>

                                                                    </div>
                                                                    <div className="multi-menu-dropdown">
                                                                        <Link to='/contracts' className="dropdown-item text-capitalize" >
                                                                            <span>  <span>Contracts</span>  </span>
                                                                        </Link>
                                                                        <Link to='/transfers' className="dropdown-item text-capitalize" >
                                                                            <span>  <span>Transfers</span>  </span>
                                                                        </Link>

                                                                        <Link to='/transactions' className="dropdown-item text-capitalize" >
                                                                            <span>  <span>Transactions</span>  </span>
                                                                        </Link>

                                                                    </div>
                                                                </div>
                                                                {/*<div>*/}
                                                                {/*    <div className="dropdown-divider tron-mt-4px tron-mb-14px"></div>*/}
                                                                {/*    <div className="tron-font-size-12px tron-line-height-20px tron-color-gray-dark">*/}
                                                                {/*        <span> Contract Deployment  and  Contract Verification  are now moved to  More - Tools </span>*/}
                                                                {/*    </div>*/}
                                                                {/*</div>*/}
                                                            </div>
                                                        </div>
                                                    </li>
                                                   
                                                    <li className="nav-item dropdown">
                                                        <div>
                                                            <span>
                                                                <span className="nav-link" data-toggle="dropdown">
                                                                    <span className="">
                                                                        <span>Governance</span>
                                                                        <span className="menu-active-bottom-border"></span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <div className="dropdown-menu more-menu">
                                                                <div className="multi-menu-dropdown">
                                                                    
                                                                    <Link className="dropdown-item text-capitalize" to="/voting" rel="noreferrer"><span>Voting</span></Link>
                                                                    <Link className="dropdown-item text-capitalize" to="/donation" rel="noreferrer"><span>Donation</span></Link>
                                                                    <Link className="dropdown-item text-capitalize" to="/#" rel="noreferrer"><span>Frozen Addresses</span></Link>


                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item dropdown d-none" style={{ display: "none" }}>
                                                        <div>
                                                            <span>
                                                                <span className="nav-link tron-menu-router" data-toggle="dropdown">
                                                                    <span className="position-relative">
                                                                        <span>Governance</span>
                                                                        <span className="menu-active-bottom-border"></span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="representatives.html">
                                                                    <span>Super Representatives</span>
                                                                </a>
                                                                <a className="dropdown-item" href="votes.html">
                                                                    <span>Votes</span>
                                                                </a>
                                                                <a className="dropdown-item" href="wallet-stake-home.html">
                                                                    <span>TXH Staking Governance</span>
                                                                </a>
                                                                <a className="dropdown-item" href="committee.html">
                                                                    <span>Parameters &amp; Proposals</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <div>
                                                            <span>
                                                                <span className="nav-link text-capitalize" data-toggle="dropdown">
                                                                    <span className="">
                                                                        <span>Token</span>
                                                                        <span className="menu-active-bottom-border"></span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <div className="dropdown-menu flex-wrap dropdown-menu-network">
                                                                <div className="d-flex">

                                                                    <div className="multi-menu-dropdown">
                                                                        <Link to='/tokens' className="dropdown-item text-capitalize" >
                                                                            <span>  <span>Top Tokens</span>  </span>
                                                                        </Link>


                                                                    </div>
                                                                </div>
                                                              
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <div>
                                                            <span>
                                                                <span className="nav-link text-capitalize" data-toggle="dropdown">
                                                                    <span className="">
                                                                        <span>Stake</span>
                                                                        <span className="menu-active-bottom-border"></span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <div className="dropdown-menu flex-wrap dropdown-menu-network">
                                                                <div className="d-flex">
                                                                   
                                                                    <div className="multi-menu-dropdown">
                                                                        <Link to='/staking' className="dropdown-item text-capitalize" >
                                                                            <span>  <span>Stake Data</span>  </span>
                                                                        </Link>
                                                                       

                                                                    </div>
                                                                </div>
                                                               
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <div>
                                                            <span>
                                                                <span className="nav-link text-capitalize" data-toggle="dropdown">
                                                                    <span className="">
                                                                        <span>Data</span>
                                                                        <span className="menu-active-bottom-border"></span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <div className="dropdown-menu flex-wrap dropdown-menu-network">
                                                                <div className="d-flex">
                                                                   
                                                                    <div className="multi-menu-dropdown">
                                                                        <Link to='/accountsTop' className="dropdown-item text-capitalize" >
                                                                            <span>  <span>Top Account </span>  </span>
                                                                        </Link>
                                                                        <Link to='/contractsTop' className="dropdown-item text-capitalize" >
                                                                            <span>  <span>Top Contract </span>  </span>
                                                                        </Link>
                                                                        <Link to='/#' className="dropdown-item text-capitalize" >
                                                                            <span>  <span>Tixcash Web3 </span>  </span>
                                                                        </Link>


                                                                    </div>
                                                                   
                                                                </div>
                                                               
                                                            </div>
                                                        </div>
                                                    </li>
                                                     
                                                    <li className="nav-item dropdown">
                                                        <div>
                                                            <span>
                                                                <span className="nav-link text-capitalize" data-toggle="dropdown">
                                                                    <span className="">
                                                                        <Link to="/ecosystem"><span>Tixcash Ecosystem</span></Link>
                                                                        
                                                                        <span className="menu-active-bottom-border"></span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            
                                                        </div>
                                                    </li>
                                                    
                                                    
                                                    <li className="nav-item dropdown">
                                                        <div>
                                                            <span>
                                                                <span className="nav-link" data-toggle="dropdown">
                                                                    <span className="position-relative">
                                                                        <span>Developers</span>
                                                                        <span className="menu-active-bottom-border"></span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <div className="dropdown-menu more-menu developer-menu">
                                                                <a className="developer-api position-relative" href="#/developer/api">
                                                                    <div className="d-flex">
                                                                        <span className="slogan">API</span>
                                                                        <span className="apiTitle">API</span>
                                                                    </div>
                                                                    <div className="apiDesc"><span>Provide easy, efficient, and secure access to the TXH Cash network, ushering in the future of decentralization. The security services enable you to customize the security strategy of your product.</span></div>
                                                                    <svg className="icon tron-icon api-arrow" aria-hidden="true">
                                                                        <use xlinkHref="#icon-icon-api"></use>
                                                                    </svg>
                                                                    <svg className="icon tron-icon api-img" aria-hidden="true">
                                                                        <use xlinkHref="#icon-icon-apii"></use>
                                                                    </svg>
                                                                </a>
                                                                <div className="multi-menu-dropdown">
                                                                    <div className="more-menu-line"></div>
                                                                    <h6 className="dropdown-header text-capitalize">
                                                                        <span>Dev Resources</span>
                                                                    </h6>
                                                                    <a href="#n" target="_blank" rel="noreferrer" className="dropdown-item text-capitalize">
                                                                        <span>Developer Hub</span>
                                                                        <svg className="icon tron-icon tron-font-size-10px tron-ml-6px outLinkIcon" aria-hidden="true">
                                                                            <use xlinkHref="#icon-icon-tz2"></use>
                                                                        </svg>
                                                                    </a>
                                                                    <span className="d-inline-flex developer_challenge_box">
                                                                        <a href="https://github.com/tixcoin" target="_blank" rel="noreferrer" className="dropdown-item text-capitalize ">
                                                                            <span>GitHub</span>
                                                                            <svg className="icon tron-icon tron-font-size-10px tron-ml-6px outLinkIcon" aria-hidden="true">
                                                                                <use xlinkHref="#icon-icon-tz2"></use>
                                                                            </svg>
                                                                        </a>
                                                                    </span>
                                                                    <span className="d-inline-flex developer_challenge_box tag-display-none" style={{ display: "none !important" }}>
                                                                        <a href="https://www.tronide.io/#optimize=false&runs=200&evmVersion=null&version=soljson_v0.8.6+commit.0e36fba.js" target="_blank" rel="noreferrer" className="dropdown-item text-capitalize ">
                                                                            <span>Contract Deployment</span>
                                                                            <svg className="icon tron-icon tron-font-size-10px tron-ml-6px outLinkIcon" aria-hidden="true">
                                                                                <use xlinkHref="#icon-icon-tz2"></use>
                                                                            </svg>
                                                                        </a>
                                                                    </span>
                                                                    <span className="d-inline-flex developer_challenge_box tag-display-none" style={{ display: "none !important" }}>
                                                                        <Link to='/verify' target="_blank" className="dropdown-item text-capitalize " rel="noreferrer" >
                                                                            <span>Contract Publish</span>
                                                                            <svg className="icon tron-icon tron-font-size-10px tron-ml-6px outLinkIcon" aria-hidden="true">
                                                                                <use xlinkHref="#icon-icon-tz2"></use>
                                                                            </svg>
                                                                        </Link>
                                                                    </span>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    
                                                    <li className="nav-item dropdown" style={{ display: 'none' }}>
                                                        <div>
                                                            <span>
                                                                <span className="nav-link" data-toggle="dropdown">
                                                                    <span className="position-relative">
                                                                        <i className="iconfont icon-icon-new top-right-placement more-nav-icon d-none d-lg-inline-block mr-1"></i>
                                                                        <span>More</span>
                                                                        <span className="menu-active-bottom-border"></span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <div className="dropdown-menu more-menu more-menu-nav">
                                                                <div className="multi-menu-dropdown">
                                                                    <a onClick={() => { this.networkchange("main") }} className="dropdown-item" href="#m">MAINNET</a>
                                                                    <a onClick={() => { this.networkchange("test") }} className="dropdown-item" href="#n">DEV-TESTNET</a>

                                                                    <a className="dropdown-item text-capitalize " href="Type.html">
                                                                        <span>
                                                                            <span>Record Token</span>
                                                                        </span>
                                                                    </a>
                                                                    <a className="dropdown-item text-capitalize " href="transaction-viewer.html"><span><span>Broadcast Transaction</span></span></a>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="loginInfoNavBar">
                                        <div className="navbar navbar-expand-md navbar-dark py-0 page-right-navbar mainetMargin mobileMarginMenu justify-content-end">
                                            <ul className="navbar-nav navbar-right wallet-nav justify-content-center align-items-center">
                                                <li className="menu-item hidden-mobile padding-0">
                                                    <div className="prefrence" onClick={this.toggleTranslator}><span>Preference</span></div>
                                                </li>
                                                {this.state.isTranslatorOpen && (
                                                    <TranslatorComp onClose={this.toggleTranslator} />
                                                )}
                                                <li className="dropdown nav nav_input">
                                                    <div className="nav-link nav-item tron-login-register">

                                                        {!this.state.isloggedIn &&
                                                            <span onClick={this.toggleLogin} className="dividerLine">Register<span>|</span>Log in</span>
                                                        }
                                                        {this.state.isloggedIn &&
                                                            <span className="dividerLine"><Link to='/dashboard'> Welcome {this.state.initial} </Link><span>|</span><span onClick={this.dologgedOut}>Log Out</span></span>
                                                        }

                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="hidden-mobile align-items-center">
                                                <div className="nav_input nav-static dropdown token_black nav connect_style d-flex align-items-center">
                                                    <a className="nav-link nav-item wallet-login-dropdown-toggle connect-wallet d-flex align-items-center" href="#/">
                                                        <span>Connect Wallet</span>
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div className="nav-item dropdown navbar-right  hoverable-item">
                                                <span className="nav-link dropdown-toggle dropdown-menu-right pr-0 nav-testnet-dropdown-menu wallet-login-dropdown-toggle" data-toggle="dropdown">
                                                    <span className="netEntry">
                                                        <span className="netLogo" >
                                                            <svg className="icon tron-icon nav-notice-icon" aria-hidden="true">
                                                                <use xlinkHref="#icon-icon-notice"></use>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </span>
                                                <div className=" notification2">
                                                    <ul className="notification-list">

                                                        {this.state.notifications.map((nt, i) =>
                                                            <li key={i}>
                                                                <span>{nt.notification}</span>
                                                                <p className="my-2">{nt.date}20/12/20</p>
                                                            </li>
                                                        )}

                                                    </ul>
                                                </div>


                                            </div>
                                            <div className="nav-item dropdown navbar-right hidden-mobile hoverable-item">
                                                <a className="nav-link dropdown-toggle dropdown-menu-right pr-0 nav-testnet-dropdown-menu wallet-login-dropdown-toggle" data-toggle="dropdown" href="#!">
                                                    <span className="netEntry">
                                                        <span className="netLogo" style={{ marginTop: "6px" }}>
                                                            <img src="assets/img/favicon.png" alt="logo" width="20" style={{ filter: "grayscale" }} />
                                                        </span>
                                                    </span>
                                                </a>
                                                <div className=" testnet">

                                                    <a target="#" onClick={() => { this.networkchange("main") }} className="dropdown-item" href="#m">Tixcash MAINNET</a>
                                                    <a target="#" onClick={() => { this.networkchange("test") }} className="dropdown-item" href="#m">Tixcash TESTNET</a>
                                                </div>


                                            </div>
                                            <div className="drawWrapper hidden-PC" onClick={this.toggleSidebar}>
                                                <svg className="icon tron-icon tron-mobile-more" aria-hidden="true" onClick={this.toggleNavbar}>
                                                    <use xlinkHref="#icon-icon-right-more"></use>
                                                </svg>
                                            </div>

                                        </div>





                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

                <Notification
                        message={notifications.length}
                        show={showNotification}
                    />
                


                {sidebarVisible && (

                    
                       <>
                        <div className="sidebar">
                            <span className="crossicon" onClick={this.closeSidebar}>&#10006;</span>
                            <ul className="menu">
                                <li className="menu-item" onClick={this.closeSidebar}>
                                    <Link to="/">Home</Link>
                            </li>
                            <li className="menu-item" >
                                    <div className="d-flex justify-content-between">
                                        <span onClick={(e) => this.toggleSubmenu('blockchain',e) }>Blockchain</span>
                                        <img alt="down" width="14" className="down" src="./assets/img/arrow-down.svg" onClick={(e) => this.toggleSubmenu('blockchain',e)} />

                                </div>
                                <ul className={`submenu ${openSubmenu === 'blockchain' ? 'open' : ''}`}>
                                        <li onClick={this.closeSidebar}>
                                            <Link to='/nodes' className="dropdown-item text-capitalize">Nodes</Link>
                                        </li>
                                        <li onClick={this.closeSidebar}>
                                            <Link to='/blocks' className="dropdown-item text-capitalize">Blocks</Link>
                                        </li>
                                        <li onClick={this.closeSidebar}>
                                            <Link to='/accounts' className="dropdown-item text-capitalize">Accounts</Link>
                                        </li>
                                        <li onClick={this.closeSidebar}>
                                            <Link to='/contracts' className="dropdown-item text-capitalize">Contracts</Link>
                                        </li>
                                        <li onClick={this.closeSidebar}>
                                            <Link to='/transfers' className="dropdown-item text-capitalize">Transfers</Link>
                                        </li>
                                        <li onClick={this.closeSidebar}>
                                            <Link to='/transactions' className="dropdown-item text-capitalize">Transactions</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <div className="d-flex justify-content-between">
                                        <span onClick={(e) => this.toggleSubmenu('stake',e)}>Stake</span>
                                        <img alt="down" width="14" className="down" src="./assets/img/arrow-down.svg" onClick={(e) => this.toggleSubmenu('stake',e)} />

                                    </div>
                                    <ul className={`submenu ${openSubmenu === 'stake' ? 'open' : ''}`}>
                                        <li onClick={this.closeSidebar}>
                                            <Link to='/staking' className="dropdown-item text-capitalize">StakeData</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item" onClick={this.closeSidebar}>
                                    <Link to='/ecosystem' className="text-dark text-capitalize">Tixcash ecosystem</Link>
                                </li>
                                <li className="menu-item">
                                    <div className="d-flex justify-content-between">
                                        <span onClick={(e) => this.toggleSubmenu('token',e)}>Token</span>
                                        <img alt="down" width="14" className="down" src="./assets/img/arrow-down.svg" onClick={(e) => this.toggleSubmenu('token',e)} />

                                    </div>
                                    <ul className={`submenu ${openSubmenu === 'token' ? 'open' : ''}`}>
                                        <li onClick={this.closeSidebar}>
                                            <Link to='/tokens' className="dropdown-item text-capitalize">Top Token</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">

                                    <div className="d-flex justify-content-between">
                                        <span onClick={(e) => this.toggleSubmenu('data',e)}>Data</span>
                                        <img alt="down" width="14" className="down" src="./assets/img/arrow-down.svg" onClick={(e) => this.toggleSubmenu('data',e)} />

                                    </div>
                                    <ul className={`submenu ${openSubmenu === 'data' ? 'open' : ''}`}>
                                        <li onClick={this.closeSidebar}>
                                            <Link to='/accountsTop' className="dropdown-item text-capitalize">Top Account</Link>
                                        </li>
                                        <li onClick={this.closeSidebar}>
                                            <Link to='/contractsTop' className="dropdown-item text-capitalize">Top Contract</Link>
                                        </li>
                                        <li onClick={this.closeSidebar}>
                                            <Link to='/#' className="dropdown-item text-capitalize">Tixcash Web3</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">

                                    <div className="d-flex justify-content-between">
                                        <span onClick={(e) => this.toggleSubmenu('governance',e)}>Governance</span>
                                        <img alt="down" width="14" className="down" src="./assets/img/arrow-down.svg" onClick={(e) => this.toggleSubmenu('governance',e)} />

                                    </div>
                                    <ul className={`submenu ${openSubmenu === 'governance' ? 'open' : ''}`}>
                                        <li onClick={this.closeSidebar}>
                                            <Link to='/voting' className="dropdown-item text-capitalize">Voting</Link>
                                        </li>
                                        
                                        <li onClick={this.closeSidebar}>
                                            <Link to='/donation' className="dropdown-item text-capitalize">Donation</Link>
                                        </li>
                                        <li onClick={this.closeSidebar}>
                                            <Link to='/#' className="dropdown-item text-capitalize">Frozen Addresses</Link>
                                        </li>

                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <div className="d-flex justify-content-between">
                                        <span onClick={(e) => this.toggleSubmenu('developer',e)}>Developer</span>
                                        <img alt="down" width="14" className="down" src="./assets/img/arrow-down.svg" onClick={(e) => this.toggleSubmenu('developer',e)} />

                                    </div>
                                   
                                    <ul className={`submenu ${openSubmenu === 'developer' ? 'open' : ''}`}>
                                        <li onClick={this.closeSidebar}>Developerhub</li>
                                        <li onClick={this.closeSidebar}><a href="https://github.com/tixcoin">Github</a></li>
                                        <li onClick={this.closeSidebar} style={{ display: "none" }}><a href="https://www.tronide.io/#optimize=false&runs=200&evmVersion=null&version=soljson_v0.8.6+commit.0e36fba.js">Contract Deployment</a></li>
                                        <li onClick={this.closeSidebar} style={{ display: "none" }}><a href="/verify">Contract Publish</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <div className="d-flex justify-content-between">
                                        <span onClick={(e) => this.toggleSubmenu('explores', e)}>Explores</span>
                                        <img alt="down" width="14" className="down" src="./assets/img/arrow-down.svg" onClick={(e) => this.toggleSubmenu('explores', e)} />

                                    </div>
                                    <ul className={`submenu ${openSubmenu === 'explores' ? 'open' : ''}`}>
                                        <li><a onClick={() => { this.networkchange("main") }} className="dropdown-item" href="#n">Tixcash MAINNET</a></li>
                                        <li><a onClick={() => { this.networkchange("test") }} className="dropdown-item" href="#n">Tixcash TESTNET</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <div className="prefrence" onClick={this.toggleTranslator}><span>Preference</span></div>
                                </li>
                            </ul>
                            {this.state.isTranslatorOpen && (
                                <TranslatorComp onClose={this.toggleTranslator} />
                        )}

                        
                    </div>
                    <div className="sidebar-wrapper" onClick={this.closeSidebar}></div>
                    </>
                    
                )} </div>
        )
    }






}
