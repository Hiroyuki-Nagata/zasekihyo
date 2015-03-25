// global
var chart = null;
var options = {

    chart: {
        renderTo: 'container',
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80
    },
    title: {
        text: '座席表のサンプル'
    },
    xAxis: {
        categories: ['', '', '', '', '', '']
    },
    yAxis: {
        categories: ['', '', '', '', '', ''],
        title: null
    },
    colorAxis: {
        min: 0,
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[0]
    },
    // legend: {
    //     align: 'right',
    //     layout: 'vertical',
    //     margin: 0,
    //     verticalAlign: 'top',
    //     y: 25,
    //     symbolHeight: 280
    // },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
                this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
        }
    },
    series: [{
        name: 'Sales per employee',
        borderWidth: 1,
        data: [[0, 0, 10], [0, 1, 10], [0, 2, 10], [0, 3, 10], [0, 4, 10], [0, 5, 10], 
	       [1, 0, 10], [1, 1, 10], [1, 2, 10], [1, 3, 10], [1, 4, 10], [1, 5, 10],
	       [2, 0, 10], [2, 1, 10], [2, 2, 10], [2, 3, 10], [2, 4, 10], [2, 5, 10],
	       [3, 0, 10], [3, 1, 10], [3, 2, 10], [3, 3, 10], [3, 4, 10], [3, 5, 10],
	       [4, 0, 10], [4, 1, 10], [4, 2, 10], [4, 3, 10], [4, 4, 10], [4, 5, 10],
	       [5, 0, 10], [5, 1, 10], [5, 2, 10], [5, 3, 10], [5, 4, 10], [5, 5, 10]],
        dataLabels: {
            enabled: false,
            color: '#000000'
        }
    }]
};

// ready
$(document).ready(function() {
    chart = new Highcharts.Chart(options);
});
