const pollAns = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        // добавление вопроса
        document.getElementById('poll__title').textContent = response.data.title;
        // добавление вариантов ответа
        response.data.answers.forEach(ans => {
            pollAns.insertAdjacentHTML('beforeend', `<button class="poll__answer">${ans}</button>`);
        });
        // обработка клика по кнопке
        const btns = document.querySelectorAll('.poll__answer');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
                location.reload();
            })
        })
    }
});
