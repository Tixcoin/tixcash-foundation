import React, { useEffect, useState } from 'react';
import Paging from './_paging';

const Voting = () => {
    const [data, setData] = useState([])
    const [latestdata, setLatestData] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        fetchAPI();
        fetchLatest();
    }, [])
    const callPageData = async (pageinx) => {

    }
    const fetchAPI = async () => {
        const data = await fetch("https://vote.tixcash.org/api/V1/getallvoting")
        const json = await data.json();
        console.log(json.data);
        //debugger;
        setData(json.data); 
    }
    const fetchLatest = async () => {
        const latestdata = await fetch("https://vote.tixcash.org/api/V1/getlatestvoting")
        const json = await latestdata.json();
        console.log(json.data);
        //debugger;
        setLatestData(json.data);
    }
    

    return (
        <div className="">
            <section>
                <div style={{ fontWeight: '800', fontSize: '20px' }}>Voting</div>
            </section>
        
            <div className="row _badge vote-overview-title" style={{ Zindex: '101', position: 'relative'} }>
                <div className="vote-base-wrap base-wrap col-md-12">
                    <div className="" >
                        <img className="vote-img" src="./assets/img/voting.png" alt="vote" />
                       
                    </div>
                    <div className="base-account">
                        <div className="account-top">
                            <span className="account-name" style={{ color:'black', fontWeight:'700' }}>Topic : {latestdata.subjectline} </span>
                         </div>
                        <div className="account-info">
                            <div className="account-info-item">
                                <div className="data-wrap">
                                    <div className="account-info-title">
                                        <span>Total Votes</span>
                                    </div>
                                    <div className="account-info-num">{latestdata.totalvotes}</div></div>
                                </div>
                            <div className="account-info-item">
                                <div className="data-wrap position-relative">
                                    <div className="account-info-title">
                                        <span>{latestdata?.optiondata?.OptionA}</span>
                                    </div>
                                    {latestdata && latestdata.option1 && <div className="account-info-num options position-relative">{latestdata.option1}{'%'} </div>}
                                    <div className="hide top-hover">

                                        <span>{latestdata?.optiondata?.OptionA}</span>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="account-info-item">
                                <div className="data-wrap position-relative">
                                    <div className="account-info-title">
                                        <span>{latestdata?.optiondata?.OptionB}</span>
                                    </div>
                                    {latestdata && latestdata.option2 && <div className="account-info-num options position-relative">{latestdata.option2}{'%'} </div>}
                                    <div className="hide top-hover">

                                        <span>{latestdata?.optiondata?.OptionB}</span>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="account-info-item">
                                <div className="data-wrap position-relative">
                                    <div className="account-info-title">
                                        <span>{latestdata?.optiondata?.OptionC}</span>
                                    </div>
                                    {latestdata && latestdata.option3 && <div className="account-info-num options position-relative">{latestdata.option3} {'%'} </div>}
                                    <div className="hide top-hover">

                                        <span>{latestdata?.optiondata?.OptionC}</span>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="account-info-item" style={{ display: 'none' }}>
                                <div className="data-wrap position-relative">
                                    <div className="account-info-title">
                                        <span>{latestdata?.optiondata?.OptionD}</span>
                                    </div>
                                    {latestdata && latestdata.option4 && <div className="account-info-num options position-relative">{latestdata.option4 + '%'} </div>}
                                    <div className="hide top-hover">

                                        <span>{latestdata?.optiondata?.OptionD}</span>
                                    </div>  
                                </div>
                               
                            </div>
                            
                    </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div><div className="card vote-card">
                        {/*<div className="vote-overview-action-wrap">*/}
                        {/*    <div>*/}
                        {/*        <div style={{ paddingBottom: '0px' }}></div>*/}
                        {/*        <div className="card-body bg-white" style={{ zIndex: '100', top: '0' }}>*/}
                        {/*            <div className="text-center d-flex justify-content-between align-items-center mobile-100">*/}
                                        
                        {/*                <div className="d-flex align-items-center flex-wrap top-20">*/}
                        {/*                    <button className="btn action-btn confirm disabled" disabled="">*/}
                        {/*                        <span>Vote</span>*/}
                        {/*                    </button>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
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
                                                        <thead className="ant-table-thead">
                                                            <tr>
                                                                <th className="ant-table-cell ant_table td-left" scope="col" >
                                                                    <span>Subject</span>
                                                                </th>
                                                                
                                                                <th className="ant-table-cell ant_table td-right" scope="col" >
                                                                    <span>Total Votes</span></th>
                                                                <th className="ant-table-cell ant_table td-right" scope="col" >
                                                                    <div className="d-flex align-items-center justify-content-end">
                                                                        
                                                                        <span className="ml-1">Option A</span>
                                                                    </div>
                                                                </th>
                                                                <th className="ant-table-cell ant_table white-space-wrap td-right" style={{ textAlign: 'right' }} scope="col" >
                                                                    <span>Option B</span>
                                                                </th>
                                                                <th className="ant-table-cell ant_table white-space-wrap td-right" scope="col" >
                                                                    <div className="d-flex align-items-center justify-content-end">
                                                                        <div className="d-inline-block">
                                                                        </div>
                                                                        <span className="ml-1">Option C</span></div></th>
                                                                <th className="ant-table-cell ant_table td-right" scope="col" style={{ display: 'none' }} >
                                                                    <div className="cusor-pointer d-flex align-items-center justify-content-end">
                                                                        <span className="ml-1">Option D</span>
                                                                        <span className="sort-icon ml-1">
                                                                            <img alt="sort" src="./assets/img/sort.56527012ee4e01d559fea6ce563b4d42.svg" />
                                                                        </span>
                                                                    </div>
                                                                </th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody className="ant-table-tbody">

                                                            {data.map((info) => (
                                                                <tr key={info.id} className="ant-table-row ant-table-row-level-0" data-row-key="TLyqzVGLV1srkB7dToTAEqgDSfPtXRJZYH">
                                                                    <td className="ant-table-cell ant_table td-left" >
                                                                        <div className="vote-address-all flex-row table-first-padding sr">
                                                                            <div className="" style={{ minWidth: '150px', maxWidth: '330px' }}>
                                                                                <div className="d-flex flex-col sr-name flex-start">
                                                                                    <span className="myDIV">{info.subjectline}</span>
                                                                                    <div className="hide">
                                                                                        <span className="mx-2">{info.optiondata.OptionA}</span>
                                                                                        <span className="mx-2">{info.optiondata.OptionB}</span>
                                                                                        <span className="mx-2">{info.optiondata.OptionC}</span>
                                                                                        {info.optiondata.OptionD && <span className="mx-2">{info.optiondata.OptionD}</span>}
                                                                                    </div>
                                                                                </div>
                                                                                <span className="grey">
                                                                                    <span className="address-container  address-all-container ">
                                                                                        {/*<div className="react-contextmenu-wrapper">*/}

                                                                                        {/*    <div className="truncate-ellipsis">*/}
                                                                                        {/*        <span>*/}
                                                                                        {/*            <div className="d-flex address-link-wrap align-items-center">*/}
                                                                                        {/*                <a className="text-truncate address-link small text-muted" href="#/address/TLyqzVGLV1srkB7dToTAEqgDSfPtXRJZYH">*/}
                                                                                        {/*                    <span className="">*/}
                                                                                        {/*                        <div className="ellipsis_box ellipsis_box_all">*/}
                                                                                        {/*                            <div className="d-inline-block line-ellipsis">TLyqzVGLV1srkB7dToTAEqgDSfPtXRJZYH</div></div></span></a>*/}
                                                                                        {/*                <div className="labelShow">*/}
                                                                                        {/*                </div>*/}
                                                                                        {/*            </div>*/}
                                                                                        {/*        </span>*/}
                                                                                        {/*    </div>*/}
                                                                                        {/*</div>*/}
                                                                                        <span className="new-address-content-menu-wrap">
                                                                                            <nav role="menu" tabindex="-1" className="react-contextmenu dropdown-menu show new-address-content-menu"><a className="dropdown-item" href="#!">
                                                                                                <svg className="icon tron-icon copy-icon" aria-hidden="true">
                                                                                                    <use href="#icon-link-open"></use>
                                                                                                </svg>
                                                                                                <span>Open in New Tab	 </span></a>
                                                                                                <a className="dropdown-item" href="#!">
                                                                                                    <svg className="icon tron-icon copy-icon" aria-hidden="true">
                                                                                                        <use href="#icon-icon-labels"></use>
                                                                                                    </svg>
                                                                                                    <span>Edit Private Name</span>
                                                                                                </a>
                                                                                                <a className="dropdown-item" href="#!">
                                                                                                    <svg className="icon tron-icon" aria-hidden="true">
                                                                                                        <use href="#icon-user-circle"></use></svg>
                                                                                                    <span>View Account Profile</span></a>
                                                                                                <div className="menu-gap-line">
                                                                                                </div>
                                                                                                <a className="dropdown-item" href="#!">
                                                                                                    <svg className="icon tron-icon copy-icon" aria-hidden="true">
                                                                                                        <use href="#icon-icon-copy1"></use>
                                                                                                    </svg>
                                                                                                    <span>Copy Address</span></a>
                                                                                                <a className="dropdown-item" href="#!">
                                                                                                    <svg className="icon tron-icon copy-icon" aria-hidden="true">
                                                                                                        <use href="#icon-qrcode"></use></svg>
                                                                                                    <span>Show QR Code</span></a>
                                                                                                <a className="dropdown-item" href="#!">
                                                                                                    <svg className="icon tron-icon copy-icon" aria-hidden="true">
                                                                                                        <use href="#icon-transfer"></use></svg>
                                                                                                    <span>Send Tokens</span>
                                                                                                </a>
                                                                                            </nav>
                                                                                        </span>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </td>


                                                                    <td className="ant-table-cell ant_table td-left" >
                                                                        <span>{info.totalvotes}</span>
                                                                        
                                                                    </td>
                                                                    <td className="ant-table-cell ant_table white-space-wrap td-right" >
                                                                        <div className="Voteoptions">{info.optiondata.OptionA}</div>
                                                                        <span className="Voteoptions">{info.option1}%</span>
                                                                        <div className="hide">
                                                                            <span className="mx-2">{info.optiondata.OptionA}</span>
                                                                            
                                                                        </div>
                                                                    </td>
                                                                    <td className="ant-table-cell ant_table white-space-wrap td-right" >
                                                                        <div className="Voteoptions">{info.optiondata.OptionB}</div>
                                                                        <span className="Voteoptions">{info.option2}%</span>
                                                                        <div className="hide">
                                                                            <span className="mx-2">{info.optiondata.OptionB}</span>

                                                                        </div>
                                                                    </td>

                                                                    <td className="ant-table-cell ant_table td-right" >
                                                                        <div className="Voteoptions">{info.optiondata.OptionC}</div>
                                                                        <span className="Voteoptions">{info.option3}%</span>

                                                                        <div className="hide">
                                                                            <span className="mx-2">{info.optiondata.OptionC}</span>

                                                                        </div>
                                                                    </td>
                                                                    <td className="ant-table-cell ant_table defaultvote td-right" style={{ display:'none' }} >
                                                                        <span className="Voteoptions">{info.optiondata.OptionD}</span>
                                                                        <span className="Voteoptions">{info.option4}%</span>
                                                                        <div className="hide">
                                                                            <span className="mx-2">{info.optiondata.optionD ? info.optiondata.OptionD : "null"}</span>

                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ) )
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

export default Voting;