// const output = document.querySelector('.output');
const btn = document.querySelector('button');


let width = screen.width;
let height = screen.height;

function alert_func(){
    alert(`Ширина ${width}, высота ${height}`);
 }

btn.addEventListener('click', alert_func);

