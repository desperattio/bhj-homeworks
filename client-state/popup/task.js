const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    if (cookie) {
        return cookie.substring(name.length + 1);
    }
}

if (!getCookie('modal')) {
    modal.classList.add('modal_active');

    modalClose.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        document.cookie = 'modal=closed';
    })
}

