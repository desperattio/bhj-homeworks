const form = document.getElementById("signin__form");
const signinBtn = document.getElementById('signin__btn');
const inputs = Array.from(document.querySelectorAll('.control'));

function setGreetings(id) {
    document.getElementById('signin').classList.remove('signin_active');
    document.getElementById('welcome').classList.add('welcome_active');
    document.getElementById('user_id').textContent = id;
}

if (localStorage.user) {
    setGreetings(localStorage.user);
} else {
    signinBtn.addEventListener('click', (e) => {
        e.preventDefault();
    
        const login = inputs[0].value.trim();
        const pass = inputs[1].value.trim();
    
        if (login && pass) {
            let formData = new FormData(form);
    
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
            xhr.send(formData);
    
            xhr.addEventListener('load', () => {
                const ans = JSON.parse(xhr.responseText);
                if (ans.success) {
                    localStorage.user = ans.user_id;
                    setGreetings(ans.user_id);
                } else {
                    alert('Неверный логин/пароль');
                    form.reset();
                }
            })
        }
    }) 
}



