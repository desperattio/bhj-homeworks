const loader = document.getElementById('loader');
const item = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.addEventListener('readystatechange', () => {
	if(xhr.readyState === xhr.DONE && xhr.status === 200) {
        // убираем иконку загрузки
        loader.classList.remove('loader_active');
        // записываем ответ с валютами
        const valute = (JSON.parse(xhr.responseText)).response.Valute;
        // для каждой валюты добавляем обозначение и курс
        for (key in valute) {
            const charCode = valute[key].CharCode;
            const value = valute[key].Value;
            item.insertAdjacentHTML('beforeend', 
                `<div class="item">
                <div class="item__code">${charCode}</div>
                <div class="item__value">${value}</div>
                <div class="item__currency">руб.</div>
                </div>`
            )
        }
    }
});