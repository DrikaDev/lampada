// const turnOn = document.getElementById('turnOn');
// const turnOff = document.getElementById('turnOff')

const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn(){
    if (!isLampBroken()){
        lamp.src = './img/lampada_ligada.jpg';
        document.getElementById('turnOnOff').style.background = 'red'
    }
}

function lampOff(){
    if(!isLampBroken()){
        lamp.src = './img/lampada_desligada.jpg'
        document.getElementById('turnOnOff').style.background = 'yellow'
    }
}

function toBreakLamp(){
    // lamp.src = './img/lampada_quebrada.jpg'
    if (lamp.src = './img/lampada_quebrada.jpg'){
        turnOnOff.textContent = 'Trocar lâmpada!';
        document.getElementById('turnOnOff').style.background = 'green'
    }
}
lamp.addEventListener('dblclick', toBreakLamp)

function toChangeLamp(){
    if(turnOnOff.textContent === 'Trocar lâmpada'){
    }
    lamp.src = './img/lampada_desligada.jpg'
}
turnOnOff.addEventListener('click', toChangeLamp)

function lampOnOff (){
    if (turnOnOff.textContent === 'Acender lâmpada'){
        lampOn();
        turnOnOff.textContent = 'Apagar lâmpada';
    }else{
        lampOff();
        turnOnOff.textContent = 'Acender lâmpada';
    }
}

turnOnOff.addEventListener('click', lampOnOff)

// turnOn.addEventListener('click', lampOn);
// turnOff.addEventListener('click', lampOff);