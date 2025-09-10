/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class HomeStatsChart extends Component {
	static displayName = HomeStatsChart.name;
	constructor(props) {
		super(props);
		
		if (props.chartdata && props.chartdata.length>0) {
			
			this.state = {

				options: {
					animationEnabled: true,
					theme: "light2",
					
					height: 180,
					title: {
						text: "Data Analytics",
						
						fontFamily: "tahoma",

						fontSize: 10,
						padding: 10      
					},
					axisY: {
						title: "",
						includeZero: true,
						suffix: ""
					},
					toolTip: {
						shared: true
					},
					
					data: [{
						type: "column",
						yValueFormatString: "#,###",
						indexLabel: "{y}",
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

export default HomeStatsChart;     