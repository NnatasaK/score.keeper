const display1 = document.querySelector('#display1');
const display2 = document.querySelector('#display2');

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const resetButton = document.querySelector('#reset');
const playTo = document.querySelector('#playTo')

let p1Score = 0;
let p2Score = 0;
let winnScore = 3;
let isGameOver = false;

button1.addEventListener('click', function (e) {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winnScore) {
            isGameOver = true
            display1.classList.add('winner')
            display2.classList.add('loser')
            button1.disabled = true;
            button2.disabled = true;
        }
        display1.textContent = p1Score
    }
})

button2.addEventListener('click', function (e) {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winnScore) {
            isGameOver = true;
            display2.classList.add('winner')
            display1.classList.add('loser')
            button1.disabled = true;
            button2.disabled = true;
        }
        display2.textContent = p2Score;
    }
})

playTo.addEventListener('change', function(e){
    winnScore=parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset);

function reset () {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    display1.textContent = 0;
    display2.textContent = 0;
    display1.classList.remove('winner', 'loser');
    display2.classList.remove('winner', 'loser');
    button1.disabled = false;
    button2.disabled = false;

}