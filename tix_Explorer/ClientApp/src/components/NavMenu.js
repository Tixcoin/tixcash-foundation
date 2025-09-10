import React, { Component } from 'react';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
      return (


      //<header>
      //  <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
      //    <NavbarBrand tag={Link} to="/">Tixscan.explorer</NavbarBrand>
      //    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
      //    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
      //      <ul className="navbar-nav flex-grow">
      //        <NavItem>
      //          <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
      //        </NavItem>
      //        <NavItem>
      //          <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
      //        </NavItem>
      //        <NavItem>
      //          <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
      //                  </NavItem>
      //                  <NavItem>
      //                      <NavLink tag={Link} className="text-dark" to="/signal-data">Signal data</NavLink>
      //                  </NavItem>
      //      </ul>
      //    </Collapse>
      //  </Navbar>
      //</header>


          <>

              <div className="language-en header-top nav-item-page">
                  <div className="sticky-nav-wrapper">
                      <div className="logo-wrapper top-logo-wrapper">
                          <div className="d-flex px-0 menu-nav-wrapper">
                              <div className="navContainerSec">
                                  <div className="mobileFlexible">
                                      <a href="/home">
                                          <img src="assets/img/logo.png" className="logoNoPrice" alt="Tron" />

                                              <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/coinPriceBlock.js"></script>
                                              <div id="coinmarketcap-widget-coin-price-block" coins="3890" currency="USD" theme="light" transparent="true" show-symbol-logo="false"></div>

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
                                                                          <a className="dropdown-item text-capitalize" href="nodes.html">
                                                                              <span>
                                                                                  <span>Nodes</span>
                                                                              </span>
                                                                          </a>
                                                                          <a className="dropdown-item text-capitalize" href="blocks.html">
                                                                              <span>
                                                                                  <span>Blocks</span>
                                                                              </span>
                                                                          </a>
                                                                          <a className="dropdown-item text-capitalize" href="accounts.html">
                                                                              <span>
                                                                                  <span>Accounts</span>
                                                                              </span>
                                                                          </a>
                                                                      </div>
                                                                      <div className="multi-menu-dropdown">
                                                                          <a className="dropdown-item text-capitalize" href="contracts.html">
                                                                              <span>
                                                                                  <span>Contracts</span>
                                                                              </span>
                                                                          </a>
                                                                          <a className="dropdown-item text-capitalize" href="transfers.html">
                                                                              <span>
                                                                                  <span>Transfers</span>
                                                                              </span>

                                                                          </a>
                                                                          <a className="dropdown-item text-capitalize" href="transactions.html">
                                                                              <span><span>Transactions</span></span>
                                                                          </a>
                                                                      </div>
                                                                  </div>
                                                                  <div>
                                                                      <div className="dropdown-divider tron-mt-4px tron-mb-14px"></div>
                                                                      <div className="tron-font-size-12px tron-line-height-20px tron-color-gray-dark">
                                                                          <span>“Contract Deployment” and “Contract Verification” are now moved to “More - Tools”</span>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </li>
                                                      <li className="nav-item dropdown">
                                                          <div>
                                                              <span>
                                                                  <span className="nav-link tron-menu-router" data-toggle="dropdown">
                                                                      <span className="position-relative">
                                                                          <span>Tokens</span>
                                                                          <span className="menu-active-bottom-border"></span>
                                                                      </span>
                                                                  </span>
                                                              </span>
                                                              <div className="dropdown-menu more-menu newtokens-more-menu">
                                                                  <div className="multi-menu-dropdown">
                                                                      <a className="dropdown-item text-capitalize" href="list.html">
                                                                          <div className="d-flex hot-token-route">
                                                                              <div className="detail">
                                                                                  <div className="d-flex align-items-center">
                                                                                      <span>Token tracker</span>
                                                                                  </div>
                                                                                  <p className="desc"></p>
                                                                              </div>
                                                                          </div>

                                                                      </a>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </li>
                                                      <li className="nav-item dropdown">
                                                          <div>
                                                              <span>
                                                                  <span className="nav-link" data-toggle="dropdown">
                                                                      <span className="">
                                                                          <span>Data</span>
                                                                          <span className="menu-active-bottom-border"></span>
                                                                      </span>
                                                                  </span>
                                                              </span>
                                                              <div className="dropdown-menu more-menu">
                                                                  <div className="multi-menu-dropdown">
                                                                      <a className="dropdown-item text-capitalize " href="TXH-Supply.html"><span><span>TXH Supply</span></span></a>
                                                                      <a className="dropdown-item text-capitalize " href="Top-accounts.html"><span><span>Top Accounts</span></span></a>
                                                                      <a className="dropdown-item text-capitalize " href="Top-Tokens.html"><span><span>Top Tokens</span></span></a>
                                                                      <a className="dropdown-item text-capitalize " href="Top-contracts.html"><span><span>Top Contracts</span></span></a>

                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </li>
                                                      <li className="nav-item dropdown d-none">
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
                                                                      <a href="https://developers.tron.network/" target="_blank" className="dropdown-item text-capitalize">
                                                                          <span>Developer Hub</span>
                                                                          <svg className="icon tron-icon tron-font-size-10px tron-ml-6px outLinkIcon" aria-hidden="true">
                                                                              <use xlinkHref="#icon-icon-tz2"></use>
                                                                          </svg>
                                                                      </a>
                                                                      <span className="d-inline-flex developer_challenge_box">
                                                                          <a href="https://github.com/tronprotocol" target="_blank" className="dropdown-item text-capitalize ">
                                                                              <span>GitHub</span>
                                                                              <svg className="icon tron-icon tron-font-size-10px tron-ml-6px outLinkIcon" aria-hidden="true">
                                                                                  <use xlinkHref="#icon-icon-tz2"></use>
                                                                              </svg>
                                                                          </a>
                                                                      </span>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </li>
                                                      <li className="nav-item dropdown">
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
                                                                      <a className="dropdown-item text-capitalize " href="Type.html">
                                                                          <span>
                                                                              <span>Record Token</span>
                                                                          </span>
                                                                      </a>
                                                                      <a className="dropdown-item text-capitalize "  href="contract-compiler.html"><span><span>Contract deployment</span></span></a>
                                                                      <a className="dropdown-item text-capitalize " href="Contract-Verification.html"><span><span>Contract Verification</span></span></a>
                                                                      <a className="dropdown-item text-capitalize " href="transaction-viewer.html"><span><span>Broadcast Transaction</span></span></a>
                                                                  </div>
                                                                  <div className="multi-menu-dropdown">
                                                                      <div className="more-menu-line"></div>
                                                                      <h6 className="dropdown-header text-capitalize"><span>Need more help? Contact us</span></h6>
                                                                      <a href="mailto:support@tronscan.org" target="_blank" className="tron-font-default-color tron-ml-12px nav-media tron-line-height-40px">
                                                                          <svg className="icon tron-icon tron-font-size-12px" aria-hidden="true">
                                                                              <use xlinkHref="#icon-mail"></use>
                                                                          </svg>
                                                                      </a>
                                                                      <a href="https://t.me/tronnetworkEN" target="_blank" className="tron-font-default-color tron-ml-12px nav-media tron-line-height-40px">
                                                                          <svg className="icon tron-icon tron-font-size-12px" aria-hidden="true">
                                                                              <use xlinkHref="#icon-telegram1"></use>
                                                                          </svg>
                                                                      </a>
                                                                      <a href="https://twitter.com/TRONSCAN_ORG" target="_blank" className="tron-font-default-color tron-ml-12px nav-media tron-line-height-40px">
                                                                          <svg className="icon tron-icon tron-font-size-12px" aria-hidden="true">
                                                                              <use xlinkHref="#icon-twitter1"></use>
                                                                          </svg>
                                                                      </a>
                                                                      <a href="https://tronscan-org.medium.com" target="_blank" className="tron-font-default-color tron-ml-12px nav-media tron-line-height-40px">
                                                                          <svg className="icon tron-icon tron-font-size-12px" aria-hidden="true">
                                                                              <use xlinkHref="#icon-medium1"></use>
                                                                          </svg>
                                                                      </a>
                                                                      <a href="https://discord.gg/AgJGCubZWE" target="_blank" className="tron-font-default-color tron-ml-12px nav-media tron-line-height-40px">
                                                                          <svg className="icon tron-icon tron-font-size-12px" aria-hidden="true">
                                                                              <use xlinkHref="#icon-discord1"></use>
                                                                          </svg>
                                                                      </a>
                                                                      <a href="https://forum.trondao.org/" target="_blank" className="tron-font-default-color tron-ml-12px nav-media tron-line-height-40px">
                                                                          <svg className="icon tron-icon tron-font-size-12px" aria-hidden="true">
                                                                              <use xlinkHref="#icon-forum"></use>
                                                                          </svg>
                                                                      </a>
                                                                      <a className="nav_feedback_btn" href="contactUs.html"><span>Feedback</span></a>
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

                                                  <li className="dropdown nav nav_input">
                                                      <div className="nav-link nav-item tron-login-register">
                                                          <span className="dividerLine">Register<span>|</span>Log in</span>
                                                      </div>
                                                  </li>
                                              </ul>
                                              <div className="hidden-mobile d-flex align-items-center">
                                                  <div className="nav_input nav-static dropdown token_black nav connect_style d-flex align-items-center">
                                                      <a className="nav-link nav-item wallet-login-dropdown-toggle connect-wallet d-flex align-items-center" href="#/">
                                                          <span>Connect Wallet</span>
                                                      </a>
                                                  </div>
                                              </div>
                                              <div className="ant-dropdown-trigger nav-notice-content">
                                                  <svg className="icon tron-icon nav-notice-icon" aria-hidden="true">
                                                      <use xlinkHref="#icon-icon-notice"></use>
                                                  </svg>
                                                  <span className="new-notice-mark"></span>
                                              </div>
                                              <div className="nav-item dropdown navbar-right hidden-mobile">
                                                  <a className="nav-link dropdown-toggle dropdown-menu-right pr-0 nav-testnet-dropdown-menu wallet-login-dropdown-toggle" data-toggle="dropdown" href="#!">
                                                      <span className="netEntry">
                                                          <span className="netLogo">
                                                              <svg className="icon tron-icon img" aria-hidden="true">
                                                                  <use xlinkHref="#icon-icon-logoblack"></use>
                                                              </svg>
                                                          </span>
                                                      </span>
                                                  </a>
                                                  <div className="dropdown-menu testnet-dropdown-menu">
                                                      <a className="dropdown-item"></a>
                                                      <a target="_blank" className="dropdown-item" href="https://nile.tronscan.org">NILE TESTNET</a>
                                                      <a target="_blank" className="dropdown-item" href="https://shasta.tronscan.org">SHASTA TESTNET</a>
                                                  </div>


                                              </div>
                                              <div className="drawWrapper hidden-PC">
                                                  <svg className="icon tron-icon tron-mobile-more" aria-hidden="true">
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
              </div>

              <div className="nav-searchbar hasactiveComponent dark-hasactive-component hidden-mobile ">
                  <div id="navSearchbarId">
                      <div className="container p-0 index-page-search-sec d-flex justify-content-between">
                          <div className="searchAndHotSec">
                              <div className="row justify-content-center text-center">
                                  <div className="col-12">
                                      <div className="hidden-mobile nav-searchbar">
                                          <div className="input-group dropdown">
                                              <section className="input-wrapper d-flex">
                                                  <div className="ant-input-group-wrapper form-control box-shadow-none newSearchInput input-search-focus">
                                                      <div className="ant-input-wrapper ant-input-group">
                                                          <span className="ant-input-affix-wrapper ant-input-affix-wrapper-borderless">
                                                              <span className="ant-input-prefix">
                                                                  <svg className="icon tron-icon tron-font-size-18px tron-font-black-level3-color" aria-hidden="true">
                                                                      <use xlinkHref="#icon-main-search-colorless"></use>
                                                                  </svg>
                                                              </span>
                                                              <input placeholder="Search by Token / Account / Contract / Txn Hash / Block" className="ant-input ant-input-borderless" type="text" value="" />
                                                              <span className="ant-input-suffix">
                                                                  <span className="ant-input-clear-icon ant-input-clear-icon-hidden" role="button" tabindex="-1">
                                                                      <span role="img" aria-label="close-circle" className="anticon anticon-close-circle">
                                                                          <svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                                              <path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"></path>
                                                                          </svg>
                                                                      </span>
                                                                  </span>
                                                              </span>
                                                          </span>
                                                          <div className="ant-input-group-addon">
                                                              <div className="search-type-suffix">
                                                                  <div className="fake-selecetd-content">
                                                                      <span>All</span>
                                                                      <svg className="icon tron-icon" aria-hidden="true">
                                                                          <use xlinkHref="#icon-down-arrow"></use>
                                                                      </svg>
                                                                  </div>
                                                                  <div className="ant-select nav-search-filter ant-select-single ant-select-show-arrow">
                                                                      <div className="ant-select-selector">
                                                                          <span className="ant-select-selection-search">
                                                                              <input type="search" autocomplete="off" className="ant-select-selection-search-input" role="combobox" aria-expanded="false" readonly="" unselectable="on" value="" id="rc_select_0" />
                                                                          </span>
                                                                          <span className="ant-select-selection-item" title="All Filters">All Filters</span>
                                                                      </div>
                                                                      <span className="ant-select-arrow" unselectable="on" aria-hidden="true">
                                                                          <span className="hoverIcon">
                                                                              <svg className="icon tron-icon tron-search-icon" aria-hidden="true">
                                                                                  <use xlinkHref="#icon-down-arrow"></use>
                                                                              </svg>
                                                                          </span>
                                                                      </span>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </section>
                                              <div className="dropdown-menu" id="_searchBox"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="hotSearch container-fluid position-relative d-flex mx-auto flex-column">
                                  <div className="container pc-home-splash p-0">
                                      <div className="row text-center noticeNewsBox">
                                          <div className="col-12 exchange noticeNews home-hot-search">
                                              <section className="d-flex searchCont">
                                                  <span className="hot-search-title">
                                                      <span>Trending Search</span>:
                                                  </span><ul className="hot-token">
                                                      <li className="list-token">
                                                          <b className="token-img-top">
                                                              <img width="14" height="14" src="https://static.tronscan.org/production/upload/logo/new/stUSDT_logo.png" />
                                                                  <svg className="icon tron-icon tron-v-icon" aria-hidden="true">
                                                                      <use xlinkHref="#icon-icon-v"></use>
                                                                  </svg>
                                                          </b>
                                                          <a className="" href="#/token20/TThzxNRLrW2Brp9DcTQU8i4Wd9udCWEdZ3">stUSDT</a>
                                                      </li>
                                                      <li className="list-token">
                                                          <b className="token-img-top">
                                                              <svg className="icon tron-icon tron-hot-token-icon" aria-hidden="true">
                                                                  <use xlinkHref="#icon-icon-usdt"></use>
                                                              </svg>
                                                              <svg className="icon tron-icon tron-v-icon" aria-hidden="true">
                                                                  <use xlinkHref="#icon-icon-v"></use>
                                                              </svg>
                                                          </b>
                                                          <a className="" href="#/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t">USDT</a>
                                                      </li>
                                                      <li className="list-token">
                                                          <b className="token-img-top">
                                                              <img width="14" height="14" src="https://static.tronscan.org/production/upload/logo/TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR.png?t=1598430824415" />
                                                                  <svg className="icon tron-icon tron-v-icon" aria-hidden="true">
                                                                      <use xlinkHref="#icon-icon-v"></use>
                                                                  </svg>
                                                          </b> <a className="" href="#/token20/TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR">WTRX</a>
                                                      </li>
                                                      <li className="list-token">
                                                          <b className="token-img-top">
                                                              <svg className="icon tron-icon tron-hot-token-icon" aria-hidden="true">
                                                                  <use xlinkHref="#icon-icon-btc"></use>
                                                              </svg><svg className="icon tron-icon tron-v-icon" aria-hidden="true">
                                                                  <use xlinkHref="#icon-icon-v"></use>
                                                              </svg>
                                                          </b>
                                                          <a className="" href="#/token20/TN3W4H6rK2ce4vX9YnFQHwKENnHjoxb3m9">BTC</a>
                                                      </li>
                                                      <li className="list-token">
                                                          <b className="token-img-top">
                                                              <svg className="icon tron-icon tron-hot-token-icon" aria-hidden="true">
                                                                  <use xlinkHref="#icon-icon-btt"></use>
                                                              </svg><svg className="icon tron-icon tron-v-icon" aria-hidden="true"><use xlinkHref="#icon-icon-v"></use></svg>
                                                          </b>
                                                          <a className="" href="#/token20/TAFjULxiVgT4qWk6UZwjqwZXTSaGaqnVp4">BTT</a>
                                                      </li>
                                                      <li className="list-token">
                                                          <b className="token-img-top">
                                                              <svg className="icon tron-icon tron-hot-token-icon tron-token-color" aria-hidden="true">
                                                                  <use xlinkHref="#icon-icon-jst"></use>
                                                              </svg>
                                                              <svg className="icon tron-icon tron-v-icon" aria-hidden="true">
                                                                  <use xlinkHref="#icon-icon-v"></use>
                                                              </svg>
                                                          </b>
                                                          <a className="" href="#/token20/TCFLL5dx5ZJdKnWuesXxi1VPwjLVmWZZy9">JST</a>
                                                      </li>
                                                      <li className="list-token">
                                                          <img width="14" height="14" src="https://static.tronscan.org/production/upload/logo/new/TRv9ipj4kKAZqQggQ7ceJpe5ERD1ZShpgs.png?t=1703325714916" />
                                                              <a className="" href="#/token20/TRv9ipj4kKAZqQggQ7ceJpe5ERD1ZShpgs">CCC</a>
                                                      </li>
                                                      <li>
                                                          <a className="list-token hot-token-more list-token-single-style" href="#/searchmore">
                                                              <span><span>More</span></span>
                                                              <svg className="icon tron-icon tron-font-size-8px tron-right-icon" aria-hidden="true">
                                                                  <use xlinkHref="#icon-right-arrow"></use>
                                                              </svg>
                                                          </a>
                                                      </li>

                                                  </ul>
                                              </section>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="profitSec">
                              <div className="profit-box homepage-profit">
                                  <div className="common-profit-wapper" id="profitWrapper">
                                      <img src="assets/img/1747470873762304000.png" className="img-fluid rounded" />
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
              <section className="sub-title-page-wrap"></section>
          </>



    );
  }
}
