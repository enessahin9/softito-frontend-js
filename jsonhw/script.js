// function fetchData(resource) {
//     const url = `https://jsonplaceholder.typicode.com/${resource}`;
//     fetch(url)
//         .then(response => response.json())
//         .then(data => displayTable(data, resource))
//         .catch(error => console.error('Error fetching data:', error));
// }

// function displayTable(data, resource) {
//     const tableContainer = document.getElementById('table-container');
//     tableContainer.innerHTML = ''; // Clear previous content

//     const table = document.createElement('table');
//     const headerRow = document.createElement('tr');

//     // Create table headers
//     Object.keys(data[0]).forEach(key => {
//         const th = document.createElement('th');
//         th.textContent = key;
//         headerRow.appendChild(th);
//     });

//     table.appendChild(headerRow);

//     // Create table rows
//     data.forEach(item => {
//         const row = document.createElement('tr');

//         Object.entries(item).forEach(([key, value]) => {
//             const td = document.createElement('td');

//             if (resource === 'users' && (key === 'address' || key === 'company')) {
//                 // Handle special cases for 'address' and 'company' fields
//                 if (key === 'address') {
//                     const addressString = `${value.city}, ${value.street}, ${value.suite}, ${value.zipcode}`;
//                     td.textContent = addressString;
//                 } else if (key === 'company') {
//                     td.textContent = value.name;
//                 }
//             } else if (resource === 'photos' && key === 'thumbnailUrl') {
//                 const thumbnail = document.createElement('img');
//                 thumbnail.src = value;
//                 thumbnail.alt = 'Thumbnail';
//                 thumbnail.addEventListener('click', () => openPhotoInNewTab(item.url));
//                 td.appendChild(thumbnail);
//                 // Add click event to the entire now
//                 row.addEventListener('click', () => openPhotoInNewTab(item.url));
//             } else {
//                 td.textContent = value;
//             }

//             row.appendChild(td);
//         });

//         table.appendChild(row);
//     });

//     tableContainer.appendChild(table);
// }

// function openPhotoInNewTab(url) {
//     window.open(url, '_blank');
// }

// function handleCellClick(content) {
//     // Example: Open a new tab with the content when a cell is clicked
//     window.open(content, '_blank');
// }

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
                // Add click event to the entire row
                row.addEventListener('click', () => openPhotoInNewTab(item.url));
            } else {
                td.textContent = value;
            }

            row.appendChild(td);
        });

        // Add a click event to the entire row for Albums
        if (resource === 'albums') {
            row.addEventListener('click', () => openAlbumPhotos(item.userId));
        }

        table.appendChild(row);
    });

    tableContainer.appendChild(table);
}

function openPhotoInNewTab(url) {
    window.open(url, '_blank');
}

function openAlbumPhotos(userId) {
    const photosUrl = `https://jsonplaceholder.typicode.com/photos?albumId=${userId}`;
    fetch(photosUrl)
        .then(response => response.json())
        .then(data => displayTable(data.map(e => ({albumId: e.albumId, thumbnailUrl: e.thumbnailUrl})), 'photos'))
        .catch(error => console.error('Error fetching album photos:', error));
}
function openAlbumPhotos(albumId) {
    const photosUrl = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
    fetch(photosUrl)
        .then(response => response.json())
        .then(data => displayPhotoPopup(data))
        .catch(error => console.error('Error fetching album photos:', error));
}
function displayPhotoPopup(photos) {
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');

    photos.forEach(photo => {
        const photoPopup = document.createElement('div');
        photoPopup.classList.add('photo-popup');

        const title = document.createElement('h2');
        title.textContent = photo.title;

        const img = document.createElement('img');
        img.src = photo.url;
        img.alt = photo.title;

        photoPopup.appendChild(title);
        photoPopup.appendChild(img);

        popupContainer.appendChild(photoPopup);
    });

    document.body.appendChild(popupContainer);

    // Popup'ı kapatmak için bir event listener ekle
    popupContainer.addEventListener('click', () => {
        document.body.removeChild(popupContainer);
    });
}