// The new student and grade to add to the table
var newGrade = ["Wash", 79];
// Use D3 to select the table
var table = d3.select("table");
// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");
// Use D3 to select the table body
// Append one table row `tr` to the table body
var row = d3.select("tbody").append("tr");
// Append one cell for the student name
row.append("td").text("Wash");
// Append one cell for the student grade
row.append("td").text("79");