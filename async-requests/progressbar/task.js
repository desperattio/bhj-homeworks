const submitBtn = document.getElementById('send');
const fileInput = document.getElementById('file');
const progress = document.getElementById('progress');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    // отслеживание прогресса
    xhr.upload.addEventListener('progress', (e) => {
        progress.value = e.loaded / e.total;
    })
    // добавление файла
    let formData = new FormData();
    formData.append('file', fileInput.files[0]);

    xhr.send(formData);
}) 

