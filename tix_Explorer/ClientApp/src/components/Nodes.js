/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');

import NodesStatChart1 from './NodesStatChart1';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class Nodes extends Component {
	static displayName = Nodes.name;
	constructor(props) {
		super(props);

		this.state = {
			data: [{ host: "38.242.228.220", port: 16666 }, { host: "188.134.88.248", port: 16666 }, { host: "162.0.226.68", port: 16666 }, { host: "162.0.226.66", port: 16666 }, { host: "109.235.67.134", port: 16666 }, { host: "194.135.84.156", port: 16666 }, { host: "158.220.82.37", port: 16666 }, { host: "212.24.111.214", port: 16666 }, { host: "194.135.80.97", port: 16666 }, { host: "162.0.226.64", port: 16666 }, { host: "80.208.226.206", port: 16666 }, { host: "89.40.13.6", port: 16666 }, { host: "195.181.243.98", port: 16666 }, { host: "109.123.231.21", port: 16666 }],
            statsdata: [{ label: "38.242.228.220:16666", y: 2, color: "white" }, { label: "188.134.88.248:16666", y: 10 }, { label: "162.0.226.68:16666", y: 10 }, { label: "162.0.226.66:16666", y: 10 }, { label: "109.235.67.134:16666", y: 10 }, { label: "194.135.84.156:16666", y: 10 }, { label: "158.220.82.37:16666", y: 10 }, { label: "212.24.111.214:16666", y: 10 }, { label: "194.135.80.97:16666", y: 10 }, { label: "162.0.226.64:16666", y: 10 }, { label: "80.208.226.206:16666", y: 10 }, { label: "89.40.13.6:16666", y: 10 }, { label: "195.181.243.98:16666", y: 10 }, { label: "109.123.231.21:16666", y: 10 }],
            options1: {
                theme: "light2", // "light1", "light2", "dark1"
                animationEnabled: true,
                exportEnabled: false,
                fontSize: 40,
                height: 220,
                padding: 2,  
                title: {
                    text: "Nodes Ranking (Ranked by country and region)",

                    fontFamily: "tahoma",

                    fontSize: 25,
                    padding: 10
                },
                axisX: {
                    title: "Country / Region",
                    interval: 1,
                    labelFontSize: 12,
                    labelFontColor: "green"
                },
                axisY: {
                    title: "Rank",
                    includeZero: true,
                    labelFontSize: 12,
                    scaleBreaks: {
                        type: "wavy",
                        customBreaks: [{
                            startValue: 80,
                            endValue: 210
                        },
                        {
                            startValue: 230,
                            endValue: 600
                        }
                        ]
                    }
                },
                data: [{
                    type: "bar",
                    indexLabelFontSize: 15, indexLabelBackgroundColor: "yellow",
                    indexLabelLineDashType: "dot",
                    indexLabelFontFamily: "Lucida Console",
                    indexLabel: "{y}",
                    color: "#FF8C00",
                    dataPoints: [
                        { label: "Germany", y: 1, y1: 1,markerSize: 20 },
                        { label: "Japan", y: 1, y1: 2 },
                        { label: "Russia", y: 1, y1: 4 },
                        { label: "United Kingdom", y: 1, y1: 5 },
                        { label: "United States", y: 2, y1: 6 },
                        { label: "Lithuania", y: 7, y1: 3 }
                    ]
                }]
            },
            options2: {
                theme: "light1", // "light1", "light2", "dark1"
                animationEnabled: true,
                exportEnabled: false,
                height: 260,
                axisX: {
                    margin: 10,
                    labelPlacement: "inside",
                    tickPlacement: "inside",
                    lineThickness: 0,
                    tickLength: 0,
                    labelFormatter: function (e) {
                        return e.label;
                    },
                    valueFormatString: " ", lineThickness: 0, gridThickness: 0,
                },
                axisY: {
                    title: "Nodes",
                    titleFontSize: 8,
                    includeZero: true,
                    tickLength: 0,
                    suffix: "",
                    gridThickness: 0,
                    valueFormatString: " ", lineThickness: 0,

                },
                data: [{
                    type: "bar",

                    indexLabel: "{y1} Node",

                    dataPoints: [
                        { label: "212.24.111.214:16666", y: 10, y1: 8 },
                        { label: "194.135.80.97:16666", y: 11, y1: 9 },
                        { label: "162.0.226.64:16666", y: 12, y1: 10 },
                        { label: "80.208.226.206:16666", y: 13, y1: 11 },
                        { label: "89.40.13.6:16666", y: 14, y1: 12 },
                        { label: "195.181.243.98:16666", y: 15, y1: 13 },
                        { label: "109.123.231.21:16666", y: 16, y1: 14 }
                    ]
                }]
            },
			loaded: true
		};
		
	}

	render() {

		return (
            <div id="mainContent">

                    <main className="container header-overlap pb-3 token_black block-list-box">
                        <section className="blocks-list-wrapper">
                            <div className="representatives-list-wrap blocks-overview-cont">
                                <div>
                                    <div className="representatives-data-wrap blocks-data-wrap">
                                        <div className="mb-20-style blocks_overview blocks_list_overview">
                                            <h2 className="m-3"></h2>
                                            <div className="mb-20-style amount-wrapper-cont">
                                                <div className="card h-100">
                                                    <div className="card-body d-flex flex-col align-items-start" id="txcont" style={{ width: '100%' }}>
                                                        
                                                        <div className=" representatives-data blocks-data">
                                                            <div className="d-flex gap-2">
                                                            <span className="num TxCountNum"><span>Nodes - 14</span></span><div className="d-flex desc mt-6px ms-4"><span className="txt">(Distributed Nodes)</span></div>

                                                        </div>
                                                    </div>
                                                    <div className=" representatives-data blocks-data rowAlignXScreen">

                                                        <div className="d-flex gap-2 ">
                                                            <span className="num TxCountNum "><span>Countries / Regions - 6</span></span><div className="d-flex desc mt-6px ms-4"><span className="txt">(Location)</span></div>

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
                              
                                <div className="table_new_style">
                                    <div className="smart-table-wrapper">
                                        <div className="card table_pos ">
                                            <div className="ant-table-wrapper">
                                                <div className="ant-spin-nested-loading">
                                                    <div className="ant-spin-container">
                                                    <NodesStatChart1 />
                                                  
                                                    {this.state && (
                                                        <CanvasJSChart options={this.state.options1} />
                                                    )}
                                                    {/*{this.state && (*/}
                                                    {/*    <CanvasJSChart options={this.state.options1} />*/}
                                                    {/*)}*/}
                                                </div>
                                               
                                            </div>
                                           
                                        </div>
                                       

                                    </div>
                                              
                                        
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