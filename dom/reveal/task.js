const revealDiv = Array.from(document.querySelectorAll('.reveal'));

function isVisible(elem) {
    const { top, bottom } = elem.getBoundingClientRect();
    console.log({ top, bottom })
    if (bottom < 0) {
        return false;
    }

    if (top > window.innerHeight) {
        return false;
    }
    return true;
}

revealDiv.forEach(div => {
    addEventListener('scroll', () => {
        if (isVisible(div)) {
            div.classList.add('reveal_active');
        } else {
            div.classList.remove('reveal_active');
        }
    })
})
