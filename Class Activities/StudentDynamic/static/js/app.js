// Use D3 to select the table body
// Use D3 to select the table
// Use D3 to set the table class to `table table-striped`
var table = d3.select("table");
// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");
// Loop through an array of grades and build the entire table body dynamically from scratch
var grades = [["Malcolm", 80], ["Zoe", 85], ["Kaylee", 99], ["Simon", 99], ["Wash", 79]];
var tbody = d3.select("tbody");
grades.forEach((studentMarks) => {
    var row = tbody.append("tr");
    Object.entries(studentMarks).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });