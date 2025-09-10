import {React,  Component } from 'react';
import { Link } from "react-router-dom";
import Paging from './_paging';
import AgeCount from './_ageAgo';
import { AddEllipsis } from './_addEllipsis';
import './Blocks.css';
import Shimmer from './Shimmer'

import { ContractsList } from './_contracts'

export class Contracts extends Component {
   
    constructor(props) {
        
        super(props);
        this.state = {
           totalCount: 0,
           
            loading: true,
            activeFrame: window.location.href.split('/')[3].split('#')[1] ?? 'AllContracts'
        };
       
    }

    subscribe = async (p) => {

        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + '/weatherforecast/GetContractsCount');
        //debugger;
        const data = await response.json();
        if (data.Table.length>0) {
            var jd = data.Table[0];
            this.setState({ totalCount: jd.Contracts, totalCountverified: jd.VerifiedContracts });
        }
        else
            this.setState({ totalCount: 0, totalCountverified: 0 });
    }

    componentDidMount() {
        this.subscribe(this.state.page);
    }

    handleButtonClick = (frameName) => {
        this.setState({ activeFrame: frameName });
    };

    render() {
        
        const renderShimmerRow = () => (
            <tr>
                <td><Shimmer width="100%" height="20px" /></td>
                <td><Shimmer width="100%" height="20px" /></td>
                <td><Shimmer width="100%" height="20px" /></td>
                <td><Shimmer width="100%" height="20px" /></td>
                <td><Shimmer width="100%" height="20px" /></td>
                <td><Shimmer width="100%" height="20px" /></td>
                <td><Shimmer width="100%" height="20px" /></td>
                <td><Shimmer width="100%" height="20px" /></td>
               
            </tr>
        );
        const { activeFrame } = this.state;

    return (
        <div id="mainContent">
           
            <main className="container header-overlap pb-3 token_black block-list-box">
                <section className="blocks-list-wrapper">
                    <div className="representatives-list-wrap blocks-overview-cont">
                        <div>
                            <div className="representatives-data-wrap blocks-data-wrap">
                                <div className="mb-20-style blocks_overview blocks_list_overview">
                                    <div className="mb-20-style amount-wrapper-cont">
                                        <div className="card h-100">
                                            <div className="card-body d-flex justify-content-between flex-col align-items-start gap-10" id="txcont" style={{ width: '100%' }}>
                                                <h2 >Contracts</h2>
                                                <div className=" representatives-data blocks-data">
                                                    <div className="d-flex gap-2">
                                                        <div className="d-flex desc mt-6px ms-4">
                                                            <span className="TxCountNum"><span><span>{this.state.totalCount}</span></span></span>
                                                            <div className="desc"><span>Total</span></div>
                                                           {/* <span className="txt"> {this.state.totalCount} Total</span>*/}
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                            </div>

                                            <div className="card-body d-flex justify-content-between flex-col align-items-start gap-10" id="txcont" style={{ width: '100%' }}>
                                                <h2>Verified Contracts</h2>
                                                <div className=" representatives-data blocks-data">
                                                    <div className="d-flex gap-2">
                                                        <div className="d-flex desc mt-6px ms-4">
                                                            <span className="TxCountNum"><span><span>{this.state.totalCountverified}</span></span></span>
                                                            <div className="desc"><span>Total</span></div>
                                                            {/* <span className="txt"> {this.state.totalCount} Total</span>*/}
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
                    
                    <div className="block-list-bg">
                        <div id="tab_data_list" className="card mt-3 new-list-style-body address-table-pagination list-style-body ">
                            <div className="card-header list-style-body__header false">
                                <ul className="nav nav-tabs card-header-tabs ">
                                    <li className="nav-item">
                                        <Link to='#AllContracts' className={`nav-link text-dark ${activeFrame === 'AllContracts' ? 'active' : ''}`} onClick={() => this.handleButtonClick('AllContracts')}>
                                            <span>  <span>All Contracts</span>  </span>  </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='#VerifiedContracts' className={`nav-link text-dark ${activeFrame === 'VerifiedContracts' ? 'active' : ''}`} onClick={() => this.handleButtonClick('VerifiedContracts')}>
                                            <span>  <span>Verified Contracts</span>  </span>
                                        </Link>
                                    </li>
                                 
                                </ul>
                            </div>
                            <div className="card-body p-0 list-style-body__body">
                                {this.state.activeFrame === "AllContracts" && <ContractsList verified="0" />}
                                {this.state.activeFrame === "VerifiedContracts" && <ContractsList verified="2" />}
                           </div>
                        </div>
                      
                    </div>
                </section>
                <div className="profit-box block-picture-profit">
                    <div className="common-profit-wapper" id="profitWrapper">
                        <img src="assets/img/Tixcash.png" alt="footer_banner" className="rounded" />
                    </div>
                </div>
            </main>
        </div>



    );
  }
}
