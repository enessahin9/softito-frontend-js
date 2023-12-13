document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const todayFormatted = today.toISOString().slice(0, 16);

    document.getElementById('startDate').value = todayFormatted;
    document.getElementById('endDate').value = todayFormatted;

})

function calculateDateDifference() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);

    const timeDifference = Math.abs(endDate - startDate) / 36e5;

    const resultElement = document.getElementById('result');

    if (timeDifference > 48) {
        resultElement.style.color = 'black';
        resultElement.textContent = `Fark: ${timeDifference} saat`
    } else {
        resultElement.style.color = 'red';
        resultElement.textContent = `Fark: ${timeDifference} saat`
    }
}

    const btn = document.getElementById('btn');

    let index = 0;

    const colors = ['salmon', 'green', 'blue', 'purple'];

    btn.addEventListener('click', function onClick() {
        btn.style.backgroundColor = colors[index];
        btn.style.color = 'white';

        index = index >= colors.length - 1 ? 0 : index + 1;
    })
