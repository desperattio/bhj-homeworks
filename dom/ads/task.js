const rotators = Array.from(document.querySelectorAll('.rotator__case'));
let activeIndex = rotators.findIndex(el => {
    el.classList.contains('rotator__case_active');
});

setInterval(() => {
    rotators.forEach(el => {
        el.classList.remove('rotator__case_active');
    });

    if (activeIndex === rotators.length - 1) {
        activeIndex = 0;
    } else {
        activeIndex++;
    }

    rotators[activeIndex].classList.add('rotator__case_active');
}, 1000);


    
