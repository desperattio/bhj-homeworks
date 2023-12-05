const fontSizeBtns = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

fontSizeBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
    })

    btn.addEventListener('click', () => {
        fontSizeBtns.forEach(btn => {
            btn.classList.remove('font-size_active');
        })
        btn.classList.add('font-size_active');
        
        let fontSize = btn.dataset.size;
        if (fontSize) {
            if (book.classList.contains('book_fs-small') || book.classList.contains('book_fs-big')) {
                book.classList.remove('book_fs-small');
                book.classList.remove('book_fs-big');
            }
            book.classList.add('book_fs-' + fontSize);
        } else {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        }
    })
})