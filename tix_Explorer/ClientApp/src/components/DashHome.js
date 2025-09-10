import React, { Component } from 'react';

export class DashHome extends Component {
    constructor(props) {
        super(props);
        if (props.email)
            this.state = {
                email: props.email,
                favadd: null,
                favs: [],
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
            favs: key == "favs" ? value : this.state.favs,
            favadd: key == "favadd" ? value : this.state.favadd,
            status: key == "status" ? value : this.state.status,
        });
    }

    subscribe = async () => {

        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + '/weatherforecast/GetAuthFavAdd?email=' + this.state.email);
        const data = await response.json();
        console.log(data)
        this.setValues("favs", data);
    }


    handleSubmit = async (event) => {
        event.preventDefault();
        this.setValues('status', await this._doSubmit());
        this.subscribe();
    }

    _doSubmit = async () => {
        if (this.state.favadd == '') { return 'Fav Address required'; return; }

        // create a new FormData object and append the file to it
        const file = new FormData();
        file.append("email", this.state.email);
        file.append("favAdd", this.state.favadd);

        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + "/weatherforecast/AuthAddFavAddress", {
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
                        <div class="title">Account Overview</div>
                    <div class="content-wrapper table-responsive">
                        <div class="content-title">Favourite address</div>
                        <div class="d-flex flex-wrap justify-content-between ">
                            <div class="cotent-item">
                                <div className="ant-table-container ">
                                    <div className="ant-table-content ant-table-content2">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th className="ant-table-cell ant_table td-center address" scope="col">Address</th>
                                                <th className="ant-table-cell ant_table td-left" scope="col"></th>      
                                            </tr>
                                        </thead>

                                        <tbody className="ant-table-tbody">
                                            {this.state.favs.map(f =>
                                                <tr className="ant-table-row ant-table-row-level-0">
                                                   
                                                    <td className="ant-table-cell  ant_table filter-transaction-type td-left">
                                                        {f.favAddress}
                                                    </td> 
                                                    <td className="ant-table-cell  ant_table filter-transaction-type td-left ">
                                                        <span className="delete_btn"> Delete</span>
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
                            <div class="">{this.state.status != "succeeded" && <span style={{ color: "white", backgroundColor: "red" }}>{this.state.status}</span>
                            }</div>
                            <div class="">{this.state.status == "succeeded" && <span style={{ color: "white", backgroundColor: "green" }}>Favourite list were updated successfully.</span>
                            }</div>
                            <div class="cotent-item justify-content-between flex-sm-col" >
                                <div class="content-itme-num mb-10">
                                    <input placeholder="Enter address" id="dash_Favourite" aria-required="true" class="ant-input" type="text"
                                        onChange={(e) => this.setValues('favadd', e.target.value)}
                                        value={this.state.favadd} style={{width:'15rem'} } />
                                </div>
                                <div class="content-item-title">
                                    <button type="submit" id="btnAddress" class="ant-btn ant-btn-primary" onClick={(e) => this.handleSubmit(e)}><span>Add Favourite</span></button>

                                </div>
                           
                            </div>
                                
                            </div>
                        </div>
                    </div>
                </main>
        )
    }
}