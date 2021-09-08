
let Blue = '#3EC1D3'
let White = '#F6F7D7'
let Orange = '#FF9A00'
let Red = '#FF165D'
let fillColors = [White, Blue, Orange, Red]

let Xs = []
let Ys = []
let colors = []

function setup() {
    createCanvas(350, 350);
    var seed = random(1000);
    randomSeed(seed);  
    for(let i = 0; i <= 50; i++){
        Xs.push(random(20, width-20), random(20, height-20))
        Ys.push(random(20, width-20), random(20, height-20))
        colors.push(random(fillColors))
    }
}
  
function draw() {
    clear()
    background(White);
    for(let i = 0; i <= 50; i++){
        drawRandomCircle(Xs[i]+random(-2,2),Ys[i]+random(-2,2), colors[i])
    }
}

function drawRandomCircle(x, y, color){ 
    stroke(50);
    fill(color)
    console.log(x, y)
    ellipse(x, y, 15, 15);
}  