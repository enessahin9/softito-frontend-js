// $("button").click(function getApi() {
//     $("div").load("https://jsonplaceholder.typicode.com/todos/")
// })


// var data;
// $.ajax({
//     async: false,
//     url: "https://jsonplaceholder.typicode.com/todos",
//     success: function(response){
//         data = response;
//     },

// });

// console.log(data)

// for (let data)


function FillTable(data) {
    for (var i = 0; i < data.length; i++) {
        $("tbody").append(`<tr>${data[i]}</tr>`);
        console.log('dta')
    }
}

function ButtonClick() {
    $.get("https://jsonplaceholder.typicode.com/todos", FillTable, "json");

}