
var apiKey = "88EyhJZXMqoK1SvJs7LT";
var ticker = 'FB';
var start = '2015-01-01';
var end = '2018-01-01';

/* global Plotly */
var url =
  `https://www.quandl.com/api/v3/datasets/WIKI/${ticker}.json?start_date=${start}&end_date=${end}&api_key=${apiKey}`;

/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

/**
 * Fetch data and build the timeseries plot
 */
function buildPlot() {
  d3.json(url).then(function(data) {
    pull = data['dataset']['data'];
  
  date = pull.map(d => d[0]);
  closing = pull.map(c => c[11]);
  
  var trace1 = {
    x: date,
    y: closing,
    type: "line"
  };

  var layout = {
    title: ` ${ticker} Close Value by Date`,
    xaxis: {'title': "Date"},
    yaxis: {'title': "Close Value"},
  };

  var data = [trace1];
  Plotly.newPlot("plot", data, layout);

});

}

buildPlot();
