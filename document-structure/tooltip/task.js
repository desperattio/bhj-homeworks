const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

tooltips.forEach(tooltip => {
    const divElem = document.createElement('div');
    divElem.classList.add('tooltip');
    divElem.textContent = tooltip.title;
    tooltip.insertAdjacentElement("afterend", divElem);

    
    tooltip.addEventListener('click', (e) => { 
        e.preventDefault();
        const divToolTip = tooltip.nextElementSibling;

        if (divToolTip.classList.contains('tooltip_active')) {
            divToolTip.classList.remove('tooltip_active');
        } else {
            let tips = Array.from(document.querySelectorAll('.tooltip'));
            tips.forEach(el => {
                el.classList.remove('tooltip_active');
            })
            divToolTip.classList.add('tooltip_active');
            divToolTip.style.top = `${tooltip.getBoundingClientRect().bottom}px`;
            divToolTip.style.left = `${tooltip.getBoundingClientRect().left}px`;
        }
        

    })

})
