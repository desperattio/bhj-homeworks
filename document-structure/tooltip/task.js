const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

tooltips.forEach(tooltip => {
    tooltip.addEventListener('click', (e) => {
        e.preventDefault();
        let activeTooltip = document.querySelector('.tooltip_active');

        if (activeTooltip && activeTooltip.textContent === tooltip.title) {
            activeTooltip.remove();
        } else {
            const divElem = document.createElement('div');
            divElem.classList.add('tooltip', 'tooltip_active');
            divElem.textContent = tooltip.title;
            divElem.style.top = `${tooltip.getBoundingClientRect().bottom}px`;
            divElem.style.left = `${tooltip.getBoundingClientRect().left}px`;
            tooltip.insertAdjacentElement("afterend", divElem);
        }
        
    })
})