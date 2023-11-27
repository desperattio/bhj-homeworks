// получение html-элементов
const dropdownList = document.querySelector('.dropdown__list');
const dropdown = document.querySelector('.dropdown');
const dropdownItems= Array.from(document.querySelectorAll('.dropdown__link'));
const dropdownValue = document.querySelector('.dropdown__value');

// сворачивание/разворачивание списка при нажатии на кнопку
dropdown.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
})

// замена значения при выборе пункта и деактивация перехода по ссылке
dropdownItems.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
    })

    item.addEventListener('click', () => {
        dropdownValue.textContent = item.textContent;
    })
})

