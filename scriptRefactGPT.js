//parâmetros
const screenWidth = 600;
const screenHeight = 600;
const numPoints = 500000;
const intervalTime = 1;
const circleSize = 0.3;
//elemento canvas
const container = document.getElementById('canvas-container');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
container.appendChild(canvas);
canvas.width = screenWidth;
canvas.height = screenHeight;
//pontos do triângulo
const A = { x: 0, y: screenHeight };
const B = { x: screenWidth, y: screenHeight };
const C = { x: screenWidth/2, y: 0 };
//função para obter coordenadas aleatórias
let { x, y } = getRandomCoordinates();
//desenha entre A, B ou C de forma aleatória
const randomicFunctions = [
  function() { ref(C.x, 0); },
  function() { ref(B.x, B.y); },
  function() { ref(0, A.y); }  
];
//funçao de desenhar o círculo
function drawCircle(x, y) {
  const circle = new Path2D();
  circle.arc(x , y , circleSize, 0, 2 * Math.PI);
  ctx.fill(circle);
}
//obtém as coordenadas aleatórias para desenhar o primeiro ponto
function getRandomCoordinates() {
  const r1 = Math.random(); 
  const r2 = Math.random(); 

  const x = /*(1 - Math.sqrt(r1)) * A.x + */(Math.sqrt(r1) * (1 - r2)) * B.x + (Math.sqrt(r1) * r2) * C.x;
  const y = (1 - Math.sqrt(r1)) * A.y + (Math.sqrt(r1) * (1 - r2)) * B.y/* + (Math.sqrt(r1) * r2) * C.y*/;

  return { x, y };
}
//desenha um ponto entre o último ponto e um ponto aleatório entre A, B, ou C
function ref(dx, dy) {
  drawCircle((x + dx) / 2, (y + dy) / 2);
  x = (x + dx) / 2;
  y = (y + dy) / 2;
}

drawCircle(x, y);

let i = 0;
const numRandomicFunctions = randomicFunctions.length;
const interval = setInterval(function() {
  const getRandomFunction = Math.floor(Math.random() * numRandomicFunctions);
  randomicFunctions[getRandomFunction]();
  i++;
  if (i === numPoints) {
    clearInterval(interval);
  }
}, intervalTime);