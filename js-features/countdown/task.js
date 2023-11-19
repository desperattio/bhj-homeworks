const timer = document.getElementById("timer");

const intervalId = setInterval(() => {
    timer.textContent--;
    // остановка таймера, если дошли до 0
    if (timer.textContent === '0') {
        clearInterval(intervalId);
        alert("Вы победили в конкурсе!");
    }
}, 1000);

