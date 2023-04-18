const container = document.getElementById('canvas-container');
const canvas = document.createElement('canvas');
canvas.width = 300;
canvas.height = 300;
ScreenWidth = canvas.width;
ScreenHeight = canvas.height;
const ctx = canvas.getContext('2d');


function drawCircle(x, y) {
    const circle = new Path2D();
    circle.arc(x, y, 0.5, 0, 2 * Math.PI);
    ctx.fill(circle);
  }

  

function getRandomCoordinate() {
    // Pontos do triângulo 
    const A = { x: 0, y: ScreenHeight };
    const B = { x: ScreenWidth, y: ScreenHeight };
    const C = { x: ScreenWidth/2, y: 0 };
  
    // Gere dois números aleatórios entre 0 e 1
    const r1 = Math.random(); 
    const r2 = Math.random(); 
 
    //Interpolação linear
    const x = /*(1 - Math.sqrt(r1)) * A.x + */(Math.sqrt(r1) * (1 - r2)) * B.x + (Math.sqrt(r1) * r2) * C.x;
    const y = (1 - Math.sqrt(r1)) * A.y + (Math.sqrt(r1) * (1 - r2)) * B.y/* + (Math.sqrt(r1) * r2) * C.y*/;

    return { x, y };
  }

  for(let i = 0 ; i < 500 ; i++){
    let {x,y} = getRandomCoordinate();
    drawCircle(x,y);
    //console.log(i)
  }
  
  container.appendChild(canvas);