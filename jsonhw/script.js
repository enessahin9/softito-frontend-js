function fetchData(resource) {
    const url = `https://jsonplaceholder.typicode.com/${resource}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayTable(data, resource))
        .catch(error => console.error('Error fetching data:', error));
}

function displayTable(data, resource) {
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = ''; // Clear previous content

    const table = document.createElement('table');
    const headerRow = document.createElement('tr');

    // Create table headers
    Object.keys(data[0]).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    // Create table rows
    data.forEach(item => {
        const row = document.createElement('tr');

        Object.entries(item).forEach(([key, value]) => {
            const td = document.createElement('td');

            if (resource === 'users' && (key === 'address' || key === 'company')) {
                // Handle special cases for 'address' and 'company' fields
                if (key === 'address') {
                    const addressString = `${value.city}, ${value.street}, ${value.suite}, ${value.zipcode}`;
                    td.textContent = addressString;
                } else if (key === 'company') {
                    td.textContent = value.name;
                }
            } else if (resource === 'photos' && key === 'thumbnailUrl') {
                const thumbnail = document.createElement('img');
                thumbnail.src = value;
                thumbnail.alt = 'Thumbnail';
                thumbnail.addEventListener('click', () => openPhotoInNewTab(item.url));
                td.appendChild(thumbnail);
                // Add click event to the entire now
                row.addEventListener('click', () => openPhotoInNewTab(item.url));
            } else {
                td.textContent = value;
            }

            row.appendChild(td);
        });

        table.appendChild(row);
    });

    tableContainer.appendChild(table);
}

function openPhotoInNewTab(url) {
    window.open(url, '_blank');
}

function handleCellClick(content) {
    // Example: Open a new tab with the content when a cell is clicked
    window.open(content, '_blank');
}