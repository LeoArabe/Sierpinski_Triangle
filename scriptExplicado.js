// tamanho da tela, numero de pontos, tempo da animação e tamanha do ponto 
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const NUM_POINTS = 10000;
const INTERVAL_TIME =10;
const CIRCLE_SIZE = 1;
const BORDER = Math.floor(((CANVAS_HEIGHT+CANVAS_WIDTH)/2)/100);
const SCREEN_HEIGHT = CANVAS_HEIGHT-BORDER*2;
const SCREEN_WIDTH = CANVAS_WIDTH-BORDER*2
const randomicFunctions = [ refInLeft, refInRight, refInTop ];
let { x, y } = randomCoordinates();

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
function randomCoordinates() {

  // obtém a coordenada y
  const y = Math.floor(Math.random() * SCREEN_HEIGHT);
  
  // obtém a coordenada x apartir da coordenada y
   min = (SCREEN_HEIGHT-y)/2;
   max = (SCREEN_HEIGHT+y)/2;

  const x = Math.floor(Math.random() * (max - min + 1) + min);

console.log(`X: (${x}) Y: (${y}) `);
  return { x, y };
}

// desenha o ponto entre o ultimo ponto e o topo
//e redefine valor de largura e altura
function refInTop() { 
  drawCircle((x+SCREEN_WIDTH/2)/2,y/2);
    x = (x+SCREEN_WIDTH/2)/2;
    y = y/2;
}

// desenha o ponto entre o ultimo ponto e a extremidade a direita
function refInRight() {
  drawCircle((x+SCREEN_WIDTH)/2,(y+SCREEN_HEIGHT)/2);
    x = (x+SCREEN_WIDTH)/2;
    y = (y+SCREEN_HEIGHT)/2;
}

// desenha o ponto entre o ultimo ponto e a extremidade a esquerda
function refInLeft() {
  drawCircle(x/2,(y+SCREEN_HEIGHT)/2);
    x = x/2;
    y = (y+SCREEN_HEIGHT)/2;
}

// desenha o primeiro ponto aleatoriamente
drawCircle(x,y);

// loop para desenhar 100 mil pontos escolhendo randomicamente o sentido
let i = 0;
let interval = setInterval(function() {
  let getRandomFunction = Math.floor(Math.random()*3);
  randomicFunctions[getRandomFunction]();
  i++;
  if (i === NUM_POINTS) {
    clearInterval(interval);
  }
  
}, INTERVAL_TIME);

// adiciona o canvas como filho do elemento pai
container.appendChild(canvas);
