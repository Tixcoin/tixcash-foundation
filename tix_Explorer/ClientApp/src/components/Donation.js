import React, { useState, useEffect} from 'react';
import Paging from './_paging';

const Donation = () => {
    const [data, setData] = useState([])
    const [topdata, setTopData] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        fetchAPI();
        fetchLatest();
    }, [])
    const callPageData = async (pageinx) => {

    }
    const fetchAPI = async () => {
        const data = await fetch("https://donate.tixcash.org/api/V1/getalldonating")
        const json = await data.json();
        console.log(json.data);
        setData(json.data);
    }
    const fetchLatest = async () => {
        const latestdata = await fetch("https://donate.tixcash.org/api/V1/gettopdonating")
        const json = await latestdata.json();
        console.log(json.data);
        setTopData(json.data);
    }
    return (
        <div className="">
            <section><div style={{ fontWeight: '800', fontSize: '20px' }}>Donation</div></section>

            <div className="row _badge vote-overview-title" style={{ Zindex: '101', position: 'relative' }}>
                <div className="vote-base-wrap base-wrap col-md-12">
                    <img style={{ display: 'block', margin:'auto' }} src="./assets/img/donation.png" width='170' alt="donation" />
                    <div className="base-account">
                        <div className="account-top">
                            <span className="account-name">Subject</span>
                            <span className="account-btn">{topdata.subject}</span></div>
                        <div className="account-info">
                            <div className="account-info-item">
                                <div className="data-wrap">
                                    <div className="account-info-title">
                                        <span>Start Time</span>
                                    </div>
                                    <div className="account-info-num">{topdata.startdate}</div></div>
                                </div>
                            <div className="account-info-item">
                                <div className="data-wrap">
                                    <div className="account-info-title">
                                        <span>End Time</span>
                                    </div>
                                    <div className="account-info-num">{topdata.endtime}</div>
                                </div>
                                
                            </div>
                            <div className="account-info-item" style={{ display: 'none' }}>
                                <div className="data-wrap">
                                    <div className="account-info-title">
                                        <span>Total Donation Recieved</span>
                                    </div>
                                    <div className="account-info-num">$ { topdata.totaldonation}</div>
                                </div>
                                
                            </div>
                            <div className="account-info-item">
                                <div className="data-wrap">
                                    <div className="account-info-title">
                                        <span>Total People Donated</span>
                                    </div>
                                    <div className="account-info-num">{ topdata.totaluser}</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div><div className="card vote-card">
                        <div className="vote-overview-action-wrap">
                            <div style={{ display:"none"} }>
                                <div style={{paddingBottom:'0px'} }></div>
                                <div className="card-body bg-white" style={{zIndex:'100', top:'0'} }>
                                    <div className="text-center d-flex justify-content-between align-items-center mobile-100">
                                        <div className="mobile-100">
                                            <div className="d-flex vote-overview-search">
                                                <img src="./assets/img/search.d1f87ff0e38fee1299a171978ea4ea0c.png" width="12" alt="search" />
                                                <input type="text" placeholder="Search for SRs by Address / Name" />
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center flex-wrap top-20">
                                            <button className="btn action-btn confirm disabled" disabled="">
                                                <span>Vote</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive table-scroll table_new_style ">
                            <div className="ant-table-wrapper">
                                <div className="ant-spin-nested-loading">
                                    <div className="ant-spin-container">
                                        <div className="ant-table">
                                            <div className="ant-table-container">
                                                <div className="ant-table-content">
                                                    <table style={{ tableLayout: 'auto' }}>
                                                        <colgroup>
                                                            <col />
                                                            <col style={{ width: 'auto' }} />
                                                            <col />
                                                            <col style={{ width: 'auto' }} />
                                                            <col style={{ width: 'auto' }} />
                                                            <col style={{ width: 'auto' }} />
                                                        </colgroup>
                                                        <thead class="ant-table-thead">
                                                            <tr>
                                                                <th class="ant-table-cell ant_table td-left" scope="col" >
                                                                    <span>Subject</span>
                                                                </th>
                                                                <th class="ant-table-cell ant_table td-left" scope="col" >
                                                                    <div class="cusor-pointer">
                                                                        <span>Start Time</span>
                                                                        <span class="sort-icon ml-1">
                                                                            <img alt="" src="./assets/img/sort.56527012ee4e01d559fea6ce563b4d42.svg"/>
                                                                        </span>
                                                                    </div>
                                                                </th>
                                                                <th class="ant-table-cell ant_table td-left"  scope="col" >
                                                                    <span>End Time</span></th>
                                                                <th style={{ display: 'none' }} class="ant-table-cell ant_table td-left" scope="col" >
                                                                    <div class="d-flex align-items-center ">
                                                                        
                                                                        <span class="ml-1">Total Donation Recieved</span>
                                                                    </div>
                                                                </th>
                                                                
                                                                <th class="ant-table-cell ant_table white-space-wrap td-left" scope="col" >
                                                                    <div class="d-flex align-items-center ">
                                                                        
                                                                        <span class="ml-1">Total People Donated</span></div></th>
                                                                
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody className="ant-table-tbody">

                                                            {data.map((info) => (
                                                                <tr key={info.id} class="ant-table-row ant-table-row-level-0" data-row-key="TLyqzVGLV1srkB7dToTAEqgDSfPtXRJZYH">
                                                                    <td class="ant-table-cell ant_table td-left" >
                                                                        <div class="vote-address-all flex-row table-first-padding sr">
                                                                            <div class="" style={{ minWidth: '150px', maxWidth: '330px' }}>
                                                                                <div class="d-flex flex-col sr-name flex-start">
                                                                                    <span className="myDIV">{info.subject}</span>
                                                                                    
                                                                                </div>
                                                                             
                                                                            </div>
                                                                        </div>
                                                                    </td>


                                                                    <td class="ant-table-cell ant_table td-left" >
                                                                        <span>{info.startdate}</span>

                                                                    </td>
                                                                    <td class="ant-table-cell ant_table white-space-wrap td-left" >
                                                                        <span className="options">{info.endtime}</span>
                                                                       
                                                                    </td>
                                                                    <td style={{ display: 'none' }} class="ant-table-cell ant_table white-space-wrap td-left" >
                                                                        <span class="options">$ {info.totaldonation}</span>
                                                                        
                                                                    </td>

                                                                    <td class="ant-table-cell ant_table td-left" >
                                                                        <span class="options">{info.totaluser}</span>

                                                                        
                                                                    </td>
                                                                    
                                                                </tr>
                                                            ))
                                                            }


                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <Paging pageindex={page} onPageChange={callPageData} />

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

};
export default Donation;