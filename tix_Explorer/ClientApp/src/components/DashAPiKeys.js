import React, { Component } from 'react';

export class DashAPiKeys extends Component {
    constructor(props) {
        super(props);
        if (props.email)
            this.state = {
                email: props.email,
                key: null,
                keys: [],
                status: ''
            };
        // console.log(TokenGenerate());
    }
    componentDidMount() {
        this.subscribe();
    }
    setValues = (key, value) => {
        this.setState({
            email: key == "email" ? value : this.state.email,
            keys: key == "keys" ? value : this.state.keys,
            key: key == "key" ? value : this.state.key,
            status: key == "status" ? value : this.state.status,
        });
    }

    subscribe = async () => {

        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + '/weatherforecast/GetAuthAPIKey?email=' + this.state.email);
        const data = await response.json();
        console.log(data)
        this.setValues("keys", data);
    }


    handleSubmit = async (event) => {
        event.preventDefault();
        this.setValues('status', await this._doSubmit());
        this.subscribe();
    }

    _doSubmit = async () => {
        // create a new FormData object and append the file to it
        const file = new FormData();
        file.append("email", this.state.email);

        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + "/weatherforecast/AuthAddApiKey", {
            method: 'POST',
            body: file
        });
        // console.log(await response.text());
        return await response.text();

    }

    render() {
        return (
             <main class="ant-layout-content">
                    <div class="myaccount-overview-container">
                        <div class="tron-feedback-container false false">
                            <svg class="icon tron-icon tron-icon-like" aria-hidden="true">
                                <use ></use>
                            </svg>
                            <span class="tron-feedback-text">
                                <span>Is this page helpful?</span>
                                <svg class="icon tron-icon tron-icon-close-feedback" aria-hidden="true"><use ></use></svg>
                            </span>
                        </div>
                        <div class="title">API Keys</div>
                        <div class="content-wrapper">
                        <div class="content-title">Past Keys</div>
                        <div class="d-flex flex-wrap justify-content-between">
                            <div class="cotent-item overflow-scroll">
                                <div className="ant-table-container">  <div className="ant-table-content">
                                    <table className="auto">
                                        <thead className="ant-table-thead" style={{ background: '#F6F7FB', borderRadius:'10px'} }>
                                            <tr>
                                                <th className="ant-table-cell ant_table td-center" scope="col">
                                                    <div className="see-txn-detail no-hover-status">  </div>  </th>
                                                <th className="ant-table-cell ant_table td-center p-3" scope="col">API Key</th>
                                                <th className="ant-table-cell ant_table td-center p-3" scope="col">GeneratedOn</th>
                                                <th className="ant-table-cell ant_table td-center p-3" scope="col">ExpiredOn</th>
                                                <th className="ant-table-cell ant_table td-left p-3" scope="col"></th>      
                                            </tr>
                                        </thead>

                                        <tbody className="ant-table-tbody">
                                            {this.state.keys.map(f =>
                                                <tr className="ant-table-row ant-table-row-level-0">
                                                    <td></td>
                                                    <td className="ant-table-cell  ant_table filter-transaction-type td-left">
                                                        {f.APIKey}
                                                    </td> 
                                                    <td className="ant-table-cell  ant_table filter-transaction-type td-left">
                                                        {f.createdOn}
                                                    </td> 
                                                    <td className="ant-table-cell  ant_table filter-transaction-type td-left">
                                                        {f.expiredOn}
                                                    </td> 
                                                    <td className="ant-table-cell  ant_table filter-transaction-type td-left">
                                                        <span className="delete_btn">
                                                           Delete
                                                        </span>
                                                    </td> 
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>

                                </div>
                                </div>
                            
                            
                            </div>

                        </div>
                        <div class="d-flex flex-wrap justify-content-between ant-form-item">
                           
                            <div class="cotent-item justify-content-around">
                               
                                    <div class="content-item-title">
                                        <button type="submit" id="btngenerated" class="ant-btn ant-btn-primary" onClick={(e) => this.handleSubmit(e)}><span>Generated New Key</span></button>
                                    </div>
                                    <br></br>
                                <div class="content-item-title">
                                        {this.state.status != "succeeded" && <span style={{ color: "white", backgroundColor: "red" }}>{this.state.status}</span>
                                    }
                                    {this.state.status == "succeeded" && <span style={{ color: "white", backgroundColor: "green", padding: '3px 6px', borderRadius:'8px' }}>Created successfully.</span>
                                        }
                                    </div>

                                 </div>
                                
                        </div>
                        </div>
                    </div>
                </main>
        )
    }
}