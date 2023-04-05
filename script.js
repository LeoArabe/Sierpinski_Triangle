// tamanho da tela, numero de pontos, tempo da animação e tamanha do ponto 
const CANVAS_WIDTH = 1020;
const CANVAS_HEIGHT = 1020;
const NUM_POINTS = 50000;
const INTERVAL_TIME = 0.01;
const CIRCLE_SIZE = 2;

///////////////////////////////////////////////////////////////////

const BORDER = Math.floor(((CANVAS_HEIGHT+CANVAS_WIDTH)/2)/100);
const SCREEN_HEIGHT = CANVAS_HEIGHT-BORDER*2;
const SCREEN_WIDTH = CANVAS_WIDTH-BORDER*2
const randomicFunctions = [ circleInLeft, circleInRight, circleInTop ];
let [w, h] = [(CANVAS_WIDTH/2)-BORDER , getRandomHeight()];

// cria o elemento canvas
const container = document.getElementById('canvas-container');
const canvas = document.createElement('canvas');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
const ctx = canvas.getContext('2d');

// desenha um ponto
function drawCircle(x,y) {
  var circle = new Path2D();
    circle.arc(x + BORDER, y + BORDER, CIRCLE_SIZE, 0, 2 * Math.PI);
      ctx.fill(circle); 
}

// obtém as coordenadas aleatóriamente para o primeiro ponto
// as variaveis min e max definem a area do triangulo
function getCoordinates() {
    min = w-h/2;  max = w+h/2;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// obtém a altura aleatóriamente entre 0 e a altura da tela
function getRandomHeight() {
  const randomNum = Math.floor(Math.random() * SCREEN_HEIGHT+1);
  return Math.min(Math.max(randomNum, 0), SCREEN_HEIGHT);
}

// desenha o ponto entre o ultimo ponto e o topo
//e redefine valor de largura e altura
function circleInTop() { 
  drawCircle((w+SCREEN_WIDTH/2)/2,h/2);
    w = (w+SCREEN_WIDTH/2)/2;
    h = h/2;
}

// desenha o ponto entre o ultimo ponto e a extremidade a direita
//e redefine valor de largura e altura
function circleInRight() {
  drawCircle((w+SCREEN_WIDTH)/2,(h+SCREEN_HEIGHT)/2);
    w = (w+SCREEN_WIDTH)/2;
    h = (h+SCREEN_HEIGHT)/2;
}

// desenha o ponto entre o ultimo ponto e a extremidade a esquerda
//e redefine valor de largura e altura
function circleInLeft() {
  drawCircle(w/2,(h+SCREEN_HEIGHT)/2);
    w = w/2;
    h = (h+SCREEN_HEIGHT)/2;
}

// desenha o primeiro ponto aleatoriamente
drawCircle(w,h);

// loop para desenhar 100 mil pontos escolhendo randomicamente o sentido
let i = 0;
let interval = setInterval(function() {
  let getRandomFunction = Math.floor(Math.random()*3);
  randomicFunctions[getRandomFunction]();
  i++;
  if (i === NUM_POINTS) {
    clearInterval(interval);
  }
  console.log(i)
}, INTERVAL_TIME);

// adiciona o canvas como filho do elemento pai
container.appendChild(canvas);

