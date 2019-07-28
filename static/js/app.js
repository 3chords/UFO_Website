// from data.js
var tableData = data;


// select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    // select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // get the value property of the input element
    var inputValue = inputElement.property("value");

    // test to see if I'm capturing the value.. and it works
    //console.log(inputValue)

    // get filtered data based on the input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    // map the filtered data result into variables
    var datetime = filteredData.map(row => row.datetime);
    var city = filteredData.map(row => row.city.toUpperCase());
    var state = filteredData.map(row => row.state.toUpperCase());
    var country = filteredData.map(row => row.country.toUpperCase());
    var shape = filteredData.map(row => row.shape.toUpperCase());
    var durationMinutes = filteredData.map(row => row.durationMinutes);
    var comments = filteredData.map(row => row.comments.toUpperCase());
    
    // call the function below with the mapped variables defined above
    buildTable(datetime, city, state, country, shape, durationMinutes, comments);

    function buildTable(datetime, city, state, country, shape, durationMinutes, comments) {
        var table = d3.select("#ufo-table");
        var tbody = table.select("tbody");
        
        // clear out the table of any old results
        tbody.html("");
        
        // append filtered items to the the list
        for (var i = 0; i < filteredData.length; i++) {
            trow = tbody.append("tr");
            trow.append("td").text(datetime[i]);
            trow.append("td").text(city[i]);
            trow.append("td").text(state[i]);
            trow.append("td").text(country[i]);
            trow.append("td").text(shape[i]);
            trow.append("td").text(durationMinutes[i]);
            trow.append("td").text(comments[i]);
        }
    }
});