// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);
var labels = Object.keys(data.us);

function init() {
    var data = [{
        values: us,
        labels: labels,
        type: 'pie'
    }];
    var layout = {
        height: 400,
        width: 500
    };

    Plotly.newPlot('pie', data, layout);
}

d3.selectAll('#selDataset').on('change', GetInfo);

function GetInfo() {
    var dropdownMenu = d3.select('#selDataset');
    var dataset = dropdownMenu.property('value');
    var data = [];

    if (dataset == 'states') {
        data = us;
    }

    else if (dataset == 'kingdom') {
        data = uk;
    }

    else if (dataset == 'maple') {
        data = canada;
    } 

    Repaint(data);
}

function Repaint(newdata) {
    Plotly.restyle('pie','values',[newdata]);
}

   
init();
