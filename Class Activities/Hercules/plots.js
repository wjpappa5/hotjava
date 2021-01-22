var sortedByGreekSearch = data.sort((a, b) => b.greekSearchResults - a.greekSearchResults);

slicedData = sortedByGreekSearch.slice(0, 10);

reversedData = slicedData.reverse();

var trace1 = {
    x: reversedData.map(object => object.greekSearchResults),
    y: reversedData.map(object => object.greekName),
    text: reversedData.map(object => object.greekName),
    name: "Greek",
    type: "bar",
    orientation: "h"
};

var data = [trace1];

var layout = {
    title: "Greek gods search results",
    margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
    }
};

Plotly.newPlot("plot", data, layout)