// from data.js
var tableData = data;

// YOUR CODE HERE!
data.forEach(item => {
    console.log(item)
})

// // Select table body
// var body = d3.select("tbody")
//
// // Append row "tr"
// var row = body.append("tr")

// Append new "td"


data.forEach(item => {
    var row = d3.select("tbody").append("tr")
        Object.entries(item).forEach(([key, value]) => {
        row.append("td").text(value)
    })
}
)
