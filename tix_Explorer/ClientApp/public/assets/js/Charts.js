const chart1 = echarts.init(document.getElementById('chart1'));
const option1 = {

    grid: {
        show: true,
        top: 50,
        borderColor: null,
        bottom: 60,
        right: 0
    },

    tooltip: {
        trigger: 'axis'
    },

    legend: {
        data: ['Txn Count', 'TRX Transfers', 'USDT Transfers'],
        bottom: 0
    },

    xAxis: {
        data: ['01-04', '01-06', '01-08', '01-10', '01-12', '01-14', '01-16']
    },

    yAxis: {},
    series: [
        {
            name: 'Txn Count',
            type: 'line',
            data: [4790146, 4730764, 4490146, 4190146, 4690146, 4390146, 4590146]
        },
        {
            name: 'TRX Transfers',
            type: 'line',
            data: [1884139, 1927195, 2084139, 2154289, 1984385, 1882487, 2088247]
        },

        {
            name: 'USDT Transfers',
            type: 'line',
            data: [1614265, 1797778, 1894879, 2053894, 1845679, 1615683, 1895783]
        }]
};

const chart2 = echarts.init(document.getElementById('chart2'));
const option2 = {
    title: {
        text: '$19,046,950',
        left: '0'
    },

    grid: {
        show: true,
        top: 50,
        borderColor: null,
        bottom: 25,
        right: 0
    },

    tooltip: {
        trigger: 'axis'
    },

    legend: {
        data: ['TVL', 'TVL Staking Governance'],
        top: 0,
        right: 30
    },

    xAxis: {
        data: ['01-05', '01-07', '01-09', '01-11', '01-13', '01-15', '01-17']
    },

    yAxis: [{}],
    series: [
        {
            name: 'TVL',
            type: 'line',
            data: [95763, 87564, 98266, 89834, 87497, 89567, 93765]
        },

        {
            name: 'TVL Staking Governance',
            type: 'line',
            data: [19999, 19673, 29867, 29567, 20486, 35869, 25685]
        }],


    dataZoom: [
        // { yAxisIndex: 0, filterMode: 'none', startValue: 20, endValue: 30 }
    ]
};

const chart3 = echarts.init(document.getElementById('chart3'));
const option3 = {
    grid: {
        show: true,
        top: 10,
        borderColor: null,
        bottom: 25,
        right: 0
    },

    tooltip: {
        trigger: 'axis'
    },

    legend: {
        data: ['Protocol Revenue'],
        top: 0,
        right: 30
    },

    xAxis: {
        data: ['01-04', '01-06', '01-08', '01-10', '01-12', '01-14', '01-16']
    },

    yAxis: [{}],
    series: [
        {
            name: 'TVL',
            type: 'line',
            data: [127600, 107600, 137600, 147600, 121600, 137600, 126600]
        }],

    dataZoom: [
        // { yAxisIndex: 0, filterMode: 'none', startValue: 20, endValue: 30 }
    ]
};


// https://echarts.apache.org/en/api.html#echarts.connect
chart1.setOption(option1);
chart2.setOption(option2);
chart3.setOption(option3);
chart1.group = 'group1';
chart2.group = 'group1';
chart3.group = 'group1';
echarts.connect('group1');




/*chart*/
window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(231,233,237)'
};

var randomScalingFactor = function () {
    return (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 100);
};

var line1 = [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(),];

var line2 = [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(),];

var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var config = {
    type: 'line',
    data: {
        labels: MONTHS,
        datasets: [{
            label: "My First dataset",
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            data: line1,
            fill: false,
        }, {
            label: "My Second dataset",
            fill: false,
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            data: line2,
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Line Chart'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                },
            }]
        }
    }
};

/*var ctx = document.getElementById("canvas").getContext("2d");*/
/*var myLine = new Chart(ctx, config);*/

/*Stablecoins js*/

