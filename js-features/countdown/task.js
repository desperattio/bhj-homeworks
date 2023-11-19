const timer = document.getElementById("timer__seconds");

const intervalId = setInterval(() => {
    timer.textContent--;
    timer.textContent = Number(timer.textContent) < 10 ? '0' + timer.textContent : timer.textContent;
    // остановка таймера, если дошли до 0
    if (timer.textContent === '00') {
        clearInterval(intervalId);
        alert("Вы победили в конкурсе!");
    }
}, 1000);

