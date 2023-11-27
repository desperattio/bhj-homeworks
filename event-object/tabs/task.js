const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContents = Array.from(document.querySelectorAll('.tab__content'));


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // убираем активную вкладку и ее содержимое
        tabs.forEach(tab => {
            tab.classList.remove('tab_active');
            tabContents[tabs.indexOf(tab)].classList.remove('tab__content_active');
        })
        // присваиваем пометки активной вкладки нажатой
        tab.classList.add('tab_active');
        const activeTabNum = tabs.indexOf(tab);
        tabContents[activeTabNum].classList.add('tab__content_active');
    })
})