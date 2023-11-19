let winScore = 0;
let loseScore = 0;

// функция для обнуления счетчиков для новой игры
function newGame() {
    winScore = 0;
    loseScore = 0;
    document.getElementById("dead").textContent = 0;
    document.getElementById("lost").textContent = 0;
}

getHole = index => document.getElementById(`hole${index}`);
for (i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.onclick = function(){
        // проверяем класс ячейки и увеличиваем счетчик победы или проигрыша соответственно
        if (hole.className.includes( 'hole_has-mole' )) {
            winScore++;
            document.getElementById("dead").textContent++;
        } else {
            loseScore++;
            document.getElementById("lost").textContent++;
        }

        // проверяем условия победы (10 попаданий) или проигрыша (5 промахов)
        if (loseScore === 5) {
            alert("Вы проиграли");
            newGame();
        } else if (winScore === 10) {
            alert("Победа!");
            newGame();
        }
    }
}


