const input = document.querySelector('input');
const sendBtn = document.querySelector('.SendBtn');
const geoBtn = document.querySelector('.LocationBtn');
const box = document.querySelector('.msg');
const mapLink = document.querySelector('.map-link');

let websocket;

websocket = new WebSocket('wss://echo-ws-service.herokuapp.com');
websocket.onopen = () => {console.log('connected');}
websocket.onmessage = function(evt){
    WriteToScreenAnswer(
        `<span>Ответ: ${evt.data}</span>`
    )
}

function WriteToScreen(message){
    let pre = document.createElement('p');
    pre.style.WordWrap = 'break-word';
    pre.innerHTML = message;
    box.appendChild(pre);
}
function WriteToScreenAnswer(message){
    let pre = document.createElement('span');
    pre.style.WordWrap = 'break-word';
    pre.innerHTML = message;
    box.appendChild(pre);
}


sendBtn.addEventListener('click', () =>{
    const message = input.value;
    WriteToScreen('Отправил: ' + message);
    websocket.send(message);
})

const errorGEO = () =>{
    console.log('Ошибка при запросе геопозиции');}
const successGEO = (position) =>{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    mapLink.href = `https://www.openstreetmap.org/#map=17/${latitude}/${longitude}`;
    mapLink.style = 'display : block;'
}

geoBtn.addEventListener('click', () =>{
    navigator.geolocation.getCurrentPosition(successGEO, errorGEO);
})
