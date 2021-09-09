var circles = [];
var originX, originY
let Blue = '#3EC1D3'
let White = '#F6F7D7'
let Orange = '#FF9A00'
let Red = '#FF165D'
let fillColors = [White, Blue, Orange, Red]

function setup() {
  createCanvas(350, 350);
  frameRate(300);
  var protection = 0;
  while (circles.length < 200) {
    var circle = {
      x: random(20, width-20),
      y: random(20, height-20),
      r: random(5, 15),
      c: random(fillColors)
    };

    var overlapping = false;
    for (var j = 0; j < circles.length; j++) {
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r + random(3,10)) {
        overlapping = true;
      }
    }

   if (!overlapping) {
      circles.push(circle);
    }

    protection++;
    if (protection > 10000) {
      break;
    }
  }
  originX = random(20, 320)
  originY = random(20, 320)
}

function draw(){
  clear()
  background(White);
  for (var i = 0; i < circles.length; i++) {
    let offsetX = 0
    let offsetY = 0
    if ((originX <= width && originX >= 0) && (originY <= height && originY >= 0)){
        let d = dist(circles[i].x, circles[i].y, originX, originY);
        if (d < 50){
//            offsetX = d
 //           offsetY = d
            if (originX >= circles[i].x){
              offsetX = offsetX + 50
          } else {
            offsetX = offsetX - 50
          }
          if (originY >= circles[i].y){
            offsetY = offsetY + 50
        } else {
          offsetY = offsetY - 50
        }
      }
    }
    
    stroke(50);
    fill(circles[i].c)
    ellipse(circles[i].x+random(-1,1) - offsetX, circles[i].y+random(-1,1) - offsetY, circles[i].r * 2, circles[i].r * 2);
    fill("#9999cc")
    ellipse(originX, originY, 20, 20);

  }   
}

function mouseClicked() {
  colors = []
  for(let i = 0; i <= circles.length; i++){
      circles[i].c = random(fillColors)
  }
}
