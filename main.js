const duck = document.querySelector('.dupa');
const result = document.querySelector('.result');
let n = 0;

const changePosition = () => {
    n++;

let randomX = Math.floor(Math.random() * 300);
let randomY = Math.floor(Math.random() * 1300);

let randomDeg = Math.floor(Math.random() * 300);

console.log(n);
duck.style.left = randomY + "px";
duck.style.top = randomX + "px";
duck.style.tranform = `none`;
duck.style.rotate = randomDeg + "deg";
result.textContent = `duck click: ${n}`;
}












duck.addEventListener('click', changePosition)