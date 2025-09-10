/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class TxnsCharts extends Component {
	static displayName = TxnsCharts.name;
	constructor(props) {
		super(props);
		
		if (props.chartdata && props.chartdata.length>0) {
			
			this.state = {

				options: {
					animationEnabled: true,
					theme: "dark2",
					backgroundColor: "#303030",
					height: 260,
					title: {
						text: "Daily Txns (15 Days)",
						
						fontFamily: "tahoma",

						fontSize: 15,
						padding: 10      
					},
					axisY: {
						title: "Transactions",
						gridThickness: 1,
						gridDashType: "dot",
						lineThickness: 1,
						titleFontColor: "#00FF00",
						labelFontColor: "#00FF00",

						lineThickness: 1,
					},
					axisY2: {
						title: "Transfers",
						titleFontColor: "#F9BE4A",
						labelFontColor: "#F9BE4A",

						lineThickness: 1,
					},
					toolTip: {
						shared: true
					},
					legend: {
						verticalAlign: "bottom",
						fontSize: 10,
					},
					data: [{
						type: "line",
						name: "Transactions",
						showInLegend: true,
						gridThickness: 0,
						lineColor: "#00FF00",
						lineThickness: 1,
						dataPoints: props.chartdata[0]
					},
					{
						type: "line",
						name: "Transfers",
						axisYType: "secondary",
						lineColor: "#F9BE4A",
						showInLegend: true,
						gridThickness: 0,
						lineThickness: 1,
						dataPoints: props.chartdata[1]
					}]
				},

				loaded: true
			};
		}
		console.log(this.state);
		CanvasJS.addCultureInfo("es",
			{
				decimalSeparator: ".",
				digitGroupSeparator: ",",
				days: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
			});
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

export default TxnsCharts;     