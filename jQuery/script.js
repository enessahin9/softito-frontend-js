function FillTable(data) {
    for (var i = 0; i < data.length; i++) {
        $("tbody").append(`
            <tr>
                <td>${data[i].userId}</td>
                <td>${data[i].id}</td>
                <td>${data[i].title}</td>
                <td>${data[i].completed}</td>
            </tr>
        `);
    }
}

function ButtonClick() {
    $.get("https://jsonplaceholder.typicode.com/todos", FillTable, "json");

}