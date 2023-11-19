let img = document.getElementById("cookie");
let now = new Date();
img.onclick = function() {
    document.getElementById("clicker__counter").textContent++;
    img.width = 160;
    // расчет скорости
    const timeOnClick = new Date();
    let speed = 1 / ((timeOnClick.getTime() - now.getTime()) / 1000);
    document.getElementById("clicker__speed").textContent = speed.toFixed(2);
    now = new Date();
    // изменение размера картинки
    setTimeout(() => {img.width = 200}, 100);
}