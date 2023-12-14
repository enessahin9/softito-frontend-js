function verileriGonder() {
    // Inputlardan degerleri al.
    var userIdInput = document.getElementById('userId');
    var userId = userIdInput.value;

    // Sadece sayı girişi kontrolü
    if (!/^[0-9]+$/.test(userId)) {
        alert('User ID için sadece sayı girişi yapabilirsiniz.');
        userIdInput.value = ''; // Hatalı girişi temizle
        return;
    }

    var imageInput = document.getElementById('image');
    var imageFile = imageInput.files[0];

    if (imageFile) {
        console.log('image:', imageFile.name);
    }

    var title = document.getElementById('title').value;
    var body = document.getElementById('body').value;

    // Verileri consolea gönder.
    console.log('User ID: ', userId);
    console.log('Title:', title);
    console.log('Body:', body);

    document.getElementById('userId').value = ''
    document.getElementById('title').value = ''
    document.getElementById('body').value = ''
    document.getElementById('image').value = ''

}