/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class NodesStatChart extends Component {
	static displayName = NodesStatChart.name;
	constructor(props) {
		super(props);
		
		if (props.chartdata && props.chartdata.length>0) {
			
			this.state = {

				options: {
					animationEnabled: true,
					theme: "light2",
					fontSize: 8,
					//backgroundColor: "#ba68c8",
					axisX: {
						
						labelPlacement: "inside",
						tickPlacement: "inside",
						lineThickness: 0,
						tickLength: 0,
						fontSize: 8,
						labelFormatter: function (e) {
							return "";
						},
						valueFormatString: " ", gridThickness: 0,
					},
					title: {
						text: "Nodes",
						fontSize: 8,
						fontFamily: "tahoma",
  
					},
					axisY: {
						title: "",
						includeZero: true,
						fontSize: 8,
						suffix: "",
						lineThickness: 0,
						tickLength: 0, valueFormatString: " ", gridThickness: 0,
					},
					toolTip: {
						shared: true
					},
					
					data: [{
						indexLabelFontSize: 8,
						type: "column",
						fontSize: 8,
						yValueFormatString: "###",
						indexLabel: "{label}",
						dataPoints: props.chartdata
					}]
				},

				loaded: true
			};
		}
		console.log(this.state);
	}

	render() {
		
		return (
			<div>
				{this.state && (
					<CanvasJSChart options={this.state.options} />
				)}
			</div>
		);
	}
}

export default NodesStatChart;     