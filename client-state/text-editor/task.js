const editor = document.getElementById('editor');

const editorText = localStorage.getItem('text');

if (editorText) {
    editor.textContent = editorText;
    addToLocalStorage(editor);
} else {
    addToLocalStorage(editor);
}

// добавление текста в хранилище после ввода
function addToLocalStorage(elem) {
    elem.addEventListener('input', () => {
        elem.textContent = editor.value;
        localStorage.setItem('text', elem.textContent);
    });
}



