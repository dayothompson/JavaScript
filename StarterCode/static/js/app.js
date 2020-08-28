// from data.js
var tableData = data;
console.log(tableData);

// Append tableData to each column on webpage
data.forEach(item => {
    var row = d3.select("tbody").append("tr");
        Object.entries(item).forEach(([key, value]) => {
        row.append("td").text(value);
    });
}
);

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select(".form-group");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);



// Create the function to run for both events
function runEnter(){
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear default table
    var body2 = d3.select("tbody");
    body2.html("");

    // Select the date input element, get the raw HTML node and get the value property of the input element
    var dateElement = d3.select("#datetime");
    var dateValue = dateElement.property("value").toLowerCase();

    // Select the city input element, get the raw HTML node and get the value property of the input element
    var cityElement = d3.select("#city");
    var cityValue = cityElement.property("value").toLowerCase();

    // Select the state input element, get the raw HTML node and get the value property of the input element
    var stateElement = d3.select("#state");
    var stateValue = stateElement.property("value").toLowerCase();

    // Select the country input element, get the raw HTML node and get the value property of the input element
    var countryElement = d3.select("#country");
    var countryValue = countryElement.property("value").toLowerCase();

    // Select the shape input element, get the raw HTML node and get the value property of the input element
    var shapeElement = d3.select("#shape");
    var shapeValue = shapeElement.property("value").toLowerCase();

    // Create an array to store the filtered data
    var outputList = [];

    // Filter data using the multiple inputs

    // For date query
    if (dateValue !== "") {
        // Filter the date from the data
        outputList = tableData.filter(item => item.datetime === dateValue);
    }
    else {
        // Filtered data equals original data if no date input
        outputList = tableData;
    };

    // For city query
    if (cityValue !== "") {
        // Filter the city
        outputList = outputList.filter(item => item.city === cityValue);
    };

     // For state query
     if (stateValue !== "") {
        // Filter the state
        outputList = outputList.filter(item => item.state === stateValue);
    };

    // For country query
    if (countryValue !== "") {
        // Filter the country
        outputList = outputList.filter(item => item.country === countryValue);
    };

    // For shape query
    if (shapeValue !== "") {
        // Filter the data if there was a shape input
        outputList = outputList.filter(item => item.shape === shapeValue);
    };

    // Print data
    console.log(outputList);

    // Append outputList to each column on webpage
    outputList.forEach(info => {
        var row2 = body2.append("tr")
        Object.entries(info).forEach(([key, value]) => {
        row2.append("td").text(value);
    });
    });
}




